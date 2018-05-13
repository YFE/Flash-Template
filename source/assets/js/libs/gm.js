;(function(global, undefined) {
    var gm = global.gm = {
        version: "1.0.1"
    };

    var eventManager = function() {
        if (!(this instanceof eventManager)) {
            return new eventManager();
        }
        var self = this,
            keys = function(dict) {
                var keyList = [];
                for (var i in dict) {
                    if (dict.hasOwnProperty(i)) {
                        keyList.push(i);
                    }
                }
                return keyList;
            };
        self._events = {};
        self.on = function(events, callback, context, times) {
            events.split(/\s+/).forEach(function(event) {
                var callList = self._events[event],
                    callObj = {
                        callback: callback,
                        context: context,
                        times: times
                    };
                if (!callList) {
                    callList = self._events[event] = [];
                }
                callList.push(callObj);
            });
            return self;
        }
        self.off = function(events, callback, context) {
            var eventList, i, n;
            if (!arguments.length) {
                self._events = {};
            } else {
                eventList = events ? events.split(/\s+/) : keys(self._events);
                for (i in eventList) {
                    var event = eventList[i],
                        callList = self._events[event];
                    if (callList) {
                        var newList = [];
                        for (var n in callList) {
                            if (callback) {
                                if (callList[n].callback.toString() == callback.toString()) {
                                    if (context && callList[n].context != context) {
                                        newList.push(callList[n]);
                                    } else if (context === null && callList[n].context) {
                                        newList.push(callList[n]);
                                    }
                                } else {
                                    newList.push(callList[n]);
                                }
                            } else if (context && callList[n].context != context) {
                                newList.push(callList[n]);
                            }
                        }
                        self._events[event] = newList;
                    }
                }
            }
            return self;
        }
        self.once = function(events, callback, context) {
            self.on(events, callback, context, 1);
            return self;
        }
        self.trigger = function(events) {
            var args = Array.prototype.slice.call(arguments, 1);
            events.split(/\s+/).forEach(function(event) {
                var callList = self._events[event];
                if (callList) {
                    callList.forEach(function(callObj) {
                        if (callObj.times) {
                            callObj.times -= 1;
                            if (callObj.times == 0) {
                                self.off(event, callObj.callback, callObj.context);
                            }
                        }
                        callObj.callback.apply(callObj.context || this, args);
                    });
                }
            });
            return self;
        }
    }
    gm.EM = eventManager;
    gm.ems = new gm.EM;

    gm.loadImg = function(imgUrl, loadComplete, setLoadingInfo, isReturnImgObj) {
        var _imgOBJ = [];
        var len = imgUrl.length;
        var num = 0;
        var checkLoad = function() {
            num++;
            !!setLoadingInfo && setLoadingInfo(parseInt(num / len * 100));
            if (num == len) {
                !!loadComplete && loadComplete(_imgOBJ);
            }
        }
        var _loadImg = function(url, _i) {
            var val = url;
            var img = new Image();
            img.onload = function() {
                checkLoad();
            }
            img.crossOrigin = 'Anonymous';
            img.src = val;
            if (isReturnImgObj) {
                _imgOBJ[_i] = img;
            }
            if (_i == len - 1) return;
            _loadImg(imgUrl[_i + 1], _i + 1);
        }
        if (len == 0) {
            return !!loadComplete && loadComplete();
        }

        _loadImg(imgUrl[0], 0);
    }

    function animate($element, $self) {
        $element.css({
            '-webkit-animation': 'none',
            'display': 'none'
        });

        $element.each(function(index, element) {
            var $element = $(element),
                $animation = $element.data(),
                $name = $animation.animation,
                $duration = $animation.duration || 1000,
                $ease = $animation.ease || 'ease',
                $delay = $animation.delay || 0,
                $count = $animation.count ? ($animation.count == "infinite" ? "infinite" : parseInt($animation.count)) : 1;
            $element.css({
                'display': 'block',
                '-webkit-animation-name': $name,
                '-webkit-animation-duration': $duration + 'ms',
                '-webkit-animation-timing-function': 'ease',
                '-webkit-animation-timing-function': $ease,
                '-webkit-animation-delay': $delay + 'ms',
                '-webkit-animation-iteration-count': $count,
                'animation-iteration-count': $count,
                '-webkit-animation-fill-mode': 'both'
            });
        });

        return $self || $element;
    }

    gm.animate = {
        list : function(_listBox) {
            var $self = $(_listBox);
            return animate($self.find('[data-animation]'), $self);
        },
        show : function(_mc) {
            var $self = $(_mc);
            return animate($self);
        }
    };

    gm.tracker = {
        page: function(_page) {
            try {
                _hmt.push(['_trackPageview', '/page/' + _page]);
            } catch (e) {}
            try {
                if( typeof MtaH5 == 'object'){
                    window.history.pushState(null,null,'#/page/' + _page);
                    setTimeout(function(){
                        MtaH5.pgv();
                    },16);
                }
            } catch (e) {}
        },
        event: function(_category, _event, _opt_label, _opt_value) {
            try {
                _hmt.push(['_trackEvent', _category, _event, _opt_label, _opt_value]);
            } catch (e) {}
            try {
                var _data  = {};
                if( typeof MtaH5 == 'object'){
                    if( _event ){
                        _data[_event] = 'true'
                    }
                    MtaH5.clickStat(_category,_data);
                }
            } catch (e) {}
        },
        link: function(_href, _category,_event) {
            setTimeout(function() {
                window.location.href = _href;
            }, 300);
            try {
                gm.tracker.event(_category, _event);
            } catch (e) {}
        }
    }

    gm.getFlaClass = function (_name) {
        var _flaClass = window[_name][_name.replace(/(\w)/, function (v) { return v.toUpperCase() })];
        if (window[_name] && _flaClass) {
            return new window[_name][_name.replace(/(\w)/, function (v) { return v.toUpperCase() })];
        }
    }

    gm.atouch = function(_mc, _type, _cb) {
        var _startX = 0,
            _startY = 0,
            _endX = 0,
            _endY = 0,
            _dict = 80;
        var isEventMatch = function (_sx, _sy, _ex, _ey) {
            if (_sx == 0 && _sy == 0) {
                return false;
            }
            if (_type == "tap") {
                if (Math.abs(_ex) < 10 && Math.abs(_ey) < 10) {
                    return true;
                }
                return false;
            }
            if (_type.indexOf("swipe") > -1) {
                if (Math.abs(_ex) <= _dict && Math.abs(_ey) <= _dict) {
                    return false;
                }
                if (_type == "swipeup") {
                    return _ey < -_dict && _ey < _ex;
                }
                if (_type == "swipedown") {
                    return _ey > _dict && _ey > _ex
                }
                if (_type == "swipeleft") {
                    return _ex < -_dict && _ex < _ey
                }
                if (_type == "swiperight") {
                    return _ex > _dict && _ex > _ey
                }
            }
        }

        _mc.addEventListener(annie.MouseEvent.MOUSE_DOWN, function (e) {
            _startX = e.stageX;
            _startY = e.stageY;
        }, false);

        _mc.addEventListener(annie.MouseEvent.MOUSE_UP, function (e) {
            _endX = e.stageX - _startX;
            _endY = e.stageY - _startY;
            isEventMatch(_startX, _startY, _endX, _endY) && _cb(e);
            _startY = 0;
            _startX = 0;
        }, false);
    }

    gm.wxData = global.wxData = {
        imgUrl: "",
        link: "",
        desc: "",
        title: "",
        singleDesc: "",
        share: function() {
            if (!gm.wxData.singleDesc) gm.wxData.singleDesc = gm.wxData.desc;
            wx.onMenuShareTimeline({
                title: wxData.desc,
                link: wxData.link + (wxData.link.indexOf("?") > -1 ? "&" : "?") + "CKTAG=mtah5_share.wechat_moments",
                imgUrl: wxData.imgUrl,
                success: function() {
                    wxData.callback('timeline');
                    
                    gm.tracker.page("share/timeline");
                    try {
                        MtaH5.clickShare('wechat_moments');
                    } catch (error) {}
                },
                cancel: function() {
                    gm.tracker.event("share", 'timeline/cancel');
                }
            });
            wx.onMenuShareAppMessage({
                title: wxData.title,
                desc: wxData.singleDesc,
                link: wxData.link + (wxData.link.indexOf("?") > -1 ? "&" : "?") + "CKTAG=mtah5_share.wechat_friend",
                imgUrl: wxData.imgUrl,
                type: '',
                dataUrl: '',
                success: function() {
                    wxData.callback('appmessage');

                    gm.tracker.page("share/appmessage");
                    try {
                        MtaH5.clickShare('wechat_friend');
                    } catch (error) {}
                },
                cancel: function() {
                    gm.tracker.event("share", 'appmessage/cancel');
                }
            });

            // 随手补充QQ分享信息
            $('meta[itemprop="name"]').attr('content', wxData.title);
            $('meta[itemprop="image"]').attr('content', wxData.imgUrl);
            $('meta[itemprop="description"]').attr('content', wxData.singleDesc);
        },
        callback: function() {},
        setDefault: function (_defaultWxData) {
            try {
                gm.wxData.imgUrl = _defaultWxData.imgUrl;
                gm.wxData.link = _defaultWxData.link;
                gm.wxData.desc = _defaultWxData.desc;
                gm.wxData.title = _defaultWxData.title;
                gm.wxData.singleDesc = _defaultWxData.singleDesc || _defaultWxData.desc;
            } catch (e) {}
        },
        fire : function(cb) {
            if (typeof WeixinJSBridge == "object") {
                WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
                    cb();
                });
            } else {
                cb();
            }
        }
    };
    gm.isLoadEnd = false;
    gm.load = function() {
        gm.ems.trigger('load');
        gm.isLoadEnd = true;
    }
    gm.onload = function(_fn) {
        if (gm.isLoadEnd) {
            return _fn();
        }
        gm.ems.on('load',_fn);
    }


}(this));

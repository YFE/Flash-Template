; + function(global, undefined) {
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
    gm.ems = new eventManager;

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
                if (img.complete == true) {
                    checkLoad();
                }
            }
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
            } catch (e) {

            }
            try {
                ga('send', 'pageview', '/page/' + _page);
            } catch (e) {

            }
        },
        event: function(_category, _event, _opt_label, _opt_value) {
            try {
                _hmt.push(['_trackEvent', _category, _event, _opt_label, _opt_value]);
            } catch (e) {

            }
            try {
                ga('send', 'event', _category, _event, _opt_label, _opt_value);
            } catch (e) {

            }
        },
        link: function(_href, _name) {
            setTimeout(function() {
                window.location.href = _href;
            }, 300);
            try {
                trackEvent("外链", _name);
            } catch (e) {}
        }
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
                link: wxData.link + (wxData.link.indexOf("?") > -1 ? "&" : "?") + "source=timeline",
                imgUrl: wxData.imgUrl,
                success: function() {
                    wxData.callback('timeline');
                    gm.tracker.page("share/timeline");
                },
                cancel: function() {
                    gm.tracker.event("share", 'timeline_cancel');
                }
            });
            wx.onMenuShareAppMessage({
                title: wxData.title,
                desc: wxData.singleDesc,
                link: wxData.link + (wxData.link.indexOf("?") > -1 ? "&" : "?") + "source=appmessage",
                imgUrl: wxData.imgUrl,
                type: '',
                dataUrl: '',
                success: function() {
                    wxData.callback('appmessage');
                    gm.tracker.page("share/appmessage");
                },
                cancel: function() {
                    gm.tracker.event("share", 'appmessage_cancel');
                }
            });
        },
        callback: function() {},
        setDefault: function() {
            try {
                if (!__defaultWxData) return;
                gm.wxData.imgUrl = __defaultWxData.imgUrl;
                gm.wxData.link = __defaultWxData.link;
                gm.wxData.desc = __defaultWxData.desc;
                gm.wxData.title = __defaultWxData.title;
                gm.wxData.singleDesc = __defaultWxData.singleDesc || __defaultWxData.desc;
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

    gm.page = {
        readyList : [],
        loadList : [],
        isReady : false,
        isLoad : false
    }

    gm.page.init = function() {
        gm.ems.trigger('ready');
        gm.page.isReady = true;
    }

    gm.page.load = function() {
        gm.ems.trigger('load');
        gm.page.isLoad = true;
    }
    gm.page.ready = function(_fn) {
        if (gm.page.isReady) {
            return _fn();
        }
        gm.ems.on('ready',_fn);
    };
    gm.push = function(_fn) {
        if (gm.page.isLoad) {
            return _fn();
        }
        gm.ems.on('load',_fn);
    }
}(this);

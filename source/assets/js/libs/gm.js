;/*!/src/base.js*/
var gm = gm || {};
;/*!/src/init.js*/
+ function() {
    gm.readyList = [];
    gm.loadList = [];
    gm.isReady = false;
    gm.isLoad = false;

    gm.init = function(){
        $.each(gm.readyList,function(){
            this.call();
        });
        gm.isReady = true;
    }

    gm.load = function(){
        $.each(gm.loadList,function(){
            this.call();
        });
        gm.isLoad = true;
    }
    gm.ready = function(_fn) {
        if (gm.isReady) {
            _fn();
            return;
        }
        gm.readyList.push(_fn);
    };
    gm.push = function(_fn) {
        if (gm.isLoad) {
            _fn();
            return;
        }
        gm.loadList.push(_fn);
    }
    gm.fire = function(cb){
        if(typeof WeixinJSBridge == "object"){
            WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
                cb();
            });
        }else{
            cb();
        }
    }

    $(function() {
        gm.init();
    })
}();

;/*!/src/loadImg.js*/
+ function() {
    function loadImg(imgUrl, loadComplete, setLoadingInfo,isReturnImgObj) {
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
            if( isReturnImgObj ){
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

    gm.loadImg = loadImg;
}();

;/*!/src/tracker.js*/
+ function() {
    function trackPage(_page) {
        try {
            _hmt.push(['_trackPageview', '/page/' + _page]);
        } catch (e) {

        }
        try {
            ga('send', 'pageview', '/page/' + _page);
        } catch (e) {

        }
    }

    function trackEvent(_category, _event, _opt_label, _opt_value) {
        try {
            _hmt.push(['_trackEvent', _category, _event, _opt_label, _opt_value]);
        } catch (e) {

        }
        try {
            ga('send', 'event', _category, _event, _opt_label, _opt_value);
        } catch (e) {

        }
    }

    function trackeLink(_href,_name){
        setTimeout(function() {
            window.location.href = _href;
        }, 300);
        try {
            trackEvent("外链",_name);
        } catch (e) {}
    }

    gm.ready(function(){
        $(document).on("click",'a[data-link]', function(e) {
            var _this = $(this);
            e.preventDefault();
            trackeLink(_this.attr("href"),_this.attr("data-link"));
        });
    });

    gm.tracker = {
        page: trackPage,
        event: trackEvent,
        link : trackeLink
    }
}();

;/*!/src/wxData.js*/
+ function() {
    var wxData = {
        imgUrl: "",
        link: "",
        desc: "",
        title: "",
        singleDesc: "",
        share: function() {
            if( !gm.wxData.singleDesc ) gm.wxData.singleDesc = gm.wxData.desc;
            wx.onMenuShareTimeline({
                title: wxData.desc,
                link: wxData.link + (wxData.link.indexOf("?") > -1 ? "&" : "?") + "source=timeline",
                imgUrl: wxData.imgUrl,
                success: function() {
                    wxData.callback('timeline');
                    gm.tracker.page("share/timeline");
                },
                cancel: function() {
                    gm.tracker.event("share",'timeline_cancel');
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
                    gm.tracker.event("share",'appmessage_cancel');
                }
            });
        },
        callback: function() {}
    };

    gm.ready(function(){
        if( !__defaultWxData ) return;
        gm.wxData.imgUrl = __defaultWxData.imgUrl;
        gm.wxData.link = __defaultWxData.link;
        gm.wxData.desc = __defaultWxData.desc;
        gm.wxData.title = __defaultWxData.title;
        gm.wxData.singleDesc = __defaultWxData.singleDesc || __defaultWxData.desc;
    });

    gm.wxData = window.wxData = wxData;
}();

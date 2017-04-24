define(function(require, exports, module) {

    function getFlaClass(_name){
        return new window[_name][_name.replace(/(\w)/,function(v){return v.toUpperCase()})];
    }

    function ftouch(_mc, _type, _cb) {
	    var _startX = 0,
	        _startY = 0,
	        _endX = 0,
	        _endY = 0,
	        _dict = 100;
	    var isEventMatch = function(_sx, _sy, _ex, _ey) {
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

	    _mc.addEventListener(annie.MouseEvent.MOUSE_DOWN, function(e) {
	        _startX = e.stageX;
	        _startY = e.stageY;
	    }, false);

	    _mc.addEventListener(annie.MouseEvent.MOUSE_UP, function(e) {
	        _endX = e.stageX - _startX;
	        _endY = e.stageY - _startY;
	        isEventMatch(_startX, _startY, _endX, _endY) && _cb(e);
	        _startY = 0;
	        _startX = 0;
	    }, false);
	}

    annie.debug = false;
    var stage=new annie.Stage('app',800,1040,24,annie.StageScaleMode.FIXED_HEIGHT,0);
    stage.addEventListener(annie.Event.INIT_TO_STAGE,function (e) {
        Flash2x.loadScene(['cloading'],function(per){
			myapp.loadProcess(per);
        },function(result){
            if( result.sceneId == 1 ){
    			myapp.page['cloading'] = getFlaClass('cloading');
                var mcLoading = myapp.page['cloading'].loadBox;
                mcLoading.gotoAndPlay('in');
                mcLoading.ender = function(){
                    mcLoading.visible = false;
                }
                myapp.loadProcess = function(_per){
                    mcLoading.loadText.loadNum.text = _per +"%";
                }
                stage.addChild(myapp.page['cloading']);
            }
            if( result.sceneId == result.sceneTotal ){
    			// myapp.page['flaName'] = getFlaClass('flaName');
                // myapp.page['cloading'].container.addChild(myapp.page['flaName']);
                myapp.page['cloading'].loadBox.gotoAndPlay('out');
                myapp.loadComplete();
                gm.load();
            }
        },__cdnurl+"dist/");
    });

	var MyApp = function(){}
	MyApp.prototype = {
        loadProcess : function(_per){
            console.log(_per);
        },
        loadComplete : function(){
            this.init();
        },
		page : {},
		init : function(){
			var self = this;
		}
	};
	var myapp = new MyApp;

	return myapp;
});

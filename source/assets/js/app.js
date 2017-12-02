; (function (global) {
	
	var MyApp = function(){}
	MyApp.prototype = {
		loadStart : function(){
			var self = this;
			self.stage = new annie.Stage('app', 800, 1040, 24, annie.StageScaleMode.FIXED_HEIGHT, 0);
			self.stage.addEventListener(annie.Event.INIT_TO_STAGE, function (e) {
				Flash2x.loadScene(['cloading'], function (per) {
					self.loadProcess(per);
				}, function (result) {
					if (result.sceneId == 1) {
						self.page['cloading'] = gm.getFlaClass('cloading');
						var mcLoading = self.page['cloading'].loadBox;

						//font chathuralight
						// mcLoading.loadText.loadNum.font = 'chathuralight';
						// mcLoading.loadText.loadNum.y = -20;
						// mcLoading.loadText.loadNum.size = 50;
						// mcLoading.loadText.loadNum.lineHeight = 50;

						//font handlee
						mcLoading.loadText.loadNum.font = 'handlee';

						mcLoading.gotoAndPlay('in');
						mcLoading.ender = function () {
							mcLoading.visible = false;
						}
						self.loadProcess = function (_per) {
							mcLoading.loadText.loadNum.text = _per + "%";
						}
						self.stage.addChild(self.page['cloading']);
					}
					if (result.sceneId == result.sceneTotal) {
						// self.page['flaName'] = gm.getFlaClass('flaName');
						// self.page['cloading'].container.addChild(self.page['flaName']);
						// self.page['cloading'].loadBox.gotoAndPlay('out');
						self.loadComplete();
						gm.load();
					}
				}, __cdnurl + "dist/");
			});
		},
        loadProcess : function(_per){
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
	
	window.F2xExtend = function () {
		var _extend = {};
		try {
			if (__extends) {
				_extend = __extends;
			}
		} catch (error) {}
		return _extend;
	}();


	this.initAPP = function (cb) {
		cb(myapp);
	}
}(this));
; (function (global) {
	
	var MyApp = function(){}
	MyApp.prototype = {
		loadStart : function(){
			var self = this;
			/*
			* 添加事件管理器
			* self.ems.on/one/off/trigger
			*/
			self.ems = new gm.EM;
			/*
			* 添加事件别名
			*/
			gm.amet = annie.MouseEvent;
			gm.aevt = annie.Event;
			/*
			* iPhoneX 尺寸
			* 设计尺寸 800 1280，安全范围 640 1040 居中
			*/
			var _selfBox = $("#app");
			var _height = _selfBox.height() / (_selfBox.width() / 640);
			_height = _height <= 1040 ? 1040 : _height;
			self.dictHeight = 1280 - _height > 0 ? 1280 - _height : 0;
			self.dictHeight = -self.dictHeight/2;
			self.stage = new annie.Stage('app', 800, _height, 30, annie.StageScaleMode.FIXED_HEIGHT, 0);

			// self.stage = new annie.Stage('app', 800, 1040, 24, annie.StageScaleMode.FIXED_HEIGHT, 0);
			self.stage.addEventListener(annie.Event.INIT_TO_STAGE, function (e) {
				Flash2x.loadScene(['cloading'], function (per) {
					self.loadProcess(per);
				}, function (result) {
					self.page['cloading'] = gm.getFlaClass('cloading');
					// iPhoneX 尺寸适配
					self.page['cloading'].y = self.dictHeight;

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

					// 加载其他
					Flash2x.loadScene(['cindex'], function (per) {
						self.loadProcess(per);
					}, function (result) {
						if (result.sceneId == result.sceneTotal) {
							self.page['cindex'] = gm.getFlaClass('cindex');
							self.page['cloading'].container.addChild(self.page['cindex']);
							self.page['cloading'].loadBox.gotoAndPlay('out');
							self.loadComplete();
							gm.load();
						}
					}, __cdnurl + "dist/");
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

			//事件触发
			//self.ems.trigger('xx',function(a){})

			self.listener();
		},
		listener: function(){
			var self = this;
			//事件注册
			//self.ems.on('xx',function(a){})
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
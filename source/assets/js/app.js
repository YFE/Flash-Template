; (function (global) {
	/*
	* 添加事件管理器
	* ems.on/one/off/trigger
	*/
	var ems = new gm.EM;
	
	var MyApp = function(){}
	MyApp.prototype = {
		loadStart : function(){
			var self = this;
			/*
			* 添加事件别名
			*/
			gm.mt = annie.MouseEvent;
			gm.et = annie.Event;
			/*
			* iPhoneX 尺寸
			* 设计尺寸 800 1280，安全范围 640 1040 居中
			*/
			$(window).on('resize',function(){
				var _selfBox = $("#app");
				var _selfwh = _.sortBy([_selfBox.width(),_selfBox.height()])
				var _selfWidth = _selfwh[0]
				var _selfHeight = _selfwh[1]
				var _height = _selfHeight / (_selfWidth / 640);

				_height = _height <= 1040 ? 1040 : _height;
				self.suitHeight = -(1280 - _height > 0 ? 1280 - _height : 0)/2;
				self.initHeight = _height;
				
			}).trigger('resize');

			self.stage = new annie.Stage('app', 800, self.initHeight, 30, annie.StageScaleMode.FIXED_HEIGHT, 0);
			self.stage.autoResize = true;
			self.stage.autoSteering = true;
			self.stage.addEventListener(annie.Event.INIT_TO_STAGE, function (e) {
				Flash2x.loadScene(['cloading'], function (per) {
					self.loadProcess(per);
				}, function (result) {
					self.page['cloading'] = gm.getFlaClass('cloading');
					// iPhoneX 尺寸适配
					self.page['cloading'].y = self.suitHeight;

					//font handlee
					self.page['cloading'].loadBox.loadText.loadNum.font = 'handlee';

					self.page['cloading'].loadBox.gotoAndPlay('in');
					self.page['cloading'].loadBox.ender = function () {
						self.page['cloading'].loadBox.visible = false;
					}
					self.loadProcess = function (_per) {
						self.page['cloading'].loadBox.loadText.loadNum.text = _per + "%";
					}
					self.loadProcess(0);
					self.stage.addChild(self.page['cloading']);

					// 加载其他
					Flash2x.loadScene(['cmain'], function (per) {
						self.loadProcess(per);
					}, function (result) {
						if (result.sceneId == result.sceneTotal) {
							self.loadProcess(100);

							self.page['cmain'] = gm.getFlaClass('cmain');
							self.page['cloading'].container.addChild(self.page['cmain']);
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
			//ems.trigger('xx',function(a){})

			self.listener();
		},
		listener: function(){
			var self = this;
			//事件注册
			//ems.on('xx',function(a){})
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
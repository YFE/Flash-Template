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
			* 全面屏 尺寸
			* 设计尺寸 800 1280，安全范围 640 1040 居中
			*/
			$(window).on('resize',function(){
				var _selfBox = $("#app");
				// 当前屏幕宽高从低至高排序
				var _selfwh = _.sortBy([_selfBox.width(),_selfBox.height()]);
				// 当前屏幕长边换算长度
				var _screenHeight = _selfwh[1] / (_selfwh[0] / 640);
				//传入 stage 的 设计长边长度
				var _desHeight = _screenHeight <= 1040 ? 1040 : _screenHeight;
				//画面居中间距
				self.suitHeight = -(1280 - _desHeight > 0 ? 1280 - _desHeight : 0)/2 + (_screenHeight > 1280 ? (_screenHeight -1280)/2:0);
				self.initHeight = _desHeight;

				if( self.page['cloading'] ){
					// 竖屏设计
					self.stage.desHeight = self.initHeight;
					self.page['cloading'].y = self.suitHeight;

					// 横屏设计
					// self.stage.desWidth = self.initHeight;
					// self.page['cloading'].x = self.suitHeight;

					self.stage.resize();
				}
			}).trigger('resize');
			
			self.stage = new annie.Stage('app', 800, self.initHeight, 30, annie.StageScaleMode.FIXED_HEIGHT, 0);

			// 横屏设计
			// self.stage = new annie.Stage('app', self.initHeight, 800, 30, annie.StageScaleMode.FIXED_WIDTH, 0);

			self.stage.autoSteering = true;
			self.stage.addEventListener(annie.Event.INIT_TO_STAGE, function (e) {
				Flash2x.loadScene(['cloading'], function (per) {
					self.loadProcess(per);
				}, function (result) {
					self.page['cloading'] = gm.getFlaClass('cloading');
					// 全面屏 竖屏设计
					self.page['cloading'].y = self.suitHeight;
					
					// 全面屏 横屏设计
					// self.page['cloading'].x = self.suitHeight;

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
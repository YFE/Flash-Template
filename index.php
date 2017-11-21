<?php
    include "app/config.php";
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">
	<meta name="format-detection"content="telephone=no, email=no" />
	<meta name="screen-orientation" content="portrait">
	<meta name="x5-orientation" content="portrait">
	<meta name="full-screen" content="yes">
	<meta name="x5-fullscreen" content="true">
	<meta name="browsermode" content="application">
	<meta name="x5-page-mode" content="app">
	<meta itemprop="name" content="<?=$wxData['title']?>"/>
	<meta itemprop="image" content="<?=$wxData['imgUrl']?>" />
	<meta itemprop="description" name="description" content="<?=$wxData['desc']?>" />
	<title><?=$websiteTitle?></title>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no">
	<link rel="stylesheet" href="<?=$cdnUrl?>assets/css/style.css">
	<link rel="stylesheet" href="//res.wx.qq.com/open/libs/weui/1.1.2/weui.min.css">
	<style> .hide {display:none;} </style>
   	<script src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
   	<script src="https://res.wx.qq.com/open/libs/weuijs/1.1.3/weui.min.js"></script>
   	<script src="<?=$cdnUrl?>assets/js/libs/base.js"></script>
   	<script>
		gm.seajs.config({
			'map': [ [/^(.*\.(?:css|js))(.*)$/i, "$1"] ],
			"base": '<?=$cdnUrl?>assets/js/',
		});

        $(function(){
            FastClick.attach(document.body);
            $(document).on("touchmove", function(e) {
                e.preventDefault();
            });
            $("img,video").on("touchmove", function(e) {
                e.preventDefault();
                e.stopPropagation();
            });
            $(".scroller").on("touchmove", function(e) {
                e.stopPropagation();
			});
			
			//简单适配全面屏
			document.querySelector('body').style.backgroundColor = "#000";
			document.querySelector('#app').style.height = window.innerHeight / (window.innerWidth / 640) >= 1040 ? 1040 / (640 / window.innerWidth) + "px" : "100%";
		});
	</script>
	<script>
		var	__cdnurl = "<?=$cdnUrl?>";
        var __mediaurl = "<?=$mediaUrl?>";

		// if wechat
		var	__defaultWxData = {
			imgUrl : "<?=$wxData['imgUrl']?>",
			link : "<?=$wxData['link']?>",
			desc : "<?=$wxData['desc']?>",
			title : "<?=$wxData['title']?>",
			singleDesc : "<?=$wxData['singleDesc']?>"
		};
        gm.wxData.setDefault(__defaultWxData);
	</script>
</head>
<body>
<div class="hide">
	<img src="<?=$wxData['imgUrl']?>" alt="">
</div>
<div id="app" class="container">

</div>
<script>
	gm.seajs.use("app",function(app){
		//启动加载
		app.loadStart();
		
		wx.ready(function(){
			wxData.share();
		});
	});
</script>
</body>
</html>

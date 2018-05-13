<?php
    include "app/config.php";
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="format-detection"content="telephone=no, email=no" />
	<meta itemprop="name" content="<?=$wxData['title']?>"/>
	<meta itemprop="image" content="<?=$wxData['imgUrl']?>" />
	<meta itemprop="description" name="description" content="<?=$wxData['desc']?>" />
	<title><?=$websiteTitle?></title>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no">
	<link rel="stylesheet" href="<?=$cdnUrl?>assets/css/style.css">
	<link rel="stylesheet" href="<?=$cdnUrl?>assets/css/weui.min.css">
	<style> .hide {display:none;} </style>
   	<script src="<?=$cdnUrl?>assets/js/plugin/jweixin-1.2.0.js"></script>
   	<script src="<?=$cdnUrl?>assets/js/plugin/weui.js"></script>
   	<script src="<?=$cdnUrl?>assets/js/libs/base.js"></script>
	<!-- if is flashMaker -->
	<script src="<?=$cdnUrl?>assets/js/plugin/annieCore.min.js"></script>
   	<script>
	   
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
<div id="app" class="container">

</div>
<script src="<?=$cdnUrl?>assets/js/app.js"></script>
<script>
	initAPP(function(app){
		//启动加载
		app.loadStart();
		
		wx.ready(function(){
			wxData.share();
		});
	});
</script>
</body>
</html>

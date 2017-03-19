<?php

    // 活动网站地址
    $websiteUrl = 'http://localhost/';
    // 活动网站标题
    $websiteTitle = '活动网站标题';

    // CDN静态地址设置
    $cdnUrl = "./release/test/";
    // 文件版本号，用于未设置CDN时刷新资源使用
	$version = "";

    // 微信默认分享设置
    $wxData = [
        'link' => $websiteUrl,
        'imgUrl' => $cdnUrl."assets/images/share.jpg",
        'desc' => '分享小标题',
        'title' => $websiteTitle,
        'singleDesc' => ''
    ];
?>

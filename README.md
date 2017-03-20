# Flash-Template
动画项目开发模板


## 使用步骤

安装FIS3

```
npm install -g fis3
```
> http://fis.baidu.com/fis3/docs/beginning/install.html

 进入source目录
```
cd source
```
运行测试流程
```
fis3 release dev -d -w
```
根据提示安装相应插件。


## 目录结构

 - /app/
    - config.php `活动配置`
- /source/ `源素材文件`
    - /assets/ `静态资源`
        - /css/  `以下文件在输出时会合并压缩为 style.css`
            - layout.styl `如需另写HTML，在此写相应CSS`
            - reset.styl/weui.styl `引用样式`
            - style.styl css `入口及输出文件`
        - /images/
            - share.jpg `分享小图`
        - /js/
            - libs/\*.js `各种库文件 在输出时会合并为base.js`
            - app.js `主程序文件`
    - /dist/   `flash输出后目标目录`
    - /flash/ `放置flash源文件`
    - fis-conf.js `fis3配置文件`
- index.php `入口`

## 已引进可以直接使用的库
jQuery 3.2
jweixin 1.0 微信jssdk
weui.css
> https://github.com/weui/weui

weui.js
> https://github.com/weui/weui.js/blob/master/docs/README.md

gm.js
目前主要用于监测部署以及微信分享设置，可前往源码一览。
- gm.tracker.[page/event/link]()
- gm.wxData
- gm.loadImg()
- gm.fire(fn);

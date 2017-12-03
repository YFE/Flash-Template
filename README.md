# Flash-Template
动画项目开发模板

## 最近更新

### 2017-12-02
* 去掉Seajs引入方式 
* annie添加on/off支持，可替代addEventListener/removeEventListener（太长了）
* 将weui相关引用改为内部引用
* 修改annie引擎图片加载方式，使得在当前全面使用HTTPS下，可以批量下载图片

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
jQuery 3.2.1

jweixin 1.2.0 微信jssdk

weui.css 1.1.2
> https://github.com/weui/weui

weui.js 1.1.2
> https://github.com/weui/weui.js/blob/master/docs/README.md

gm.js

目前主要用于监测部署以及微信分享设置，可前往源码一览。

```javascript
gm.tracker.[page/event/link]()
gm.wxData
gm.loadImg()
```

## 开发流程
- clone 模板
- 把fla放进 /fla 里
- 设置好fla属性，输出
- 修改build.xml里的输出位置
- 进入到相应目录，运行 ant
- 进入到 /source ，运行 fis3 release dev -d -w 进行调测

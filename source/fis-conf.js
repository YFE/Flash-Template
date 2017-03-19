//以下目录及文件不进入编译范围
fis.set('project.ignore', [
    'flash/**',
    'assets/css/reset.styl',
    'assets/css/layout.styl',
    'assets/css/weui.styl',
    'fis-conf.js',
    '.DS_Store'
]);

fis.match('::package', {
    postpackager: fis.plugin('loader')
});

// JS打包为一个文件
fis.match('assets/js/libs/*.js', {
    packTo: 'assets/js/libs/base.js',
    release: ''
});

// 合并时过滤关键字不压缩。
fis.match('*.js', {
    optimizer: fis.plugin('uglify-js', {
        mangle: {
            except: 'exports, module, require, define'
        }
    })
});

// packOrder为合并时的排序，数字越大越前
fis.match('assets/js/libs/jquery.min.js', {
    packOrder: -100
});
fis.match('assets/js/libs/jweixin-1.0.0.js', {
    packOrder: -90
});
fis.match('assets/js/libs/weui.js', {
    packOrder: -90
});

// HTML 图片文件夹下 PNG压缩
fis.match('assets/images/*.png', {
    optimizer: fis.plugin('png-compressor', {
        type: 'pngquant',
        quality: [30,50]
    })
});

//stylus文件编译
fis.match('*.styl', {
    parser: 'stylus',
    rExt: '.css',
    optimizer: fis.plugin('clean-css')
});

//输出 test 目录
//fis3 release qa -d
//fis3 release qa -d -w 如在后面再加上-w 为实时检测变化
fis.media('qa').match('**', {
    deploy: [
        fis.plugin('skip-packed'),
        fis.plugin('local-deliver', {
            to: '../release/test'
        })
    ]
});

// 获取日期版本号
function getVersion(){
    var _now = new Date();
    return "" + checkTime(_now.getDate()) + checkTime(_now.getHours()) + checkTime(_now.getMinutes()) + checkTime(_now.getSeconds());

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }
        return i
    }
}

var currVersion = getVersion();
//输出 版本号 目录
//fis3 release pro -d
fis.media('pro').match('**', {
    deploy: [
        fis.plugin('skip-packed'),
        fis.plugin('local-deliver', {
            to: '../release/' + currVersion
        })
    ]
});

//输出 版本号 目录 并删除其他版本目录
//fis3 release prod -d
fis.media('prod').match('**', {
    prepackager : function (content, file, settings) {
        var exec = require('child_process').exec,child;
        child = exec('rm -rf ../release/*',function(err,out) {
            console.log(out);
            err && console.log(err);
        });
        return true;
    },
    deploy: [
        fis.plugin('skip-packed'),
        fis.plugin('local-deliver', {
            to: '../release/' + currVersion
        })
    ]
});

console.log("本次版本号为： "+currVersion);

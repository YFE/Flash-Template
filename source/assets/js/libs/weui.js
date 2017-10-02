/*!
 * weui.js v1.1.2 (https://weui.io)
 * Copyright 2017, wechat ui team
 * MIT license
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.weui=t():e.weui=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=i(a),r=n(7),u=i(r),l=n(8),s=i(l),d=n(9),f=i(d),c=n(11),p=i(c),h=n(13),v=i(h),m=n(15),y=i(m),w=n(17),g=i(w),_=n(18),b=i(_),k=n(19),x=i(k),M=n(20),j=i(M),E=n(24),C=n(30),S=i(C),O=n(32),P=i(O);t.default={dialog:o.default,alert:u.default,confirm:s.default,toast:f.default,loading:p.default,actionSheet:v.default,topTips:y.default,searchBar:g.default,tab:b.default,form:x.default,uploader:j.default,picker:E.picker,datePicker:E.datePicker,gallery:S.default,slider:P.default},e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(){function e(t){e=r.default.noop,u.addClass("weui-animate-fade-out"),o.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){a.remove(),s=!1,t&&t()})}function t(t){e(t)}var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(s)return s;var i=r.default.os.android;n=r.default.extend({title:null,content:"",className:"",buttons:[{label:"确定",type:"primary",onClick:r.default.noop}],isAndroid:i},n);var a=(0,r.default)(r.default.render(l.default,n)),o=a.find(".weui-dialog"),u=a.find(".weui-mask");return(0,r.default)("body").append(a),u.addClass("weui-animate-fade-in"),o.addClass("weui-animate-fade-in"),a.on("click",".weui-dialog__btn",function(e){var i=(0,r.default)(this).index();n.buttons[i].onClick?n.buttons[i].onClick.call(this,e)!==!1&&t():t()}),s=a[0],s.hide=t,s}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o),u=n(6),l=i(u),s=void 0;t.default=a,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=this.os={},n=e.match(/(Android);?[\s\/]+([\d.]+)?/);n&&(t.android=!0,t.version=n[2])}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n(3);var r=n(4),u=i(r),l=n(5),s=i(l);a.call(s.default,navigator.userAgent),(0,u.default)(s.default.fn,{append:function(e){return e instanceof HTMLElement||(e=e[0]),this.forEach(function(t){t.appendChild(e)}),this},remove:function(){return this.forEach(function(e){e.parentNode.removeChild(e)}),this},find:function(e){return(0,s.default)(e,this)},addClass:function(e){return this.forEach(function(t){t.classList.add(e)}),this},removeClass:function(e){return this.forEach(function(t){t.classList.remove(e)}),this},eq:function(e){return(0,s.default)(this[e])},show:function(){return this.forEach(function(e){e.style.display="block"}),this},hide:function(){return this.forEach(function(e){e.style.display="none"}),this},html:function(e){return this.forEach(function(t){t.innerHTML=e}),this},css:function(e){var t=this;return Object.keys(e).forEach(function(n){t.forEach(function(t){t.style[n]=e[n]})}),this},on:function(e,t,n){var i="string"==typeof t&&"function"==typeof n;return i||(n=t),this.forEach(function(a){e.split(" ").forEach(function(e){a.addEventListener(e,function(e){i?this.contains(e.target.closest(t))&&n.call(e.target,e):n.call(this,e)})})}),this},off:function(e,t,n){return"function"==typeof t&&(n=t,t=null),this.forEach(function(i){e.split(" ").forEach(function(e){"string"==typeof t?i.querySelectorAll(t).forEach(function(t){t.removeEventListener(e,n)}):i.removeEventListener(e,n)})}),this},index:function(){var e=this[0],t=e.parentNode;return Array.prototype.indexOf.call(t.children,e)},offAll:function(){var e=this;return this.forEach(function(t,n){var i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),e[n]=i}),this},val:function(){var e=arguments;return arguments.length?(this.forEach(function(t){t.value=e[0]}),this):this[0].value},attr:function(){var e=arguments,t=this;if("object"==o(arguments[0])){var n=function(){var n=e[0],i=t;return Object.keys(n).forEach(function(e){i.forEach(function(t){t.setAttribute(e,n[e])})}),{v:t}}();if("object"===("undefined"==typeof n?"undefined":o(n)))return n.v}return"string"==typeof arguments[0]&&arguments.length<2?this[0].getAttribute(arguments[0]):(this.forEach(function(t){t.setAttribute(e[0],e[1])}),this)}}),(0,u.default)(s.default,{extend:u.default,noop:function(){},render:function(e,t){var n="var p=[];with(this){p.push('"+e.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');";return new Function(n).apply(t)},getStyle:function(e,t){var n,i=(e.ownerDocument||document).defaultView;return i&&i.getComputedStyle?(t=t.replace(/([A-Z])/g,"-$1").toLowerCase(),i.getComputedStyle(e,null).getPropertyValue(t)):e.currentStyle?(t=t.replace(/\-(\w)/g,function(e,t){return t.toUpperCase()}),n=e.currentStyle[t],/^\d+(em|pt|%|ex)?$/i.test(n)?function(t){var n=e.style.left,i=e.runtimeStyle.left;return e.runtimeStyle.left=e.currentStyle.left,e.style.left=t||0,t=e.style.pixelLeft+"px",e.style.left=n,e.runtimeStyle.left=i,t}(n):n):void 0}}),t.default=s.default,e.exports=t.default},function(e,t){!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),i=0;n[i]&&n[i]!==t;)++i;return Boolean(n[i])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype)},function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function i(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var i=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==i.join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}var a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=i()?Object.assign:function(e,t){for(var i,r,u=n(e),l=1;l<arguments.length;l++){i=Object(arguments[l]);for(var s in i)a.call(i,s)&&(u[s]=i[s]);if(Object.getOwnPropertySymbols){r=Object.getOwnPropertySymbols(i);for(var d=0;d<r.length;d++)o.call(i,r[d])&&(u[r[d]]=i[r[d]])}}return u}},function(e,t,n){var i,a;!function(n,o){o=function(e,t,n){function i(a,o,r){return r=Object.create(i.fn),a&&r.push.apply(r,a[t]?[a]:""+a===a?/</.test(a)?((o=e.createElement(o||t)).innerHTML=a,o.children):o?(o=i(o)[0])?o[n](a):r:e[n](a):"function"==typeof a?e.readyState[7]?a():e[t]("DOMContentLoaded",a):a),r}return i.fn=[],i.one=function(e,t){return i(e,t)[0]||null},i}(document,"addEventListener","querySelectorAll"),i=[],a=function(){return o}.apply(t,i),!(void 0!==a&&(e.exports=a))}(this)},function(e,t){e.exports='<div class="<%=className%>"> <div class=weui-mask></div> <div class="weui-dialog <% if(isAndroid){ %> weui-skin_android <% } %>"> <% if(title){ %> <div class=weui-dialog__hd><strong class=weui-dialog__title><%=title%></strong></div> <% } %> <div class=weui-dialog__bd><%=content%></div> <div class=weui-dialog__ft> <% for(var i = 0; i < buttons.length; i++){ %> <a href=javascript:; class="weui-dialog__btn weui-dialog__btn_<%=buttons[i][\'type\']%>"><%=buttons[i][\'label\']%></a> <% } %> </div> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.default.noop,n=arguments[2];return"object"===("undefined"==typeof t?"undefined":o(t))&&(n=t,t=u.default.noop),n=u.default.extend({content:e,buttons:[{label:"确定",type:"primary",onClick:t}]},n),(0,s.default)(n)}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(2),u=i(r),l=n(1),s=i(l);t.default=a,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.default.noop,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.default.noop,i=arguments[3];return"object"===("undefined"==typeof t?"undefined":o(t))?(i=t,t=u.default.noop):"object"===("undefined"==typeof n?"undefined":o(n))&&(i=n,n=u.default.noop),i=u.default.extend({content:e,buttons:[{label:"取消",type:"default",onClick:n},{label:"确定",type:"primary",onClick:t}]},i),(0,s.default)(i)}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(2),u=i(r),l=n(1),s=i(l);t.default=a,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s)return s;"number"==typeof t&&(t={duration:t}),"function"==typeof t&&(t={callback:t}),t=r.default.extend({content:e,duration:3e3,callback:r.default.noop,className:""},t);var n=(0,r.default)(r.default.render(l.default,t)),i=n.find(".weui-toast"),a=n.find(".weui-mask");return(0,r.default)("body").append(n),i.addClass("weui-animate-fade-in"),a.addClass("weui-animate-fade-in"),setTimeout(function(){a.addClass("weui-animate-fade-out"),i.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){n.remove(),s=!1,t.callback()})},t.duration),s=n[0],n[0]}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o),u=n(10),l=i(u),s=void 0;t.default=a,e.exports=t.default},function(e,t){e.exports='<div class="<%= className %>"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class="weui-icon_toast weui-icon-success-no-circle"></i> <p class=weui-toast__content><%=content%></p> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(){function e(t){e=r.default.noop,u.addClass("weui-animate-fade-out"),o.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){a.remove(),s=!1,t&&t()})}function t(t){e(t)}var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s)return s;i=r.default.extend({content:n,className:""},i);var a=(0,r.default)(r.default.render(l.default,i)),o=a.find(".weui-toast"),u=a.find(".weui-mask");return(0,r.default)("body").append(a),o.addClass("weui-animate-fade-in"),u.addClass("weui-animate-fade-in"),s=a[0],s.hide=t,s}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o),u=n(12),l=i(u),s=void 0;t.default=a,e.exports=t.default},function(e,t){e.exports='<div class="weui-loading_toast <%= className %>"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class="weui-loading weui-icon_toast"></i> <p class=weui-toast__content><%=content%></p> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(){function e(t){e=r.default.noop,d.addClass(a.isAndroid?"weui-animate-fade-out":"weui-animate-slide-down"),f.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){u.remove(),s=!1,t&&t()})}function t(t){e(t)}var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(s)return s;var o=r.default.os.android;a=r.default.extend({menus:n,actions:i,className:"",isAndroid:o},a);var u=(0,r.default)(r.default.render(l.default,a)),d=u.find(".weui-actionsheet"),f=u.find(".weui-mask");return(0,r.default)("body").append(u),r.default.getStyle(d[0],"transform"),d.addClass(a.isAndroid?"weui-animate-fade-in":"weui-animate-slide-up"),f.addClass("weui-animate-fade-in").on("click",function(){t()}),u.find(".weui-actionsheet__menu").on("click",".weui-actionsheet__cell",function(e){var i=(0,r.default)(this).index();n[i].onClick.call(this,e),t()}),u.find(".weui-actionsheet__action").on("click",".weui-actionsheet__cell",function(e){var n=(0,r.default)(this).index();i[n].onClick.call(this,e),t()}),s=u[0],s.hide=t,s}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o),u=n(14),l=i(u),s=void 0;t.default=a,e.exports=t.default},function(e,t){e.exports='<div class="<% if(isAndroid){ %>weui-skin_android <% } %><%= className %>"> <div class=weui-mask></div> <div class=weui-actionsheet> <div class=weui-actionsheet__menu> <% for(var i = 0; i < menus.length; i++){ %> <div class=weui-actionsheet__cell><%= menus[i].label %></div> <% } %> </div> <div class=weui-actionsheet__action> <% for(var j = 0; j < actions.length; j++){ %> <div class=weui-actionsheet__cell><%= actions[j].label %></div> <% } %> </div> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){function t(e){t=r.default.noop,a.remove(),e&&e(),i.callback(),s=null}function n(e){t(e)}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"number"==typeof i&&(i={duration:i}),"function"==typeof i&&(i={callback:i}),i=r.default.extend({content:e,duration:3e3,callback:r.default.noop,className:""},i);var a=(0,r.default)(r.default.render(l.default,i));return(0,r.default)("body").append(a),s&&(clearTimeout(s.timeout),s.hide()),s={hide:n},s.timeout=setTimeout(n,i.duration),a[0].hide=n,a[0]}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o),u=n(16),l=i(u),s=null;t.default=a,e.exports=t.default},function(e,t){e.exports='<div class="weui-toptips weui-toptips_warn <%= className %>" style=display:block><%= content %></div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=(0,r.default)(e);return t.forEach(function(e){function t(){a.val(""),n.removeClass("weui-search-bar_focusing")}var n=(0,r.default)(e),i=n.find(".weui-search-bar__label"),a=n.find(".weui-search-bar__input"),o=n.find(".weui-icon-clear"),u=n.find(".weui-search-bar__cancel-btn");i.on("click",function(){n.addClass("weui-search-bar_focusing"),a[0].focus()}),a.on("blur",function(){this.value.length||t()}),o.on("click",function(){a.val(""),a[0].focus()}),u.on("click",function(){t(),a[0].blur()})}),t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o);t.default=a,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,r.default)(e);return t=r.default.extend({defaultIndex:0,onChange:r.default.noop},t),n.forEach(function(e){var n=(0,r.default)(e),i=n.find(".weui-navbar__item, .weui-tabbar__item"),a=n.find(".weui-tab__content");i.eq(t.defaultIndex).addClass("weui-bar__item_on"),a.eq(t.defaultIndex).show(),i.on("click",function(){var e=(0,r.default)(this),n=e.index();i.removeClass("weui-bar__item_on"),e.addClass("weui-bar__item_on"),a.hide(),a.eq(n).show(),t.onChange.call(this,n)})}),this}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o);t.default=a,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return e&&e.classList?e.classList.contains("weui-cell")?e:a(e.parentNode):null}function o(e,t,n){var i=e[0],a=e.val();if("INPUT"==i.tagName||"TEXTAREA"==i.tagName){var o=i.getAttribute("pattern")||"";if("radio"==i.type){for(var r=t.find('input[type="radio"][name="'+i.name+'"]'),u=0,l=r.length;u<l;++u)if(r[u].checked)return null;return"empty"}if("checkbox"!=i.type){if(o){if(/^REG_/.test(o)){if(!n)throw"RegExp "+o+" is empty.";if(o=o.replace(/^REG_/,""),!n[o])throw"RegExp "+o+" has not found.";o=n[o]}return new RegExp(o).test(a)?null:e.val().length?"notMatch":"empty"}return e.val().length?null:"empty"}if(!o)return i.checked?null:"empty";var s=function(){var e=t.find('input[type="checkbox"][name="'+i.name+'"]'),n=o.replace(/[{\s}]/g,"").split(","),a=0;if(2!=n.length)throw i.outerHTML+" regexp is wrong.";return e.forEach(function(e){e.checked&&++a}),""===n[1]?a>=parseInt(n[0])?{v:null}:{v:0==a?"empty":"notMatch"}:parseInt(n[0])<=a&&a<=parseInt(n[1])?{v:null}:{v:0==a?"empty":"notMatch"}}();if("object"===("undefined"==typeof s?"undefined":d(s)))return s.v}else if(a.length)return null;return"empty"}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.default.noop,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=(0,c.default)(e);return i.forEach(function(e){var i=(0,c.default)(e),a=i.find("[required]");"function"!=typeof t&&(t=l);for(var r=0,u=a.length;r<u;++r){var s=a.eq(r),d=o(s,i,n.regexp),f={ele:s[0],msg:d};if(d)return void(t(f)||l(f))}t(null)}),this}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,c.default)(e);return n.forEach(function(e){var n=(0,c.default)(e);n.find("[required]").on("blur",function(){if("checkbox"!=this.type&&"radio"!=this.type){var e=(0,c.default)(this);if(!(e.val().length<1)){var i=o(e,n,t.regexp);i&&l({ele:e[0],msg:i})}}}).on("focus",function(){s(this)})}),this}function l(e){if(e){var t=(0,c.default)(e.ele),n=e.msg,i=t.attr(n+"Tips")||t.attr("tips")||t.attr("placeholder");if(i&&(0,h.default)(i),"checkbox"==e.ele.type||"radio"==e.ele.type)return;var o=a(e.ele);o&&o.classList.add("weui-cell_warn")}}function s(e){var t=a(e);t&&t.classList.remove("weui-cell_warn")}Object.defineProperty(t,"__esModule",{value:!0});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=n(2),c=i(f),p=n(15),h=i(p);t.default={showErrorTips:l,hideErrorTips:s,validate:r,checkIfBlur:u},e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){function n(e,t){var n=e.find('[data-id="'+t+'"]'),i=n.find(".weui-uploader__file-content");return i.length||(i=(0,r.default)('<div class="weui-uploader__file-content"></div>'),n.append(i)),n.addClass("weui-uploader__file_status"),i}function i(e,t){var n=e.find('[data-id="'+t+'"]').removeClass("weui-uploader__file_status");n.find(".weui-uploader__file-content").remove()}function a(e){e.url=u.createObjectURL(e),e.status="ready",e.upload=function(){(0,f.default)(r.default.extend({$uploader:o,file:e},t))},e.stop=function(){this.xhr.abort()},t.onQueued(e),t.auto&&e.upload()}var o=(0,r.default)(e),u=window.URL||window.webkitURL||window.mozURL;t=r.default.extend({url:"",auto:!0,type:"file",fileVal:"file",xhrFields:{},onBeforeQueued:r.default.noop,onQueued:r.default.noop,onBeforeSend:r.default.noop,onSuccess:r.default.noop,onProgress:r.default.noop,onError:r.default.noop},t),t.compress!==!1&&(t.compress=r.default.extend({width:1600,height:1600,quality:.8},t.compress)),t.onBeforeQueued&&!function(){var e=t.onBeforeQueued;t.onBeforeQueued=function(t,n){var i=e.call(t,n);if(i===!1)return!1;if(i!==!0){var a=(0,r.default)(r.default.render(l.default,{id:t.id}));o.find(".weui-uploader__files").append(a)}}}(),t.onQueued&&!function(){var e=t.onQueued;t.onQueued=function(n){if(!e.call(n)){var a=o.find('[data-id="'+n.id+'"]');a.css({backgroundImage:'url("'+(n.base64||n.url)+'")'}),t.auto||i(o,n.id)}}}(),t.onBeforeSend&&!function(){var e=t.onBeforeSend;t.onBeforeSend=function(t,n,i){var a=e.call(t,n,i);if(a===!1)return!1}}(),t.onSuccess&&!function(){var e=t.onSuccess;t.onSuccess=function(t,n){t.status="success",e.call(t,n)||i(o,t.id)}}(),t.onProgress&&!function(){var e=t.onProgress;t.onProgress=function(t,i){e.call(t,i)||n(o,t.id).html(i+"%")}}(),t.onError&&!function(){var e=t.onError;t.onError=function(t,i){t.status="fail",e.call(t,i)||n(o,t.id).html('<i class="weui-icon-warn"></i>')}}(),o.find('input[type="file"]').on("change",function(e){var n=e.target.files;0!==n.length&&(t.compress===!1&&"file"==t.type?Array.prototype.forEach.call(n,function(e){e.id=++c,t.onBeforeQueued(e,n)!==!1&&a(e)}):Array.prototype.forEach.call(n,function(e){e.id=++c,t.onBeforeQueued(e,n)!==!1&&(0,s.compress)(e,t,function(e){e&&a(e)})}),this.value="")})}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o),u=n(21),l=i(u),s=n(22),d=n(23),f=i(d),c=0;t.default=a,e.exports=t.default},function(e,t){e.exports='<li class="weui-uploader__file weui-uploader__file_status" data-id="<%= id %>"> <div class=weui-uploader__file-content> <i class=weui-loading style=width:30px;height:30px></i> </div> </li> '},function(e,t){"use strict";function n(e){var t,n=e.naturalHeight,i=document.createElement("canvas");i.width=1,i.height=n;var a=i.getContext("2d");a.drawImage(e,0,0);try{t=a.getImageData(0,0,1,n).data}catch(e){return 1}for(var o=0,r=n,u=n;u>o;){var l=t[4*(u-1)+3];0===l?r=u:o=u,u=r+o>>1}var s=u/n;return 0===s?1:s}function i(e){for(var t=atob(e.split(",")[1]),n=new ArrayBuffer(t.length),i=new Uint8Array(n),a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return n}function a(e){var t=e.split(",")[0].split(":")[1].split(";")[0],n=i(e);return new Blob([n],{type:t})}function o(e){var t=new DataView(e);if(65496!=t.getUint16(0,!1))return-2;for(var n=t.byteLength,i=2;i<n;){var a=t.getUint16(i,!1);if(i+=2,65505==a){if(1165519206!=t.getUint32(i+=2,!1))return-1;var o=18761==t.getUint16(i+=6,!1);i+=t.getUint32(i+4,o);var r=t.getUint16(i,o);i+=2;for(var u=0;u<r;u++)if(274==t.getUint16(i+12*u,o))return t.getUint16(i+12*u+8,o)}else{if(65280!=(65280&a))break;i+=t.getUint16(i,!1)}}return-1}function r(e,t,n){var i=e.width,a=e.height;switch(n>4&&(e.width=a,e.height=i),n){case 2:t.translate(i,0),t.scale(-1,1);break;case 3:t.translate(i,a),t.rotate(Math.PI);break;case 4:t.translate(0,a),t.scale(1,-1);break;case 5:t.rotate(.5*Math.PI),t.scale(1,-1);break;case 6:t.rotate(.5*Math.PI),t.translate(0,-a);break;case 7:t.rotate(.5*Math.PI),t.translate(i,-a),t.scale(-1,1);break;case 8:t.rotate(-.5*Math.PI),t.translate(-i,0)}}function u(e,t,u){var l=new FileReader;l.onload=function(l){if(t.compress===!1)return e.base64=l.target.result,void u(e);var s=new Image;s.onload=function(){var l=n(s),d=o(i(s.src)),f=document.createElement("canvas"),c=f.getContext("2d"),p=t.compress.width,h=t.compress.height,v=s.width,m=s.height,y=void 0;if(v<m&&m>h?(v=parseInt(h*s.width/s.height),m=h):v>=m&&v>p&&(m=parseInt(p*s.height/s.width),v=p),f.width=v,f.height=m,d>0&&r(f,c,d),c.drawImage(s,0,0,v,m/l),y=/image\/jpeg/.test(e.type)||/image\/jpg/.test(e.type)?f.toDataURL("image/jpeg",t.compress.quality):f.toDataURL(e.type),"file"==t.type)if(/;base64,null/.test(y)||/;base64,$/.test(y))u(e);else{var w=a(y);w.id=e.id,w.name=e.name,w.lastModified=e.lastModified,w.lastModifiedDate=e.lastModifiedDate,u(w)}else/;base64,null/.test(y)||/;base64,$/.test(y)?(t.onError(e,new Error("Compress fail, dataURL is "+y+".")),u()):(e.base64=y,u(e))},s.src=l.target.result},l.readAsDataURL(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={compress:u},e.exports=t.default},function(e,t){"use strict";function n(e){var t=e.url,n=e.file,i=e.fileVal,a=e.onBeforeSend,o=e.onProgress,r=e.onError,u=e.onSuccess,l=e.xhrFields,s=n.name,d=n.type,f=n.lastModifiedDate,c={name:s,type:d,size:"file"==e.type?n.size:n.base64.length,lastModifiedDate:f},p={};if(a(n,c,p)!==!1){n.status="progress",o(n,0);var h=new FormData,v=new XMLHttpRequest;n.xhr=v,Object.keys(c).forEach(function(e){h.append(e,c[e])}),"file"==e.type?h.append(i,n,s):h.append(i,n.base64),v.onreadystatechange=function(){if(4==v.readyState)if(200==v.status)try{var e=JSON.parse(v.responseText);u(n,e)}catch(e){r(n,e)}else r(n,new Error("XMLHttpRequest response status is "+v.status))},v.upload.addEventListener("progress",function(e){if(0!=e.total){var t=100*Math.ceil(e.loaded/e.total);o(n,t)}},!1),v.open("POST",t),Object.keys(l).forEach(function(e){v[e]=l[e]}),Object.keys(p).forEach(function(e){v.setRequestHeader(e,p[e])}),v.send(h)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(e){"object"!=("undefined"==typeof e?"undefined":l(e))&&(e={label:e,value:e}),d.default.extend(this,e)}function r(){function e(){(0,d.default)(r.container).append(v),d.default.getStyle(v[0],"transform"),v.find(".weui-mask").addClass("weui-animate-fade-in"),v.find(".weui-picker").addClass("weui-animate-slide-up")}function t(e){t=d.default.noop,v.find(".weui-mask").addClass("weui-animate-fade-out"),v.find(".weui-picker").addClass("weui-animate-slide-down").on("animationend webkitAnimationEnd",function(){v.remove(),g=!1,e&&e()})}function n(e){t(e)}function i(e,t){if(void 0===p[t]&&r.defaultValue&&void 0!==r.defaultValue[t]){var n=r.defaultValue[t],a=0,u=e.length;if("object"==l(e[a]))for(;a<u&&n!=e[a].value;++a);else for(;a<u&&n!=e[a];++a);a<u&&(p[t]=a)}v.find(".weui-picker__group").eq(t).scroll({items:e,temp:p[t],onChange:function(e,n){if(e?c[t]=new o(e):c[t]=null,p[t]=n,s)c.length==y&&r.onChange(c);else if(e.children&&e.children.length>0)v.find(".weui-picker__group").eq(t+1).show(),!s&&i(e.children,t+1);else{var a=v.find(".weui-picker__group");a.forEach(function(e,n){n>t&&(0,d.default)(e).hide()}),c.splice(t+1),r.onChange(c)}},onConfirm:r.onConfirm})}if(g)return g;var a=arguments[arguments.length-1],r=d.default.extend({id:"default",className:"",container:"body",onChange:d.default.noop,onConfirm:d.default.noop},a),u=void 0,s=!1;if(arguments.length>2){var f=0;for(u=[];f<arguments.length-1;)u.push(arguments[f++]);s=!0}else u=arguments[0];_[r.id]=_[r.id]||[];for(var c=[],p=_[r.id],v=(0,d.default)(d.default.render(m.default,r)),y=a.depth||(s?u.length:h.depthOf(u[0])),b="",k=y;k--;)b+=w.default;return v.find(".weui-picker__bd").html(b),e(),s?u.forEach(function(e,t){i(e,t)}):i(u,0),v.on("click",".weui-mask",function(){n()}).on("click",".weui-picker__action",function(){n()}).on("click","#weui-picker-confirm",function(){r.onConfirm(c)}),g=v[0],g.hide=n,g}function u(e){var t=d.default.extend({id:"datePicker",onChange:d.default.noop,onConfirm:d.default.noop,start:2e3,end:2030,cron:"* * *"},e);"number"==typeof t.start?t.start=new Date(t.start+"/01/01"):"string"==typeof t.start&&(t.start=new Date(t.start.replace(/-/g,"/"))),"number"==typeof t.end?t.end=new Date(t.end+"/12/31"):"string"==typeof t.end&&(t.end=new Date(t.end.replace(/-/g,"/")));var n=function(e,t,n){for(var i=0,a=e.length;i<a;i++){var o=e[i];if(o[t]==n)return o}},i=[],a=c.default.parse(t.cron,t.start,t.end),o=void 0;do{o=a.next();var u=o.value.getFullYear(),l=o.value.getMonth()+1,s=o.value.getDate(),f=n(i,"value",u);f||(f={label:u+"年",value:u,children:[]},i.push(f));var p=n(f.children,"value",l);p||(p={label:l+"月",value:l,children:[]},f.children.push(p)),p.children.push({label:s+"日",value:s})}while(!o.done);return r(i,t)}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(2),d=a(s),f=n(25),c=a(f);n(26);var p=n(27),h=i(p),v=n(28),m=a(v),y=n(29),w=a(y);o.prototype.toString=function(){return this.value},o.prototype.valueOf=function(){return this.value};var g=void 0,_={};t.default={picker:r,datePicker:u},e.exports=t.default},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){var n=t[0],i=t[1],a=[],o=void 0;e=e.replace(/\*/g,n+"-"+i);for(var u=e.split(","),l=0,s=u.length;l<s;l++){var d=u[l];d.match(r)&&d.replace(r,function(e,t,r,u){u=parseInt(u)||1,t=Math.min(Math.max(n,~~Math.abs(t)),i),r=r?Math.min(i,~~Math.abs(r)):t,o=t;do a.push(o),o+=u;while(o<=r)})}return a}function a(e,t,n){var a=e.replace(/^\s\s*|\s\s*$/g,"").split(/\s+/),o=[];return a.forEach(function(e,t){var n=u[t];o.push(i(e,n))}),new l(o,t,n)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=/^(\d+)(?:-(\d+))?(?:\/(\d+))?$/g,u=[[1,31],[1,12],[0,6]],l=function(){function e(t,i,a){n(this,e),this._dates=t[0],this._months=t[1],this._days=t[2],this._start=i,this._end=a,this._pointer=i}return o(e,[{key:"_findNext",value:function(){for(var e=void 0;;){if(this._end.getTime()-this._pointer.getTime()<0)throw new Error("out of range, end is "+this._end+", current is "+this._pointer);var t=this._pointer.getMonth(),n=this._pointer.getDate(),i=this._pointer.getDay();if(this._months.indexOf(t+1)!==-1)if(this._dates.indexOf(n)!==-1){if(this._days.indexOf(i)!==-1){e=new Date(this._pointer);break}this._pointer.setDate(n+1)}else this._pointer.setDate(n+1);else this._pointer.setMonth(t+1),this._pointer.setDate(1)}return e}},{key:"next",value:function(){var e=this._findNext();return this._pointer.setDate(this._pointer.getDate()+1),{value:e,done:!this.hasNext()}}},{key:"hasNext",value:function(){try{return this._findNext(),!0}catch(e){return!1}}}]),e}();t.default={parse:a},e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(2),r=i(o),u=function(e,t){return e.css({"-webkit-transition":"all "+t+"s",transition:"all "+t+"s"})},l=function(e,t){return e.css({"-webkit-transform":"translate3d(0, "+t+"px, 0)",transform:"translate3d(0, "+t+"px, 0)"})},s=function(e){for(var t=Math.floor(e.length/2),n=0;e[t]&&e[t].disabled;)if(t=++t%e.length,n++,n>e.length)throw new Error("No selectable item.");return t},d=function(e,t,n){var i=s(n);return(e-i)*t},f=function(e,t){return e*t},c=function(e,t,n){return-(t*(n-e-1))};r.default.fn.scroll=function(e){function t(e){y=e,g=+new Date}function n(e){w=e;var t=w-y;u(m,0),l(m,_+t),g=+new Date,b.push({time:g,y:w}),b.length>40&&b.shift()}function i(e){if(y){var t=(new Date).getTime(),n=k-p.bodyHeight/2;if(w=e,t-g>100)j(Math.abs(w-y)>10?w-y:n-w);else if(Math.abs(w-y)>10){for(var i=b.length-1,a=i,o=i;o>0&&g-b[o].time<100;o--)a=o;if(a!==i){var r=b[i],u=b[a],l=r.time-u.time,s=r.y-u.y,d=s/l,f=150*d+(w-y);j(f)}else j(0)}else j(n-w);y=null}}var o=this,p=r.default.extend({items:[],scrollable:".weui-picker__content",offset:3,rowHeight:34,onChange:r.default.noop,temp:null,bodyHeight:238},e),h=p.items.map(function(e){return'<div class="weui-picker__item'+(e.disabled?" weui-picker__item_disabled":"")+'">'+("object"==("undefined"==typeof e?"undefined":a(e))?e.label:e)+"</div>"}).join(""),v=(0,r.default)(this);v.find(".weui-picker__content").html(h);var m=v.find(p.scrollable),y=void 0,w=void 0,g=void 0,_=void 0,b=[],k=window.innerHeight;
if(null!==p.temp&&p.temp<p.items.length){var x=p.temp;p.onChange.call(this,p.items[x],x),_=(p.offset-x)*p.rowHeight}else{var M=s(p.items);p.onChange.call(this,p.items[M],M),_=d(p.offset,p.rowHeight,p.items)}l(m,_);var j=function(e){_+=e,_=Math.round(_/p.rowHeight)*p.rowHeight;var t=f(p.offset,p.rowHeight),n=c(p.offset,p.rowHeight,p.items.length);_>t&&(_=t),_<n&&(_=n);for(var i=p.offset-_/p.rowHeight;p.items[i]&&p.items[i].disabled;)e>0?++i:--i;_=(p.offset-i)*p.rowHeight,u(m,.3),l(m,_),p.onChange.call(o,p.items[i],i)};m=v.offAll().on("touchstart",function(e){t(e.changedTouches[0].pageY)}).on("touchmove",function(e){n(e.changedTouches[0].pageY),e.preventDefault()}).on("touchend",function(e){i(e.changedTouches[0].pageY)}).find(p.scrollable);var E="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch;E||v.on("mousedown",function(e){t(e.pageY),e.stopPropagation(),e.preventDefault()}).on("mousemove",function(e){y&&(n(e.pageY),e.stopPropagation(),e.preventDefault())}).on("mouseup mouseleave",function(e){i(e.pageY),e.stopPropagation(),e.preventDefault()})}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.depthOf=function e(t){var n=1;return t.children&&t.children[0]&&(n=e(t.children[0])+1),n}},function(e,t){e.exports='<div class="<%= className %>"> <div class=weui-mask></div> <div class=weui-picker> <div class=weui-picker__hd> <a href=javascript:; data-action=cancel class=weui-picker__action>取消</a> <a href=javascript:; data-action=select class=weui-picker__action id=weui-picker-confirm>确定</a> </div> <div class=weui-picker__bd></div> </div> </div> '},function(e,t){e.exports="<div class=weui-picker__group> <div class=weui-picker__mask></div> <div class=weui-picker__indicator></div> <div class=weui-picker__content></div> </div>"},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){function t(e){t=r.default.noop,a.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){a.remove(),s=!1,e&&e()})}function n(e){t(e)}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s)return s;i=r.default.extend({className:"",onDelete:r.default.noop},i);var a=(0,r.default)(r.default.render(l.default,r.default.extend({url:e},i)));return(0,r.default)("body").append(a),a.find(".weui-gallery__img").on("click",function(){n()}),a.find(".weui-gallery__del").on("click",function(){i.onDelete.call(this,e)}),a.show().addClass("weui-animate-fade-in"),s=a[0],s.hide=n,s}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o),u=n(31),l=i(u),s=void 0;t.default=a,e.exports=t.default},function(e,t){e.exports='<div class="weui-gallery <%= className %>"> <span class=weui-gallery__img style="background-image:url(<%= url %>)"></span> <div class=weui-gallery__opr> <a href=javascript: class=weui-gallery__del> <i class="weui-icon-delete weui-icon_gallery-delete"></i> </a> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,r.default)(e);if(t=r.default.extend({step:void 0,defaultValue:0,onChange:r.default.noop},t),void 0!==t.step&&(t.step=parseFloat(t.step),!t.step||t.step<0))throw new Error("Slider step must be a positive number.");if(void 0!==t.defaultValue&&t.defaultValue<0||t.defaultValue>100)throw new Error("Slider defaultValue must be >= 0 and <= 100.");return n.forEach(function(e){function n(){var e=r.default.getStyle(l[0],"left");return e=/%/.test(e)?s*parseFloat(e)/100:parseFloat(e)}function i(n){var i=void 0,a=void 0;t.step&&(n=Math.round(n/p)*p),i=f+n,i=i<0?0:i>s?s:i,a=100*i/s,u.css({width:a+"%"}),l.css({left:a+"%"}),t.onChange.call(e,a)}var a=(0,r.default)(e),o=a.find(".weui-slider__inner"),u=a.find(".weui-slider__track"),l=a.find(".weui-slider__handler"),s=parseInt(r.default.getStyle(o[0],"width")),d=o[0].offsetLeft,f=0,c=0,p=void 0;t.step&&(p=s*t.step/100),t.defaultValue&&i(s*t.defaultValue/100),a.on("click",function(e){e.preventDefault(),f=n(),i(e.pageX-d-f)}),l.on("touchstart",function(e){f=n(),c=e.changedTouches[0].clientX}).on("touchmove",function(e){e.preventDefault(),i(e.changedTouches[0].clientX-c)})}),this}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o);t.default=a,e.exports=t.default}])});

; /*!*/ +
function() {
    var lastTime = 0;
    var vendors = ['webkit'];
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = window['webkitRequestAnimationFrame'];
        window.cancelAnimationFrame = window['webkitCancelAnimationFrame'] || window['webkitCancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}();

; /* 数组乱序 */ +
function() {
    if (!Array.prototype.shuffle) {
        Array.prototype.shuffle = function() {
            for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
            return this;
        };
    }
}();

; /*随机不重复整数*/ +
function() {
    if (!Array.prototype.intRandom) {
        Array.prototype.intRandom = function(n,max) {
            var arr = [];
            for(var i = 0; i < n; i++){
              var item = Math.floor(Math.random() * max);
              if(arr.indexOf(item) > -1){ i--; continue; }
              else arr.push(item);
            }
            return arr;
        };
    }
}();

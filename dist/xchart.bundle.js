!function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t){"use strict"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var u=n(3),a=(r(u),n(4));r(a)},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(){function e(){n(this,e)}return r(e,[{key:"transform",value:function(){return{}}},{key:"setType",value:function(e){this.type=e}},{key:"_setRawData",value:function(e){this.rawData=e}},{key:"_setTransformedData",value:function(e){this.transformedData=e}},{key:"setData",value:function(e,t){"raw"===t?this._setRawData(e):this._setTransformedData(e)}},{key:"getData",value:function(){return"raw"===this.type?this.transform():this.transformedData}}]),e}();t.default=u},function(e,t){"use strict"},function(e,t){"use strict"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=(r(o),n(2)),f=(r(i),n(0),function(){function e(t){u(this,e),this.chartList=[]}return a(e,[{key:"register",value:function(){}},{key:"destory",value:function(){}},{key:"mount",value:function(e){if(!(e.mount&&e.packageName&&e.chartType))throw new Error("err.");e.data;this.render()}},{key:"copyright",value:function(e){return e}},{key:"setData",value:function(){}},{key:"transData",value:function(){}},{key:"addComponents",value:function(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}},{key:"setMount",value:function(){}},{key:"on",value:function(){}},{key:"off",value:function(){}},{key:"highlight",value:function(){}},{key:"setLan",value:function(e){}},{key:"render",value:function(){}}]),e}());t.default=f}]);
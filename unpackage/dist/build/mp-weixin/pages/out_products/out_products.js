(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/out_products/out_products"],{"01e0":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={data:function(){return{scanFunctionIsUseable:!0}},computed:u({},(0,o.mapState)(["token"])),methods:{showToast:function(t){this.$refs.uToast.show({title:t,type:"error",position:"bottom",icon:!1})},outProduct:function(t){var e=this;this.myRequest({url:"member/goods/back_stock",method:"POST",data:{token:e.token,goods_code:t}}).then((function(t){e.showToast(t.data.msg),setTimeout((function(){e.scanFunctionIsUseable=!0}),1e3)}))},scancode:function(t){if(1==this.scanFunctionIsUseable)if(this.scanFunctionIsUseable=!1,"qrcode"==t.detail.type||"QR_CODE"==t.detail.type){var e=t.detail.result.indexOf("syjn="),n=t.detail.result.substring(e+5);-1==e?(this.showToast("该商品不是石原金牛商品"),this.scanFunctionIsUseable=!0):this.outProduct(n)}else{n=t.detail.result;var o=/^(U\d{29}|\d{32}|[0-9,A-Z]{30})$/,r=o.test(n);console.log("条码信息为：",n,r),n.length>=30&&1==r?this.outProduct(n):this.scanFunctionIsUseable=!0}},cameraError:function(t){this.showToast("请重新扫码")},scancodeAlbum:function(){var e=this;t.scanCode({scanType:["qrCode","barCode"],success:function(t){if("QR_CODE"==t.scanType){var n=t.result.indexOf("syjn="),o=t.result.substring(n+5);-1==n?e.showToast("该商品不是石原金牛商品"):e.outProduct(o)}else{o=t.result;var r=/^(U\d{29}|\d{32}|[0-9,A-Z]{30})$/,u=r.test(o);o.length>=30&&1==u&&e.enterProduct(o)}},fail:function(t){console.log("扫码出错了"),e.showToast("该条码不是商品条码")}})}}};e.default=s}).call(this,n("543d")["default"])},4337:function(t,e,n){"use strict";n.r(e);var o=n("01e0"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=r.a},8263:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var o={uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"112d"))},uToast:function(){return n.e("uview-ui/components/u-toast/u-toast").then(n.bind(null,"7000"))}},r=function(){var t=this,e=t.$createElement;t._self._c},u=[]},af33:function(t,e,n){"use strict";(function(t){n("7eb7");o(n("66fd"));var e=o(n("b5b7"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},b5b7:function(t,e,n){"use strict";n.r(e);var o=n("8263"),r=n("4337");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("efbb");var c,s=n("f0c5"),i=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,"6998c9dc",null,!1,o["a"],c);e["default"]=i.exports},b63c:function(t,e,n){},efbb:function(t,e,n){"use strict";var o=n("b63c"),r=n.n(o);r.a}},[["af33","common/runtime","common/vendor"]]]);
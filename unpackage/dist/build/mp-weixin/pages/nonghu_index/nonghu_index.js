(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/nonghu_index/nonghu_index"],{"0df7":function(e,t,n){},2613:function(e,t,n){"use strict";var o=n("0df7"),r=n.n(o);r.a},"3bfe":function(e,t,n){"use strict";n.r(t);var o=n("5ee6"),r=n("f671");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("2613");var i,a=n("f0c5"),c=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,"c78bb9a0",null,!1,o["a"],i);t["default"]=c.exports},"4e38":function(e,t,n){"use strict";(function(e){n("7eb7");o(n("66fd"));var t=o(n("3bfe"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"5ee6":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return o}));var o={uImage:function(){return n.e("uview-ui/components/u-image/u-image").then(n.bind(null,"c642"))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"112d"))}},r=function(){var e=this,t=e.$createElement;e._self._c},u=[]},d2fd:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={data:function(){return{perinfo:"",points:[{index:"1",text:"用药记录"},{index:"2",text:"上传分享截图"}]}},onShow:function(){this.getPerInfo(),e.hideHomeButton()},computed:u({},(0,o.mapState)(["token","userinfo","wxinfo"])),methods:{modefiy:function(){e.navigateTo({url:"../personal/personal"})},getPerInfo:function(){var t=this,n=this;this.myRequest({url:"member/user/get_user_info",method:"POST",data:{token:n.token}}).then((function(n){1==n.data.code?t.perinfo=n.data.data:510==n.data.code&&"无效的token参数！"==n.data.msg&&e.navigateTo({url:"../login/login?operation=relogin"})}))},selPoints:function(t){"用药记录"==t.text?e.navigateTo({url:"../medication_record/medication_record"}):e.navigateTo({url:"../upload_share/upload_share"})}}};t.default=a}).call(this,n("543d")["default"])},f671:function(e,t,n){"use strict";n.r(t);var o=n("d2fd"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a}},[["4e38","common/runtime","common/vendor"]]]);
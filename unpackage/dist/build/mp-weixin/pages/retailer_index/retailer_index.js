(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/retailer_index/retailer_index"],{"35ac":function(e,t,n){"use strict";n.r(t);var r=n("56df"),o=n("e25e");for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);n("89d1");var i,a=n("f0c5"),c=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,"9eae42da",null,!1,r["a"],i);t["default"]=c.exports},"56df":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var r={uImage:function(){return n.e("uview-ui/components/u-image/u-image").then(n.bind(null,"c642"))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"112d"))}},o=function(){var e=this,t=e.$createElement;e._self._c},u=[]},"6d78":function(e,t,n){"use strict";(function(e){n("7eb7");r(n("66fd"));var t=r(n("35ac"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"86c1":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={data:function(){return{perinfo:"",points:[{index:"1",text:"扫码入库"},{index:"2",text:"扫码退货"},{index:"3",text:"手工输入入库/退货"},{index:"4",text:"进货统计"},{index:"5",text:"需要的支持"}]}},onShow:function(){this.getPerInfo(),e.hideHomeButton()},computed:u({},(0,r.mapState)(["token","userinfo","wxinfo"])),methods:{modefiy:function(){e.navigateTo({url:"../personal/personal"})},getPerInfo:function(){var t=this,n=this;this.myRequest({url:"member/user/get_user_info",method:"POST",data:{token:n.token}}).then((function(n){1==n.data.code?t.perinfo=n.data.data:510==n.data.code&&"无效的token参数！"==n.data.msg&&e.navigateTo({url:"../login/login?operation=relogin"})}))},selPoints:function(t){switch(t.text){case"扫码入库":e.navigateTo({url:"../enter_products/enter_products"});break;case"扫码退货":e.navigateTo({url:"../out_products/out_products"});break;case"手工输入入库/退货":e.navigateTo({url:"../enter_out_products/enter_out_products"});break;case"进货统计":e.navigateTo({url:"../enter_products_statistics/enter_products_statistics?user_id="+this.perinfo.userid});break;case"需要的支持":e.navigateTo({url:"../need_supports/need_supports"});break;default:console.log("点错了");break}}}};t.default=a}).call(this,n("543d")["default"])},"89d1":function(e,t,n){"use strict";var r=n("b8f7"),o=n.n(r);o.a},b8f7:function(e,t,n){},e25e:function(e,t,n){"use strict";n.r(t);var r=n("86c1"),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=o.a}},[["6d78","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/continue_record/continue_record"],{1563:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={data:function(){return{prescription:"",effect:"",width:"150",height:"150",maxcount:"5",show:!1,right_icon:"arrow-right",size_type:["original","compressed"],effectList:[{text:"好"},{text:"一般"},{text:"差"}],fieldstyle:{fontSize:"30rpx",color:"#333333",paddingLeft:"30rpx"},placehold_style:"color:#999999;font-size:30rpx;font-family: Microsoft YaHei;font-weight: Regular;",fileList:[],sourceType:["camera"],color:"#999999",crop_code:""}},computed:i(i({},(0,o.mapState)(["token"])),{},{action:function(){return this.url+"member/upload/image_multi"},formData:function(){return{token:this.token,file:this.fileList}},length:function(){return this.fileList.length},isactive:function(){return""!==this.effect&&""!==this.prescription&&this.length>=2}}),onLoad:function(t){this.crop_code=t.crop_code},methods:{chooseUpload:function(t,e){this.fileList=t},removeUpload:function(t,e,n){this.fileList=e},addContinueRecord:function(e){var n=this,o=this;this.myRequest({url:"member/crop/add_crop_track",method:"POST",data:{token:o.token,crop_code:o.crop_code,crop_effect:o.effect,crop_recipel:o.prescription,crop_img:e}}).then((function(e){1==e.data.code&&"添加用药跟踪记录成功"==e.data.msg&&t.navigateTo({url:"../medication_record_detail/medication_record_detail?crop_code=".concat(n.crop_code)})}))},submit:function(){1==this.isactive?this.$refs.uUpload.upload():console.log("现在按钮被禁用了")},showAction:function(){this.show=!0,this.right_icon="arrow-down"},clickItem:function(t){this.effect=this.effectList[t].text},uploadsuccess:function(t,e,n,o){var r=[];r=n.filter((function(t){return 100==t.progress}));var i=r.reduce((function(t,e){return t.push(e.response.data[0].url),t}),[]);this.fileList.length==r.length&&(console.log("点击上传以后的数据：",r,i),this.addContinueRecord(i))}},watch:{show:function(t){this.right_icon=0==t?"arrow-right":"arrow-down"}}};e.default=u}).call(this,n("543d")["default"])},3531:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={uField:function(){return n.e("uview-ui/components/u-field/u-field").then(n.bind(null,"9ea7"))},uActionSheet:function(){return n.e("uview-ui/components/u-action-sheet/u-action-sheet").then(n.bind(null,"28a9"))},uUpload:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-upload/u-upload")]).then(n.bind(null,"5961"))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"112d"))}},r=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"8c98":function(t,e,n){"use strict";n.r(e);var o=n("1563"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},a43b:function(t,e,n){"use strict";n.r(e);var o=n("3531"),r=n("8c98");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("ff8e");var c,u=n("f0c5"),a=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,"42d92826",null,!1,o["a"],c);e["default"]=a.exports},d854:function(t,e,n){},f4ab:function(t,e,n){"use strict";(function(t){n("7eb7");o(n("66fd"));var e=o(n("a43b"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},ff8e:function(t,e,n){"use strict";var o=n("d854"),r=n.n(o);r.a}},[["f4ab","common/runtime","common/vendor"]]]);
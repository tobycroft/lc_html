(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-elder_end-elder_end"],{"013c":function(t,e,n){"use strict";n("c975"),n("a9e3"),n("acd8"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},o={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,e=getCurrentPages()[0];this.$pageVm=e.$vm||e,uni.onWindowResize((function(e){t.$emit("resize",e)})),this.$pageVm.$on("hook:onPageScroll",(function(e){t.$emit("scroll",e)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,e){t.setStyle({pullToRefresh:{support:e,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,e=String(this.scrollTop);if(-1!==e.indexOf("rpx")&&(e=uni.upx2px(e.replace("rpx",""))),e=parseFloat(e),!isNaN(e)){var n=function n(o){o.scrollTop===e&&(t.$pageVm.$off("hook:onPageScroll",n),t.$emit("scrolldone",i))};uni.pageScrollTo({scrollTop:e,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",n)}})}}}};e.default=o},"02df":function(t,e,n){t.exports=n.p+"static/img/ps_code.39298176.png"},"02ea":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("7f96")),a=i(n("e038")),r={components:{NavigationBar:o.default,Footer:a.default},data:function(){return{}},methods:{}};e.default=r},"0b09":function(t,e,n){"use strict";n.r(e);var i=n("02ea"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"2d75":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{display:"none"}},[t._t("default")],2)},a=[]},"40ba":function(t,e,n){"use strict";n.r(e);var i=n("69fe"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"518c":function(t,e,n){t.exports=n.p+"static/img/elder_end.32435047.png"},"5c4e":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={pageMeta:n("6d42").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",[i("page-meta",{attrs:{"root-font-size":t.customerFontSize}}),i("NavigationBar"),i("v-uni-view",{staticClass:"flex align-center justify-between",staticStyle:{width:"13.2rem",margin:"0 auto",padding:"0.5rem 0rem"}},[i("v-uni-view",{},[i("v-uni-view",{staticStyle:{"font-size":"0.32rem","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold",color:"#333333"}},[t._v("莆田市学校家庭教育"),i("br"),t._v("一站式服务数智化平台")]),i("v-uni-view",{staticStyle:{"margin-top":"0.44rem","font-size":"0.8rem","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold",color:"#333333"}},[t._v("家长端")]),i("v-uni-view",{staticStyle:{"font-size":"0.16rem","font-family":"Microsoft YaHei-Light, Microsoft YaHei","font-weight":"300",color:"#333333"}},[t._v("Parent end")]),i("v-uni-image",{staticStyle:{width:"3.7rem",height:"3.3rem","margin-top":"0.8rem"},attrs:{src:n("02df"),mode:""}})],1),i("v-uni-image",{staticStyle:{width:"6.7rem",height:"auto"},attrs:{src:n("518c"),mode:"widthFix"}})],1),i("Footer")],1)],1)},a=[]},"69fe":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"Footer",data:function(){return{}},computed:{},methods:{goBeian:function(){window.open("https://beian.miit.gov.cn/","_blank")}}};e.default=i},"6d42":function(t,e,n){"use strict";n.r(e);var i=n("2d75"),o=n("8f28");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r,c=n("f0c5"),u=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=u.exports},"79d5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"NavigationBar",data:function(){return{menuRel:{"首页":["/","/pages/index/index","/pages/teacher_end/teacher_end","/pages/elder_end/elder_end"],"资讯":["/pages/news/news","/pages/news_detail/news_detail"],"学习计划":["/pages/study_plan/study_plan"],"家长反馈":["/pages/elder_feedback/elder_feedback"],"成果展示":["/pages/show/show"]},menus:[{path:"/",name:"首页"},{path:"/pages/news/news",name:"资讯"},{path:"/pages/study_plan/study_plan",name:"学习计划"},{path:"/pages/elder_feedback/elder_feedback",name:"家长反馈"},{path:"http://school.familyeducation.org.cn/putianscreen/",name:"成果展示"}]}},computed:{path:function(){return this.$route.path}},methods:{menuClick:function(t){t.path!=this.$route.path&&("成果展示"==t.name?window.location.href=t.path:this.$router.push(t.path))}}};e.default=i},"7a76":function(t,e,n){"use strict";var i=n("fc03"),o=n.n(i);o.a},"7f96":function(t,e,n){"use strict";n.r(e);var i=n("e42d"),o=n("c99b");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("7a76");var r,c=n("f0c5"),u=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"681ce43e",null,!1,i["a"],r);e["default"]=u.exports},"8f28":function(t,e,n){"use strict";n.r(e);var i=n("013c"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"923c":function(t,e,n){"use strict";n.r(e);var i=n("5c4e"),o=n("0b09");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r,c=n("f0c5"),u=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"fcdaaf7e",null,!1,i["a"],r);e["default"]=u.exports},c99b:function(t,e,n){"use strict";n.r(e);var i=n("79d5"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},cb52:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-view",{staticStyle:{width:"100%",height:"3.94rem",background:"#DA4036",position:"relative"}},[n("v-uni-view",{staticStyle:{position:"absolute","font-size":"1.27rem","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold",color:"#FFFFFF22",top:"1rem",left:"50%",transform:"translateX(-50%)","line-height":"0px"}},[t._v("CORE VALUES")]),n("v-uni-view",{staticClass:"flex align-center justify-center",staticStyle:{position:"absolute",width:"100%",height:"100%"}},[n("v-uni-view",{staticStyle:{"text-align":"center","padding-top":"0.4rem"}},[n("v-uni-view",{staticStyle:{"font-size":"0.48rem","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold",color:"#FFFFFF"}},[t._v("家校共育数智化"),n("br"),t._v("构建融合新生态")]),n("v-uni-view",{staticStyle:{"margin-top":"0.24rem","font-size":"0.14rem","font-family":"Microsoft YaHei-Regular, Microsoft YaHei","font-weight":"400",color:"#FFFFFF"}},[t._v("以科技赋能，实现家校共育的个性化、互动式、精准化，为老师增效，为学生减负，"),n("br"),t._v("并为学校的教育提供数据决策。")])],1)],1)],1),n("v-uni-view",{staticClass:"flex align-center justify-center",staticStyle:{height:"0.94rem",background:"#FFFFFF"}},[n("v-uni-view",{staticStyle:{"font-size":"0.14rem",color:"#000","text-align":"center"}},[n("v-uni-view",{},[t._v("福建开放大学"),n("v-uni-text",{staticStyle:{"margin-left":"0.2rem",cursor:"pointer","text-decoration":"underline"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBeian.apply(void 0,arguments)}}},[t._v("闽ICP备2022006361号-1")])],1)],1)],1)],1)},a=[]},da64:function(t,e,n){t.exports=n.p+"static/img/nav_logo.e021df00.png"},e038:function(t,e,n){"use strict";n.r(e);var i=n("cb52"),o=n("40ba");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r,c=n("f0c5"),u=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"41bc934a",null,!1,i["a"],r);e["default"]=u.exports},e42d:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"navigation-bar-container flex align-center justify-center"},[i("v-uni-view",{staticClass:"bar-container flex align-center flex-shrink justify-between"},[i("v-uni-view",{staticClass:"flex align-center"},[i("v-uni-image",{staticClass:"nav-logo",attrs:{src:n("da64"),mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.menuClick(t.menus[0])}}}),i("v-uni-view",{staticClass:"logo-name"},[t._v("莆田市学校家庭教育一站式服务数智化平台")])],1),i("v-uni-view",{staticClass:"menu-container flex align-center"},t._l(t.menus,(function(e,n){return i("v-uni-view",{key:n,staticClass:"menu-item",class:{active:t.menuRel[e.name].includes(t.path)},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.menuClick(e)}}},[t._v(t._s(e.name))])})),1)],1)],1)},a=[]},fc03:function(t,e,n){var i=n("fccd");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("53b04de6",i,!0,{sourceMap:!1,shadowMode:!1})},fccd:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'.menu[data-v-681ce43e]:hover{color:#333}.product-center[data-v-681ce43e]{position:relative;margin-right:.8rem}.product-item[data-v-681ce43e]{font-size:.24rem;color:#999;cursor:pointer}.product-item[data-v-681ce43e]:hover{color:#ec3a39;font-weight:700}.product-list[data-v-681ce43e]{width:3.4rem;font-size:.24rem;line-height:2;position:absolute;bottom:0;left:0;-webkit-transform:translateY(100%);transform:translateY(100%);background:#fff;color:#999;z-index:10;overflow:hidden;transition:all .3s ease}.navigation-bar-container[data-v-681ce43e]{height:1rem;background:#fff;border-bottom:1px solid #efefef;width:100%;position:-webkit-sticky;position:sticky;top:0;left:0;z-index:10}.bar-container[data-v-681ce43e]{width:14.4rem;height:1rem}.nav-logo[data-v-681ce43e]{cursor:pointer;width:.56rem;height:auto}.logo-name[data-v-681ce43e]{margin-left:.15rem;font-size:.2rem;color:#333}.menu-item[data-v-681ce43e]{font-size:.2rem;color:#333;margin-left:.72rem;cursor:pointer}.menu-item[data-v-681ce43e]:hover{color:#333;font-weight:700}.menu-item.active[data-v-681ce43e]{color:#333;font-weight:700;position:relative}.menu-item.active[data-v-681ce43e]::after{position:absolute;content:"";width:100%;height:.04rem;background:#f14343;bottom:-.38rem;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}',""]),t.exports=e}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"013c":function(t,e,i){"use strict";i("c975"),i("a9e3"),i("acd8"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},r={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,e=getCurrentPages()[0];this.$pageVm=e.$vm||e,uni.onWindowResize((function(e){t.$emit("resize",e)})),this.$pageVm.$on("hook:onPageScroll",(function(e){t.$emit("scroll",e)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,e){t.setStyle({pullToRefresh:{support:e,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,e=String(this.scrollTop);if(-1!==e.indexOf("rpx")&&(e=uni.upx2px(e.replace("rpx",""))),e=parseFloat(e),!isNaN(e)){var i=function i(r){r.scrollTop===e&&(t.$pageVm.$off("hook:onPageScroll",i),t.$emit("scrolldone",n))};uni.pageScrollTo({scrollTop:e,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",i)}})}}}};e.default=r},"0ed8":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"BackTop",data:function(){return{}},computed:{topShow:function(){return this.$store.state.menu.topShow}},methods:{goTop:function(){uni.pageScrollTo({scrollTop:0,duration:100})}}};e.default=n},"159d":function(t,e,i){var n=i("8ad8");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("40cea934",n,!0,{sourceMap:!1,shadowMode:!1})},"227d":function(t,e,i){t.exports=i.p+"static/img/ico-to-top.5108b9f3.png"},"2d4d":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticStyle:{width:"100%",height:"3.94rem",background:"#DA4036",position:"relative"}},[i("v-uni-view",{staticStyle:{position:"absolute","font-size":"1.27rem","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold",color:"#FFFFFF22",top:"1rem",left:"50%",transform:"translateX(-50%)","line-height":"0px"}},[t._v("CORE VALUES")]),i("v-uni-view",{staticClass:"flex align-center justify-center",staticStyle:{position:"absolute",width:"100%",height:"100%"}},[i("v-uni-view",{staticStyle:{"text-align":"center","padding-top":"0.4rem"}},[i("v-uni-view",{staticStyle:{"font-size":"0.48rem","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold",color:"#FFFFFF"}},[t._v("家校共育数智化"),i("br"),t._v("构建融合新生态")]),i("v-uni-view",{staticStyle:{"margin-top":"0.24rem","font-size":"0.14rem","font-family":"Microsoft YaHei-Regular, Microsoft YaHei","font-weight":"400",color:"#FFFFFF"}},[t._v("以科技赋能，实现家校共育的个性化、互动式、精准化，为老师增效，为学生减负，"),i("br"),t._v("并为学校的教育提供数据决策。")])],1)],1)],1),i("v-uni-view",{staticClass:"flex align-center justify-center",staticStyle:{height:"0.94rem",background:"#FFFFFF"}},[i("v-uni-view",{staticStyle:{"font-size":"0.14rem",color:"#000","text-align":"center"}},[i("v-uni-view",{},[t._v("福建亲师友科技有限公司"),i("v-uni-text",{staticStyle:{"margin-left":"0.2rem",cursor:"pointer","text-decoration":"underline"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBeian.apply(void 0,arguments)}}},[t._v("闽ICP备2022006361号-1")])],1),i("v-uni-view",{staticStyle:{"margin-top":"0.16rem"}},[t._v("亲师友提供技术支持")])],1)],1)],1)},a=[]},"2d75":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{display:"none"}},[t._t("default")],2)},a=[]},"3a27":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.topShow,expression:"topShow"}],staticClass:"flex align-center justify-center ",staticStyle:{position:"fixed",bottom:"1rem",right:"0.5rem",width:"0.8rem",height:"0.8rem",background:"#F65B5A","border-radius":"0.1rem",cursor:"pointer","box-shadow":"0upx 10upx 20upx 0upx rgba(185, 61, 50, 1.0)"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goTop.apply(void 0,arguments)}}},[n("v-uni-image",{staticStyle:{width:"0.5rem",height:"0.5rem"},attrs:{src:i("227d"),mode:""}})],1)},a=[]},"3d60":function(t,e,i){"use strict";var n=i("159d"),r=i.n(n);r.a},"3fb1":function(t,e,i){t.exports=i.p+"static/img/platform-2.36027ee1.png"},"40ba":function(t,e,i){"use strict";i.r(e);var n=i("69fe"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"43a3":function(t,e,i){"use strict";i.r(e);var n=i("3a27"),r=i("468e");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"c6870492",null,!1,n["a"],o);e["default"]=c.exports},"468e":function(t,e,i){"use strict";i.r(e);var n=i("0ed8"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"69a5":function(t,e,i){t.exports=i.p+"static/img/platform-1.ca1297c3.png"},"69fe":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"Footer",data:function(){return{}},computed:{},methods:{goBeian:function(){window.open("https://beian.miit.gov.cn/","_blank")}}};e.default=n},"6b66":function(t,e,i){"use strict";i.r(e);var n=i("6d77"),r=i("7c7f");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("3d60");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"a01c7f24",null,!1,n["a"],o);e["default"]=c.exports},"6d42":function(t,e,i){"use strict";i.r(e);var n=i("2d75"),r=i("8f28");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=c.exports},"6d77":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={pageMeta:i("6d42").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{},[n("page-meta",{attrs:{"root-font-size":t.customerFontSize}}),n("NavigationBar"),n("v-uni-view",{staticStyle:{height:"6.69rem",position:"relative",background:"linear-gradient(180deg, #FFFFFF 0%, #FFF7F7 0%, #FFFFFF 100%)"}},[n("v-uni-swiper",{staticStyle:{height:"6.69rem"},attrs:{current:t.swiperIndex,"indicator-dots":!1,circular:!0,autoplay:!0,interval:3e3,duration:1e3},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},[n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"flex align-center justify-between",staticStyle:{height:"6.69rem",width:"14.4rem",margin:"0 auto"}},[n("v-uni-view",{},[n("v-uni-view",{staticStyle:{"font-size":"0.55rem","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold",color:"#333333","line-height":"0.77rem"}},[t._v("莆田市学校家庭教育"),n("br"),t._v("一站式服务数智化平台")]),n("v-uni-view",{staticClass:"flex align-center",staticStyle:{"margin-top":"0.55rem"}},[n("v-uni-view",{staticStyle:{"font-size":"0.2rem",color:"#F14141"}},[t._v("更落地、更系统、更智能、更有效")]),n("v-uni-view",{staticStyle:{width:"1.11rem",height:"0.03rem","margin-left":"0.14rem",background:"linear-gradient(90deg, #F14141 0%, #FFFFFF 100%)","border-radius":"1rem"}})],1)],1),n("v-uni-image",{staticStyle:{width:"7.87rem",height:"6.6rem","margin-right":"-1.26rem"},attrs:{src:i("c55d"),mode:""}})],1)],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"flex align-center justify-between",staticStyle:{height:"6.69rem",width:"14.4rem",margin:"0 auto"}},[n("v-uni-view",{},[n("v-uni-view",{staticStyle:{"font-size":"0.55rem","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold",color:"#333333","line-height":"0.77rem"}},[t._v("专注家庭教育数智化平台"),n("br"),t._v("构建家校社合力育人新生态")]),n("v-uni-view",{staticStyle:{"margin-top":"1.16rem"}},[n("v-uni-view",{staticStyle:{width:"0.34rem",height:"0.04rem",background:"#F14444","border-radius":"0.06rem"}}),n("v-uni-view",{staticStyle:{"font-size":"0.16rem",color:"#999999","margin-top":"0.35rem"}},[t._v("践行”十四五”教育规划，依据"),n("br"),t._v("《中华人民共和国家庭教育促进法》"),n("br"),t._v("《全国家庭教育指导大纲》（修订版）"),n("br"),t._v("《教育部关于加强家庭教育工作的指导意见》等建设")])],1)],1),n("v-uni-image",{staticStyle:{width:"5.33rem",height:"6.33rem"},attrs:{src:i("7735"),mode:""}})],1)],1)],1),n("v-uni-view",{staticClass:"flex align-center",staticStyle:{position:"absolute",left:"50%",bottom:"0.75rem",transform:"translateX(-50%)"}},[n("v-uni-view",{staticStyle:{transition:"all 0.3s ease"},style:0==t.swiperIndex?"width: 0.84rem;\n\t\t\t\theight: 0.12rem;\n\t\t\t\tbackground: #F14444;\n\t\t\t\tborder-radius: 0.06rem;":"width: 0.12rem;\n\t\t\t\theight: 0.12rem;border-radius: 0.06rem;\n\t\t\t\tbackground: #C9CFE1;"}),n("v-uni-view",{staticStyle:{transition:"all 0.3s ease"},style:1==t.swiperIndex?"width: 0.84rem;\n\t\t\t\theight: 0.12rem;margin-left:0.12rem;\n\t\t\t\tbackground: #F14444;\n\t\t\t\tborder-radius: 0.06rem;":"width: 0.12rem;margin-left:0.12rem;\n\t\t\t\theight: 0.12rem;border-radius: 0.06rem;\n\t\t\t\tbackground: #C9CFE1;"})],1)],1),n("v-uni-view",{staticStyle:{"padding-top":"0.32rem",background:"#F7F7F7","padding-bottom":"1.2rem"}},[n("v-uni-view",{staticStyle:{"text-align":"center","font-size":"0.6rem","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold",color:"#333333"}},[t._v("一站式数智化平台")]),n("v-uni-view",{staticClass:"flex align-center justify-center",staticStyle:{"margin-top":"0.4rem"}},[n("v-uni-view",{staticClass:"flex align-center"},[n("v-uni-view",{staticStyle:{width:"1.52rem",height:"0.04rem",background:"linear-gradient(270deg, #F14141 0%, #FFFFFF 100%)","border-radius":"1rem"}}),n("v-uni-view",{staticStyle:{margin:"0 0.16rem","font-size":"0.24rem",color:"#333333"}},[t._v("管理平台")]),n("v-uni-view",{staticStyle:{width:"1.52rem",height:"0.04rem",background:"linear-gradient(270deg, #FFFFFF 0%, #F14141 100%)","border-radius":"1rem"}})],1)],1),n("v-uni-view",{staticClass:"flex align-center justify-between",staticStyle:{margin:"0.32rem auto 0 auto",width:"14.4rem"}},[n("v-uni-view",{staticClass:"flex align-center",staticStyle:{width:"8.8rem",height:"4.7rem",background:"#FFFFFF","border-radius":"0.4rem 0px 0px 0.4rem"}},[n("v-uni-view",{staticStyle:{"padding-left":"0.56rem","padding-right":"0.8rem"}},[n("v-uni-view",{staticStyle:{"font-size":"0.32rem","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold",color:"#4E5969"}},[t._v("市区级管理(电脑端)")]),n("v-uni-view",{staticStyle:{"margin-top":"0.32rem","font-size":"0.2rem","font-family":"Microsoft YaHei-Regular, Microsoft YaHei","font-weight":"400",color:"#999999","line-height":"0.48rem"}},[t._v("由地区教育局家长学校管理人员使用。数据化了解地区所有家长学校运行状况，通过各项指标实时反应各学校的家长学习参与度，实时体现家长反馈意见，指导各学校家长学校的实施开展。")]),n("v-uni-view",{staticClass:"btn flex align-center justify-around",staticStyle:{"margin-top":"0.4rem"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jumpTo("http://gov.familyeducation.org.cn/login?domain=putian")}}},[n("v-uni-view",{},[t._v("点击进入")]),n("v-uni-image",{staticClass:"btn-arrow",staticStyle:{width:"0.3rem",height:"auto"},attrs:{src:i("8a62"),mode:"widthFix"}})],1)],1)],1),n("v-uni-image",{staticStyle:{width:"5.6rem",height:"auto"},attrs:{src:i("69a5"),mode:"widthFix"}})],1),n("v-uni-view",{staticClass:"flex align-center justify-between",staticStyle:{margin:"0.8rem auto 0 auto",width:"14.4rem"}},[n("v-uni-image",{staticStyle:{width:"5.6rem",height:"auto"},attrs:{src:i("3fb1"),mode:"widthFix"}}),n("v-uni-view",{staticClass:"flex align-center",staticStyle:{width:"8.8rem",height:"4.7rem",background:"#FFFFFF","border-radius":"0rem 0.4rem 0.4rem 0rem"}},[n("v-uni-view",{staticStyle:{"padding-left":"0.56rem","padding-right":"0.8rem"}},[n("v-uni-view",{staticStyle:{"font-size":"0.32rem","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold",color:"#4E5969"}},[t._v("市区级管理(手机端)")]),n("v-uni-view",{staticStyle:{"margin-top":"0.32rem","font-size":"0.2rem","font-family":"Microsoft YaHei-Regular, Microsoft YaHei","font-weight":"400",color:"#999999","line-height":"0.48rem"}},[t._v("由地区教育局家长学校管理人员使用。手机版拥有讲师端、管理员端和单位管理端。登录后可管理各学校和家庭教育导师。实时查看了解线上线下课程的举办质量，并形成数据汇总同步。")]),n("v-uni-view",{staticClass:"btn flex align-center justify-around",staticStyle:{"margin-top":"0.4rem"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$goUrl("/pages/h5_end/h5_end")}}},[n("v-uni-view",{},[t._v("点击进入")]),n("v-uni-image",{staticClass:"btn-arrow",staticStyle:{width:"0.3rem",height:"auto"},attrs:{src:i("8a62"),mode:"widthFix"}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"flex align-center justify-between",staticStyle:{margin:"0.8rem auto 0 auto",width:"14.4rem"}},[n("v-uni-view",{staticClass:"flex align-center",staticStyle:{width:"8.8rem",height:"4.7rem",background:"#FFFFFF","border-radius":"0.4rem 0px 0px 0.4rem"}},[n("v-uni-view",{staticStyle:{"padding-left":"0.56rem","padding-right":"0.8rem"}},[n("v-uni-view",{staticStyle:{"font-size":"0.32rem","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold",color:"#4E5969"}},[t._v("数据大屏")]),n("v-uni-view",{staticStyle:{"margin-top":"0.32rem","font-size":"0.2rem","font-family":"Microsoft YaHei-Regular, Microsoft YaHei","font-weight":"400",color:"#999999","line-height":"0.48rem"}},[t._v("面向全地区家庭教育工作者。全区数据实时动态同步，实时了解各学校家长学校实施成果，分析并了解家长重点关注学习习主题、参与的家庭结构、家长画像分析等。")]),n("v-uni-view",{staticClass:"btn flex align-center justify-around",staticStyle:{"margin-top":"0.4rem"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jumpTo("http://school.familyeducation.org.cn/putianscreen/")}}},[n("v-uni-view",{},[t._v("点击进入")]),n("v-uni-image",{staticClass:"btn-arrow",staticStyle:{width:"0.3rem",height:"auto"},attrs:{src:i("8a62"),mode:"widthFix"}})],1)],1)],1),n("v-uni-image",{staticStyle:{width:"5.6rem",height:"auto"},attrs:{src:i("d3df"),mode:"widthFix"}})],1),n("v-uni-view",{staticClass:"flex align-center justify-center",staticStyle:{"margin-top":"0.8rem"}},[n("v-uni-view",{staticClass:"flex align-center"},[n("v-uni-view",{staticStyle:{width:"1.52rem",height:"0.04rem",background:"linear-gradient(270deg, #F14141 0%, #FFFFFF 100%)","border-radius":"1rem"}}),n("v-uni-view",{staticStyle:{margin:"0 0.16rem","font-size":"0.24rem",color:"#333333"}},[t._v("家长云校")]),n("v-uni-view",{staticStyle:{width:"1.52rem",height:"0.04rem",background:"linear-gradient(270deg, #FFFFFF 0%, #F14141 100%)","border-radius":"1rem"}})],1)],1),n("v-uni-view",{staticClass:"flex align-center justify-between",staticStyle:{margin:"0.32rem auto 0 auto",width:"14.4rem"}},[n("v-uni-image",{staticStyle:{width:"5.6rem",height:"auto"},attrs:{src:i("743e"),mode:"widthFix"}}),n("v-uni-view",{staticClass:"flex align-center",staticStyle:{width:"8.8rem",height:"4.7rem",background:"#FFFFFF","border-radius":"0rem 0.4rem 0.4rem 0rem"}},[n("v-uni-view",{staticStyle:{"padding-left":"0.56rem","padding-right":"0.8rem"}},[n("v-uni-view",{staticStyle:{"font-size":"0.32rem","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold",color:"#4E5969"}},[t._v("学校端")]),n("v-uni-view",{staticStyle:{"margin-top":"0.32rem","font-size":"0.2rem","font-family":"Microsoft YaHei-Regular, Microsoft YaHei","font-weight":"400",color:"#999999","line-height":"0.48rem"}},[t._v("由各学校校长、德育处负责人使用。数据化了解全校各年级、各班级的家长学校运行状况，通过各项指标实时反应各班级的家长学习参与度，实时体现家长反馈意见，指导学校家长学校的实施开展。")]),n("v-uni-view",{staticClass:"btn flex align-center justify-around",staticStyle:{"margin-top":"0.4rem"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jumpTo("https://school.familyeducation.org.cn/admin/login?domain=putian")}}},[n("v-uni-view",{},[t._v("点击进入")]),n("v-uni-image",{staticClass:"btn-arrow",staticStyle:{width:"0.3rem",height:"auto"},attrs:{src:i("8a62"),mode:"widthFix"}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"flex align-center justify-between",staticStyle:{margin:"0.8rem auto 0 auto",width:"14.4rem"}},[n("v-uni-view",{staticClass:"flex align-center",staticStyle:{width:"8.8rem",height:"4.7rem",background:"#FFFFFF","border-radius":"0.4rem 0px 0px 0.4rem"}},[n("v-uni-view",{staticStyle:{"padding-left":"0.56rem","padding-right":"0.8rem"}},[n("v-uni-view",{staticStyle:{"font-size":"0.32rem","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold",color:"#4E5969"}},[t._v("教师端")]),n("v-uni-view",{staticStyle:{"margin-top":"0.32rem","font-size":"0.2rem","font-family":"Microsoft YaHei-Regular, Microsoft YaHei","font-weight":"400",color:"#999999","line-height":"0.48rem"}},[t._v("由各班班主任、家委使用。班主任能实时了解本班级的家长学习情况，并通过调动家委成员，实时推送提醒，保证班级家长的学习效果和学习覆盖率。")]),n("v-uni-view",{staticClass:"btn flex align-center justify-around",staticStyle:{"margin-top":"0.4rem"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$goUrl("/pages/teacher_end/teacher_end")}}},[n("v-uni-view",{},[t._v("查看详情")]),n("v-uni-image",{staticClass:"btn-arrow",staticStyle:{width:"0.3rem",height:"auto"},attrs:{src:i("8a62"),mode:"widthFix"}})],1)],1)],1),n("v-uni-image",{staticStyle:{width:"5.6rem",height:"auto"},attrs:{src:i("b15c"),mode:"widthFix"}})],1),n("v-uni-view",{staticClass:"flex align-center justify-between",staticStyle:{margin:"0.8rem auto 0 auto",width:"14.4rem"}},[n("v-uni-image",{staticStyle:{width:"5.6rem",height:"auto"},attrs:{src:i("9f9d"),mode:"widthFix"}}),n("v-uni-view",{staticClass:"flex align-center",staticStyle:{width:"8.8rem",height:"4.7rem",background:"#FFFFFF","border-radius":"0rem 0.4rem 0.4rem 0rem"}},[n("v-uni-view",{staticStyle:{"padding-left":"0.56rem","padding-right":"0.8rem"}},[n("v-uni-view",{staticStyle:{"font-size":"0.32rem","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold",color:"#4E5969"}},[t._v("家长端")]),n("v-uni-view",{staticStyle:{"margin-top":"0.32rem","font-size":"0.2rem","font-family":"Microsoft YaHei-Regular, Microsoft YaHei","font-weight":"400",color:"#999999","line-height":"0.48rem"}},[t._v("面向学生家长。每日一学、每周一做、每月一课的“三一模式”精准有效，根据儿童发展规律推荐内容，让不同年级的家长、不同家庭成员都有定制化的家长学校学习内容。普及家庭教育正确理念和科学方法；懂科学、懂孩子，在对的时间做对的事。")]),n("v-uni-view",{staticClass:"btn flex align-center justify-around",staticStyle:{"margin-top":"0.4rem"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$goUrl("/pages/elder_end/elder_end")}}},[n("v-uni-view",{},[t._v("查看详情")]),n("v-uni-image",{staticClass:"btn-arrow",staticStyle:{width:"0.3rem",height:"auto"},attrs:{src:i("8a62"),mode:"widthFix"}})],1)],1)],1)],1)],1),n("v-uni-view",{staticStyle:{"padding-top":"0.8rem","padding-bottom":"0.6rem",background:"#FFFFFF"}},[n("v-uni-view",{staticClass:"flex align-center justify-between",staticStyle:{width:"14.4rem",margin:"0 auto"}},[n("v-uni-view",[n("v-uni-view",{staticClass:"flex align-center"},[n("v-uni-view",{staticStyle:{width:"0.06rem",height:"0.16rem",background:"#F14444","border-radius":"0.03rem"}}),n("v-uni-view",{staticStyle:{"margin-left":"0.1rem","font-size":"0.18rem","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold",color:"#333333"}},[t._v("最新活动")])],1),n("v-uni-view",{staticStyle:{"margin-top":"0.1rem",width:"6.84rem",height:"4.48rem","border-radius":"0.04rem",overflow:"hidden",position:"relative",cursor:"pointer"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$goUrl("/pages/news_detail/news_detail")}}},[n("v-uni-image",{staticStyle:{width:"6.84rem",height:"4.48rem"},attrs:{src:i("c55d"),mode:"aspectFill"}}),n("v-uni-view",{staticClass:"flex align-center",staticStyle:{width:"100%",height:"72px",position:"absolute",bottom:"0",left:"0",background:"#00000099"}},[n("v-uni-view",{staticStyle:{padding:"0 0.16rem","font-size":"0.18rem",color:"#fff"}},[t._v("2022年度莆田市学校家庭教育骨干教师培训班（三期）圆满结束")])],1)],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"flex align-center"},[n("v-uni-view",{staticStyle:{width:"0.06rem",height:"0.16rem",background:"#F14444","border-radius":"0.03rem"}}),n("v-uni-view",{staticStyle:{"margin-left":"0.1rem","font-size":"0.18rem","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold",color:"#333333"}},[t._v("最新资讯")])],1),n("v-uni-view",{staticStyle:{border:"1px solid #EEEEEE","margin-top":"0.1rem",width:"7.08rem",height:"4.48rem","border-radius":"0.04rem",overflow:"hidden",position:"relative"}},[n("v-uni-view",{staticClass:"flex align-center",staticStyle:{cursor:"pointer",margin:"0 0.16rem",height:"1.12rem","border-bottom":"1px solid #eeeeee"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$goUrl("/pages/news_detail/news_detail")}}},[n("v-uni-view",{},[n("v-uni-view",{staticStyle:{"font-size":"0.18rem","font-family":"Microsoft YaHei-Regular, Microsoft YaHei","font-weight":"400",color:"#333333"}},[t._v("【深入学习宣传贯彻党的二十大精神】涵江区总工会开展职工家庭文化教育系列活动")]),n("v-uni-view",{staticStyle:{"font-size":"0.12rem","margin-top":"0.08rem","font-family":"Microsoft YaHei-Regular, Microsoft YaHei","font-weight":"400",color:"#999999","text-overflow":"ellipsis",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"2",overflow:"hidden"}},[t._v("为深入学习宣传贯彻落实党的二十大精神和习近平总书记关于注重家庭家教家风建设的重要论述，推进家庭家教家风建设，12月9日下午，涵江区总工会在莆田移动涵江分公司开展党的二十大精神宣传宣讲暨“弘扬好家风·建设好家庭”职工家庭文化教育活")])],1)],1),n("v-uni-view",{staticClass:"flex align-center",staticStyle:{cursor:"pointer",margin:"0 0.16rem",height:"1.12rem","border-bottom":"1px solid #eeeeee"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$goUrl("/pages/news_detail/news_detail")}}},[n("v-uni-view",{},[n("v-uni-view",{staticStyle:{"font-size":"0.18rem","font-family":"Microsoft YaHei-Regular, Microsoft YaHei","font-weight":"400",color:"#333333"}},[t._v("2022年莆田市学校家庭教育骨干教师首期培训班圆满结束")]),n("v-uni-view",{staticStyle:{"font-size":"0.12rem","margin-top":"0.08rem","font-family":"Microsoft YaHei-Regular, Microsoft YaHei","font-weight":"400",color:"#999999","text-overflow":"ellipsis",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"2",overflow:"hidden"}},[t._v("深入学习贯彻党的二十大精神，宣传贯彻《中华人民共和国家庭教育促进法》和《福建省家庭教育促进条例》，打造一支高素质、高水平的家庭教育骨干教师队伍，2022年11月21日，由莆田市教育局主办、莆田开放大学承办、福建开放大学协办的莆田")])],1)],1),n("v-uni-view",{staticClass:"flex align-center",staticStyle:{cursor:"pointer",margin:"0 0.16rem",height:"1.12rem","border-bottom":"1px solid #eeeeee"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$goUrl("/pages/news_detail/news_detail")}}},[n("v-uni-view",{},[n("v-uni-view",{staticStyle:{"font-size":"0.18rem","font-family":"Microsoft YaHei-Regular, Microsoft YaHei","font-weight":"400",color:"#333333"}},[t._v("高位推动 聚智汇力︱莆田市召开家庭教育工作联席会议")]),n("v-uni-view",{staticStyle:{"font-size":"0.12rem","margin-top":"0.08rem","font-family":"Microsoft YaHei-Regular, Microsoft YaHei","font-weight":"400",color:"#999999","text-overflow":"ellipsis",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"2",overflow:"hidden"}},[t._v("11月22日上午，莆田市召开家庭教育工作联席会议，贯彻落实党的二十大精神和习近平总书记关于注重家庭家教家风建设的重要论述，推动《中华人民共和国家庭教育促进法》和《福建省家庭教育促进条例》在我市深入实施，做好新时代家庭工作，以优")])],1)],1),n("v-uni-view",{staticClass:"flex align-center",staticStyle:{cursor:"pointer",margin:"0 0.16rem",height:"1.12rem"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$goUrl("/pages/news_detail/news_detail")}}},[n("v-uni-view",{},[n("v-uni-view",{staticStyle:{"font-size":"0.18rem","font-family":"Microsoft YaHei-Regular, Microsoft YaHei","font-weight":"400",color:"#333333"}},[t._v("注重家庭教育 弘扬优良家风——莆田市政协开展家庭教育专题协商")]),n("v-uni-view",{staticStyle:{"font-size":"0.12rem","margin-top":"0.08rem","font-family":"Microsoft YaHei-Regular, Microsoft YaHei","font-weight":"400",color:"#999999","text-overflow":"ellipsis",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"2",overflow:"hidden"}},[t._v("“天下之本在国，国之本在家”。9月21日，在莆田市政协“注重家庭教育，弘扬优良家风”专题协商会上，政协委员、专家学者、部门领导、家长代表等共商“家事”、共谋“国事”。")])],1)],1)],1)],1)],1)],1),n("Footer")],1)],1)},a=[]},"743e":function(t,e,i){t.exports=i.p+"static/img/platform-6.e197cb52.png"},7735:function(t,e,i){t.exports=i.p+"static/img/banner-2.74df83ea.png"},"79d5":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"NavigationBar",data:function(){return{menuRel:{"首页":["/","/pages/index/index","/pages/teacher_end/teacher_end","/pages/elder_end/elder_end"],"资讯":["/pages/news/news","/pages/news_detail/news_detail"],"学习计划":["/pages/study_plan/study_plan"],"家长反馈":["/pages/elder_feedback/elder_feedback"],"成果展示":["/pages/show/show"]},menus:[{path:"/",name:"首页"},{path:"/pages/news/news",name:"资讯"},{path:"/pages/study_plan/study_plan",name:"学习计划"},{path:"/pages/elder_feedback/elder_feedback",name:"家长反馈"},{path:"http://school.familyeducation.org.cn/putianscreen/",name:"成果展示"}]}},computed:{path:function(){return this.$route.path}},methods:{menuClick:function(t){t.path!=this.$route.path&&("成果展示"==t.name?window.location.href=t.path:this.$router.push(t.path))}}};e.default=n},"7a76":function(t,e,i){"use strict";var n=i("fc03"),r=i.n(n);r.a},"7c7f":function(t,e,i){"use strict";i.r(e);var n=i("eec2"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"7f96":function(t,e,i){"use strict";i.r(e);var n=i("e42d"),r=i("c99b");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("7a76");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"681ce43e",null,!1,n["a"],o);e["default"]=c.exports},"8a62":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAPCAMAAADEZI+uAAAAAXNSR0IArs4c6QAAAE5QTFRFAAAAz0Aw1UA110Aw3kE02UAz3EE02UAz2EA12kEz2kE02EA02UA020A120A22kA120A12UA12kA12kA12UA12UA12kA12UA22UA22kA21lccyAAAABl0Uk5TABAYICcoOzxIS1NUWFt/j4+3z9fn6+vz+0EjqE0AAABUSURBVBgZfcFJEoAgDADBEUHcN6LE/3/UKs8m3fzbFhxN0RFHKDrgCFI7HElqhyPdV4TVdDwSeTwnrWlRSZjiJQlTlJoxBakZUyjaY2qKTjj2mc8Lx8AHa1VBeYkAAAAASUVORK5CYII="},"8ad8":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".btn[data-v-a01c7f24]{width:2rem;height:.64rem;background:#fff;border-radius:.08rem;border:1px solid #da4036;font-size:.24rem;color:#da4036;cursor:pointer;transition:all .3s ease}.btn[data-v-a01c7f24]:hover{background:#da4036;color:#fff}.btn:hover .btn-arrow[data-v-a01c7f24]{content:url(/static/btn-arrow-white.png)}",""]),t.exports=e},"8f28":function(t,e,i){"use strict";i.r(e);var n=i("013c"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"9f9d":function(t,e,i){t.exports=i.p+"static/img/platform-5.2947c913.png"},b15c:function(t,e,i){t.exports=i.p+"static/img/platform-4.817c147e.png"},c55d:function(t,e,i){t.exports=i.p+"static/img/banner-1.91f9f986.png"},c99b:function(t,e,i){"use strict";i.r(e);var n=i("79d5"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},d3df:function(t,e,i){t.exports=i.p+"static/img/platform-3.54dcaa1b.png"},da64:function(t,e,i){t.exports=i.p+"static/img/nav_logo.e021df00.png"},e038:function(t,e,i){"use strict";i.r(e);var n=i("2d4d"),r=i("40ba");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"3410786a",null,!1,n["a"],o);e["default"]=c.exports},e42d:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"navigation-bar-container flex align-center justify-center"},[n("v-uni-view",{staticClass:"bar-container flex align-center flex-shrink justify-between"},[n("v-uni-view",{staticClass:"flex align-center"},[n("v-uni-image",{staticClass:"nav-logo",attrs:{src:i("da64"),mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.menuClick(t.menus[0])}}}),n("v-uni-view",{staticClass:"logo-name"},[t._v("莆田市学校家庭教育一站式服务数智化平台")])],1),n("v-uni-view",{staticClass:"menu-container flex align-center"},t._l(t.menus,(function(e,i){return n("v-uni-view",{key:i,staticClass:"menu-item",class:{active:t.menuRel[e.name].includes(t.path)},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.menuClick(e)}}},[t._v(t._s(e.name))])})),1)],1)],1)},a=[]},eec2:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("43a3")),a=n(i("7f96")),o=n(i("e038")),s={components:{NavigationBar:a.default,Footer:o.default,BackTop:r.default},computed:{menuRef:function(){return this.$store.state.menu.menuRef}},watch:{menuRef:function(t){t&&(this.goProduct(t),this.$store.commit("menu/setMenuRef",null))}},data:function(){return{swiperIndex:0}},onLoad:function(){},onShow:function(){var t=this;this.$nextTick((function(){t.menuRef&&(t.goProduct(t.menuRef),t.$store.commit("menu/setMenuRef",null))}))},methods:{swiperChange:function(t){this.swiperIndex=t.detail.current},goProduct:function(t){uni.pageScrollTo({scrollTop:this.$refs[t].$el.offsetTop,duration:100})},jumpTo:function(t){window.location.href=t}}};e.default=s},fc03:function(t,e,i){var n=i("fccd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("53b04de6",n,!0,{sourceMap:!1,shadowMode:!1})},fccd:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.menu[data-v-681ce43e]:hover{color:#333}.product-center[data-v-681ce43e]{position:relative;margin-right:.8rem}.product-item[data-v-681ce43e]{font-size:.24rem;color:#999;cursor:pointer}.product-item[data-v-681ce43e]:hover{color:#ec3a39;font-weight:700}.product-list[data-v-681ce43e]{width:3.4rem;font-size:.24rem;line-height:2;position:absolute;bottom:0;left:0;-webkit-transform:translateY(100%);transform:translateY(100%);background:#fff;color:#999;z-index:10;overflow:hidden;transition:all .3s ease}.navigation-bar-container[data-v-681ce43e]{height:1rem;background:#fff;border-bottom:1px solid #efefef;width:100%;position:-webkit-sticky;position:sticky;top:0;left:0;z-index:10}.bar-container[data-v-681ce43e]{width:14.4rem;height:1rem}.nav-logo[data-v-681ce43e]{cursor:pointer;width:.56rem;height:auto}.logo-name[data-v-681ce43e]{margin-left:.15rem;font-size:.2rem;color:#333}.menu-item[data-v-681ce43e]{font-size:.2rem;color:#333;margin-left:.72rem;cursor:pointer}.menu-item[data-v-681ce43e]:hover{color:#333;font-weight:700}.menu-item.active[data-v-681ce43e]{color:#333;font-weight:700;position:relative}.menu-item.active[data-v-681ce43e]::after{position:absolute;content:"";width:100%;height:.04rem;background:#f14343;bottom:-.38rem;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}',""]),t.exports=e}}]);
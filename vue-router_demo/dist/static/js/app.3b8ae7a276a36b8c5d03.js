webpackJsonp([0],{"+708":function(e,t,n){"use strict";var i={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var e=this;n("JAHf"),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},methods:{initParticleJS:function(e,t,n,i,a,r,s,c,l,o,u,p,d,v,h){particlesJS("particles-js",{particles:{number:{value:n,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:i,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:a,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:c,distance:o,color:r,opacity:l,width:s},move:{enable:!0,speed:u,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:p,mode:d},onclick:{enable:v,mode:h},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},a={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},staticRenderFns:[]},r=n("VU/8")(i,a,!1,null,null,null);t.a=r.exports},"1Eo3":function(e,t){},"8eFx":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},r=n("VU/8")({name:"app"},a,!1,function(e){n("mA+C")},null,null).exports,s=n("/ocq"),c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"warp"},[n("div",{staticClass:"main"},[n("section",{staticClass:"nav-left"},[n("h2",[e._v("Vue")]),e._v(" "),n("hr"),e._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/nav1"}},[e._v("Nav1")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/nav2"}},[e._v("Nav2")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/nav3"}},[e._v("Nav3")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/nav4"}},[e._v("Nav4")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/nav5"}},[e._v("Nav5")])],1)]),e._v(" "),n("hr"),e._v(" "),e._m(0)]),e._v(" "),n("section",{staticClass:"show-main"},[n("transition",{attrs:{name:e.names}},[n("router-view",{staticClass:"center"})],1)],1),e._v(" "),e._m(1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("a",{attrs:{href:"javascript:;"}},[t("img",{attrs:{src:"static/img/wx.png"}})]),this._v(" "),t("a",{attrs:{href:"javascript:;"}},[t("img",{attrs:{src:"static/img/wb.png"}})]),this._v(" "),t("a",{attrs:{href:"javascript:;"}},[t("img",{attrs:{src:"static/img/xf.png"}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[this._v("© 2017 "),t("a",{attrs:{href:"https://wungjyan.github.io/",target:"_blank"}},[this._v("wungjyan")]),this._v(" 强力驱动")])}]},l=n("VU/8")({data:function(){return{names:"top"}},watch:{$route:function(e,t){e.meta.index>t.meta.index?this.names="top":this.names="bottom"}}},c,!1,function(e){n("1Eo3")},null,null).exports,o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"nav1-wrap"},[t("h2",[this._v("Nav1")])])}]},u=n("VU/8")({},o,!1,function(e){n("rGUL")},null,null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"nav2-wrap"},[t("h2",[this._v("Nav2")])])}]},d=n("VU/8")({},p,!1,function(e){n("sN1J")},null,null).exports,v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"nav3-wrap"},[t("h2",[this._v("Nav3")])])}]},h=n("VU/8")({},v,!1,function(e){n("kPwP")},null,null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"nav4-wrap"},[t("h2",[this._v("Nav4")])])}]},m=n("VU/8")({},f,!1,function(e){n("u6nr")},null,null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"nav5-wrap"},[t("h2",[this._v("Nav5")])])}]},y=n("VU/8")({},_,!1,function(e){n("8eFx")},null,null).exports;i.a.use(s.a);var b=new s.a({routes:[{path:"/",name:l,component:l,redirect:"/nav1",children:[{path:"nav1",name:u,component:u,meta:{index:0}},{path:"nav2",name:d,component:d,meta:{index:1}},{path:"nav3",name:h,component:h,meta:{index:2}},{path:"nav4",name:m,component:m,meta:{index:3}},{path:"nav5",name:y,component:y,meta:{index:4}}]}]}),k=n("mM94");n("qIvP");i.a.use(k.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:b,template:"<App/>",components:{App:r}})},kPwP:function(e,t){},"mA+C":function(e,t){},qIvP:function(e,t){},rGUL:function(e,t){},sN1J:function(e,t){},u6nr:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.3b8ae7a276a36b8c5d03.js.map
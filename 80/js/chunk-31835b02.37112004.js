(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31835b02"],{"36a7":function(t,e,i){},"3ba4":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},n=[],r=i("d4ec"),a=i("262e"),o=i("2caf"),c=i("9ab4"),l=i("2b0e"),h=i("2fe1"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",{staticClass:"text-center"},[s("v-col",{attrs:{cols:"12"}},[s("v-img",{staticClass:"my-3",attrs:{src:i("9b19"),contain:"",height:"200"}})],1),s("v-col",{staticClass:"mb-4"},[s("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),s("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),s("br"),t._v("please join our online "),s("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),s("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),s("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,i){return s("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),s("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),s("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,i){return s("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),s("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),s("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,i){return s("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},u=[],m=l["a"].extend({name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}}),f=m,v=i("2877"),p=i("6544"),g=i.n(p),b=i("62ad"),y=i("a523"),_=i("adda"),S=i("0fd9"),w=Object(v["a"])(f,d,u,!1,null,null,null),j=w.exports;g()(w,{VCol:b["a"],VContainer:y["a"],VImg:_["a"],VRow:S["a"]});var x=function(){var t=function(t){Object(a["a"])(i,t);var e=Object(o["a"])(i);function i(){return Object(r["a"])(this,i),e.apply(this,arguments)}return i}(l["a"]);return t=Object(c["a"])([Object(h["b"])({components:{HelloWorld:j}})],t),t}(),C=x,z=C,k=Object(v["a"])(z,s,n,!1,null,null,null);e["default"]=k.exports},"8efc":function(t,e,i){},"90a2":function(t,e,i){"use strict";i("7db0");var s=i("53ca");function n(t,e){var i=e.modifiers||{},n=e.value,a="object"===Object(s["a"])(n)?n:{handler:n,options:{}},o=a.handler,c=a.options,l=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments.length>1?arguments[1]:void 0;if(t._observe){if(o&&(!i.quiet||t._observe.init)){var n=Boolean(e.find((function(t){return t.isIntersecting})));o(e,s,n)}t._observe.init&&i.once?r(t):t._observe.init=!0}}),c);t._observe={init:!1,observer:l},l.observe(t)}function r(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var a={inserted:n,unbind:r};e["a"]=a},"9b19":function(t,e,i){t.exports=i.p+"img/logo.63a7d78d.svg"},adda:function(t,e,i){"use strict";i("a15b"),i("a9e3"),i("8efc");var s=i("90a2"),n=(i("36a7"),i("24b2")),r=i("58df"),a=Object(r["a"])(n["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=a,c=i("7560"),l=i("d9f7"),h=i("d9bd"),d="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(r["a"])(o,c["a"]).extend({name:"v-img",directives:{intersect:s["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!d||i||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(h["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var n=t.naturalHeight,r=t.naturalWidth;n||r?(e.naturalWidth=r,e.calculatedAspectRatio=r/n):null!=i&&setTimeout(s,i)};s()},genContent:function(){var t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=o.options.render.call(this,t),i=Object(l["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})}}]);
//# sourceMappingURL=chunk-31835b02.37112004.js.map
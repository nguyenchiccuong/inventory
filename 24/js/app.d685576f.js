(function(e){function t(t){for(var r,a,u=t[0],i=t[1],f=t[2],h=0,l=[];h<u.length;h++)a=u[h],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,f||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1d520727","chunk-15ddc74e":"54321d0f","chunk-2d0daf2f":"bf61484f","chunk-2d21a3d2":"6026d46b","chunk-48dbab82":"6e840e72","chunk-553c5f58":"fa7b60a8","chunk-b8ec4658":"f62d6aa2","chunk-f747807e":"ec7c38ec"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-15ddc74e":1,"chunk-48dbab82":1,"chunk-b8ec4658":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-15ddc74e":"f4687664","chunk-2d0daf2f":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-48dbab82":"8f278e73","chunk-553c5f58":"31d6cfe0","chunk-b8ec4658":"f4687664","chunk-f747807e":"31d6cfe0"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var f=c[u],h=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(h===r||h===o))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){f=l[u],h=f.getAttribute("data-href");if(h===r||h===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var s=document.getElementsByTagName("head")[0];s.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var f,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=u(e);var l=new Error;f=function(t){h.onerror=h.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var d=setTimeout((function(){f({type:"timeout",target:h})}),12e4);h.onerror=h.onload=f,document.head.appendChild(h)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/inventory/24/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],h=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var d=h;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("ce5b"),o=n.n(a),c=(n("da64"),n("c0a4")),u=n.n(c);r["default"].use(o.a,{iconfont:"md",theme:{primary:u.a.blue}});var i=n("59ca"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},h=[],l=n("d225"),d=n("308d"),s=n("6bb5"),b=n("4e2b"),p=n("9ab4"),m=n("60a3"),v=function(e){function t(){return Object(l["a"])(this,t),Object(d["a"])(this,Object(s["a"])(t).apply(this,arguments))}return Object(b["a"])(t,e),t}(r["default"]);v=Object(p["__decorate"])([Object(m["a"])({})],v);var g,y=v,k=y,j=(n("5c0b"),n("2877")),O=Object(j["a"])(k,f,h,!1,null,null,null),w=O.exports,_=n("8c4f"),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{"justify-center":"","align-center":"","fill-height":""}},[n("v-flex",{attrs:{"text-xs-center":"","text-md-left":"",lg2:"",md3:"",xs12:""}},[n("h2",{staticClass:"head"},[e._v("Neighbor to Neighbor")]),n("p",{staticClass:"subhead"},[e._v("Inventory")]),n("v-btn",{attrs:{color:"white"},on:{click:function(t){return e.checkUser()}}},[e._v("Sign in with Google")])],1)],1)],1)},A=[],E=n("b0b4"),x=n("2fe1"),P=(n("ea7b"),g=function(e){function t(){return Object(l["a"])(this,t),Object(d["a"])(this,Object(s["a"])(t).apply(this,arguments))}return Object(b["a"])(t,e),Object(E["a"])(t,[{key:"checkUser",value:function(){var e=this;i["auth"]().setPersistence(i["auth"].Auth.Persistence.SESSION),i["auth"]().onAuthStateChanged((function(t){t?e.$router.push({name:"hello"}):g.signIn()}))}}],[{key:"signIn",value:function(){var e=new i["auth"].GoogleAuthProvider;i["auth"]().signInWithRedirect(e),i["auth"]().getRedirectResult().then().catch()}}]),t}(r["default"]));P=g=Object(p["__decorate"])([Object(x["b"])({})],P);var C=P,I=C,T=Object(j["a"])(I,S,A,!1,null,"71eca326",null),L=T.exports;r["default"].use(_["a"]);var N=new _["a"]({mode:"history",base:"/inventory/24/",routes:[{path:"/",name:"login",component:L,beforeEnter:function(e,t,n){i["auth"]().onAuthStateChanged((function(e){e?n("/home"):n()}))}},{path:"/home",name:"home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},redirect:{name:"hello"},beforeEnter:function(e,t,n){i["auth"]().onAuthStateChanged((function(e){e?n():n("/")}))},children:[{path:"/inventory",name:"inventory",component:function(){return n.e("chunk-48dbab82").then(n.bind(null,"e25f"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/approval",name:"approval",component:function(){return n.e("chunk-b8ec4658").then(n.bind(null,"71ff"))}},{path:"/hello",name:"hello",component:function(){return n.e("chunk-553c5f58").then(n.bind(null,"3ba4"))}},{path:"/rejected",name:"rejected",component:function(){return n.e("chunk-15ddc74e").then(n.bind(null,"d856"))}},{path:"/feedback",name:"feedback",component:function(){return n.e("chunk-2d0daf2f").then(n.bind(null,"6e7a"))}},{path:"/admin",name:"admin",component:function(){return n.e("chunk-f747807e").then(n.bind(null,"3530"))}}]}]}),B=N;n("bf40"),n("e71f");r["default"].config.productionTip=!1;var M={apiKey:"AIzaSyAG4FPlVFT20lLKjErXY2LH0AICB070gsI",authDomain:"neighbor-to-neighbor-da5ce.firebaseapp.com",databaseURL:"https://neighbor-to-neighbor-da5ce.firebaseio.com",projectId:"neighbor-to-neighbor-da5ce",storageBucket:"neighbor-to-neighbor-da5ce.appspot.com",messagingSenderId:"682085165",appId:"1:682085165:web:8168de7754befe55"};i["initializeApp"](M),new r["default"]({router:B,render:function(e){return e(w)}}).$mount("#app")}});
//# sourceMappingURL=app.d685576f.js.map
(function(e){function t(t){for(var r,c,o=t[0],i=t[1],s=t[2],l=0,d=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},a={app:0},u=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"fee3c10c","chunk-17948230":"a0c475a9","chunk-0cd09cb0":"32919f58","chunk-67ec594e":"10797c87","chunk-e1401a5a":"95e01bd0","chunk-1aa825b3":"701be409","chunk-1be0713c":"c152e6ee","chunk-7333f91f":"6885b38b","chunk-82bb729a":"104c2bec","chunk-1ad2495c":"41d2f945","chunk-4756067c":"25a17423","chunk-2d0daf2f":"a322d95b","chunk-31835b02":"dc7543c4"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-17948230":1,"chunk-0cd09cb0":1,"chunk-67ec594e":1,"chunk-e1401a5a":1,"chunk-1aa825b3":1,"chunk-1be0713c":1,"chunk-7333f91f":1,"chunk-82bb729a":1,"chunk-1ad2495c":1,"chunk-4756067c":1,"chunk-31835b02":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-17948230":"bd958aa3","chunk-0cd09cb0":"57f9def1","chunk-67ec594e":"ae6e52a0","chunk-e1401a5a":"f21d8b4f","chunk-1aa825b3":"78f3ecbd","chunk-1be0713c":"3091df60","chunk-7333f91f":"4840c10e","chunk-82bb729a":"24a98ff6","chunk-1ad2495c":"4e75d049","chunk-4756067c":"4e75d049","chunk-2d0daf2f":"31d6cfe0","chunk-31835b02":"e9a01353"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var s=u[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){s=d[o],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete c[e],f.parentNode.removeChild(f),n(u)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/inventory/58/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"34e4":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("5530"),c=n("d4ec"),a=n("78be"),u=function e(t){var n=this;Object(c["a"])(this,e),this.addItem=function(e){var t=Object(r["a"])({},e),c=a["a"].collection(n.collection).doc();return t.id=c.id,t.timing.dateAdded=new Date,c.set(t)},this.updateItem=function(e,t){return a["a"].collection(n.collection).doc(e).update(t)},this.deleteItem=function(e){return a["a"].collection(n.collection).doc(e).delete()},this.collection=t}},"44c1":function(e,t,n){"use strict";var r=n("f87a"),c=n.n(r);c.a},"5c0b":function(e,t,n){"use strict";var r=n("7694"),c=n.n(r);c.a},7694:function(e,t,n){},"78be":function(e,t,n){"use strict";var r=n("59ca"),c=n.n(r),a=(n("e71f"),{apiKey:"AIzaSyAG4FPlVFT20lLKjErXY2LH0AICB070gsI",authDomain:"neighbor-to-neighbor-da5ce.firebaseapp.com",databaseURL:"https://neighbor-to-neighbor-da5ce.firebaseio.com",projectId:"neighbor-to-neighbor-da5ce",storageBucket:"neighbor-to-neighbor-da5ce.appspot.com",messagingSenderId:"682085165",appId:"1:682085165:web:8168de7754befe55"}),u=a,o=c.a.initializeApp(u).firestore();t["a"]=o},9543:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return E}));n("d3b7");var r=n("5530"),c=(n("96cf"),n("1da1")),a=n("d4ec"),u=n("262e"),o=n("2caf"),i=n("d6da"),s=n("34e4"),l=n("78be"),d=function(e){Object(u["a"])(n,e);var t=Object(o["a"])(n);function n(){var e;return Object(a["a"])(this,n),e=t.apply(this,arguments),e.archiveItem=function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){var c,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l["a"].collection(e.collection).doc(n).get();case 3:if(c=t.sent,!c.exists){t.next=9;break}return a=c.data(),t.next=8,l["a"].collection(e.collection).doc(n).delete();case 8:return t.abrupt("return",l["a"].collection(i["a"].ARCHIVE).doc(n).set(Object(r["a"])({},a)));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log("Error archiving item: ",t.t0);case 14:return t.abrupt("return",new Promise((function(){})));case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),e}return n}(s["a"]),f=new d(i["a"].INVENTORY),h=(f.addItem,f.updateItem),E=(f.deleteItem,f.archiveItem)},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=(n("d3b7"),n("8c4f")),a=n("59ca"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"fill-height no-overflow pt-0",attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"text-center text-md-left",attrs:{lg:"2",md:"3",cols:"12"}},[n("h2",{staticClass:"head"},[e._v(" Neighbor to Neighbor ")]),n("p",{staticClass:"subhead"},[e._v(" Inventory ")]),n("v-btn",{attrs:{color:"white"},on:{click:function(t){return e.checkUser()}}},[e._v(" Sign in with Google ")])],1)],1)],1)},o=[],i=n("d4ec"),s=n("bee2"),l=n("262e"),d=n("2caf"),f=n("9ab4"),h=n("2fe1"),E=(n("ea7b"),function(){var e,t=e=function(t){Object(l["a"])(r,t);var n=Object(d["a"])(r);function r(){return Object(i["a"])(this,r),n.apply(this,arguments)}return Object(s["a"])(r,[{key:"checkUser",value:function(){var t=this;a["auth"]().setPersistence(a["auth"].Auth.Persistence.SESSION),a["auth"]().onAuthStateChanged((function(n){n?t.$router.push({name:"hello"}):e.signIn()}))}}],[{key:"signIn",value:function(){var e=new a["auth"].GoogleAuthProvider;a["auth"]().signInWithRedirect(e),a["auth"]().getRedirectResult().then().catch()}}]),r}(r["a"]);return t=e=Object(f["a"])([Object(h["b"])({})],t),t}()),b=E,p=b,m=(n("44c1"),n("2877")),v=n("6544"),T=n.n(v),C=n("8336"),R=n("62ad"),_=n("a523"),g=n("0fd9"),O=Object(m["a"])(p,u,o,!1,null,"7d8a50c0",null),k=O.exports;T()(O,{VBtn:C["a"],VCol:R["a"],VContainer:_["a"],VRow:g["a"]}),r["a"].use(c["a"]);var j=new c["a"]({mode:"history",base:"/inventory/58/",routes:[{path:"/",name:"login",component:k,beforeEnter:function(e,t,n){a["auth"]().onAuthStateChanged((function(e){e?n("/home"):n()}))}},{path:"/home",name:"home",component:function(){return Promise.all([n.e("chunk-17948230"),n.e("chunk-0cd09cb0"),n.e("chunk-67ec594e")]).then(n.bind(null,"bb51"))},redirect:{name:"inventory"},beforeEnter:function(e,t,n){a["auth"]().onAuthStateChanged((function(e){e?n():n("/")}))},children:[{path:"/inventory",name:"inventory",component:function(){return Promise.all([n.e("chunk-17948230"),n.e("chunk-e1401a5a"),n.e("chunk-0cd09cb0"),n.e("chunk-1aa825b3"),n.e("chunk-1be0713c")]).then(n.bind(null,"e25f"))}},{path:"/archive",name:"archive",component:function(){return Promise.all([n.e("chunk-17948230"),n.e("chunk-e1401a5a"),n.e("chunk-0cd09cb0"),n.e("chunk-1aa825b3"),n.e("chunk-82bb729a")]).then(n.bind(null,"12b6"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/pending",name:"pending",component:function(){return Promise.all([n.e("chunk-17948230"),n.e("chunk-e1401a5a"),n.e("chunk-4756067c")]).then(n.bind(null,"e04d"))}},{path:"/hello",name:"hello",component:function(){return n.e("chunk-31835b02").then(n.bind(null,"3ba4"))}},{path:"/rejected",name:"rejected",component:function(){return Promise.all([n.e("chunk-17948230"),n.e("chunk-e1401a5a"),n.e("chunk-1ad2495c")]).then(n.bind(null,"d856"))}},{path:"/feedback",name:"feedback",component:function(){return n.e("chunk-2d0daf2f").then(n.bind(null,"6e7a"))}},{path:"/admin",name:"admin",component:function(){return Promise.all([n.e("chunk-17948230"),n.e("chunk-e1401a5a"),n.e("chunk-0cd09cb0"),n.e("chunk-1aa825b3"),n.e("chunk-7333f91f")]).then(n.bind(null,"3530"))}}]}]}),S=j,A=n("f309"),D=n("fcf4");r["a"].use(A["a"],{iconfont:"md",theme:{primary:D["a"].blue}});var I=new A["a"]({}),U=(n("bf40"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)}),L=[],N=n("60a3"),y=function(){var e=function(e){Object(l["a"])(n,e);var t=Object(d["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(r["a"]);return e=Object(f["a"])([Object(N["a"])({})],e),e}(),w=y,P=w,x=(n("5c0b"),n("7496")),G=Object(m["a"])(P,U,L,!1,null,null,null),M=G.exports;T()(G,{VApp:x["a"]});var V,B,H,Y,F=n("5530"),$=n("2f62"),J=n("3317"),K=n("d6da"),X=(n("7db0"),n("c975"),n("b64b"),n("ade3"));(function(e){e["GET_ITEMS"]="getItems",e["GET_SELECTED"]="getSelected",e["GET_CURRENT"]="getCurrent",e["GET_CURRENT_UPDATES"]="getCurrentUpdates",e["GET_UPDATES_LENGTH"]="getUpdatesLength",e["GET_ITEM"]="getItem",e["GET_ITEM_INDEX"]="getItemIndex"})(V||(V={})),function(e){e["CLEAR_INVENTORY"]="CLEAR_INVENTORY",e["SET_CURRENT"]="SET_CURRENT",e["CLEAR_CURRENT"]="CLEAR_CURRENT",e["UPDATE_CURRENT"]="UPDATE_CURRENT",e["ADD_UPDATES"]="ADD_UPDATES",e["CLEAR_UPDATES"]="CLEAR_UPDATES",e["SET_SELECTED"]="SET_SELECTED",e["CLEAR_SELECTED"]="CLEAR_SELECTED",e["ADD_SELECTED"]="ADD_SELECTED"}(B||(B={})),function(e){e["SET_CURRENT"]="setCurrent",e["CLEAR_CURRENT"]="clearCurrent",e["UPDATE_CURRENT"]="updateCurrent",e["CLEAR_UPDATES"]="clearUpdates",e["COMMIT_UPDATES"]="commitUpdates",e["SET_SELECTED"]="setSelected",e["CLEAR_SELECTED"]="clearSelected",e["ADD_SELECTED"]="addSelected",e["BIND_ITEMS"]="bindItems",e["UNBIND_ITEMS"]="unbindItems"}(H||(H={}));var q,z,W=(Y={},Object(X["a"])(Y,V.GET_ITEMS,(function(e){return e.items})),Object(X["a"])(Y,V.GET_SELECTED,(function(e){return e.selected})),Object(X["a"])(Y,V.GET_CURRENT,(function(e){return e.current})),Object(X["a"])(Y,V.GET_CURRENT_UPDATES,(function(e){return e.currentUpdates})),Object(X["a"])(Y,V.GET_UPDATES_LENGTH,(function(e){return Object.keys(e.currentUpdates).length})),Object(X["a"])(Y,V.GET_ITEM,(function(e){return function(t){return e.items.find((function(e){return e.id===t}))}})),Object(X["a"])(Y,V.GET_ITEM_INDEX,(function(e,t){return function(n){var r=t.getItem(e,n);return e.items.indexOf(r)}})),Y),Q=W,Z=(n("96cf"),n("1da1")),ee=n("78be"),te=n("34e4"),ne=(q={},Object(X["a"])(q,H.SET_CURRENT,(function(e,t){var n=e.commit,r=t.item;n(B.SET_CURRENT,{item:r})})),Object(X["a"])(q,H.CLEAR_CURRENT,(function(e){var t=e.commit;t(B.CLEAR_UPDATES),t(B.CLEAR_CURRENT)})),Object(X["a"])(q,H.UPDATE_CURRENT,(function(e,t){var n=e.commit,r=t.updates;n(B.ADD_UPDATES,{updates:r})})),Object(X["a"])(q,H.CLEAR_UPDATES,(function(e){var t=e.commit;t(B.CLEAR_UPDATES)})),Object(X["a"])(q,H.COMMIT_UPDATES,(function(e,t){return Object(Z["a"])(regeneratorRuntime.mark((function n(){var r,c,a,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,c=e.state,a=t.collection,n.prev=2,u=new te["a"](a),r(B.UPDATE_CURRENT,{updates:c.currentUpdates}),n.next=7,u.updateItem(c.current.id,c.currentUpdates);case 7:r(B.CLEAR_UPDATES),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](2),console.log("commitUpdates error: ",n.t0);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})))()})),Object(X["a"])(q,H.SET_SELECTED,(function(e,t){var n=e.commit,r=t.list;n(B.SET_SELECTED,{list:r})})),Object(X["a"])(q,H.CLEAR_SELECTED,(function(e){var t=e.commit;t(B.CLEAR_SELECTED)})),Object(X["a"])(q,H.ADD_SELECTED,(function(e,t){var n=e.commit,r=t.item;n(B.ADD_SELECTED,{item:r})})),Object(X["a"])(q,H.BIND_ITEMS,Object(J["a"])((function(e){var t=e.bindFirestoreRef,n=e.state;return t("items",ee["a"].collection(n.collection))}))),Object(X["a"])(q,H.UNBIND_ITEMS,Object(J["a"])((function(e){var t=e.unbindFirestoreRef;t("items")}))),q),re=ne,ce=(z={},Object(X["a"])(z,B.CLEAR_INVENTORY,(function(e){e.items=[]})),Object(X["a"])(z,B.SET_CURRENT,(function(e,t){var n=t.item;e.current=n})),Object(X["a"])(z,B.CLEAR_CURRENT,(function(e){e.current=null})),Object(X["a"])(z,B.UPDATE_CURRENT,(function(e,t){var n=t.updates;e.current=e.current?Object(F["a"])(Object(F["a"])({},e.current),n):null})),Object(X["a"])(z,B.ADD_UPDATES,(function(e,t){var n=t.updates;e.currentUpdates=Object(F["a"])(Object(F["a"])({},e.currentUpdates),n)})),Object(X["a"])(z,B.CLEAR_UPDATES,(function(e){e.currentUpdates={}})),Object(X["a"])(z,B.SET_SELECTED,(function(e,t){var n=t.list;e.selected=n})),Object(X["a"])(z,B.CLEAR_SELECTED,(function(e){e.selected=[]})),Object(X["a"])(z,B.ADD_SELECTED,(function(e,t){var n=t.item;e.selected.push(n)})),z),ae=ce,ue={collection:null,items:[],selected:[],current:null,currentUpdates:{}};function oe(e,t){return{namespaced:!0,state:function(){return Object(F["a"])(Object(F["a"])({},ue),{},{collection:e})},getters:Q,actions:Object(F["a"])(Object(F["a"])({},re),t),mutations:ae}}n("4160"),n("159b");var ie=n("9543"),se={archiveItems:function(e){var t=e.commit,n=e.state;try{n.selected.forEach(function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(ie["a"])(t.id);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t(B.CLEAR_SELECTED)}catch(r){console.log("archiveItems error: ",r)}}},le=function(e){Object(l["a"])(n,e);var t=Object(d["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.unarchiveItem=function(){var t=Object(Z["a"])(regeneratorRuntime.mark((function t(n){var r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ee["a"].collection(e.collection).doc(n).get();case 3:if(r=t.sent,!r.exists){t.next=9;break}return c=r.data(),t.next=8,ee["a"].collection(e.collection).doc(n).delete();case 8:return t.abrupt("return",ee["a"].collection(K["a"].INVENTORY).doc(n).set(Object(F["a"])({},c)));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log("Error unarchiving item: ",t.t0);case 14:return t.abrupt("return",new Promise((function(){})));case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),e}return n}(te["a"]),de=new le(K["a"].ARCHIVE),fe=(de.addItem,de.updateItem,de.deleteItem,de.unarchiveItem),he={unarchiveItems:function(e){var t=e.commit,n=e.state;try{n.selected.forEach(function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fe(t.id);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t(B.CLEAR_SELECTED)}catch(r){console.log("archiveItems error: ",r)}}};r["a"].use($["a"]);var Ee={state:function(){return{version:"0.3"}},mutations:Object(F["a"])({},J["b"]),modules:{inventory:oe(K["a"].INVENTORY,se),archive:oe(K["a"].ARCHIVE,he)},strict:!1},be=new $["a"].Store(Ee);r["a"].config.productionTip=!1,new r["a"]({store:be,router:S,vuetify:I,render:function(e){return e(M)}}).$mount("#app")},d6da:function(e,t,n){"use strict";var r;(function(e){e["INVENTORY"]="furniture",e["PENDING"]="pending",e["REJECTED"]="rejected",e["ARCHIVE"]="archive"})(r||(r={})),t["a"]=r},f87a:function(e,t,n){}});
//# sourceMappingURL=app.d96e05db.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21eeeb"],{d856:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{justify:"start",align:"start"}},[n("v-col",{staticClass:"pb-3",attrs:{cols:"12"}},[n("view-title",{attrs:{title:"Rejections"}})],1),0===e.rejected.length?n("v-col",{attrs:{cols:"12"}},[n("p",[e._v(" No rejections. ")])]):e._e(),n("v-col",{attrs:{lg:"8",md:"9",cols:"12"}},e._l(e.rejected,(function(t){return n("approval-card",{key:t.id,attrs:{request:t,"is-pending":!1},on:{approve:e.pushPending}})})),1)],1)],1)},c=[],o=(n("4160"),n("159b"),n("d4ec")),r=n("bee2"),i=n("2caf"),s=n("262e"),d=n("9ab4"),l=n("2b0e"),u=n("60a3"),p=n("5e41"),v=n("d246"),b=n("59ca"),f=(n("e71f"),function(e){Object(s["a"])(n,e);var t=Object(i["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.show=!1,e.rejected=[],e.db=b["firestore"](),e}return Object(r["a"])(n,[{key:"getRejected",value:function(){var e=this,t=this.db.collection("rejected");t.onSnapshot((function(t){e.rejected=[],t.forEach((function(t){e.rejected.push(t.data())}))}))}},{key:"pushPending",value:function(e){var t=this.db.collection("pending");t.doc(e.id).set(e),this.db.collection("rejected").doc(e.id).delete()}},{key:"mounted",value:function(){this.getRejected()}}]),n}(l["a"]));f=Object(d["a"])([Object(u["a"])({components:{ApprovalCard:p["a"],ViewTitle:v["a"]}})],f);var j=f,h=j,w=n("2877"),g=n("6544"),k=n.n(g),O=n("62ad"),y=n("a523"),_=n("0fd9"),m=Object(w["a"])(h,a,c,!1,null,null,null);t["default"]=m.exports;k()(m,{VCol:O["a"],VContainer:y["a"],VRow:_["a"]})}}]);
//# sourceMappingURL=chunk-2d21eeeb.35eb234a.js.map
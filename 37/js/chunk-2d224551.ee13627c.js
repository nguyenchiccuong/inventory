(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d224551"],{e04d:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{justify:"start",align:"start"}},[n("v-col",{staticClass:"pb-3",attrs:{cols:"12"}},[n("view-title",{attrs:{title:"Pending Approvals"}})],1),0===e.pending.length?n("v-col",{attrs:{cols:"12"}},[n("p",[e._v(" No pending approvals. ")])]):e._e(),n("v-col",{attrs:{lg:"8",md:"9",cols:"12"}},e._l(e.pending,(function(t){return n("approval-card",{key:t.id,attrs:{request:t},on:{approve:function(t){return e.pushPending(t,!0)},deny:function(t){return e.pushPending(t,!1)},notes:e.updateNotes}})})),1)],1)],1)},i=[],o=(n("4160"),n("159b"),n("d4ec")),d=n("bee2"),c=n("99de"),s=n("7e84"),r=n("262e"),l=n("9ab4"),u=n("2b0e"),p=n("60a3"),f=n("5e41"),v=n("d246"),b=n("59ca"),g=(n("e71f"),function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.show=!1,e.pending=[],e.db=b["firestore"](),e}return Object(r["a"])(t,e),Object(d["a"])(t,[{key:"getPending",value:function(){var e=this,t=this.db.collection("pending");t.onSnapshot((function(t){e.pending=[],t.forEach((function(t){e.pending.push(t.data())}))}))}},{key:"updateNotes",value:function(e){var t=this.db.collection("pending").doc(e.id);t.update({staffNotes:e.staffNotes})}},{key:"pushPending",value:function(e,t){var n=t?"furniture":"rejected",a=this.db.collection(n),i=e;t&&(i.timing.dateAdded=new Date),a.doc(i.id).set(i),this.db.collection("pending").doc(e.id).delete()}},{key:"mounted",value:function(){this.getPending()}}]),t}(u["a"]));g=Object(l["__decorate"])([Object(p["a"])({components:{ApprovalCard:f["a"],ViewTitle:v["a"]}})],g);var h=g,w=h,j=n("2877"),k=n("6544"),y=n.n(k),O=n("62ad"),_=n("a523"),P=n("0fd9b"),m=Object(j["a"])(w,a,i,!1,null,null,null);t["default"]=m.exports;y()(m,{VCol:O["a"],VContainer:_["a"],VRow:P["a"]})}}]);
//# sourceMappingURL=chunk-2d224551.ee13627c.js.map
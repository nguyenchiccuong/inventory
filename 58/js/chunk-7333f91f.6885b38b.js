(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7333f91f"],{3530:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("admin-dialog",{attrs:{collection:"furniture"}}),a("admin-dialog",{attrs:{collection:"rejected"}}),a("admin-dialog",{attrs:{collection:"pending"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-dialog",{attrs:{width:"750",scrollable:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({},Object.assign({},o)),[t._v(" Show Edit Dialog ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("edit-card")],1),a("v-switch",{attrs:{label:"Show Edit Card"},model:{value:t.showEditCard,callback:function(e){t.showEditCard=e},expression:"showEditCard"}}),t.showEditCard?a("edit-card"):t._e()],1)],1),a("v-switch",{attrs:{label:"Show Store Comparison"},model:{value:t.showStoreCmp,callback:function(e){t.showStoreCmp=e},expression:"showStoreCmp"}}),t.showStoreCmp?a("v-row",[a("v-col",[a("v-btn",{on:{click:function(e){return t.updateSample()}}},[t._v(" Update sample ")])],1)],1):t._e(),t.showStoreCmp?a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("pre",[t._v(t._s(t.sample))])]),a("v-col",{attrs:{cols:"6"}},[a("pre",[t._v(t._s(t.compare))])])],1):t._e()],1)},i=[],s=a("5530"),n=a("d4ec"),r=a("bee2"),c=a("262e"),l=a("2caf"),d=a("9ab4"),h=a("2b0e"),p=a("2f62"),u=a("2fe1"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({staticClass:"my-1 mr-3"},o),[t._v(" Add to Firestore - "+t._s(t.collection)+" ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v(" Add Confirmation - "+t._s(t.collection)+" ")]),a("v-card-text",[t._v(" Please confirm that this is something you would like to do. If you don't know what this is, please exit. ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.addTo(t.collection)}}},[t._v(" CONFIRM AND ADD ")])],1)],1)],1)},m=[],v=(a("4160"),a("159b"),a("60a3")),b=a("59ca"),g=(a("e71f"),a("4994")),f=a("849f"),C=[{id:"",donor:{name:"John Smith",phone:"(123) 124-2145",email:"js14@gmail.com",address:"124 Cornell St Ithaca, NY 14853",zone:"Cornell"},physical:{class:f["a"].Chair,size:5,material:f["b"].Wood,set:!1,hasFrame:!1,hasBoxSpring:!1,numChairs:0,heavy:!1},timing:{urgent:!1,pickupBy:new Date(2019,6,21),dateOffered:new Date(2019,6,1)},attributes:{partsIntact:!0,finishIntact:!0,smokeFree:!0,petFree:!1,bedbugFree:!0,mildewFree:!0,donateToFriend:!0},status:g["c"].OnTruck,images:[{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.1"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.2"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.3"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.4"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.5"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.6"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.7"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.8"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.9"}],comments:"this is a comment that the donor has made",staffNotes:""},{id:"",donor:{name:"John Smith",phone:"(123) 124-2145",email:"js14@gmail.com",address:"124 Cornell St Ithaca, NY 14853",zone:"Fall Creek"},physical:{class:f["a"].Chair,size:2,material:f["b"].Plastic,set:!1,hasFrame:!1,hasBoxSpring:!1,numChairs:0,heavy:!1},timing:{urgent:!1,pickupBy:new Date(2019,6,21),dateOffered:new Date(2019,6,1)},attributes:{partsIntact:!0,finishIntact:!1,smokeFree:!1,petFree:!1,bedbugFree:!0,mildewFree:!0,donateToFriend:!0},status:g["c"].Donor,images:[{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.1"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.2"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.3"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.4"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.5"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.6"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.7"}],comments:"this is a comment that the donor has made",staffNotes:""}],S=function(){var t=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(n["a"])(this,a),t=e.apply(this,arguments),t.dialog=!1,t.sampleData=C,t}return Object(r["a"])(a,[{key:"addTo",value:function(t){this.dialog=!1;var e=b["firestore"]().collection(t);this.sampleData.forEach((function(t){var a=t,o=e.doc();a.id=o.id,a.timing.dateAdded=new Date,o.set(t)}))}}]),a}(h["a"]);return Object(d["a"])([Object(v["b"])()],t.prototype,"collection",void 0),t=Object(d["a"])([v["a"]],t),t}(),y=S,j=y,k=a("2877"),B=a("6544"),W=a.n(B),O=a("8336"),_=a("b0af"),L=a("99d9"),D=a("169a"),U=a("2fa4"),E=Object(k["a"])(j,w,m,!1,null,null,null),F=E.exports;W()(E,{VBtn:O["a"],VCard:_["a"],VCardActions:L["a"],VCardText:L["b"],VCardTitle:L["c"],VDialog:D["a"],VSpacer:U["a"]});var x=a("0535"),I=a("9543"),V=function(){var t=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(n["a"])(this,a),t=e.apply(this,arguments),t.dialog=!1,t.showEditCard=!1,t.showStoreCmp=!0,t}return Object(r["a"])(a,[{key:"mounted",value:function(){this.bindInventory()}},{key:"updateSample",value:function(){var t=this;Object(I["b"])(this.sample.id,{attributes:Object(s["a"])(Object(s["a"])({},this.sample.attributes),{},{bedbugFree:!this.sample.attributes.bedbugFree})}).then((function(){console.log("Successfully updated ".concat(t.sample.id))}))}},{key:"sample",get:function(){return this.inventory[2]}},{key:"compare",get:function(){return this.getItem(this.sample.id)}}]),a}(h["a"]);return t=Object(d["a"])([Object(u["b"])({components:{AdminDialog:F,EditCard:x["a"]},computed:Object(p["c"])("inventory",{inventory:"getInventory",getItem:"getItem"}),methods:Object(p["b"])("inventory",["bindInventory"])})],t),t}(),A=V,T=A,$=(a("4a9a"),a("62ad")),N=a("a523"),z=a("0fd9"),R=(a("0481"),a("4069"),a("ec29"),a("9d01"),a("fe09")),J=a("c37a"),P=a("c3f0"),Y=a("0789"),K=a("490a"),M=a("80d2"),q=R["a"].extend({name:"v-switch",directives:{Touch:P["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},J["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.disabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(s["a"])(Object(s["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(s["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(s["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(Y["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(K["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===M["v"].left&&this.isActive||t.keyCode===M["v"].right&&!this.isActive)&&this.onChange()}}}),G=Object(k["a"])(T,o,i,!1,null,null,null);e["default"]=G.exports;W()(G,{VBtn:O["a"],VCol:$["a"],VContainer:N["a"],VDialog:D["a"],VRow:z["a"],VSwitch:q})},"4a9a":function(t,e,a){"use strict";var o=a("723d"),i=a.n(o);i.a},"723d":function(t,e,a){},"9d01":function(t,e,a){}}]);
//# sourceMappingURL=chunk-7333f91f.6885b38b.js.map
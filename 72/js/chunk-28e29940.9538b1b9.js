(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28e29940"],{"0195":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("d4ec"),o=function t(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=arguments.length>6&&void 0!==arguments[6]&&arguments[6];Object(a["a"])(this,t),this.partsIntact=e,this.finishIntact=n,this.smokeFree=o,this.petFree=s,this.bedbugFree=i,this.mildewFree=r,this.donateToFriend=c}},"05c1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var a=n("d4ec"),o=n("bee2"),s=n("59ca"),i=s["firestore"].Timestamp,r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new Date,i=arguments.length>4?arguments[4]:void 0,r=arguments.length>5?arguments[5]:void 0,c=arguments.length>6?arguments[6]:void 0;Object(a["a"])(this,t),this.urgent=e,this.pickupBy=n,this.dateOffered=o,this.dateAdded=s,i&&(this.confirmedPickupDate=i),r&&(this.dateCollected=r),c&&(this.dateDelivered=c)}return Object(o["a"])(t,null,[{key:"formatDate",value:function(t){return t?t instanceof Date?t.toISOString().substring(0,10):t.toDate().toISOString().substring(0,10):""}},{key:"inRange",value:function(t,e,n){return e<=t&&t<=n}}]),t}()},"0a08":function(t,e,n){"use strict";var a;n.d(e,"a",(function(){return a})),function(t){t[t["Planning"]=0]="Planning",t[t["Ready"]=1]="Ready",t[t["InProgress"]=2]="InProgress",t[t["Complete"]=3]="Complete"}(a||(a={}))},"19a3":function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d}));var a=n("0a08"),o=n("05c1"),s=n("849f"),i=n("519a"),r=n("4994"),c=[{id:"",donor:{name:"John Smith",phone:"(123) 124-2145",email:"js14@gmail.com",address:"124 Cornell St Ithaca, NY 14853",zone:"Cornell"},physical:{class:s["a"].Chair,size:5,material:s["b"].Wood,set:!1,hasFrame:!1,hasBoxSpring:!1,numChairs:0,heavy:!1},timing:{urgent:!1,pickupBy:new Date(2019,6,21),dateAdded:new Date,dateOffered:new Date(2019,6,1)},attributes:{partsIntact:!0,finishIntact:!0,smokeFree:!0,petFree:!1,bedbugFree:!0,mildewFree:!0,donateToFriend:!0},status:r["d"].OnTruck,images:[{url:"assets/logo.png",caption:"test caption 1"},{url:"assets/logo.png",caption:"test caption 1.1"},{url:"assets/logo.png",caption:"test caption 1.2"},{url:"assets/logo.png",caption:"test caption 1.3"},{url:"assets/logo.png",caption:"test caption 1.4"},{url:"assets/logo.png",caption:"test caption 1.5"},{url:"assets/logo.png",caption:"test caption 1.6"},{url:"assets/logo.png",caption:"test caption 1.7"},{url:"assets/logo.png",caption:"test caption 1.8"},{url:"assets/logo.png",caption:"test caption 1.9"}],comments:"this is a comment that the donor has made",staffNotes:""},{id:"",donor:{name:"John Smith",phone:"(123) 124-2145",email:"js14@gmail.com",address:"124 Cornell St Ithaca, NY 14853",zone:"Fall Creek"},physical:{class:s["a"].Chair,size:2,material:s["b"].Plastic,set:!1,hasFrame:!1,hasBoxSpring:!1,numChairs:0,heavy:!1},timing:{urgent:!1,pickupBy:new Date(2019,6,21),dateAdded:new Date,dateOffered:new Date(2019,6,1)},attributes:{partsIntact:!0,finishIntact:!1,smokeFree:!1,petFree:!1,bedbugFree:!0,mildewFree:!0,donateToFriend:!0},status:r["d"].Donor,images:[{url:"assets/logo.png",caption:"test caption 1"},{url:"assets/logo.png",caption:"test caption 1.1"},{url:"assets/logo.png",caption:"test caption 1.2"},{url:"assets/logo.png",caption:"test caption 1.3"},{url:"assets/logo.png",caption:"test caption 1.4"},{url:"assets/logo.png",caption:"test caption 1.5"},{url:"assets/logo.png",caption:"test caption 1.6"},{url:"assets/logo.png",caption:"test caption 1.7"}],comments:"this is a comment that the donor has made",staffNotes:""}],d={id:"testRun",dateCreated:new Date,lastUpdated:new Date,date:new Date,volunteers:[{id:"vol1",name:"John Johnson",phone:"123-555-5555",role:i["a"].Driver,email:"john@jj.com",address:"1 Test Rd Ithaca, NY 14850",runs:[]}],pickups:{"3QzT3qNRNN6u0tMuIcEu":{status:1,physical:{hasFrame:!1,size:5,heavy:!1,material:s["b"].Wood,hasBoxSpring:!1,set:!1,altMaterial:s["b"].Wood,class:s["a"].Chair,numChairs:0},timing:{urgent:!1,pickupBy:new o["a"](1563681600,0),dateOffered:new o["a"](1561953600,0),dateAdded:new o["a"](1579733112,913e6)},donor:{address:"125 Ithaca St Ithaca, NY 14853",zone:"Cornell",name:"Ray Jones",phone:"(123) 124-2145",email:"js14@gmail.com"},images:[{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1"},{caption:"test caption 1.1",url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg"},{caption:"test caption 1.2",url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.3"},{caption:"test caption 1.4",url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.5"},{url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg",caption:"test caption 1.6"},{caption:"test caption 1.7",url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg"},{caption:"test caption 1.8",url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg"},{caption:"test caption 1.9",url:"https://www.uredeals.com/wp-content/uploads/2018/08/Used-Shelby-Williams-Brown-Wood-Ladder-Back-Chairs1.jpg"}],attributes:{petFree:!1,bedbugFree:!0,partsIntact:!0,donateToFriend:!0,mildewFree:!0,smokeFree:!0,finishIntact:!0},comments:"this is a comment that the donor has made",staffNotes:"",id:"3QzT3qNRNN6u0tMuIcEu"},h58u1dTR48DpZjsP1Bgz:{attributes:{finishIntact:!0,partsIntact:!0,bedbugFree:!1,mildewFree:!1,donateToFriend:!0,petFree:!1,smokeFree:!0},physical:{heavy:!1,hasBoxSpring:!1,class:s["a"].Chair,size:2,hasFrame:!1,material:s["b"].Metal,set:!1,numChairs:0},donor:{zone:"Flicker",email:"polygondust@gmail.com",address:"1 Snow St Flicker, MA 01295",name:"Porter Robinson",phone:"6085513560"},images:[],timing:{urgent:!1,dateAdded:new o["a"](1591768730,31e6),dateOffered:new o["a"](1591768637,702e6),pickupBy:new o["a"](1593216e3,0)},comments:"",id:"h58u1dTR48DpZjsP1Bgz",staffNotes:"I'm listening to Worlds.",status:4}},dropoffs:{},clients:{},status:a["a"].Planning}},"1ab2":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("b0c0");var a=n("d4ec"),o=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";Object(a["a"])(this,t),this.name=e,this.phone=n,this.email=o,this.address=s,this.zone=i}},2754:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12"}},[n("h2",[t._v("Testing")]),n("v-btn",{on:{click:function(e){return t.pushSample()}}},[t._v("Push sample data")]),n("h2",[t._v("Run ID: "+t._s(t.id))]),n("pre",[t._v(t._s(t.run))])],1)},o=[],s=n("d4ec"),i=n("bee2"),r=n("262e"),c=n("2caf"),d=n("9ab4"),l=n("2b0e"),u=n("60a3"),h=n("d6da"),p=n("3077"),g=n("e4a8"),m=function t(){var e=this;Object(s["a"])(this,t),this.collection=h["a"].RUNS,this.getItem=function(t){return g["a"].collection(e.collection).doc(t).get().then((function(t){if(t.exists)return t.data();throw new Error("No such document.")})).catch((function(t){throw new Error("Error getting doc: ".concat(t))}))},this.addItem=function(t){var n=Object(p["a"])(t),a=g["a"].collection(e.collection).doc();return n.id=a.id,n.dateCreated=new Date,n.lastUpdated=new Date,a.set(n)},this.updateItem=function(t,n){return g["a"].collection(e.collection).doc(t).update(n)},this.deleteItem=function(t){return g["a"].collection(e.collection).doc(t).delete()}},w=new m,f=w.getItem,v=w.addItem,b=(w.updateItem,w.deleteItem,n("19a3")),y=function(){var t=function(t){Object(r["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.run={},t}return Object(i["a"])(n,[{key:"mounted",value:function(){var t=this;console.log(this.id),f(this.id).then((function(e){console.log("item",e),t.run=e}))}},{key:"pushSample",value:function(){console.log(this.id),v(b["b"])}}]),n}(l["a"]);return Object(d["a"])([Object(u["b"])({default:"default"})],t.prototype,"id",void 0),t=Object(d["a"])([Object(u["a"])({components:{}})],t),t}(),F=y,k=F,D=n("2877"),B=n("6544"),C=n.n(B),I=n("8336"),j=n("62ad"),S=Object(D["a"])(k,a,o,!1,null,null,null);e["default"]=S.exports;C()(S,{VBtn:I["a"],VCol:j["a"]})},4994:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return u}));var a,o=n("d4ec"),s=n("0195"),i=n("1ab2"),r=n("849f"),c=n("05c1");(function(t){t[t["Donor"]=0]="Donor",t[t["OnTruck"]=1]="OnTruck",t[t["Shed"]=2]="Shed",t[t["Delivered"]=3]="Delivered",t[t["Unknown"]=4]="Unknown"})(a||(a={}));var d={Bed:["Smaller than Twin (baby)","Twin/XL","Full","Queen","King+"],Chair:["Dining chair","Desk chair","Living room chair","Recliner","Chair and a half (or larger)"],Couch:["Love seat","Futon","2 cushions","3 cushions","4+ cushions (large couch set)"],Table:["Small table (night stand, coffee table)","1 person table (desk)","2 person table","3-4 person table","5+ person table"],Dresser:["1 drawer","2 drawers","3 drawers","4 drawers","5+ drawers"]},l={partsIntact:{prettyPos:"Parts Intact",prettyNeg:"Not All Parts Intact",question:"Are all the parts intact?"},finishIntact:{prettyPos:"Finish Intact",prettyNeg:"Finish Not Intact",question:"Is the finish intact?"},smokeFree:{prettyPos:"Smoke Free",prettyNeg:"Not Smoke Free",question:"Does anyone smoke at home?"},petFree:{prettyPos:"Pet Free",prettyNeg:"Not Pet Free",question:"Are there pets in the house?"},bedbugFree:{prettyPos:"Bedbug Free",prettyNeg:"Not Bedbug Free",question:"Does it have bedbugs?"},mildewFree:{prettyPos:"Mildew Free",prettyNeg:"Not Mildew Free",question:"Does it have mildew?"},donateToFriend:{prettyPos:"Would Donate to a Friend",prettyNeg:"Would Not Donate to a Friend",question:"Would you donate this to a friend?"}},u=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new i["a"],d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new r["c"],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new c["b"],u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new s["a"],h=arguments.length>5&&void 0!==arguments[5]?arguments[5]:a.Unknown,p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[],g=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",m=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"";Object(o["a"])(this,t),this.id=e,this.donor=n,this.physical=d,this.timing=l,this.attributes=u,this.status=h,this.images=p,this.comments=g,this.staffNotes=m}},"519a":function(t,e,n){"use strict";var a;n.d(e,"a",(function(){return a})),function(t){t["Driver"]="Driver",t["Volunteer"]="Volunteer"}(a||(a={}))},"849f":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return i}));var a,o,s=n("d4ec");(function(t){t["Wood"]="Wood",t["Metal"]="Metal",t["Glass"]="Glass",t["Plastic"]="Plastic"})(a||(a={})),function(t){t["Bed"]="Bed",t["Chair"]="Chair",t["Couch"]="Couch",t["Table"]="Table",t["Dresser"]="Dresser"}(o||(o={}));var i=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.Chair,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.Wood,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],d=arguments.length>5&&void 0!==arguments[5]&&arguments[5],l=arguments.length>6&&void 0!==arguments[6]&&arguments[6],u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,h=arguments.length>8?arguments[8]:void 0;Object(s["a"])(this,t),this.class=n,this.size=e,this.material=i,this.set=r,this.heavy=c,this.hasFrame=d,this.hasBoxSpring=l,this.numChairs=u,h&&(this.altMaterial=h)}}}]);
//# sourceMappingURL=chunk-28e29940.9538b1b9.js.map
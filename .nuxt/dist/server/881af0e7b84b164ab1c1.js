exports.ids=[16],exports.modules={103:function(t,e,r){"use strict";r.r(e);r(5);var o=r(65),c=r(6),n={components:{Alert:o.a},data:()=>({dialog:!1}),async fetch({store:t,error:e,params:r}){try{await t.dispatch("fetchUser",r.id)}catch(e){}},computed:Object(c.mapState)({fetchedUser:["fetchedUser"]}),methods:{compDialog(){this.dialog=!0},no(){this.dialog=!1},yes(){this.$store.dispatch("deleteUser",this.fetchedUser._id).then(()=>{this.$router.push("/")}),this.dialog=!1},updateUser(){this.$router.push("/editUser/"+this.fetchedUser._id)},initials:t=>t.split(" ").map(t=>t.charAt(0).toUpperCase()).join("")}},l=r(1);var component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-row",{staticClass:"d-flex justify-center mb-5"},[r("h1",[t._v(t._s(t.fetchedUser.name))])])],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-avatar",{staticClass:"mr-3",attrs:{tile:"",width:"150",height:"150",color:"warning"}},["no-user-photo.jpg"===t.fetchedUser.photo?r("span",{staticClass:"white--text headline"},[t._v(t._s(t.initials(t.fetchedUser.name)))]):r("img",{attrs:{src:t.fetchedUser.imageUrl+t.fetchedUser.photo}})])],1),t._v(" "),r("br"),t._v(" "),r("v-row",{staticClass:"d-flex justify-center mt-8"},[r("v-btn",{staticClass:"warning--text mr-3",attrs:{outlined:""},on:{click:t.updateUser}},[t._v("\n      Update\n    ")]),t._v(" "),r("v-btn",{staticClass:"error--text mr-3",attrs:{outlined:""},on:{click:t.compDialog}},[t._v("\n      Delete\n    ")])],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("Alert",{attrs:{dialog:t.dialog},on:{no:t.no,yes:t.yes}})],1)],1)}),[],!1,(function(t){}),"24bae84e","cdfca4f0");e.default=component.exports},65:function(t,e,r){"use strict";var o={props:{dialog:{type:Boolean,default:!1}},methods:{no(){this.$emit("no")},yes(){this.$emit("yes")}}},c=r(1),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[t._v("Are you sure?")])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"error--text",attrs:{outlined:""},on:{click:t.no}},[t._v("No")]),t._v(" "),r("v-btn",{staticClass:"success--text",attrs:{outlined:""},on:{click:t.yes}},[t._v("Yes")])],1)],1)],1)}),[],!1,null,null,"3333e63e");e.a=component.exports}};
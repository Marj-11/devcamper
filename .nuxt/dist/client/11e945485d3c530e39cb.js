(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{607:function(t,e,o){"use strict";o.r(e);o(58);var r={data:function(){return{dialog:!0,password:""}},asyncData:function(t){return{returnedToken:t.params.resetpassword}},methods:{update:function(){var t=this;this.dialog=!1,this.$store.dispatch("resetPassword",{token:this.returnedToken,password:{password:this.password}}).then((function(){t.$router.push("/login")}))}}},n=o(14),d=o(39),l=o.n(d),c=o(85),v=o(478),w=o(477),f=o(588),h=o(584),k=o(593),x=o(473),V=o(594),_=o(484),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",{attrs:{justify:"center"}},[o("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(t){t.on,t.attrs}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v("New Password")])]),t._v(" "),o("v-card-text",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Password*",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1)],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.update}},[t._v("update")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:c.a,VCard:v.a,VCardActions:w.a,VCardText:w.c,VCardTitle:w.d,VCol:f.a,VContainer:h.a,VDialog:k.a,VRow:x.a,VSpacer:V.a,VTextField:_.a})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{519:function(t,e,o){var content=o(579);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("3666abb2",content,!0,{sourceMap:!1})},575:function(t,e,o){t.exports=o.p+"img/ac4d5b7.jpg"},576:function(t,e,o){t.exports=o.p+"img/7ca2111.jpg"},577:function(t,e,o){t.exports=o.p+"img/2dc67be.jpg"},578:function(t,e,o){"use strict";var n=o(519);o.n(n).a},579:function(t,e,o){(e=o(12)(!1)).push([t.i,"a[data-v-7a14abe4]{max-height:22px;text-decoration:none;color:#00ff0d}.back1[data-v-7a14abe4]{background:rgba(0,0,0,.8);margin-left:-14px;-webkit-filter:blur(6px);filter:blur(6px);position:absolute;box-shadow:0 10px 68px 0 rgba(0,0,0,.75);width:100%;height:15%}.scroll-down[data-v-7a14abe4]{position:absolute;text-decoration:none;width:55px;min-height:55px;top:23%;border-bottom:2px solid #00ff0d;border-right:2px solid #00ff0d;border-radius:1px;transform:translate(-50%) rotate(45deg);-webkit-animation:fade_move_down-data-v-7a14abe4 3s ease-in-out infinite;animation:fade_move_down-data-v-7a14abe4 3s ease-in-out infinite}.subheading[data-v-7a14abe4]{top:16%}@-webkit-keyframes fade_move_down-data-v-7a14abe4{0%{transform:translateY(-10px) rotate(45deg);opacity:0}50%{opacity:1}to{transform:translateY(10px) rotate(45deg);opacity:0}}@keyframes fade_move_down-data-v-7a14abe4{0%{transform:translateY(-10px) rotate(45deg);opacity:0}50%{opacity:1}to{transform:translateY(10px) rotate(45deg);opacity:0}}",""]),t.exports=e},595:function(t,e,o){"use strict";o.r(e);var n=o(58),r={data:function(){return{images:[{src:o(575)},{src:o(576)},{src:o(577)}],titles:["Active Learning","Collaboration","Becoming and Belonging"],underTitles:["Learn alongside global innovators selected by Devcamper Bootcamps","Learn to collaborate effectively online, across cultures and timezones","Join our Global Community"],texts:["From a combination of live sessions with Devcamper instructors and guest speakers, interactive workshops with the Devcamper Bootcamps teaching team, coaching sessions and Devcamper Bootcamps coach, regular meetings with your global team, plus your individual work, we expect active engagement from all participants. This isn’t a typical online course.. Build a venture with a global team  in just 10 weeks.","As the world has learned in 2020, effective remote collaboration is a challenging but necessary skill now and for the future as workplace configurations adapt. In this Bootcamp, you’ll gain experience collaborating and leading a global team remotely, learning from them as build the foundations of a new venture together.","Over the last six years, Devcamper Bootcamps has selected and built a community of 1300+ changemakers from 100+ countries. In addition to your classmates,  expand your professional network beyond your own Bootcamp cohort and receive continued access to content curated and developed by Devcamper Bootcamps. When we can convene again in-person, we hope to meet you at an alumni conference or Trek."]}}},c=o(14),l=o(39),d=o.n(l),m=o(588),v=o(117),f=o(473),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-row",{attrs:{justify:"center"}},t._l(t.images,(function(image,i){return o("v-col",{key:i,attrs:{cols:"8",md:"4"}},[o("v-img",{attrs:{src:image.src}}),t._v(" "),o("h2",{staticClass:"orange--text   mt-5"},[t._v("\n        "+t._s(t.titles[i])+"\n      ")]),t._v(" "),o("p",{staticClass:"mt-4",class:{"text-center":t.$vuetify.breakpoint.smAndDown}},[t._v("\n        "+t._s(t.texts[i])+"\n      ")])],1)})),1)],1)}),[],!1,null,"77106165",null),h=component.exports;d()(component,{VCol:m.a,VImg:v.a,VRow:f.a});var w={data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},x=o(85),y=o(478),_=o(477),k=o(464),C=o(139),B=Object(c.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"transparent white--text text-center",attrs:{flat:"",width:"100%"}},[o("v-card-text",t._l(t.icons,(function(e){return o("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[o("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})),1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",{staticClass:"white--text"},[t._v("\n    "+t._s((new Date).getFullYear())+" — "),o("strong",[t._v("Devcamper")])])],1)}),[],!1,null,"43f28864",null),j=B.exports;d()(B,{VBtn:x.a,VCard:y.a,VCardText:_.c,VDivider:k.a,VIcon:C.a});var D=o(323),V={components:{apiService:n.a,Info:h,TheFooter:j,spiner:D.a},asyncData:function(t){return n.a.getBootcamps().then((function(t){return{loadedBootcamp:t.data.data.slice(0,4)}}))},mounted:function(){document.getElementById("app2").style.filter=null},computed:{loggedIn:function(){return this.$store.getters.loggedIn},isLoading:function(){return this.$store.state.isLoading}}},I=(o(578),o(609)),$=o(610),L=o(584),T=Object(c.a)(V,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-container",[o("v-row",{staticClass:"vh",attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"8"}},[o("v-row",{staticClass:"mt-12",attrs:{justify:"center"}},[o("h1",{staticClass:"white--text text-center"},[t._v("\n            Welcome to our Bootcamps "),o("br"),t._v("\n            The ultimate learning resource for programmers\n          ")])]),t._v(" "),o("v-row",{attrs:{justify:"center"}},[t.loggedIn?t._e():o("h4",{staticClass:"mt-5"},[t._v("\n            To use this app you need to \n            "),o("nuxt-link",{staticClass:"success--text",attrs:{to:"/login"}},[t._v("Login")]),t._v(" or \n            "),o("nuxt-link",{staticClass:"yellow--text",attrs:{to:"/signup"}},[t._v("Sign Up")])],1)]),t._v(" "),o("v-row",{attrs:{justify:"center"}},[o("spiner",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"mt-10"}),t._v(" "),o("a",{staticClass:"scroll-down",class:{subheading:t.$vuetify.breakpoint.smAndDown,"display-2":t.$vuetify.breakpoint.mdAndUp},attrs:{href:"#bootcamps"}})],1)],1)],1),t._v(" "),o("v-row",{attrs:{id:"bootcamps"}},[o("v-col",[o("v-carousel",{attrs:{cycle:"",height:"400","hide-delimiter-background":"","show-arrows-on-hover":"",max:"2"}},t._l(t.loadedBootcamp,(function(e,i){return o("v-carousel-item",{key:i,attrs:{src:""+e.imageUrl+e.photo}},[o("v-row",{staticClass:"fill-height",attrs:{align:"start",justify:"center"}},[o("div",{staticClass:"display-3",class:{"display-1":t.$vuetify.breakpoint.smAndDown}},[t._v("\n                "+t._s(e.name)+"\n              ")])])],1)})),1)],1)],1),t._v(" "),o("v-row",{staticClass:"mt-12"},[o("v-col",[o("Info")],1)],1)],1),t._v(" "),o("v-row",[o("v-col",[o("TheFooter")],1)],1)],1)}),[],!1,null,"7a14abe4",null);e.default=T.exports;d()(T,{VCarousel:I.a,VCarouselItem:$.a,VCol:m.a,VContainer:L.a,VRow:f.a})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{485:function(e,t,n){"use strict";var r=n(66),l=n(1);t.a=l.a.extend({name:"rippleable",directives:{ripple:r.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),data.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",data)):null},onChange:function(){}}})},487:function(e,t,n){var content=n(488);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("5939d713",content,!0,{sourceMap:!1})},488:function(e,t,n){(t=n(12)(!1)).push([e.i,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),e.exports=t},518:function(e,t,n){var content=n(574);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("ee9a82f0",content,!0,{sourceMap:!1})},523:function(e,t,n){"use strict";n(148),n(26),n(487);var r=n(46),l=n(23),o=n(483),d=n(90),v=n(485),c=n(22),f=n(3),x=n(11);t.a=Object(x.a)(l.a,o.a,v.a,d.a,c.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var e=this.$props,t=e.dark,n=e.large,r=e.light,l=e.medium,small=e.small;return{dark:t,large:n,light:r,medium:l,size:e.size,small:small,xLarge:e.xLarge,xSmall:e.xSmall}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(e){e!==this.value&&this.$emit("input",e)},value:function(e){this.internalValue=e}},methods:{createClickFn:function(i){var e=this;return function(t){if(!e.readonly){var n=e.genHoverIndex(t,i);e.clearable&&e.internalValue===n?e.internalValue=0:e.internalValue=n}}},createProps:function(i){var e={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-i)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-i)%1>0),e},genHoverIndex:function(e,i){var t=this.isHalfEvent(e);return this.halfIncrements&&this.$vuetify.rtl&&(t=!t),i+(t?.5:1)},getIconName:function(e){var t=this.isHovering?e.isHovered:e.isFilled,n=this.isHovering?e.isHalfHovered:e.isHalfFilled;return t?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(e){if(this.isHovering){if(e.isHovered||e.isHalfHovered)return this.color}else if(e.isFilled||e.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(e){if(this.halfIncrements){var rect=e.target&&e.target.getBoundingClientRect();if(rect&&e.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(e,i){var t=this;this.runDelay("open",(function(){t.hoverIndex=t.genHoverIndex(e,i)}))},onMouseLeave:function(){var e=this;this.runDelay("close",(function(){return e.hoverIndex=-1}))},genItem:function(i){var e=this,t=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(t);var n={click:t.click};return this.hover&&(n.mouseenter=function(t){return e.onMouseEnter(t,i)},n.mouseleave=this.onMouseLeave,this.halfIncrements&&(n.mousemove=function(t){return e.onMouseEnter(t,i)})),this.$createElement(r.a,this.setTextColor(this.getColor(t),{attrs:{tabindex:-1},directives:this.directives,props:this.iconProps,on:n}),[this.getIconName(t)])}},render:function(e){var t=this,n=Object(f.g)(Number(this.length)).map((function(i){return t.genItem(i)}));return e("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}})},571:function(e,t,n){var content=n(572);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("5c8fbe94",content,!0,{sourceMap:!1})},572:function(e,t,n){(t=n(12)(!1)).push([e.i,".v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),e.exports=t},573:function(e,t,n){"use strict";var r=n(518);n.n(r).a},574:function(e,t,n){(t=n(12)(!1)).push([e.i,"hr.style-two[data-v-4b5d9910]{border:0;height:1px;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.75),hsla(0,0%,100%,0))}.time[data-v-4b5d9910]{color:#ccc;font-size:14px}a[data-v-4b5d9910]{color:#fff;text-decoration:none}a[data-v-4b5d9910]:hover{color:#d57900;transition:.4s}.there[data-v-4b5d9910]{z-index:10000}",""]),e.exports=t},596:function(e,t,n){"use strict";n.r(t);n(10),n(7),n(8),n(42);var r=n(2),l=(n(43),n(335),n(6),n(5),n(91)),o=(n(65),n(24)),d={data:function(){return{dialog:!1,title:"",text:"",valid:!0,rate:null,titleRules:[function(e){return!!e||"Title is required"},function(e){return e&&e.length<=30||"Title must be less than 30 characters"}],textRules:[function(e){return!!e||"Text is required"}],starRules:!1}},methods:{validate:function(){if(this.rate?this.starRules=!1:this.starRules=!0,this.rate&&this.title&&this.text){this.$refs.form.validate(),this.dialog=!1;var e={rating:this.rate,title:this.title,text:this.text};this.$store.dispatch("addReview",e)}this.$refs.form.validate()}}},v=n(14),c=n(39),f=n.n(c),x=n(85),h=n(478),m=n(477),_=n(588),w=n(593),y=(n(89),n(337),n(36),n(37),n(11)),O=n(68),j=n(107);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function $(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C=Object(y.a)(O.a,Object(j.b)("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:$({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}}),I=n(523),V=n(594),H=n(484);n(26),n(571);function P(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var E=Object(y.a)(H.a).extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},H.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=H.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){H.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}}),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,l=t.attrs;return[n("v-btn",e._g(e._b({attrs:{color:"orange",dark:""}},"v-btn",l,!1),r),[e._v("\n      add a review\n    ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Tell us, what do you think?")])]),e._v(" "),n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("div",{staticClass:"d-flex justify-center",on:{click:function(t){e.starRules=!1}}},[n("v-rating",{attrs:{color:"success","half-increments":"","empty-icon":"","empty-icon":"$ratingFull"},model:{value:e.rate,callback:function(t){e.rate=t},expression:"rate"}})],1),e._v(" "),e.starRules?n("p",{staticClass:"red--text d-flex justify-center mb-0"},[e._v("\n        Star rating is required\n      ")]):e._e(),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{color:"orange",counter:30,rules:e.titleRules,label:"Title",required:""},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{label:"Text",rules:e.textRules,color:"orange"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"warning--text",attrs:{outlined:""},on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),e._v(" "),n("v-btn",{staticClass:"success--text",attrs:{disabled:!e.valid,outlined:""},on:{click:e.validate}},[e._v("Save")])],1)],1)],1)}),[],!1,null,null,null),R=component.exports;f()(component,{VBtn:x.a,VCard:h.a,VCardActions:m.a,VCardTitle:m.d,VCol:_.a,VDialog:w.a,VForm:C,VRating:I.a,VSpacer:V.a,VTextField:H.a,VTextarea:E});var B=n(63);function D(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var z={components:{modalRating:R},fetch:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,e.error,r=e.params,t.prev=1,t.next=4,n.dispatch("getReviews",r.id);case 4:return t.next=6,n.dispatch("fetchBootcamp",r.id);case 6:t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:case"end":return t.stop()}}),t,null,[[1,8]])})))()},computed:Object(B.c)({reviews:["reviews"],bootcamp:["bootcamp"],users:function(){var e=this.$store.getters.getUsersById,t=Object(l.a)(new Map(e.map((function(e){return[e._id,e]}))).values()),n=[];return this.reviews.forEach((function(e){t.forEach((function(t){t._id===e.user&&(delete t.createdAt,n.push(S(S({},e),t)))}))})),n}}),mounted:function(){var e=this;this.reviews.forEach((function(t){e.$store.dispatch("getUserById",t.user)}))},methods:{revDate:function(e){this.$moment(e).format("LLL");return this.$moment(e).fromNow()},link:function(e){return"/users/"+e},initials:function(e){return e.split(" ").map((function(e){return e.charAt(0).toUpperCase()})).join("")}}},F=(n(573),n(140)),T=n(584),N=n(473),A=Object(v.a)(z,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{justify:"center"}},[e.users.length>0?n("v-row",{staticClass:"mt-5 d-flex justify-center"},[n("h1",[e._v(e._s(e.bootcamp.name))]),e._v(" "),n("h3",{staticClass:"warning--text"},[e._v("Reviews")])]):n("v-row",{staticClass:"mt-10",attrs:{justify:"center"}},[n("h1",{staticClass:"there white--text"},[e._v("There are no reviews!")])]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),e._l(e.users,(function(t){return n("v-row",{key:t._id,staticClass:"card1"},[n("v-col",[n("v-row",{class:{"justify-center":e.$vuetify.breakpoint.smAndDown}},[n("nuxt-link",{staticClass:"d-flex align-center mb-3",attrs:{to:e.link(t._id)}},[n("v-avatar",{staticClass:"mr-3",attrs:{color:"warning"}},["no-user-photo.jpg"===t.photo?n("span",{staticClass:"white--text headline"},[e._v(e._s(e.initials(t.name)))]):n("img",{attrs:{src:t.imageUrl+t.photo}})]),e._v(" "),n("h2",{staticClass:"d-flex"},[e._v("\n              "+e._s(t.name)+"\n            ")])],1)],1),e._v(" "),n("v-row",{class:{"justify-center":e.$vuetify.breakpoint.smAndDown,"text-center":e.$vuetify.breakpoint.smAndDown}},[n("v-rating",{staticClass:"mb-2 mr-1",attrs:{color:"orange","half-increments":"",readonly:"","empty-icon":"","empty-icon":"$ratingFull"},model:{value:t.rating,callback:function(n){e.$set(t,"rating",n)},expression:"user.rating"}}),e._v(" "),n("p",{staticClass:"pa-2 mb-0 time"},[e._v(e._s(e.revDate(t.createdAt)))])],1),e._v(" "),n("v-row",{class:{"justify-center":e.$vuetify.breakpoint.smAndDown}},[n("h4",{staticClass:"mb-2"},[e._v(e._s(t.title))])]),e._v(" "),n("v-row",{class:{"justify-center":e.$vuetify.breakpoint.smAndDown,"text-center":e.$vuetify.breakpoint.smAndDown}},[n("v-col",{attrs:{cols:"10"}},[n("p",[e._v(e._s(t.text))])])],1),e._v(" "),n("hr",{staticClass:"style-two"})],1)],1)})),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("modalRating")],1)],2)],1)}),[],!1,null,"4b5d9910",null);t.default=A.exports;f()(A,{VAvatar:F.a,VCol:_.a,VContainer:T.a,VRating:I.a,VRow:N.a})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1298:function(e,t,n){"use strict";n.r(t);var r,o=n(4),c=(n(57),n(37),n(73),n(75),n(70)),l=n.n(c),m=n(114),d=n(705),f=n(36),h={components:{Loading:n(495).a},data:function(){return{isLoading:!1,check_agency:!1,check_company:!1,check_guide:!1,check_person:!1}},mounted:function(){self.isLoading=!0},methods:{checkMember:(r=Object(o.a)(regeneratorRuntime.mark((function e(t,n,r){var o,c,l,m,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isLoading=!0,"username"==n){e.next=6;break}return e.next=4,d.a.checkMember(n,r);case 4:200==(o=e.sent).status&&(console.log(o.data),0==o.data.member.length&&0==o.data.member_travel.length?(t.check_agency=!1,t.check_company=!1,t.check_guide=!1,t.check_person=!1):(c=["5","7","8","9","10","11"],l=o.data.member_travel.filter((function(e){return"4"==e.mem_type})),m=o.data.member_travel.filter((function(e){return"6"==e.mem_type})),f=o.data.member_travel.filter((function(e){return"1"==e.mem_type})),h=o.data.member_travel.filter((function(e){return c.includes(e.mem_type)})),t.check_agency=l.length>0,t.check_company=m.length>0,t.check_guide=f.length>0,t.check_person=h.length>0));case 6:t.isLoading=!1;case 7:case"end":return e.stop()}}),e)}))),function(e,t,n){return r.apply(this,arguments)}),getAuthSocial:function(){var e=this;e.isLoading=!0,f.a.auth().onAuthStateChanged((function(t){if(t){var n=t.refreshToken,r=t.providerData[0],data={displayName:r.displayName,email:r.email,phoneNumber:r.phoneNumber,photoURL:r.photoURL,providerId:r.providerId,uid:r.uid,token:n};console.log(t),localStorage.social=JSON.stringify(data),l()(e.checkMember)(e,r.providerId,r.uid),e.isLoading=!1}else e.onLogin()})),e.isLoading=!1},home:function(){this.$router.push("/esafety/signup/select")},onSelect:function(e){1==e?this.$router.push("/esafety/signup/form/agency?type=1"):2==e?this.$router.push("/esafety/signup/form/agency?type=2"):3==e?this.$router.push("/esafety/signup/form/guide"):this.$router.push("/esafety/signup/detail/person")},onLogin:function(){var e=localStorage.providerId;e&&("facebook.com"==e?m.a.loginFacebook():"google.com"==e&&m.a.loginGmail())}}},v=n(30),y=n(112),_=n.n(y),k=n(791),w=n(529),x=n(457),O=n(491),S=n(525),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",staticStyle:{"margin-top":"10px !important"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center ma-0",attrs:{cols:"1"}},[n("a",{staticStyle:{"text-decoration":"none"},on:{click:e.home}},[n("v-icon",{attrs:{size:"30",color:"blue darken-2"}},[e._v("mdi-arrow-left")])],1)]),e._v(" "),n("v-col",{staticClass:"text-center ma-0",attrs:{cols:"10"}},[n("h2",{staticClass:"blue--text text--darken2 font-weight-bold"},[e._v("\n        ร้านค้า/ผู้ประกอบการ\n        &"),n("br"),e._v(" มัคคุเทศก์/เจ้าหน้าที่\n      ")])])],1),e._v(" "),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"10"}},[n("v-card",{attrs:{elevation:"7",height:"180",disabled:e.check_company},on:{click:function(t){return e.onSelect(2)}}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"mt-2",attrs:{cols:"4"}},[n("v-img",{attrs:{src:"https://www.flaticon.com/svg/static/icons/svg/362/362364.svg",contain:"","max-height":"120"}})],1),e._v(" "),n("v-col",{staticClass:"text-center ma-0",attrs:{cols:"12"}},[n("h2",{staticClass:"teal--text"},[e._v("ร้านค้า/เจ้าของกิจการ/เจ้าหน้าที่")]),e._v(" "),n("label",{directives:[{name:"show",rawName:"v-show",value:e.check_company,expression:"check_company"}],staticClass:"red--text"},[e._v("ท่านได้ลงทะเบียนด้วยบัญชีนี้ไปแล้ว")])])],1)],1)],1)],1),e._v(" "),n("Loading",{attrs:{dialog:e.isLoading},on:{"update:dialog":function(t){e.isLoading=t}}})],1)}),[],!1,null,null,null);t.default=component.exports;_()(component,{VCard:k.a,VCol:w.a,VIcon:x.a,VImg:O.a,VRow:S.a})},495:function(e,t,n){"use strict";n(408),n(252);var r={props:{dialog:{default:!1}},methods:{close:function(){this.$emit("update:dialog",!1)},Remove:function(data,e){var t=this.data.findIndex((function(t){return t.seq===e}));void 0!==t&&this.data.splice(t,1),this.$emit("update:dialog",!1)}}},o=(n(551),n(30)),c=n(112),l=n.n(c),m=n(651),d=n(567),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-overlay",{attrs:{value:e.dialog,absolute:""}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)}),[],!1,null,"66d97c66",null);t.a=component.exports;l()(component,{VOverlay:m.a,VProgressCircular:d.a})},517:function(e,t,n){var content=n(552);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("dff6a9fe",content,!0,{sourceMap:!1})},551:function(e,t,n){"use strict";n(517)},552:function(e,t,n){var r=n(53)(!1);r.push([e.i,".v-progress-circular[data-v-66d97c66]{margin:1rem}",""]),e.exports=r},705:function(e,t,n){"use strict";var r,o,c,l=n(4),m=(n(57),n(27),n(9)),d="".concat("qeasymenu");t.a={checkMember:(c=Object(l.a)(regeneratorRuntime.mark((function e(t,n){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("type",JSON.stringify(t)),r.append("uid",JSON.stringify(n)),e.next=6,m.a.post("/OTAMember",r).then((function(e){return e})).catch((function(e){return e}));case 6:return data=e.sent,e.abrupt("return",data);case 8:case"end":return e.stop()}}),e)}))),function(e,t){return c.apply(this,arguments)}),saveMember:(o=Object(l.a)(regeneratorRuntime.mark((function e(t,n){var r,o,i,c,l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=new FormData,o={headers:{"content-type":"multipart/form-data"}},t.image_base64="",r.append("name",d),r.append("member",JSON.stringify(t)),r.append("company_list",JSON.stringify(n)),r.append("esafety","1"),r.append("image_profile",t.image),i=0;i<n.length;i++)n[i].image_base64="",n[i].logo=n[i].logo?n[i].logo:"",r.append("image_logo["+i+"]",n[i].logo);for(c=0;c<n.length;c++)n[c].tower=n[c].tower?n[c].tower:"",r.append("image_tower["+c+"]",n[c].tower);for(l=0;l<n.length;l++)n[l].seal=n[l].seal?n[l].seal:"",r.append("image_seal["+l+"]",n[l].seal);return e.next=14,m.a.post("/OTA",r,o).then((function(e){return e})).catch((function(e){return e}));case 14:return data=e.sent,e.abrupt("return",data);case 16:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)}),verifyMember:(r=Object(l.a)(regeneratorRuntime.mark((function e(t){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new FormData,r={headers:{"content-type":"multipart/form-data"}},n.append("name",d),n.append("token",JSON.stringify(t.token)),n.append("username",JSON.stringify(t.username)),n.append("password",JSON.stringify(t.password)),e.next=9,m.a.post("/verify",n,r).then((function(e){return e})).catch((function(e){return e}));case 9:return data=e.sent,e.abrupt("return",data);case 11:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1238:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{isLoading:!1}},methods:{home:function(){window.location.href="/esafety/home/main"},logout:function(){if(!confirm("คุณต้องการออกจากระบบหรือไม่ ?"))return!1;Auth.logout(),window.location.href="/"}}},r=n(30),l=n(112),c=n.n(l),v=n(524),d=n(529),f=n(645),m=n(457),w=n(651),h=n(567),C=n(525),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-overlay",{attrs:{value:t.isLoading,absolute:""}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),n("v-container",{staticClass:"mt-2 mb-10"},[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"text-center ma-0 ",attrs:{cols:"2"}},[n("a",{staticStyle:{"text-decoration":"none"},on:{click:t.home}},[n("v-icon",{attrs:{size:"30",color:"teal darken-2"}},[t._v("mdi-arrow-left")])],1)]),t._v(" "),n("v-col",{staticClass:"text-center ma-0 ",attrs:{cols:"10"}},[n("label",{staticClass:"teal--text text--darken2 font-weight-bold title"},[t._v("Admin Setting")])])],1),t._v(" "),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"text-center ",attrs:{cols:"12"}},[n("v-btn",{staticClass:"elevation-1 white--text",attrs:{color:"blue",to:"/admin/permission",rounded:""}},[t._v("กำหนดสิทธิ์ผู้ใช้")])],1),t._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-btn",{staticClass:"elevation-1 white--text",attrs:{color:"blue",to:"/admin/distance",rounded:""}},[t._v("กำหนดรัศมีแต่ละจังหวัด"),n("br"),t._v(" (Self Check-In)")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VCol:d.a,VContainer:f.a,VIcon:m.a,VOverlay:w.a,VProgressCircular:h.a,VRow:C.a})}}]);
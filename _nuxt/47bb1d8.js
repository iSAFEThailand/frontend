(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1029:function(t,e,r){var content=r(1134);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("50bca2bc",content,!0,{sourceMap:!1})},1133:function(t,e,r){"use strict";r(1029)},1134:function(t,e,r){var n=r(53)(!1);n.push([t.i,".header-gallery{background-color:#000;opacity:.7;min-height:50px;width:100%;margin:0!important;z-index:999!important}",""]),t.exports=n},1266:function(t,e,r){"use strict";r.r(e);var n,c=r(4),o=(r(57),r(945)),l=r(70),m=r.n(l),h={data:function(){return{isLoading:!1,dialog_detail:!1,image:{src:"",chat_id:"",check_seq:"",province:"",amphur:"",lat:"",lng:"",member:[]},images_list:[]}},methods:{getTakePicture:(n=Object(c.a)(regeneratorRuntime.mark((function t(e,r){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,o.a.takePicture(r);case 3:(data=t.sent).status&&200==data.status?(console.log(data.data),e.images_list=data.data,e.gallery=e.images_list.length>=1?e.images_list[e.images_list.length-1].check_image:"",localStorage.images_list=JSON.stringify(e.images_list)):console.log(save),e.isLoading=!1;case 6:case"end":return t.stop()}}),t)}))),function(t,e){return n.apply(this,arguments)}),deleteImage:function(t,e){var r=this;return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return self.isLoading=!0,n.next=3,o.a.deleteTakePicture(t,e);case 3:"200"==n.sent.status&&(m()(r.getTakePicture)(r,t),r.dialog_detail=!1),self.isLoading=!1;case 6:case"end":return n.stop()}}),n)})))()},showDetail:function(t){"1"==t.check_status&&(this.image.src=t.check_image,this.image.lat=t.check_lat,this.image.lng=t.check_lng,this.image.province=t.check_province,this.image.amphur=t.check_amphur,this.image.member=t.list,this.image.chat_id=t.chat_id,this.image.check_seq=t.check_seq,this.dialog_detail=!0)},back:function(){this.$router.push("/facegroup/camera?chat_id="+this.$route.query.chat_id+"&group=1")},goto:function(){this.$router.push("/facegroup/check?chat_id="+this.$route.query.chat_id+"&group=1")}},mounted:function(){localStorage.images_list&&(this.images_list=JSON.parse(localStorage.images_list)),console.log(this.images_list)}},v=(r(1133),r(30)),d=r(112),f=r.n(d),_=r(450),k=r(524),w=r(529),y=r(457),x=r(491),O=r(651),R=r(567),C=r(525),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-overlay",{attrs:{value:t.isLoading,absolute:""}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),r("v-row",{staticClass:"header-gallery"},[r("v-col",{staticClass:"pa-2 mt-2",attrs:{cols:"2"}},[r("v-btn",{attrs:{icon:""},on:{click:t.back}},[r("v-icon",{attrs:{color:"white",size:"30"}},[t._v("mdi-close-thick")])],1)],1),t._v(" "),r("v-col",{staticClass:"white--text text-center font-weight-bold mt-2 pa-2",attrs:{cols:"8"}},[r("h2",[t._v("ภาพหมู่ทั้งหมด ("+t._s(t.images_list.length)+")")])]),t._v(" "),r("v-col",{attrs:{cols:"2"}})],1),t._v(" "),r("v-row",{staticStyle:{"margin-top":"10px"},attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"text-center",attrs:{cols:"10"}},[r("v-btn",{attrs:{block:"",dark:"",color:"teal"},on:{click:function(e){return t.goto()}}},[t._v("กลับไป เช็คภาพหมู่")])],1),t._v(" "),t._l(t.images_list,(function(e){return r("v-col",{key:e.check_image,staticClass:"ma-0 pa-2",attrs:{cols:"4"},on:{click:function(r){return t.showDetail(e)}}},[r("v-img",{staticClass:"grey lighten-2",style:"2"==e.check_status?"opacity:0.3":"",attrs:{src:e.check_image,"lazy-src":e.check_image,"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)}))],2),t._v(" "),r("v-overlay",{attrs:{value:t.dialog_detail,opacity:"0.7",absolute:""}},[r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("v-btn",{attrs:{color:"white",icon:""}},[r("v-icon",{attrs:{color:"white",size:"50"},on:{click:function(e){t.dialog_detail=!1}}},[t._v("mdi-window-close")])],1)],1),t._v(" "),r("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[r("v-img",{attrs:{src:t.image.src,contain:"","max-height":"60vh","lazy-src":t.image.src,"aspect-ratio":"1"}})],1),t._v(" "),r("v-col",{staticClass:"text-center mt-2 mb-0",attrs:{cols:"12"}},t._l(t.image.member,(function(t){return r("v-avatar",{key:t.index,attrs:{size:"50",color:t.check_face?"green lighten-1":"red lighten-1"}},[r("v-img",{attrs:{"max-height":"40","max-width":"40",src:""==t.mem_image?"/images/icon/user.svg":t.mem_image}})],1)})),1),t._v(" "),r("v-col",{staticClass:"text-center font-weight-bold mt-0 mb-0 pa-0",attrs:{cols:"12"}},[r("label",{domProps:{innerHTML:t._s(t.image.province+" , "+t.image.amphur+" <br> "+t.image.lat+","+t.image.lng)}})]),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("v-btn",{staticStyle:{"border-width":"3px"},attrs:{color:"white",icon:""}},[r("v-icon",{attrs:{size:"50"},on:{click:function(e){return t.deleteImage(t.image.chat_id,t.image.check_seq)}}},[t._v("mdi-delete-circle")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VAvatar:_.a,VBtn:k.a,VCol:w.a,VIcon:y.a,VImg:x.a,VOverlay:O.a,VProgressCircular:R.a,VRow:C.a})},945:function(t,e,r){"use strict";var n,c,o,l,m,h=r(4),v=(r(57),r(9));e.a={takePicture:(m=Object(h.a)(regeneratorRuntime.mark((function t(e){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("/takepicture/"+e).then((function(t){return t})).catch((function(t){return t}));case 2:return data=t.sent,t.abrupt("return",data);case 4:case"end":return t.stop()}}),t)}))),function(t){return m.apply(this,arguments)}),saveTakePicture:(l=Object(h.a)(regeneratorRuntime.mark((function t(picture){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=new FormData).append("picture",JSON.stringify(picture)),t.next=4,v.a.post("/savetakepicture",e).then((function(t){return t})).catch((function(t){return t}));case 4:return data=t.sent,t.abrupt("return",data);case 6:case"end":return t.stop()}}),t)}))),function(t){return l.apply(this,arguments)}),deleteTakePicture:(o=Object(h.a)(regeneratorRuntime.mark((function t(e,r){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("/deletetakepicture/"+e+"/"+r).then((function(t){return t})).catch((function(t){return t}));case 2:return data=t.sent,t.abrupt("return",data);case 4:case"end":return t.stop()}}),t)}))),function(t,e){return o.apply(this,arguments)}),updateTakePicture:(c=Object(h.a)(regeneratorRuntime.mark((function t(e,r){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("chat_id",JSON.stringify(e)),n.append("list",JSON.stringify(r)),t.next=5,v.a.post("/updatetakepicture",n).then((function(t){return t})).catch((function(t){return t}));case 5:return data=t.sent,t.abrupt("return",data);case 7:case"end":return t.stop()}}),t)}))),function(t,e){return c.apply(this,arguments)}),selectPicture:(n=Object(h.a)(regeneratorRuntime.mark((function t(e,r,select){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(new FormData).append("select",JSON.stringify(select)),t.next=4,v.a.post("/selectPicture/"+e+"/"+r).then((function(t){return t})).catch((function(t){return t}));case 4:return data=t.sent,t.abrupt("return",data);case 6:case"end":return t.stop()}}),t)}))),function(t,e,r){return n.apply(this,arguments)})}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1025:function(e,t,r){var content=r(1126);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("2179fc60",content,!0,{sourceMap:!1})},1125:function(e,t,r){"use strict";r(1025)},1126:function(e,t,r){var n=r(53)(!1);n.push([e.i,'.header{opacity:.7;top:0}.footer,.header{background-color:#000;min-height:50px;width:100%;margin:0!important;position:absolute;z-index:10!important}.footer{opacity:.8;bottom:0}.display{transform:scaleX(-1);filter:FlipH;-ms-filter:"FlipH"}.display,.display-back{z-index:0!important;background-size:contain;min-width:50vw;min-height:100vh;margin-left:auto;margin-right:auto;display:block;background:transparent;border-radius:5px}.display-img{min-width:100vw!important;max-height:80vh!important}.canvas{position:absolute;top:0}',""]),e.exports=n},1265:function(e,t,r){"use strict";r.r(t);r(68),r(27),r(78),r(34),r(79),r(86);var n=r(18),o=r(4),main=(r(67),r(37),r(73),r(75),r(19),r(51),r(58),r(269),r(66),r(38),r(85),r(43),r(94),r(57),r(186)),c=r(790),l=r(945),m=r(70),d=r.n(m);function v(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var f,w={computed:{google:main.gmapApi},watch:{},data:function(){return{results:[],check:!1,dialog_preview:!1,isLoading:!1,video:{},camera:!1,canvas:{},image:"",mode:"back",captures:"",results_list:[],device:"",devices_list:[],labeledFaceDescriptors:[],members_list:[],images_list:[],gallery:"",preview:"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}},methods:{saveImage:function(){var e=arguments,t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o,time,c,m,picture,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=!(e.length>0&&void 0!==e[0])||e[0],o=(new Date).toISOString().substr(0,10),time=(new Date).toTimeString().substr(0,5),c=localStorage.checkpoint?JSON.parse(localStorage.checkpoint):null,console.log(c),m=t.setInitList(),picture={chat_id:t.$route.query.chat_id,date:o,time:time,status:t.check,image:t.preview,lat:c.lat,lng:c.lng,country:c.country,province:c.province,amphur:c.district,tumbol:c.tumbol,zipcode:c.zipcode,mem_id:localStorage.mem_id,list:m},console.log(picture),r.next=10,l.a.saveTakePicture(picture);case 10:(v=r.sent).status&&200==v.status?n&&(d()(t.getTakePicture)(t,t.$route.query.chat_id),t.clearPreview()):console.log(v);case 12:case"end":return r.stop()}}),r)})))()},setInitList:function(){for(var e=[],i=0;i<this.members_list.length;i++){var t={chat_id:this.$route.query.chat_id,mem_id:this.members_list[i].mem_id,status:1==this.members_list[i].check_face,created_by:localStorage.mem_id};e.push(t)}return e},clearPreview:function(){var div=this.$refs.overlay.$el;console.log("div",div);var canvas=div.getElementsByClassName("canvas");console.log("overlay",canvas);var e,t=v(canvas);try{for(t.s();!(e=t.n()).done;){var r=e.value;r.parentNode.removeChild(r)}}catch(e){t.e(e)}finally{t.f()}this.dialog_preview=!1,this.video.pause(),this.video.srcObject=null,this.initCamera()},toGallery:function(){this.$router.push("/facegroup/gallery?chat_id="+this.$route.query.chat_id)},back:function(){this.$router.push("/facegroup/check?chat_id="+this.$route.query.chat_id+"&group="+this.$route.query.group)},initCamera:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e,e.isLoading=!0,c="front"==e.mode?"user":"environment",setTimeout(Object(o.a)(regeneratorRuntime.mark((function e(){var t,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices();case 2:if(t=e.sent,r.devices_list=t,r.video=r.$refs.video,!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){e.next=14;break}if(console.log(t),0==(o=t.filter((function(e){return"videoinput"==e.kind&&e.label.includes(r.mode)}))).length&&(o=t.filter((function(e){return"videoinput"==e.kind}))),0!=o.length){e.next=12;break}return alert("ไม่พบกล้องบนอุปกรณ์เครื่องนี้"),e.abrupt("return",!1);case 12:console.log(o),navigator.mediaDevices.getUserMedia({video:{facingMode:c,deviceId:o.deviceId}}).then((function(e){r.video.srcObject=e;var t=e.getVideoTracks(),track=Object(n.a)(t,1)[0],o=track.getCapabilities(),c=track.getSettings();console.log(track,o,c),r.video.play()})).catch((function(e){console.log(e),window.location.href="/facegroup/camera?chat_id="+r.$route.query.chat_id+"&group="+r.$route.query.group+"&camera="+r.mode}));case 14:case"end":return e.stop()}}),e)}))),300),e.isLoading=!1;case 5:case"end":return t.stop()}}),t)})))()},closeCapture:function(){this.dialog_picture=!1,window.location.href="/facegroup/camera?chat_id="+this.$route.query.chat_id+"&group="+this.$route.query.group},capture:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,body,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.dialog_preview=!0,r=e,body=document.getElementsByTagName("body")[0],console.log(body),n={width:e.video.videoWidth,height:body.clientHeight},e.canvas=document.createElement("canvas"),e.canvas.width=n.width,e.canvas.height=n.height,e.canvas.getContext("2d").drawImage(e.video,0,0,n.width,n.height),e.preview=e.canvas.toDataURL("image/jpeg"),console.log(e.preview),e.canvas.toBlob((function(e){console.log(e);var link=(window.URL||window.webkitURL).createObjectURL(e);console.log(link),r.image=link})),e.video.pause(),e.dialog_picture=!1,!(e.members_list.length>0)){t.next=20;break}return t.next=18,e.startFace();case 18:t.next=24;break;case 20:e.validator="",e.dialog_validate=!1,e.dialog_create=!0,e.quarantine.face=!0;case 24:case"end":return t.stop()}}),t)})))()},changeCamera:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.mode=e,console.log(t.mode),t.video.pause(),t.video.srcObject=null,t.initCamera();case 5:case"end":return r.stop()}}),r)})))()},startFace:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,l,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r="front"==e.mode?.51:.49,(n=e).members_list=localStorage.members_list?JSON.parse(localStorage.members_list):n.members_list,console.log("load label image"),l=e.labeledFaceDescriptors,console.log(l),m=new c.a(l,r),console.log("get faceMatcher"),setTimeout(Object(o.a)(regeneratorRuntime.mark((function t(){var div,canvas,r,o,l,image,d,h,f,w,y;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:div=n.$refs.face_camera,canvas=div.getElementsByClassName("canvas"),r=v(canvas);try{for(r.s();!(o=r.n()).done;)(l=o.value).parentNode.removeChild(l)}catch(e){r.e(e)}finally{r.f()}return console.log(n.members_list),t.next=7,c.h(e.preview);case 7:return image=t.sent,d=n.$refs.preview.$el,canvas=c.c(image),100,canvas.style="top:100px",canvas.className="canvas",div.append(canvas),h={width:d.clientWidth,height:d.clientHeight},c.i(canvas,h),console.log("check matchDimensions"),t.next=19,c.d(image).withFaceLandmarks().withFaceDescriptors();case 19:f=t.sent,console.log("detections"),w=c.k(f,h),y=w.map((function(e){return m.findBestMatch(e.descriptor)})),console.log(y),e.results=y,y.length>0?(y.forEach((function(e,i){var t=w[i].detection.box,r=new c.f.DrawBox(t,{label:e.toString(),lineWidth:3,boxColor:"unknown"===e.label.toString()?"red":"green"});"unknown"===e.label.toString()&&(canvas.style="top:140px"),r.draw(canvas);var o=e.label.toString().split(".")[0];console.log("index="+o),"unknown"!==o&&(n.members_list[o-1].check_face="unknown"!==e.label.toString())})),y.filter((function(e){return"unknown"==e.label.toString()})).length>0?n.check=!1:n.check=!0):(n.check=!1,n.saveImage(!1));case 26:case"end":return t.stop()}}),t)}))),500);case 9:case"end":return t.stop()}}),t)})))()},loadLabeledImages:function(){console.log("loadLabeledImages");var e=this.members_list.filter((function(e){return e.quarantine.length>0}));return Promise.all(e.map(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(label){var t,r,i,element,img,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=label.index+1+". "+(label.mem_fname+" "+label.mem_lname).substring(0,4)+"..",r=[],i=0;case 3:if(!(i<label.quarantine.length)){e.next=15;break}return element=label.quarantine[i].qua_image,e.next=7,c.h(element);case 7:return img=e.sent,e.next=10,c.e(img).withFaceLandmarks().withFaceDescriptor();case 10:n=e.sent;try{n.descriptor&&r.push(n.descriptor)}catch(e){console.log(e)}case 12:i++,e.next=3;break;case 15:return e.abrupt("return",new c.b(t,r));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},getTakePicture:(f=Object(o.a)(regeneratorRuntime.mark((function e(t,r){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.takePicture(r);case 2:(data=e.sent).status&&200==data.status?(console.log(data.data),t.images_list=data.data,t.gallery=t.images_list.length>=1?t.images_list[t.images_list.length-1].check_image:"",localStorage.images_list=JSON.stringify(t.images_list)):console.log(save);case 4:case"end":return e.stop()}}),e)}))),function(e,t){return f.apply(this,arguments)}),setInitQueryString:function(){if(this.$route.query.camera&&(this.mode=this.$route.query.camera),console.log(this.$route.query.chat_id),this.$route.query.chat_id&&d()(this.getTakePicture)(this,this.$route.query.chat_id),this.initCamera(),localStorage.members_list&&(this.members_list=JSON.parse(localStorage.members_list)),this.members_list.length>0){var e=this;setTimeout(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadLabeledImages();case 2:e.labeledFaceDescriptors=t.sent,e.camera=!0;case 4:case"end":return t.stop()}}),t)}))),1e3)}}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/plugins/faces-api/models",t.next=3,c.j.tinyFaceDetector.loadFromUri(r);case 3:return t.next=5,c.j.ssdMobilenetv1.loadFromUri(r);case 5:return t.next=7,c.j.faceRecognitionNet.loadFromUri(r);case 7:return t.next=9,c.j.faceLandmark68Net.loadFromUri(r);case 9:return t.next=11,c.j.faceExpressionNet.loadFromUri(r);case 11:document.createElement("canvas").className="canvas",c.g.monkeyPatch({Canvas:HTMLCanvasElement,Image:HTMLImageElement,ImageData:ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")}}),e.setInitQueryString();case 15:case"end":return t.stop()}}),t)})))()}},y=(r(1125),r(30)),_=r(112),k=r.n(_),x=r(788),R=r(450),S=r(524),O=r(529),j=r(457),C=r(491),$=r(651),I=r(525),component=Object(y.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-row",{staticClass:"header"},[r("v-col",{staticClass:"mt-2",attrs:{cols:"2"}},[r("v-btn",{attrs:{icon:""},on:{click:e.back}},[r("v-icon",{attrs:{color:"white",size:"30"}},[e._v("mdi-close-thick")])],1)],1),e._v(" "),r("v-col",{staticClass:"white--text text-center font-weight-bold mt-2",attrs:{cols:"8"}},[r("h2",[e._v("ถ่ายภาพหมู่")])]),e._v(" "),r("v-col",{staticClass:"mt-2",attrs:{cols:"2"}},[r("v-icon",{attrs:{color:"white",size:"30",disabled:1==e.devices_list.length},on:{click:function(t){return e.changeCamera("front"==e.mode?"back":"front")}}},[e._v("mdi-orbit-variant")])],1)],1),e._v(" "),r("video",{ref:"video",class:"front"==e.mode?"display":"display-back",attrs:{id:"video",autoplay:""}}),e._v(" "),r("v-row",{staticClass:"footer"},[r("v-col",{attrs:{cols:"4"}},[r("v-avatar",{directives:[{name:"show",rawName:"v-show",value:""!=e.gallery,expression:"gallery!=''"}],attrs:{size:"50"},on:{click:e.toGallery}},[r("v-img",{attrs:{"max-height":"50","max-width":"50",src:e.gallery,cover:""}})],1)],1),e._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"4"}},[r("v-btn",{staticClass:"mt-2",attrs:{dark:"",color:"teal",icon:"",loading:e.isLoading,disabled:!e.camera},on:{click:e.capture}},[r("v-avatar",{attrs:{color:"teal",size:"50",rounded:""}},[r("v-icon",{attrs:{dark:"",color:"white",size:"35"}},[e._v("mdi-camera-iris")])],1)],1)],1),e._v(" "),r("v-col",{attrs:{cols:"4"}})],1),e._v(" "),r("v-overlay",{ref:"overlay",staticClass:"pa-2",staticStyle:{"z-index":"999 !important"},attrs:{value:e.dialog_preview,width:"100%",absolute:"",opacity:"0.9"}},[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{directives:[{name:"show",rawName:"v-show",value:e.check&&e.results.length>=1,expression:"check && results.length >= 1"}],staticClass:"text-center mb-0",attrs:{cols:"12"}},[r("v-btn",{staticClass:"mr-4",staticStyle:{"border-width":"3px"},attrs:{color:"white",small:"",fab:"",outlined:""},on:{click:e.clearPreview}},[r("v-icon",{attrs:{size:"25"}},[e._v("mdi-close")])],1),e._v(" "),r("v-btn",{staticStyle:{"border-width":"3px"},attrs:{color:"white",small:"",fab:"",outlined:""},on:{click:e.saveImage}},[r("v-icon",{attrs:{size:"25"}},[e._v("mdi-check-bold")])],1)],1),e._v(" "),r("v-col",{directives:[{name:"show",rawName:"v-show",value:!e.check||0==e.results.length,expression:"!check || results.length == 0"}],staticClass:"text-center",attrs:{cols:"12"}},[r("v-btn",{staticClass:"mb-2",attrs:{color:"teal",large:""},on:{click:e.clearPreview}},[r("v-icon",{attrs:{color:"white"}},[e._v("mdi-camera")]),e._v(" "),r("label",[e._v("ถ่ายภาพใหม่")])],1),e._v(" "),r("v-alert",{staticClass:"ma-0 pa-2",attrs:{outlined:"",type:"warning"}},[e.results.length>=1?r("label",[e._v("ภาพถ่ายของคุณไม่ผ่านการเช็คภาพหมู่โปรดลองใหม่อีกครั้ง !!")]):e._e(),e._v(" "),0==e.results.length?r("label",[e._v("ภาพถ่ายของคุณพบใบหน้า 1 ใบหน้า โปรดถ่ายเป็นภาพหมู่ !!")]):e._e()])],1),e._v(" "),r("v-col",{ref:"face_camera",attrs:{cols:"12"}},[r("v-img",{ref:"preview",staticClass:"display-img",attrs:{src:e.preview}}),e._v(" "),r("canvas",{ref:"canvas",class:"front"==e.mode?"display":"display-back",staticStyle:{display:"none"},attrs:{id:"canvas",width:"320",height:"230"}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;k()(component,{VAlert:x.a,VAvatar:R.a,VBtn:S.a,VCol:O.a,VIcon:j.a,VImg:C.a,VOverlay:$.a,VRow:I.a})},796:function(e,t){},798:function(e,t){},808:function(e,t){},810:function(e,t){},835:function(e,t){},837:function(e,t){},838:function(e,t){},843:function(e,t){},845:function(e,t){},864:function(e,t){},876:function(e,t){},879:function(e,t){},882:function(e,t){},883:function(e,t){},884:function(e,t){},885:function(e,t){},886:function(e,t){},945:function(e,t,r){"use strict";var n,o,c,l,m,d=r(4),v=(r(57),r(9));t.a={takePicture:(m=Object(d.a)(regeneratorRuntime.mark((function e(t){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/takepicture/"+t).then((function(e){return e})).catch((function(e){return e}));case 2:return data=e.sent,e.abrupt("return",data);case 4:case"end":return e.stop()}}),e)}))),function(e){return m.apply(this,arguments)}),saveTakePicture:(l=Object(d.a)(regeneratorRuntime.mark((function e(picture){var t,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("picture",JSON.stringify(picture)),e.next=4,v.a.post("/savetakepicture",t).then((function(e){return e})).catch((function(e){return e}));case 4:return data=e.sent,e.abrupt("return",data);case 6:case"end":return e.stop()}}),e)}))),function(e){return l.apply(this,arguments)}),deleteTakePicture:(c=Object(d.a)(regeneratorRuntime.mark((function e(t,r){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/deletetakepicture/"+t+"/"+r).then((function(e){return e})).catch((function(e){return e}));case 2:return data=e.sent,e.abrupt("return",data);case 4:case"end":return e.stop()}}),e)}))),function(e,t){return c.apply(this,arguments)}),updateTakePicture:(o=Object(d.a)(regeneratorRuntime.mark((function e(t,r){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("chat_id",JSON.stringify(t)),n.append("list",JSON.stringify(r)),e.next=5,v.a.post("/updatetakepicture",n).then((function(e){return e})).catch((function(e){return e}));case 5:return data=e.sent,e.abrupt("return",data);case 7:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)}),selectPicture:(n=Object(d.a)(regeneratorRuntime.mark((function e(t,r,select){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(new FormData).append("select",JSON.stringify(select)),e.next=4,v.a.post("/selectPicture/"+t+"/"+r).then((function(e){return e})).catch((function(e){return e}));case 4:return data=e.sent,e.abrupt("return",data);case 6:case"end":return e.stop()}}),e)}))),function(e,t,r){return n.apply(this,arguments)})}}}]);
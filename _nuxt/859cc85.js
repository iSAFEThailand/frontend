(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1013:function(e,m,t){var content=t(1101);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(54).default)("0b51d6db",content,!0,{sourceMap:!1})},1100:function(e,m,t){"use strict";t(1013)},1101:function(e,m,t){var n=t(53)(!1);n.push([e.i,"h2[data-v-2e32fd5d]{text-align:center;margin-top:100px;font-family:sans-serif}",""]),e.exports=n},1242:function(e,m,t){"use strict";t.r(m);var n,o=t(4),r=(t(57),t(37),t(114)),l=t(70),c=t.n(l),_={data:function(){return{profile:{checkpoint:{mem_company:"",check_is_temp:"",check_note:"",check_temp:"",temp_status:"",company_phone:""},member:{mem_image:"",mem_id:"",mem_fname:"",mem_lname:"",mem_sex:"",mem_birthday:"",mem_idcard:"",mem_is_owner:"",mem_is_supervisor:"",mem_is_working:"",mem_owner_name:"",mem_supervisor_name:"",mem_company:"",mem_queue:"1"},member_travel:null,pins:[{mem_company:""}]},member:{mem_id:"",mem_fname:"",mem_lname:"",mem_sex:"",mem_birthday:"",mem_idcard:"",mem_is_owner:"",mem_is_supervisor:"",mem_is_working:"",mem_owner_name:"",mem_supervisor_name:"",mem_company:"",mem_image:"",mem_token:"",temp_status:"",chk_temp:"",temp:"",note:""}}},head:{title:"Please select an user"},methods:{getProfile:(n=Object(o.a)(regeneratorRuntime.mark((function e(m,t){var n,o,l,link,filter,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.isLoading=!0,e.next=3,r.a.getProfile(t);case 3:if(200==(n=e.sent).status){o=n.data.pins.filter((function(e,m){return"1"==e.mem_type&&"0"==e.cate_type})),m.profile=n.data,m.profile.pins=o,m.profile.checkpoint=null==m.profile.checkpoint?{mem_company:"",check_is_temp:"",check_note:"",check_temp:"",temp_status:"",company_phone:""}:m.profile.checkpoint;try{l="M"==m.profile.member.mem_sex?"https://image.flaticon.com/icons/svg/145/145859.svg":"https://image.flaticon.com/icons/png/512/145/145866.png",m.profile.member.mem_image=null==m.profile.member.mem_image?"":m.profile.member.mem_image,link="/upload/OTA/profile/",null!=m.profile.member_travel&&("1"==m.profile.member_travel.mem_type?link="/upload/guide/":"4"==m.profile.member_travel.mem_type&&(link="/upload/operator/")),m.profile.member.mem_image=""==m.profile.member.mem_image?l:m.domain+link+m.profile.member.mem_image,console.log(m.profile.pins),m.profile.pins.length>0&&(m.profile.member.select_company?(filter=m.profile.pins.filter((function(e,t){return e.company_id==m.profile.member.select_company&&"1"==e.mem_type})),m.company=filter.length>0?filter[0]:m.profile.pins[0]):m.company=m.profile.pins[0],m.profile.member.mem_type=m.company.mem_type),"1"==m.profile.member.mem_type&&"1"==m.profile.member.mem_is_working?m.selection="1":m.selection="2",m.changeMode(m.selection),c()(m.watchScan,100)(m)}catch(e){console.log(e)}_="1"==m.selection?m.company.company_id:m.profile.member.mem_id,c()(m.getCountMessageAll)(m,_,m.selection),m.watchChat(),m.isLoading=!1}case 5:case"end":return e.stop()}}),e)}))),function(e,m){return n.apply(this,arguments)})},mounted:function(){console.log(this.$route.query.token);var e="/esafety/home/qr-scan?generate="+this.$route.query.token;localStorage.redirect=e,null!=localStorage.token||(e="/esafety/login?selection=2&generate="+this.$route.query.token),this.$router.push(e)}},f=(t(1100),t(30)),component=Object(f.a)(_,(function(){var e=this,m=e.$createElement;return(e._self._c||m)("h2",[e._v("Please Wating... Open iSAFE Thailand")])}),[],!1,null,"2e32fd5d",null);m.default=component.exports}}]);
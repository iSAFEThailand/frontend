(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1066:function(e,t,n){var content=n(1211);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("7f3d405e",content,!0,{sourceMap:!1})},1210:function(e,t,n){"use strict";n(1066)},1211:function(e,t,n){var o=n(53)(!1);o.push([e.i,".player[data-v-43e48c33]{text-align:center;margin-top:100px;font-family:sans-serif}",""]),e.exports=o},1320:function(e,t,n){"use strict";n.r(t);n(27);var o={asyncData:function(e){var t=e.params,n=(e.env,e.error),o=t.id;return o||n({message:"User not found",statusCode:404})},head:function(){return{title:this.name}},mounted:function(){console.log(this.$route.fullPath,this.$route.params.id),null!=localStorage.token?this.$router.push("/esafety/home/qr-scan?generate="+this.$route.params.id):window.location.href="/esafety/login?generate="+this.$route.params.id}},r=(n(1210),n(30)),component=Object(r.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"43e48c33",null);t.default=component.exports}}]);
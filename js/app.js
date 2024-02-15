(function(){"use strict";var e={8444:function(e,n,a){var i=a(7764),t=a(4108);const r={class:"app"},o={class:"main-content"};function l(e,n,a,i,l,s){const m=(0,t.E1)("NavigationBar"),u=(0,t.E1)("Toast"),c=(0,t.E1)("router-view");return(0,t.Wz)(),(0,t.An)("div",r,[s.isLoggedIn?((0,t.Wz)(),(0,t.Az)(m,{key:0})):(0,t.g1)("",!0),(0,t.K2)(u,{position:"top-right",baseZIndex:50}),(0,t.QD)("div",o,[(0,t.K2)(c)])])}var s=a(9096);const m=e=>((0,t.ED)("data-v-2d8d59b4"),e=e(),(0,t.ii)(),e),u={key:0},c={key:1},d=m((()=>(0,t.QD)("span",{class:"flex justify-content-center -mt-3"},"E-Management",-1)));function p(e,n,a,i,r,o){const l=(0,t.E1)("PanelMenu"),m=(0,t.E1)("SplitButton"),p=(0,t.E1)("Button");return(0,t.Wz)(),(0,t.An)("div",{class:"sidebar",style:(0,s.MN)({width:i.sidebarWidth})},[(0,t.QD)("h1",null,[i.collapsed?((0,t.Wz)(),(0,t.An)("span",u)):((0,t.Wz)(),(0,t.An)("span",c,[d,(0,t.K2)(l,{model:r.items,multiple:""},null,8,["model"])])),(0,t.K2)(m,{label:r.fullname,icon:"pi pi-user",model:r.splitMenu,class:"absolute top-0 right-0 pt-3",style:{width:"200px"},onClick:n[0]||(n[0]=e=>o.goToProfile())},null,8,["label","model"])]),(0,t.K2)(p,{class:(0,s.WN)(["collapse-icon w-3rem",{"rotate-180":i.collapsed}]),icon:"pi pi-angle-double-left",onClick:i.toggleSidebar},null,8,["class","onClick"])],4)}a(3248);var h=a(2500);const g=(0,h.IL)(!1),f=()=>g.value=!g.value,b=400,v=65,P=(0,t.S6)((()=>`${g.value?v:b}px`));var A=a(8830),y=a(7228),w=a(3644),S={props:{},components:{Button:A.c,PanelMenu:y.c,SplitButton:w.c},setup(){return{collapsed:g,toggleSidebar:f,sidebarWidth:P}},data(){return{fullname:null,items:[{label:"Home",icon:"pi pi-home",to:"/"},{label:this.getFormLabelCustomer(),visible:this.role("mazentaAdmin")||this.role("banaraAdmin")||this.role("narayaAdmin")||this.role("superadmin"),icon:"pi pi-fw pi-user",class:"ggi-nav-item",items:[{label:"Pemasangan & Pemutusan Internet",visible:this.role("mazentaAdmin")||this.role("banaraAdmin")||this.role("narayaAdmin")||this.role("superadmin"),icon:"pi pi-wifi",to:"/Form/Internet",class:"ggi-nav-item"},{label:"Pengajuan Izin Kerja",visible:this.role("mazentaAdmin")||this.role("banaraAdmin")||this.role("narayaAdmin")||this.role("superadmin"),icon:"pi pi-fw pi-briefcase",to:"/Form/IzinKerja",class:"ggi-nav-item"},{label:"Form Keluhan Pelanggan",visible:this.role("mazentaAdmin")||this.role("banaraAdmin")||this.role("narayaAdmin")||this.role("superadmin"),icon:"pi pi-comments",to:"/Form/CC",class:"ggi-nav-item "},{label:"Form Refund Deposit Renovasi Estate",visible:this.role("mazentaAdmin")||this.role("banaraAdmin")||this.role("narayaAdmin")||this.role("superadmin"),icon:"pi pi-fw pi-money-bill",to:"/Form/RefundDeposit",class:"ggi-nav-item "},{label:"Data Pemilik/Penghuni/ Warga Pindah",visible:this.role("mazentaAdmin")||this.role("banaraAdmin")||this.role("narayaAdmin")||this.role("superadmin"),icon:"pi pi-fw pi-send",to:"/Form/DataPindah",class:"ggi-nav-item "},{label:"Data Penyewa/Penghuni/ Warga Baru",visible:this.role("mazentaAdmin")||this.role("banaraAdmin")||this.role("narayaAdmin")||this.role("superadmin"),icon:"pi pi-fw pi-file-export",to:"/Form/DataBaru",class:"ggi-nav-item "},{label:"Surat Pernyataan Warga Pengerjaan Renovasi",visible:this.role("mazentaAdmin")||this.role("banaraAdmin")||this.role("narayaAdmin")||this.role("superadmin"),icon:"pi pi-fw pi-info",to:"/Form/SuratPernyataan",class:"ggi-nav-item "},{label:"Customer Forms Marchand",visible:this.role("superadmin"),icon:"pi pi-fw pi-user",class:"ggi-nav-item",items:[{label:"Pemasangan & Pemutusan Internet",visible:this.role("superadmin"),icon:"pi pi-wifi",to:"/Marchand/Internet",class:"ggi-nav-item"},{label:"Form Keluhan Pelanggan",visible:this.role("superadmin"),icon:"pi pi-fw pi-comments",to:"/Marchand/CC",class:"ggi-nav-item"},{label:"Form Pengajuan Izin Kerja",visible:this.role("superadmin"),icon:"pi pi-fw pi-cog",to:"/Marchand/IzinKerja",class:"ggi-nav-item"},{label:"Form Permohonan Penambahan Daya Listrik",visible:this.role("superadmin"),icon:"pi pi-fw pi-bolt",to:"/Marchand/DayaListrik",class:"ggi-nav-item"},{label:"Form Pengajuan Refund Deposit Fit Out",visible:this.role("superadmin"),icon:"pi pi-money-bill",to:"/Marchand/RDP",class:"ggi-nav-item"}]}]},{label:this.getFormLabelAdmin(),visible:this.role("mazentaAdmin")||this.role("banaraAdmin")||this.role("narayaAdmin")||this.role("superadmin"),icon:"pi pi-fw pi-user",class:"ggi-nav-item",items:[{label:"Formulir Jadwal Pengecekan Akhir Pembangunan / Renovasi",visible:this.role("mazentaAdmin")||this.role("banaraAdmin")||this.role("narayaAdmin")||this.role("superadmin"),icon:"pi pi-fw pi-check-square",to:"/Form/PengecekanAkhir",class:"ggi-nav-item"},{label:"Pemesanan Kartu Akses Masuk",visible:this.role("mazentaAdmin")||this.role("banaraAdmin")||this.role("narayaAdmin")||this.role("superadmin"),icon:"pi pi-fw pi-reply",to:"/Form/PemesananKartu",class:"ggi-nav-item"},{label:"Perpanjangan Kartu Akses",visible:this.role("mazentaAdmin")||this.role("banaraAdmin")||this.role("narayaAdmin")||this.role("superadmin"),icon:"pi pi-fw pi-forward",to:"/Form/PerpanjanganKartu",class:"ggi-nav-item"},{label:"Admin Forms Marchand",visible:this.role("superadmin"),icon:"pi pi-fw pi-user",class:"ggi-nav-item",items:[{label:"Surat Permohonan Izin Buka Toko",visible:this.role("superadmin"),icon:"pi pi-fw pi-cog",to:"/Marchand/IzinBukaToko",class:"ggi-nav-item"},{label:"Form Berita Acara Pengembalian Security Deposit Fitout",visible:this.role("superadmin"),icon:"pi pi-fw pi-pound",to:"/Marchand/PengambilanRefund",class:"ggi-nav-item"}]}]},{label:"Customer Forms",visible:this.role("marchandAdmin"),icon:"pi pi-fw pi-user",class:"ggi-nav-item",items:[{label:"Pemasangan & Pemutusan Internet",visible:this.role("marchandAdmin"),icon:"pi pi-wifi",to:"/Marchand/Internet",class:"ggi-nav-item"},{label:"Form Keluhan Pelanggan",visible:this.role("marchandAdmin"),icon:"pi pi-fw pi-comments",to:"/Marchand/CC",class:"ggi-nav-item"},{label:"Form Pengajuan Izin Kerja",visible:this.role("marchandAdmin"),icon:"pi pi-fw pi-cog",to:"/Marchand/IzinKerja",class:"ggi-nav-item"},{label:"Form Permohonan Penambahan Daya Listrik",visible:this.role("marchandAdmin"),icon:"pi pi-fw pi-bolt",to:"/Marchand/DayaListrik",class:"ggi-nav-item"},{label:"Form Pengajuan Refund Deposit Fit Out",visible:this.role("marchandAdmin"),icon:"pi pi-money-bill",to:"/Marchand/RDP",class:"ggi-nav-item"}]},{label:"Admin Forms",visible:this.role("marchandAdmin"),icon:"pi pi-fw pi-user",class:"ggi-nav-item",items:[{label:"Surat Permohonan Izin Buka Toko",visible:this.role("marchandAdmin"),icon:"pi pi-fw pi-cog",to:"/Marchand/IzinBukaToko",class:"ggi-nav-item"},{label:"Form Berita Acara Pengembalian Security Deposit Fitout",visible:this.role("marchandAdmin"),icon:"pi pi-fw pi-pound",to:"/Marchand/PengambilanRefund",class:"ggi-nav-item"}]},{label:"Setting",visible:this.role("superadmin"),icon:"pi pi-fw pi-cog",class:"ggi-nav-item",items:[{visible:this.role("superadmin"),label:"Internet Setting",icon:"pi pi-wifi",to:"/setting/internetSetting"},{visible:this.role("superadmin"),label:"User Setting",icon:"pi pi-fw pi-user",to:"/setting/userSetting"}]}],splitMenu:[{label:"Profile",icon:"",to:"/profile"},{separator:!0},{label:"Sign Out",icon:"pi pi-sign-out",command:()=>this.handleLogout()}]}},methods:{getFormLabelCustomer(){return this.role("superadmin")?"Customer Forms Mazenta/Banara/Naraya":"Customer Forms"},getFormLabelAdmin(){return this.role("superadmin")?"Admin Forms Mazenta/Banara/Naraya":"Admin Forms"},handleLogout(){this.$router.push({name:"Login"}),this.$store.commit("logout")},role(e){return this.$store.getters.getRole===e},goToProfile(){this.$router.push({name:"profile"})},goToInternet(){this.$router.push({name:"internetSetting"})}},mounted(){this.fullname=this.$store.getters.getUser.fullname}},D=a(4100);const F=(0,D.c)(S,[["render",p],["__scopeId","data-v-2d8d59b4"]]);var k=F,z=a(660),j={name:"App",components:{NavigationBar:k,Toast:z.c},computed:{isLoggedIn(){return this.$store.getters.getLoginState}},beforeCreate(){this.$store.commit("initStore")}};const I=(0,D.c)(j,[["render",l]]);var C=I,L=a(7464),M=a.p+"img/estate1.png";const K={style:{"font-size":"16px"},class:"flex col-12 mt-3"},O=(0,t.QD)("div",{class:"text-ggi-red",style:{"font-size":"90px","text-align":"center","vertical-align":"middle",margin:"150px"}}," Welcome ",-1),N=(0,t.QD)("div",{class:"flex col-12 align-items-center justify-content-center"},[(0,t.QD)("img",{src:M,class:"estate-logo"})],-1);function B(e,n,a,i,r,o){return(0,t.Wz)(),(0,t.An)(t.ae,null,[(0,t.QD)("div",K," Login terakhir Anda adalah pada hari "+(0,s.WA)(this.lastLogin),1),O,N],64)}var E={name:"HomeView",data(){return{lastLogin:this.$store.getters.getLastLogin}}};const T=(0,D.c)(E,[["render",B]]);var R=T,x=a(6716);const W=[{path:"/",name:"Home",component:R},{path:"/Form/Internet",name:"mazentaInternet",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(336),a.e(332),a.e(884),a.e(304),a.e(222)]).then(a.bind(a,5222))},{path:"/Form/IzinKerja",name:"mazentaIzinKerja",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(336),a.e(332),a.e(328)]).then(a.bind(a,7328))},{path:"/Form/CC",name:"mazentaCC",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(336),a.e(332),a.e(480)]).then(a.bind(a,6100))},{path:"/Form/RefundDeposit",name:"mazentaRDP",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(336),a.e(544)]).then(a.bind(a,7544))},{path:"/Form/PengecekanAkhir",name:"mazentaJPAP",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(336),a.e(332),a.e(884),a.e(560)]).then(a.bind(a,3560))},{path:"/Form/DataPindah",name:"mazentaDataPindah",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(336),a.e(332),a.e(584)]).then(a.bind(a,584))},{path:"/Form/DataBaru",name:"mazentaDataBaru",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(336),a.e(332),a.e(793)]).then(a.bind(a,7793))},{path:"/Form/PemesananKartu",name:"mazentaKartuPem",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(336),a.e(884),a.e(900)]).then(a.bind(a,4900))},{path:"/Form/PerpanjanganKartu",name:"mazentaKartu",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(336),a.e(884),a.e(240)]).then(a.bind(a,240))},{path:"/Form/SuratPernyataan",name:"mazentaSurat",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(336),a.e(884),a.e(72)]).then(a.bind(a,8072))},{path:"/Marchand/Internet",name:"marchandInternet",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(336),a.e(332),a.e(884),a.e(304),a.e(888)]).then(a.bind(a,5888))},{path:"/Marchand/CC",name:"marchandCC",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(336),a.e(332),a.e(884),a.e(742)]).then(a.bind(a,4742))},{path:"/Marchand/IzinKerja",name:"marchandKerja",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(336),a.e(332),a.e(884),a.e(220)]).then(a.bind(a,2220))},{path:"/Marchand/IzinBukaToko",name:"marchandIzinToko",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(336),a.e(332),a.e(804)]).then(a.bind(a,9804))},{path:"/Marchand/DayaListrik",name:"marchandDayaListrik",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(336),a.e(332),a.e(456)]).then(a.bind(a,456))},{path:"/Marchand/RDP",name:"marchandRDP",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(336),a.e(884),a.e(948)]).then(a.bind(a,8948))},{path:"/Marchand/PengambilanRefund",name:"marchandRefundDp",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(336),a.e(332),a.e(884),a.e(376)]).then(a.bind(a,4376))},{path:"/profile",name:"profile",component:()=>Promise.all([a.e(564),a.e(100),a.e(984),a.e(312)]).then(a.bind(a,3312))},{path:"/login",name:"Login",component:()=>Promise.all([a.e(564),a.e(984),a.e(796)]).then(a.bind(a,420))},{path:"/setting/internetSetting",name:"internetSetting",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(332),a.e(884),a.e(596)]).then(a.bind(a,596))},{path:"/setting/userSetting",name:"userSetting",component:()=>Promise.all([a.e(564),a.e(100),a.e(572),a.e(884),a.e(536)]).then(a.bind(a,6536))}],J=(0,L.gv)({history:(0,L.oz)("/VueDeployment/"),routes:W});J.beforeEach(((e,n,a)=>{let i=x.c.getters.getLoginState,t=x.c.getters.getRole;i||"Login"===e.name?"superadmin"===t?a():(e.name.includes("mazenta")||e.name.includes("banara")||e.name.includes("naraya"))&&"mazentaAdmin"!==t&&"banaraAdmin"!==t&&"narayaAdmin"!==t||e.name.includes("marchand")&&"marchandAdmin"!==t?a({name:"Home"}):a():a({name:"Login"})}));var $=J,_=a(9476),Q=a(9716),H=a(2817);const U=(0,i.W0)(C);U.use(_.cp).use($).use(x.c).use(Q.c).use(H.c).mount("#app")},6716:function(e,n,a){var i=a(7192);n.c=(0,i.eC)({state:{jwt:null,user:null,adminData:null},mutations:{initStore(e){e.user=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,e.jwt=localStorage.getItem("jwt")?JSON.parse(localStorage.getItem("jwt")):null,e.adminData=localStorage.getItem("adminData")?JSON.parse(localStorage.getItem("adminData")):null},login(e,n){e.user=n.user,e.jwt=n.jwt,localStorage.setItem("user",JSON.stringify(e.user)),localStorage.setItem("jwt",JSON.stringify(e.jwt))},adminDataInit(e,n){e.adminData=n,localStorage.setItem("adminData",JSON.stringify(e.adminData))},logout(e){e.jwt=null,e.user=null,e.adminData=null,localStorage.setItem("user",JSON.stringify(e.user)),localStorage.setItem("jwt",JSON.stringify(e.jwt)),localStorage.setItem("adminData",JSON.stringify(e.adminData))}},actions:{},modules:{},getters:{getUser:e=>e.user,getJWT:e=>e.jwt,getLoginState:e=>null!=e.user,getUsername:e=>e.user?e.user.fullname:null,getProject:e=>e.adminData?e.adminData.id:null,getRole:e=>e.adminData?e.adminData.name:null,getLastLogin:e=>e.user?e.user.loginDate:null}})}},n={};function a(i){var t=n[i];if(void 0!==t)return t.exports;var r=n[i]={exports:{}};return e[i].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(n,i,t,r){if(!i){var o=1/0;for(u=0;u<e.length;u++){i=e[u][0],t=e[u][1],r=e[u][2];for(var l=!0,s=0;s<i.length;s++)(!1&r||o>=r)&&Object.keys(a.O).every((function(e){return a.O[e](i[s])}))?i.splice(s--,1):(l=!1,r<o&&(o=r));if(l){e.splice(u--,1);var m=t();void 0!==m&&(n=m)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[i,t,r]}}(),function(){a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,{a:n}),n}}(),function(){a.d=function(e,n){for(var i in n)a.o(n,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(n,i){return a.f[i](e,n),n}),[]))}}(),function(){a.u=function(e){return"js/"+e+".js"}}(),function(){a.miniCssF=function(e){return"css/"+e+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="client:";a.l=function(i,t,r,o){if(e[i])e[i].push(t);else{var l,s;if(void 0!==r)for(var m=document.getElementsByTagName("script"),u=0;u<m.length;u++){var c=m[u];if(c.getAttribute("src")==i||c.getAttribute("data-webpack")==n+r){l=c;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",n+r),l.src=i),e[i]=[t];var d=function(n,a){l.onerror=l.onload=null,clearTimeout(p);var t=e[i];if(delete e[i],l.parentNode&&l.parentNode.removeChild(l),t&&t.forEach((function(e){return e(a)})),n)return n(a)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/VueDeployment/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,a,i,t){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(a){if(r.onerror=r.onload=null,"load"===a.type)i();else{var o=a&&a.type,l=a&&a.target&&a.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+l+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=l,r.parentNode&&r.parentNode.removeChild(r),t(s)}};return r.onerror=r.onload=o,r.href=n,a?a.parentNode.insertBefore(r,a.nextSibling):document.head.appendChild(r),r},n=function(e,n){for(var a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var t=a[i],r=t.getAttribute("data-href")||t.getAttribute("href");if("stylesheet"===t.rel&&(r===e||r===n))return t}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){t=o[i],r=t.getAttribute("data-href");if(r===e||r===n)return t}},i=function(i){return new Promise((function(t,r){var o=a.miniCssF(i),l=a.p+o;if(n(o,l))return t();e(i,l,null,t,r)}))},t={524:0};a.f.miniCss=function(e,n){var a={312:1,796:1};t[e]?n.push(t[e]):0!==t[e]&&a[e]&&n.push(t[e]=i(e).then((function(){t[e]=0}),(function(n){throw delete t[e],n})))}}}(),function(){var e={524:0};a.f.j=function(n,i){var t=a.o(e,n)?e[n]:void 0;if(0!==t)if(t)i.push(t[2]);else{var r=new Promise((function(a,i){t=e[n]=[a,i]}));i.push(t[2]=r);var o=a.p+a.u(n),l=new Error,s=function(i){if(a.o(e,n)&&(t=e[n],0!==t&&(e[n]=void 0),t)){var r=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;l.message="Loading chunk "+n+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,t[1](l)}};a.l(o,s,"chunk-"+n,n)}},a.O.j=function(n){return 0===e[n]};var n=function(n,i){var t,r,o=i[0],l=i[1],s=i[2],m=0;if(o.some((function(n){return 0!==e[n]}))){for(t in l)a.o(l,t)&&(a.m[t]=l[t]);if(s)var u=s(a)}for(n&&n(i);m<o.length;m++)r=o[m],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},i=self["webpackChunkclient"]=self["webpackChunkclient"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=a.O(void 0,[999],(function(){return a(8444)}));i=a.O(i)})();
//# sourceMappingURL=app.js.map
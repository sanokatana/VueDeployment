"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[900],{3740:function(e,t,a){a.d(t,{c:function(){return d}});var o=a(1368),l=a(7988),r=a(9435),s={root:"p-blockui-container"},n=r.c.extend({name:"blockui",classes:s}),i=a(4108),u={name:"BaseBlockUI",extends:l.c,props:{blocked:{type:Boolean,default:!1},fullScreen:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0}},style:n,provide:function(){return{$parentInstance:this}}},d={name:"BlockUI",extends:u,emits:["block","unblock"],mask:null,data:function(){return{isBlocked:!1}},watch:{blocked:function(e){!0===e?this.block():this.unblock()}},mounted:function(){this.blocked&&this.block()},methods:{block:function(){var e="p-blockui p-component-overlay p-component-overlay-enter";this.fullScreen?(e+=" p-blockui-document",this.mask=o.kP.createElement("div",{style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%"},class:!this.isUnstyled&&e,"p-bind":this.ptm("mask")}),document.body.appendChild(this.mask),o.kP.blockBodyScroll(),document.activeElement.blur()):(this.mask=o.kP.createElement("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},class:!this.isUnstyled&&e,"p-bind":this.ptm("mask")}),this.$refs.container.appendChild(this.mask)),this.autoZIndex&&o.eI.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal),this.isBlocked=!0,this.$emit("block")},unblock:function(){var e=this;!this.isUnstyled&&o.kP.addClass(this.mask,"p-component-overlay-leave"),o.kP.hasCSSAnimation(this.mask)>0?this.mask.addEventListener("animationend",(function(){e.removeMask()})):this.removeMask()},removeMask:function(){o.eI.clear(this.mask),this.fullScreen?(document.body.removeChild(this.mask),o.kP.unblockBodyScroll()):this.$refs.container.removeChild(this.mask),this.isBlocked=!1,this.$emit("unblock")}}},c=["aria-busy"];function m(e,t,a,o,l,r){return(0,i.Wz)(),(0,i.An)("div",(0,i.Gu)({ref:"container",class:e.cx("root"),"aria-busy":l.isBlocked},e.ptm("root")),[(0,i.oF)(e.$slots,"default")],16,c)}d.render=m},4900:function(e,t,a){a.r(t),a.d(t,{default:function(){return Me}});var o=a(4108),l=a(9096);const r={class:"col-12 offset-10"},s=(0,o.QD)("div",{class:"flex justify-content-between align-items-center"},[(0,o.QD)("h1",{class:"text-ggi-red"},"Panel Form - Pemesanan Kartu Akses Masuk Pemilik / Penghuni / Warga")],-1),n={class:"flex justify-content-start mb-4"},i={class:"p-input-icon-left"},u=(0,o.QD)("i",{class:"pi pi-search"},null,-1);function d(e,t,a,d,c,m){const f=(0,o.E1)("Button"),p=(0,o.E1)("InputText"),b=(0,o.E1)("Dropdown"),y=(0,o.E1)("BlockUI"),h=(0,o.E1)("Column"),x=(0,o.E1)("StatusTag"),v=(0,o.E1)("DataTable"),C=(0,o.E1)("formModal");return(0,o.Wz)(),(0,o.An)("div",r,[s,(0,o.QD)("div",n,[(0,o.QD)("span",null,[(0,o.K2)(f,{autoRezise:"false",label:"Create",icon:"pi pi-plus",onClick:t[0]||(t[0]=e=>m.showModal("new")),class:"mr-2"})]),(0,o.QD)("span",i,[u,(0,o.K2)(p,{modelValue:c.filters["global"].value,"onUpdate:modelValue":t[1]||(t[1]=e=>c.filters["global"].value=e),placeholder:"Keyword Search",class:"w-10rem"},null,8,["modelValue"])]),(0,o.QD)("span",null,[(0,o.K2)(b,{modelValue:c.selectedStatus,"onUpdate:modelValue":t[2]||(t[2]=e=>c.selectedStatus=e),options:c.statusfilter,placeholder:"Status",class:"w-full md:w-9rem ml-2"},null,8,["modelValue","options"])]),(0,o.K2)(y,{blocked:"superadmin"!=this.role},{default:(0,o.Ql)((()=>[(0,o.QD)("span",null,[(0,o.K2)(b,{modelValue:c.selectedProject,"onUpdate:modelValue":t[3]||(t[3]=e=>c.selectedProject=e),options:c.projectfilter,placeholder:"Project",class:"w-full md:w-9rem ml-2"},null,8,["modelValue","options"])])])),_:1},8,["blocked"])]),(0,o.K2)(v,{value:c.formData,selection:c.selectedForm,"onUpdate:selection":t[4]||(t[4]=e=>c.selectedForm=e),selectionMode:"single",onRowSelect:t[5]||(t[5]=e=>m.showModal("edit")),responsiveLayout:"scroll",sortField:"id",sortOrder:1,paginator:!0,rows:15,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[15,20,30],removableSort:"",dataKey:"id",filters:c.filters,"onUpdate:filters":t[6]||(t[6]=e=>c.filters=e),filterDisplay:"row"},{default:(0,o.Ql)((()=>[(0,o.K2)(h,{field:"attributes.formid",header:"Form ID"}),(0,o.K2)(h,{field:"attributes.namalengkap",header:"Nama Lengkap"}),(0,o.K2)(h,{field:"attributes.cluster",header:"Cluster"}),(0,o.K2)(h,{field:"attributes.blok",header:"Blok"}),(0,o.K2)(h,{field:"attributes.nounit",header:"No. Unit"}),(0,o.K2)(h,{field:"attributes.status",header:"Status"},{body:(0,o.Ql)((e=>[(0,o.K2)(x,{modelValue:e.data.attributes.status,"onUpdate:modelValue":t=>e.data.attributes.status=t},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,o.K2)(h,{field:"attributes.project",header:"Project"},{body:(0,o.Ql)((e=>[(0,o.QD)("span",null,(0,l.WA)(m.getStatusText(e.data.attributes.project)),1)])),_:1})])),_:1},8,["value","selection","filters"]),(0,o.K2)(C,{displayModal:c.displayModal,"onUpdate:displayModal":t[7]||(t[7]=e=>c.displayModal=e),form:c.selectedForm,"onUpdate:form":t[8]||(t[8]=e=>c.selectedForm=e),refreshList:m.getAllForms,action:c.action},null,8,["displayModal","form","refreshList","action"])])}var c=a(4432),m=a(5160),f=a(2340),p=a(9140),b=a(1147),y=a(6960),h=a(3740),x=a(8331),v=a(6716),C=a(8830);const w={key:0,class:"p-m-0"},D=(0,o.QD)("span",{class:"text-dgas-red"},"Edit Document ",-1),k=[D],g={key:1,class:"p-m-0"},V=(0,o.QD)("span",{class:"text-dgas-red"},"Create Document",-1),Q=[V],K={ref:"form"},j={class:"formgrid grid"},T={class:"field col-12 md:col-12"},F=(0,o.QD)("label",null,[(0,o.QD)("span",null,"Status")],-1),U={class:"field col-12 md:col-3"},P=(0,o.QD)("label",null,[(0,o.QD)("span",null,"Nama Lengkap")],-1),A={class:"field col-12 md:col-3"},I=(0,o.QD)("label",null,[(0,o.QD)("span",null,"Cluster")],-1),B={class:"field col-12 md:col-3"},S=(0,o.QD)("label",null,[(0,o.QD)("span",null,"Blok")],-1),M={class:"field col-12 md:col-3"},E=(0,o.QD)("label",null,[(0,o.QD)("span",null,"No. Unit")],-1),L={class:"field col-12 md:col-12"},$=(0,o.QD)("label",null,"Jenis Kartu Untuk: (Pilih Satu)",-1),R=(0,o.QD)("div",{class:"field col-12 md:col-3"},[(0,o.QD)("h3",{class:"flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"}," Plat No. Kendaraan")],-1),N=(0,o.QD)("div",{class:"field col-12 md:col-3"},[(0,o.QD)("h3",{class:"flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"}," Merek/Jenis Kendaraan")],-1),z=(0,o.QD)("div",{class:"field col-12 md:col-3"},[(0,o.QD)("h3",{class:"flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"}," Warna")],-1),O=(0,o.QD)("div",{class:"field col-12 md:col-3"},[(0,o.QD)("h3",{class:"flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"}," Biaya")],-1),W={class:"field col-12 md:col-3"},_={class:"field col-12 md:col-3"},q={class:"field col-12 md:col-3"},J={class:"field col-12 md:col-3"},Z={class:"field col-12 md:col-3"},G={class:"field col-12 md:col-3"},H={class:"field col-12 md:col-3"},X={class:"field col-12 md:col-3"},Y={class:"field col-12 md:col-3"},ee={class:"field col-12 md:col-3"},te={class:"field col-12 md:col-3"},ae={class:"field col-12 md:col-3"},oe={class:"field col-12 md:col-3"},le={class:"field col-12 md:col-3"},re={class:"field col-12 md:col-3"},se={class:"field col-12 md:col-3"},ne=(0,o.QD)("div",{class:"field col-12 md:col-6"},null,-1),ie=(0,o.QD)("div",{class:"field col-12 md:col-3"},[(0,o.QD)("h3",{class:"flex flex-wrap justify-content-center text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"}," Jumlah")],-1),ue={class:"field col-12 md:col-3"},de={class:"field col-12 md:col-4"},ce=(0,o.QD)("label",null,"Pemesanan Kartu Akses Masuk,Sebanyak",-1),me={class:"field col-12 md:col-3"},fe=(0,o.QD)("label",null," Buah ",-1),pe={class:"field col-12 md:col-5"},be=(0,o.QD)("label",null,"Admin Name:",-1),ye={class:"flex justify-content-between flex-wrap"},he={class:"flex"},xe={class:"flex"};function ve(e,t,a,l,r,s){const n=(0,o.E1)("Button"),i=(0,o.E1)("Dropdown"),u=(0,o.E1)("InputText"),d=(0,o.E1)("InputNumber"),c=(0,o.E1)("ConfirmDialog"),m=(0,o.E1)("Dialog");return(0,o.Wz)(),(0,o.Az)(m,{visible:a.displayModal,modal:!0,closable:!1,style:{width:"90vh"}},{header:(0,o.Ql)((()=>[a.form.id?((0,o.Wz)(),(0,o.An)("h3",w,k)):((0,o.Wz)(),(0,o.An)("h3",g,Q)),(0,o.K2)(n,{label:"Close",icon:"pi pi-times",class:"button-rounded button-text ml-auto button-secondary",onClick:s.handleClose},null,8,["onClick"])])),footer:(0,o.Ql)((()=>[(0,o.QD)("div",ye,[(0,o.QD)("div",he,[(0,o.K2)(n,{label:"Print",icon:"pi pi-print",onClick:t[26]||(t[26]=e=>s.fillForm())})]),(0,o.QD)("div",xe,[(0,o.K2)(n,{label:"Delete",icon:"pi pi-trash",onClick:s.confirmDelete},null,8,["onClick"]),(0,o.K2)(n,{label:"edit"==a.action?"Save":"Add Document",icon:"edit"==a.action?"pi pi-save":"pi pi-plus",onClick:t[27]||(t[27]=e=>s.handleSubmit(a.action))},null,8,["label","icon"])])]),(0,o.K2)(c)])),default:(0,o.Ql)((()=>[(0,o.QD)("form",K,[(0,o.QD)("div",j,[(0,o.QD)("div",T,[F,(0,o.K2)(i,{modelValue:s.formCopy.attributes.status,"onUpdate:modelValue":t[0]||(t[0]=e=>s.formCopy.attributes.status=e),options:r.statusoptions,class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue","options"])]),(0,o.QD)("div",U,[P,(0,o.K2)(u,{id:"name",modelValue:s.formCopy.attributes.namalengkap,"onUpdate:modelValue":t[1]||(t[1]=e=>s.formCopy.attributes.namalengkap=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",A,[I,(0,o.K2)(u,{id:"name",modelValue:s.formCopy.attributes.cluster,"onUpdate:modelValue":t[2]||(t[2]=e=>s.formCopy.attributes.cluster=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",B,[S,(0,o.K2)(u,{id:"name",modelValue:s.formCopy.attributes.blok,"onUpdate:modelValue":t[3]||(t[3]=e=>s.formCopy.attributes.blok=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",M,[E,(0,o.K2)(u,{id:"name",modelValue:s.formCopy.attributes.nounit,"onUpdate:modelValue":t[4]||(t[4]=e=>s.formCopy.attributes.nounit=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",L,[$,(0,o.K2)(i,{modelValue:s.formCopy.attributes.jeniskartu,"onUpdate:modelValue":t[5]||(t[5]=e=>s.formCopy.attributes.jeniskartu=e),options:r.jenisOptions,class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue","options"])]),R,N,z,O,(0,o.QD)("div",W,[(0,o.K2)(u,{id:"name",modelValue:s.formCopy.attributes.plat1,"onUpdate:modelValue":t[6]||(t[6]=e=>s.formCopy.attributes.plat1=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",_,[(0,o.K2)(u,{id:"name",modelValue:s.formCopy.attributes.jenis1,"onUpdate:modelValue":t[7]||(t[7]=e=>s.formCopy.attributes.jenis1=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",q,[(0,o.K2)(u,{id:"name",modelValue:s.formCopy.attributes.warna1,"onUpdate:modelValue":t[8]||(t[8]=e=>s.formCopy.attributes.warna1=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",J,[(0,o.K2)(d,{modelValue:s.formCopy.attributes.biaya1,"onUpdate:modelValue":t[9]||(t[9]=e=>s.formCopy.attributes.biaya1=e),mode:"currency",currency:"IDR",class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",Z,[(0,o.K2)(u,{id:"name",modelValue:s.formCopy.attributes.plat2,"onUpdate:modelValue":t[10]||(t[10]=e=>s.formCopy.attributes.plat2=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",G,[(0,o.K2)(u,{id:"name",modelValue:s.formCopy.attributes.jenis2,"onUpdate:modelValue":t[11]||(t[11]=e=>s.formCopy.attributes.jenis2=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",H,[(0,o.K2)(u,{id:"name",modelValue:s.formCopy.attributes.warna2,"onUpdate:modelValue":t[12]||(t[12]=e=>s.formCopy.attributes.warna2=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",X,[(0,o.K2)(d,{modelValue:s.formCopy.attributes.biaya2,"onUpdate:modelValue":t[13]||(t[13]=e=>s.formCopy.attributes.biaya2=e),mode:"currency",currency:"IDR",class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",Y,[(0,o.K2)(u,{id:"name",modelValue:s.formCopy.attributes.plat3,"onUpdate:modelValue":t[14]||(t[14]=e=>s.formCopy.attributes.plat3=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",ee,[(0,o.K2)(u,{id:"name",modelValue:s.formCopy.attributes.jenis3,"onUpdate:modelValue":t[15]||(t[15]=e=>s.formCopy.attributes.jenis3=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",te,[(0,o.K2)(u,{id:"name",modelValue:s.formCopy.attributes.warna3,"onUpdate:modelValue":t[16]||(t[16]=e=>s.formCopy.attributes.warna3=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",ae,[(0,o.K2)(d,{modelValue:s.formCopy.attributes.biaya3,"onUpdate:modelValue":t[17]||(t[17]=e=>s.formCopy.attributes.biaya3=e),mode:"currency",currency:"IDR",class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",oe,[(0,o.K2)(u,{id:"name",modelValue:s.formCopy.attributes.plat4,"onUpdate:modelValue":t[18]||(t[18]=e=>s.formCopy.attributes.plat4=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",le,[(0,o.K2)(u,{id:"name",modelValue:s.formCopy.attributes.jenis4,"onUpdate:modelValue":t[19]||(t[19]=e=>s.formCopy.attributes.jenis4=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",re,[(0,o.K2)(u,{id:"name",modelValue:s.formCopy.attributes.warna4,"onUpdate:modelValue":t[20]||(t[20]=e=>s.formCopy.attributes.warna4=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",se,[(0,o.K2)(d,{modelValue:s.formCopy.attributes.biaya4,"onUpdate:modelValue":t[21]||(t[21]=e=>s.formCopy.attributes.biaya4=e),mode:"currency",currency:"IDR",class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),ne,ie,(0,o.QD)("div",ue,[(0,o.K2)(d,{modelValue:s.totalPrice,"onUpdate:modelValue":t[22]||(t[22]=e=>s.totalPrice=e),disabled:"",mode:"currency",currency:"IDR",class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",de,[ce,(0,o.K2)(u,{modelValue:s.formCopy.attributes.sebanyak,"onUpdate:modelValue":t[23]||(t[23]=e=>s.formCopy.attributes.sebanyak=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",me,[fe,(0,o.K2)(u,{modelValue:s.buah,"onUpdate:modelValue":t[24]||(t[24]=e=>s.buah=e),disabled:"",class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])]),(0,o.QD)("div",pe,[be,(0,o.K2)(u,{id:"name",modelValue:s.formCopy.attributes.admin,"onUpdate:modelValue":t[25]||(t[25]=e=>s.formCopy.attributes.admin=e),class:"text-base text-color surface-overlay surface-border border-round appearance-none outline-none focus:border-primary w-full"},null,8,["modelValue"])])])],512)])),_:1},8,["visible"])}a(2168),a(5104),a(8312);var Ce=a(100),we=a(3952),De=a(6592),ke=a(884),ge=a.n(ke),Ve=a(3592),Qe=a.p+"assets/pdf/PemesananKartu.pdf",Ke=a.p+"assets/pdf/PemesananKartuBanara.pdf",je=a.p+"assets/pdf/PemesananKartuNaraya.pdf";let Te=new f.c;var Fe={components:{Dialog:Ce.c,Button:C.c,ConfirmDialog:we.c,InputText:y.c,Dropdown:p.c,InputNumber:De.c},props:["displayModal","form","refreshList","action"],res:null,data(){return{jenisOptions:["Tempat Tinggal","Usaha","Gudang","Kantor","Sekolah","Kost","Jemputan","Karyawan"],statusoptions:["Batal","Aktif"]}},methods:{formatPrice(e){const t=e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");return`${t}`},async fillForm(){try{let e,t=this.formCopy.attributes.project,a=v.c.getters.getRole;"mazentaAdmin"!==a&&"superadmin"!==a||1!==t?"banaraAdmin"!==a&&"superadmin"!==a||2!==t?"narayaAdmin"!==a&&"superadmin"!==a||3!==t||(e=await fetch(je).then((e=>e.arrayBuffer()))):e=await fetch(Ke).then((e=>e.arrayBuffer())):e=await fetch(Qe).then((e=>e.arrayBuffer()));const o=await Ve.PDFDocument.load(e),l=o.getForm();l.getTextField("namalengkap").setText(this.formCopy.attributes.namalengkap),l.getTextField("cluster").setText(this.formCopy.attributes.cluster),l.getTextField("blokunit").setText(this.formCopy.attributes.blok+"-"+this.formCopy.attributes.nounit),l.getTextField("jeniskartu").setText(this.formCopy.attributes.jeniskartu??""),l.getTextField("plat1").setText(this.formCopy.attributes.plat1??""),l.getTextField("plat2").setText(this.formCopy.attributes.plat2??""),l.getTextField("plat3").setText(this.formCopy.attributes.plat3??""),l.getTextField("plat4").setText(this.formCopy.attributes.plat4??""),l.getTextField("jenis1").setText(this.formCopy.attributes.jenis1??""),l.getTextField("jenis2").setText(this.formCopy.attributes.jenis2??""),l.getTextField("jenis3").setText(this.formCopy.attributes.jenis3??""),l.getTextField("jenis4").setText(this.formCopy.attributes.jenis4??""),l.getTextField("warna1").setText(this.formCopy.attributes.warna1??""),l.getTextField("warna2").setText(this.formCopy.attributes.warna2??""),l.getTextField("warna3").setText(this.formCopy.attributes.warna3??""),l.getTextField("warna4").setText(this.formCopy.attributes.warna4??""),l.getTextField("biaya1").setText(this.formatPrice(this.formCopy.attributes.biaya1??"")),l.getTextField("biaya2").setText(this.formatPrice(this.formCopy.attributes.biaya2??"")),l.getTextField("biaya3").setText(this.formatPrice(this.formCopy.attributes.biaya3??"")),l.getTextField("biaya4").setText(this.formatPrice(this.formCopy.attributes.biaya4??"")),l.getTextField("admin").setText(this.formCopy.attributes.admin),l.getTextField("jumlah").setText(this.formatPrice(this.totalPrice)),l.getTextField("sebanyak").setText(this.formCopy.attributes.sebanyak??""),l.getTextField("buah").setText(this.buah);const r=await o.save(),s=new Blob([r],{type:"application/pdf"}),n=URL.createObjectURL(s);window.open(n,"_blank"),URL.revokeObjectURL(n)}catch(e){console.error("Error while processing PDF:",e)}},confirmDelete(){this.$confirm.require({message:"Are you sure you want to delete this form?",header:`Delete Form #${this.form.id}?`,icon:"pi pi-exclamation-triangle",acceptLabel:"Delete item",rejectLabel:"Cancel",acceptClass:"p-button-danger",rejectClass:"p-button-primary",accept:()=>{this.deleteForm()},reject:()=>{}})},async deleteForm(){try{let e=v.c.getters.getRole,t=null,a=this.formCopy.id;"mazentaAdmin"==e&&(t=await Te.pemesananKartu.deleteByID(a)),this.handleClose(),this.refreshList(),this.$toast.add({severity:"success",summary:"Form Update Success",detail:`Form #${t.data.data.id} has been saved`,life:3e3})}catch(e){console.error("Error while Deleting form:",e)}},handleClose(){this.$emit("update:form",null),this.$emit("update:displayModal",!1)},async handleSubmit(){try{let e=v.c.getters.getRole;if("mazentaAdmin"==e){if(null==this.form.id){let e=ge().stringify({filters:{project:{$eq:1}}}),t=await Te.pemesananKartu.findAll(e);this.formID=t.data.meta,this.formCopy.attributes.formid=this.formID.pagination.total+1}this.formCopy.attributes.project=1}if("banaraAdmin"==e){if(null==this.form.id){let e=ge().stringify({filters:{project:{$eq:2}}}),t=await Te.pemesananKartu.findAll(e);this.formID=t.data.meta,this.formCopy.attributes.formid=this.formID.pagination.total+1}this.formCopy.attributes.project=2}if("narayaAdmin"==e){if(null==this.form.id){let e=ge().stringify({filters:{project:{$eq:3}}}),t=await Te.pemesananKartu.findAll(e);this.formID=t.data.meta,this.formCopy.attributes.formid=this.formID.pagination.total+1}this.formCopy.attributes.project=3}let t={...this.formCopy.attributes},a=this.formCopy.id,o=null,l={data:t};o=null==this.form.id?await Te.pemesananKartu.newEntry(l):await Te.pemesananKartu.updateByID(a,l),this.handleClose(),this.refreshList(),console.log(o),this.$toast.add({severity:"success",summary:"Form Update Success",detail:`Form #${o.data.data.id} has been saved`,life:3e3})}catch(e){console.error("Error while saving form:",e)}}},computed:{formCopy(){return{...this.form}},totalPrice(){const e=parseFloat(this.formCopy.attributes.biaya1)||0,t=parseFloat(this.formCopy.attributes.biaya2)||0,a=parseFloat(this.formCopy.attributes.biaya3)||0,o=parseFloat(this.formCopy.attributes.biaya4)||0,l=e+t+a+o;return l},buah(){const e=this.formCopy.attributes.sebanyak,t={1:"satu",2:"dua",3:"tiga",4:"empat"};return Object.prototype.hasOwnProperty.call(t,e)?t[e]:""}}},Ue=a(4100);const Pe=(0,Ue.c)(Fe,[["render",ve]]);var Ae=Pe,Ie=new f.c,Be={components:{DataTable:c.c,Column:m.c,InputText:y.c,formModal:Ae,Button:C.c,Dropdown:p.c,StatusTag:b.c,BlockUI:h.c},data(){return{formData:null,internetRate:null,action:null,selectedInternet:null,selectedForm:null,role:v.c.getters.getRole,displayModal:!1,statuses:["Batal","Aktif"],statusfilter:["Semua","Batal","Aktif"],selectedStatus:"Semua",projectfilter:["Project","Mazenta","Banara","Naraya"],selectedProject:"Project",filters:{global:{value:null,matchMode:x.yI.CONTAINS},"attributes.status":{value:null,matchMode:x.yI.EQUALS},"attributes.project":{value:null,matchMode:x.yI.EQUALS}}}},created(){this.getAllForms()},watch:{selectedStatus(e){"Semua"!==e?(this.filters["attributes.status"].value=e,this.getAllForms()):(this.filters["attributes.status"].value=null,this.getAllForms())},selectedProject(e){"Project"!==e?("Mazenta"==e&&(this.filters["attributes.project"].value=1),"Banara"==e&&(this.filters["attributes.project"].value=2),"Naraya"==e&&(this.filters["attributes.project"].value=3),this.getAllForms()):(this.filters["attributes.project"].value=null,this.getAllForms())}},methods:{getStatusText(e){switch(e){case 1:return"Mazenta";case 2:return"Banara";case 3:return"Naraya";default:return""}},async getAllForms(){try{let e=await Ie.pemesananKartu.findAll();this.filterInternet(e.data.data)}catch(e){console.log(e)}},filterInternet(e){let t=v.c.getters.getRole;this.formData=e.filter((e=>{const a=e.attributes.project;return"mazentaAdmin"==t?a&&1===a:"banaraAdmin"==t?a&&2===a:"narayaAdmin"==t?a&&3===a:"superadmin"==t?a:void 0}))},showModal(e){this.action=e,"new"==e&&(this.selectedForm={id:null,attributes:{}}),this.displayModal=!0}}};const Se=(0,Ue.c)(Be,[["render",d]]);var Me=Se}}]);
//# sourceMappingURL=900.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"3QvR":function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),t=u("mrSG"),o=u("+NVG"),r=u("ZZ/e"),i=function(){function n(n,l,u,e){this.postPvdr=n,this.router=l,this.toastController=u,this.actRoute=e,this.name_customer="",this.desc_customer=""}return n.prototype.ngOnInit=function(){var n=this;this.actRoute.params.subscribe(function(l){n.id=l.id,n.name_customer=l.name,n.desc_customer=l.desc,console.log(l)})},n.prototype.updateProses=function(){return t.b(this,void 0,void 0,function(){var n=this;return t.e(this,function(l){switch(l.label){case 0:return""!=this.name_customer?[3,2]:[4,this.toastController.create({message:"El nombre del terreno es requerido",duration:2e3})];case 1:return l.sent().present(),[3,5];case 2:return""!=this.desc_customer?[3,4]:[4,this.toastController.create({message:"La descripci\xf3n del terreno es requerida",duration:2e3})];case 3:return l.sent().present(),[3,5];case 4:this.postPvdr.postData({aksi:"update",customer_id:this.id,name_customer:this.name_customer,desc_customer:this.desc_customer},"file_aksi.php").subscribe(function(l){return t.b(n,void 0,void 0,function(){var n;return t.e(this,function(u){switch(u.label){case 0:return n=l.msg,l.success?(this.router.navigate(["/customer"]),[4,this.toastController.create({message:"Los datos se actualizaron correctamente",duration:2e3})]):[3,2];case 1:return u.sent().present(),[3,4];case 2:return[4,this.toastController.create({message:n,duration:2e3})];case 3:u.sent(),u.label=4;case 4:return[2]}})})}),l.label=5;case 5:return[2]}})})},n}(),a=function(){return function(){}}(),s=u("pMnS"),c=u("oBZk"),b=u("gIcY"),d=u("ZYCi"),g=e.mb({encapsulation:0,styles:[[""]],data:{}});function h(n){return e.Cb(0,[(n()(),e.ob(0,0,null,null,11,"ion-header",[],null,null,null,c.M,c.k)),e.nb(1,49152,null,0,r.z,[e.h,e.k],null,null),(n()(),e.ob(2,0,null,0,9,"ion-toolbar",[],null,null,null,c.db,c.B)),e.nb(3,49152,null,0,r.zb,[e.h,e.k],null,null),(n()(),e.ob(4,0,null,0,2,"ion-title",[],null,null,null,c.cb,c.A)),e.nb(5,49152,null,0,r.xb,[e.h,e.k],null,null),(n()(),e.Bb(-1,0,["Actualizar Terreno"])),(n()(),e.ob(7,0,null,0,4,"ion-buttons",[["slot","primary"]],null,null,null,c.F,c.d)),e.nb(8,49152,null,0,r.j,[e.h,e.k],null,null),(n()(),e.ob(9,0,null,0,2,"ion-back-button",[["color","tertiary"],["fill","outline"],["icon",""],["text","Back"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==e.xb(n,11).onClick(u)&&t),t},c.D,c.b)),e.nb(10,49152,null,0,r.e,[e.h,e.k],{color:[0,"color"],icon:[1,"icon"],text:[2,"text"]},null),e.nb(11,16384,null,0,r.f,[[2,r.fb],r.Eb],null,null),(n()(),e.ob(12,0,null,null,28,"ion-content",[],null,null,null,c.L,c.j)),e.nb(13,49152,null,0,r.s,[e.h,e.k],null,null),(n()(),e.ob(14,0,null,0,11,"ion-item",[],null,null,null,c.U,c.p)),e.nb(15,49152,null,0,r.F,[e.h,e.k],null,null),(n()(),e.ob(16,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,c.V,c.t)),e.nb(17,49152,null,0,r.L,[e.h,e.k],{position:[0,"position"]},null),(n()(),e.Bb(-1,0,[" Nombre del Terreno "])),(n()(),e.ob(19,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==e.xb(n,20)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.xb(n,20)._handleInputEvent(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(o.name_customer=u)&&t),t},c.Q,c.o)),e.nb(20,16384,null,0,r.Ib,[e.k],null,null),e.yb(1024,null,b.b,function(n){return[n]},[r.Ib]),e.nb(22,671744,null,0,b.e,[[8,null],[8,null],[8,null],[6,b.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.yb(2048,null,b.c,null,[b.e]),e.nb(24,16384,null,0,b.d,[[4,b.c]],null,null),e.nb(25,49152,null,0,r.E,[e.h,e.k],{type:[0,"type"]},null),(n()(),e.ob(26,0,null,0,11,"ion-item",[],null,null,null,c.U,c.p)),e.nb(27,49152,null,0,r.F,[e.h,e.k],null,null),(n()(),e.ob(28,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,c.V,c.t)),e.nb(29,49152,null,0,r.L,[e.h,e.k],{position:[0,"position"]},null),(n()(),e.Bb(-1,0,[" Descripci\xf3n del terreno "])),(n()(),e.ob(31,0,null,0,6,"ion-textarea",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==e.xb(n,32)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.xb(n,32)._handleInputEvent(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(o.desc_customer=u)&&t),t},c.bb,c.z)),e.nb(32,16384,null,0,r.Ib,[e.k],null,null),e.yb(1024,null,b.b,function(n){return[n]},[r.Ib]),e.nb(34,671744,null,0,b.e,[[8,null],[8,null],[8,null],[6,b.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.yb(2048,null,b.c,null,[b.e]),e.nb(36,16384,null,0,b.d,[[4,b.c]],null,null),e.nb(37,49152,null,0,r.vb,[e.h,e.k],null,null),(n()(),e.ob(38,0,null,0,2,"ion-button",[["color","tertiary"],["expand","block"],["fill","outline"],["padding",""]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.updateProses()&&e),e},c.E,c.c)),e.nb(39,49152,null,0,r.i,[e.h,e.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(n()(),e.Bb(-1,0,["Actualizar"]))],function(n,l){var u=l.component;n(l,10,0,"tertiary","","Back"),n(l,17,0,"floating"),n(l,22,0,u.name_customer),n(l,25,0,"text"),n(l,29,0,"floating"),n(l,34,0,u.desc_customer),n(l,39,0,"tertiary","block","outline")},function(n,l){n(l,19,0,e.xb(l,24).ngClassUntouched,e.xb(l,24).ngClassTouched,e.xb(l,24).ngClassPristine,e.xb(l,24).ngClassDirty,e.xb(l,24).ngClassValid,e.xb(l,24).ngClassInvalid,e.xb(l,24).ngClassPending),n(l,31,0,e.xb(l,36).ngClassUntouched,e.xb(l,36).ngClassTouched,e.xb(l,36).ngClassPristine,e.xb(l,36).ngClassDirty,e.xb(l,36).ngClassValid,e.xb(l,36).ngClassInvalid,e.xb(l,36).ngClassPending)})}function p(n){return e.Cb(0,[(n()(),e.ob(0,0,null,null,1,"app-updatecustomer",[],null,null,null,h,g)),e.nb(1,114688,null,0,i,[o.a,d.m,r.Jb,d.a],null,null)],function(n,l){n(l,1,0)},null)}var m=e.kb("app-updatecustomer",i,p,{},{},[]),v=u("Ip0R");u.d(l,"UpdatecustomerPageModuleNgFactory",function(){return f});var f=e.lb(a,[],function(n){return e.ub([e.vb(512,e.j,e.ab,[[8,[s.a,m]],[3,e.j],e.x]),e.vb(4608,v.k,v.j,[e.u,[2,v.r]]),e.vb(4608,b.g,b.g,[]),e.vb(4608,r.a,r.a,[e.z,e.g]),e.vb(4608,r.Db,r.Db,[r.a,e.j,e.q,v.c]),e.vb(4608,r.Gb,r.Gb,[r.a,e.j,e.q,v.c]),e.vb(1073742336,v.b,v.b,[]),e.vb(1073742336,b.f,b.f,[]),e.vb(1073742336,b.a,b.a,[]),e.vb(1073742336,r.Bb,r.Bb,[]),e.vb(1073742336,d.n,d.n,[[2,d.t],[2,d.m]]),e.vb(1073742336,a,a,[]),e.vb(1024,d.k,function(){return[[{path:"",component:i}]]},[])])})}}]);
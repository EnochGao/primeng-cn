"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[7201],{7381:(A,r,t)=>{t.d(r,{a:()=>Z,h:()=>h});var g=t(6895),e=t(1571);const v=["code"],n=["*"];let h=(()=>{class o{constructor(i){this.el=i,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(e.SBq))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-code"]],viewQuery:function(i,u){if(1&i&&e.Gf(v,5),2&i){let m;e.iGM(m=e.CRH())&&(u.codeViewChild=m.first)}},inputs:{lang:"lang",style:"style",styleClass:"styleClass"},ngContentSelectors:n,decls:5,vars:5,consts:[[3,"ngClass"],["code",""]],template:function(i,u){1&i&&(e.F$t(),e.TgZ(0,"pre",0)(1,"code",null,1),e.Hsn(3),e._uU(4,"\n"),e.qZA()()),2&i&&(e.Akn(u.style),e.Tol(u.styleClass),e.Q6J("ngClass","language-"+u.lang))},dependencies:[g.mk],encapsulation:2}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.ez]}),o})()},7201:(A,r,t)=>{t.r(r),t.d(r,{InputGroupDemoModule:()=>G});var g=t(6895),e=t(433),v=t(9624),n=t(1571),h=t(6440),Z=t(2863),o=t(6861),d=t(1445),i=t(4174),u=t(4619),m=t(485),b=t(3032),T=t(7381);function x(p,l){1&p&&n._UZ(0,"iframe",35)}let f=(()=>{class p{constructor(){this.checkbox1=!1,this.checkbox2=!1}}return p.\u0275fac=function(a){return new(a||p)},p.\u0275cmp=n.Xpm({type:p,selectors:[["ng-component"]],decls:95,vars:6,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","inputgroup","stackblitz","inputgroup-demo"],[1,"content-section","implementation"],[1,"card"],[1,"grid","p-fluid"],[1,"col-12","md:col-4"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],[1,"pi","pi-user"],["type","text","pInputText","","placeholder","Username"],["type","text","pInputText","","placeholder","Price"],["type","text","pInputText","","placeholder","Website"],[1,"grid"],[1,"col-12"],[1,"pi","pi-tags",2,"line-height","1.25"],[1,"pi","pi-shopping-cart",2,"line-height","1.25"],["type","button","pButton","","pRipple","","label","Search"],["type","text","pInputText","","placeholder","Keyword"],["type","button","pButton","","pRipple","","icon","pi pi-refresh","styleClass","p-button-warn"],["type","button","pButton","","pRipple","","icon","pi pi-check","styleClass","p-button-success"],["type","text","pInputText","","placeholder","Vote"],["type","button","pButton","","pRipple","","icon","pi pi-times","styleClass","p-button-danger"],[3,"ngModel","binary","ngModelChange"],["name","category","value","price",3,"ngModel","ngModelChange"],["name","category","value","site",3,"ngModel","ngModelChange"],[1,"content-section","documentation"],["header","inputgroupdemo.html"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputgroup","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-inputgroup-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["lang","markup"],["header","inputgroupdemo.ts"],["lang","typescript"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-inputgroup-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(a,s){1&a&&(n.TgZ(0,"div",0)(1,"div",1)(2,"h1"),n._uU(3,"InputGroup"),n.qZA(),n.TgZ(4,"p"),n._uU(5,"Text, icon, buttons and other content can be grouped next to an input."),n.qZA()(),n._UZ(6,"app-demoActions",2),n.qZA(),n.TgZ(7,"div",3)(8,"div",4)(9,"h5"),n._uU(10,"Addons"),n.qZA(),n.TgZ(11,"div",5)(12,"div",6)(13,"div",7)(14,"span",8),n._UZ(15,"i",9),n.qZA(),n._UZ(16,"input",10),n.qZA()(),n.TgZ(17,"div",6)(18,"div",7)(19,"span",8),n._uU(20,"$"),n.qZA(),n._UZ(21,"input",11),n.TgZ(22,"span",8),n._uU(23,".00"),n.qZA()()(),n.TgZ(24,"div",6)(25,"div",7)(26,"span",8),n._uU(27,"www"),n.qZA(),n._UZ(28,"input",12),n.qZA()()(),n.TgZ(29,"h5"),n._uU(30,"Multiple Addons"),n.qZA(),n.TgZ(31,"div",13)(32,"div",14)(33,"div",7)(34,"span",8),n._UZ(35,"i",15),n.qZA(),n.TgZ(36,"span",8),n._UZ(37,"i",16),n.qZA(),n._UZ(38,"input",11),n.TgZ(39,"span",8),n._uU(40,"$"),n.qZA(),n.TgZ(41,"span",8),n._uU(42,".00"),n.qZA()()()(),n.TgZ(43,"h5"),n._uU(44,"Button Addons"),n.qZA(),n.TgZ(45,"div",5)(46,"div",6)(47,"div",7),n._UZ(48,"button",17)(49,"input",18),n.qZA()(),n.TgZ(50,"div",6)(51,"div",7),n._UZ(52,"input",18)(53,"button",19),n.qZA()(),n.TgZ(54,"div",6)(55,"div",7),n._UZ(56,"button",20)(57,"input",21)(58,"button",22),n.qZA()()(),n.TgZ(59,"h5"),n._uU(60,"Checkbox and RadioButton"),n.qZA(),n.TgZ(61,"div",5)(62,"div",14)(63,"div",7)(64,"span",8)(65,"p-checkbox",23),n.NdJ("ngModelChange",function(c){return s.checkbox1=c}),n.qZA()(),n._UZ(66,"input",10),n.qZA()(),n.TgZ(67,"div",14)(68,"div",7),n._UZ(69,"input",11),n.TgZ(70,"span",8)(71,"p-radioButton",24),n.NdJ("ngModelChange",function(c){return s.category=c}),n.qZA()()()(),n.TgZ(72,"div",14)(73,"div",7)(74,"span",8)(75,"p-checkbox",23),n.NdJ("ngModelChange",function(c){return s.checkbox2=c}),n.qZA()(),n._UZ(76,"input",12),n.TgZ(77,"span",8)(78,"p-radioButton",25),n.NdJ("ngModelChange",function(c){return s.category=c}),n.qZA()()()()()()(),n.TgZ(79,"div",26)(80,"p-tabView")(81,"p-tabPanel",27)(82,"a",28)(83,"span"),n._uU(84,"GitHub\u4e2d\u8bbf\u95ee"),n.qZA()(),n.TgZ(85,"a",29)(86,"span"),n._uU(87,"StackBlitz\u4e2d\u7f16\u8f91"),n.qZA()(),n.TgZ(88,"app-code",30),n.IAx(),n._uU(89,'\n<h5>Addons</h5>\n<div class="grid p-fluid">\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <span class="p-inputgroup-addon"><i class="pi pi-user"></i></span>\n            <input type="text" pInputText placeholder="Username">\n        </div>\n    </div>\n\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <span class="p-inputgroup-addon">$</span>\n            <input type="text" pInputText placeholder="Price">\n            <span class="p-inputgroup-addon">.00</span>\n        </div>\n    </div>\n\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <span class="p-inputgroup-addon">www</span>\n            <input type="text" pInputText placeholder="Website">\n        </div>\n    </div>\n</div>\n\n<h5>Multiple Addons</h5>\n<div class="grid">\n    <div class="col-12">\n        <div class="p-inputgroup">\n            <span class="p-inputgroup-addon"><i class="pi pi-tags" style="line-height: 1.25;"></i></span>\n            <span class="p-inputgroup-addon"><i class="pi pi-shopping-cart" style="line-height: 1.25;"></i></span>\n            <input type="text" pInputText placeholder="Price">\n            <span class="p-inputgroup-addon">$</span>\n            <span class="p-inputgroup-addon">.00</span>\n        </div>\n    </div>\n</div>\n\n<h5>Button Addons</h5>\n<div class="grid p-fluid">\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <button type="button" pButton pRipple label="Search"></button>\n            <input type="text" pInputText placeholder="Keyword">\n        </div>\n    </div>\n\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <input type="text" pInputText placeholder="Keyword">\n            <button type="button" pButton pRipple icon="pi pi-refresh" styleClass="p-button-warn"></button>\n        </div>\n    </div>\n\n    <div class="col-12 md:col-4">\n        <div class="p-inputgroup">\n            <button type="button" pButton pRipple icon="pi pi-check" styleClass="p-button-success"></button>\n            <input type="text" pInputText placeholder="Vote">\n            <button type="button" pButton pRipple icon="pi pi-times" styleClass="p-button-danger"></button>\n        </div>\n    </div>\n</div>\n\n<h5>Checkbox and RadioButton</h5>\n<div class="grid p-fluid">\n    <div class="col-12">\n        <div class="p-inputgroup">\n            <span class="p-inputgroup-addon"><p-checkbox></p-checkbox></span>\n            <input type="text" pInputText placeholder="Username">\n        </div>\n    </div>\n\n    <div class="col-12">\n        <div class="p-inputgroup">\n            <input type="text" pInputText placeholder="Price">\n            <span class="p-inputgroup-addon"><p-radioButton name="category" value="price" [(ngModel)]="category"></p-radioButton></span>\n        </div>\n    </div>\n\n    <div class="col-12">\n        <div class="p-inputgroup">\n            <span class="p-inputgroup-addon"><p-checkbox></p-checkbox></span>\n            <input type="text" pInputText placeholder="Website">\n            <span class="p-inputgroup-addon"><p-radioButton name="category" value="site" [(ngModel)]="category"></p-radioButton></span>\n        </div>\n    </div>\n</div>\n'),n.fQ9(),n.qZA()(),n.TgZ(90,"p-tabPanel",31)(91,"app-code",32),n.IAx(),n._uU(92,"\nexport class InputGroupDemo {\n\n}\n"),n.fQ9(),n.qZA()(),n.TgZ(93,"p-tabPanel",33),n.YNc(94,x,1,0,"ng-template",34),n.qZA()()()),2&a&&(n.xp6(65),n.Q6J("ngModel",s.checkbox1)("binary",!0),n.xp6(6),n.Q6J("ngModel",s.category),n.xp6(4),n.Q6J("ngModel",s.checkbox2)("binary",!0),n.xp6(3),n.Q6J("ngModel",s.category))},dependencies:[e.JJ,e.On,h.o,Z.Hq,o.XZ,d.EU,i.H,u.xf,u.x4,m.jx,b.P,T.h],encapsulation:2}),p})(),C=(()=>{class p{}return p.\u0275fac=function(a){return new(a||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[v.Bz.forChild([{path:"",component:f}]),v.Bz]}),p})();var I=t(3568),U=t(9671),M=t(1928),B=t(1508),D=t(3421);let G=(()=>{class p{}return p.\u0275fac=function(a){return new(a||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[g.ez,C,e.u5,h.j,M.hJ,I.nD,U.cc,D.T,B.LU,b.L,T.a]}),p})()}}]);
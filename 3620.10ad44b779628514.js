"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[3620],{7371:(A,b,l)=>{l.d(b,{Q:()=>M,s:()=>I});var t=l(1571),i=l(6895),e=l(8476),f=l(3421),d=l(7340),v=l(4174);function g(a,p){if(1&a&&(t.TgZ(0,"span",10),t._uU(1),t.qZA()),2&a){const n=t.oxw(2);t.uIk("id",n.id+"_header"),t.xp6(1),t.Oqu(n.header)}}function c(a,p){1&a&&t.GkF(0)}function r(a,p){}function _(a,p){1&a&&t.YNc(0,r,0,0,"ng-template")}function T(a,p){if(1&a){const n=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(h){t.CHM(n);const u=t.oxw(2);return t.KtG(u.onIconClick(h))})("keydown.enter",function(h){t.CHM(n);const u=t.oxw(2);return t.KtG(u.onIconClick(h))}),t._UZ(1,"span"),t.qZA()}if(2&a){const n=t.oxw(2);t.uIk("aria-label","collapse button")("id",n.id+"-label")("aria-controls",n.id+"-content")("aria-expanded",!n.collapsed),t.xp6(1),t.Tol(n.collapsed?n.expandIcon:n.collapseIcon)}}const y=function(a,p,n){return{"p-panel-icons-start":a,"p-panel-icons-end":p,"p-panel-icons-center":n}};function U(a,p){if(1&a){const n=t.EpF();t.TgZ(0,"div",6),t.NdJ("click",function(h){t.CHM(n);const u=t.oxw();return t.KtG(u.onHeaderClick(h))}),t.YNc(1,g,2,2,"span",7),t.Hsn(2,1),t.YNc(3,c,1,0,"ng-container",4),t.TgZ(4,"div",8),t.YNc(5,_,1,0,null,4),t.YNc(6,T,2,6,"button",9),t.qZA()()}if(2&a){const n=t.oxw();t.uIk("id",n.id+"-titlebar"),t.xp6(1),t.Q6J("ngIf",n.header),t.xp6(2),t.Q6J("ngTemplateOutlet",n.headerTemplate),t.xp6(1),t.Q6J("ngClass",t.kEZ(6,y,"start"===n.iconPos,"end"===n.iconPos,"center"===n.iconPos)),t.xp6(1),t.Q6J("ngTemplateOutlet",n.iconTemplate),t.xp6(1),t.Q6J("ngIf",n.toggleable)}}function C(a,p){1&a&&t.GkF(0)}function q(a,p){1&a&&t.GkF(0)}function B(a,p){if(1&a&&(t.TgZ(0,"div",12),t.Hsn(1,2),t.YNc(2,q,1,0,"ng-container",4),t.qZA()),2&a){const n=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",n.footerTemplate)}}const x=["*",[["p-header"]],[["p-footer"]]],P=function(a,p){return{"p-panel p-component":!0,"p-panel-toggleable":a,"p-panel-expanded":p}},o=function(a){return{transitionParams:a,height:"0",opacity:"0"}},m=function(a){return{value:"hidden",params:a}},Z=function(a){return{transitionParams:a,height:"*",opacity:"1"}},w=function(a){return{value:"visible",params:a}},E=["*","p-header","p-footer"];let D=0,I=(()=>{class a{constructor(n){this.el=n,this.collapsed=!1,this.iconPos="end",this.expandIcon="pi pi-plus",this.collapseIcon="pi pi-minus",this.showHeader=!0,this.toggler="icon",this.collapsedChange=new t.vpe,this.onBeforeToggle=new t.vpe,this.onAfterToggle=new t.vpe,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id="p-panel-"+D++}ngAfterContentInit(){this.templates.forEach(n=>{switch(n.getType()){case"header":this.headerTemplate=n.template;break;case"content":default:this.contentTemplate=n.template;break;case"footer":this.footerTemplate=n.template;break;case"icons":this.iconTemplate=n.template}})}onHeaderClick(n){"header"===this.toggler&&this.toggle(n)}onIconClick(n){"icon"===this.toggler&&this.toggle(n)}toggle(n){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:n,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand(n):this.collapse(n)),n.preventDefault()}expand(n){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(n){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(n){this.animating=!1,this.onAfterToggle.emit({originalEvent:n,collapsed:this.collapsed})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(t.SBq))},a.\u0275cmp=t.Xpm({type:a,selectors:[["p-panel"]],contentQueries:function(n,s,h){if(1&n&&(t.Suo(h,e.$_,5),t.Suo(h,e.jx,4)),2&n){let u;t.iGM(u=t.CRH())&&(s.footerFacet=u.first),t.iGM(u=t.CRH())&&(s.templates=u)}},hostAttrs:[1,"p-element"],inputs:{toggleable:"toggleable",header:"header",collapsed:"collapsed",style:"style",styleClass:"styleClass",iconPos:"iconPos",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:"showHeader",toggler:"toggler",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},ngContentSelectors:E,decls:7,vars:23,consts:[[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-toggleable-content"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],["role","tablist",1,"p-panel-icons",3,"ngClass"],["type","button","class","p-panel-header-icon p-panel-toggler p-link","pRipple","","role","tab",3,"click","keydown.enter",4,"ngIf"],[1,"p-panel-title"],["type","button","pRipple","","role","tab",1,"p-panel-header-icon","p-panel-toggler","p-link",3,"click","keydown.enter"],[1,"p-panel-footer"]],template:function(n,s){1&n&&(t.F$t(x),t.TgZ(0,"div",0),t.YNc(1,U,7,10,"div",1),t.TgZ(2,"div",2),t.NdJ("@panelContent.done",function(u){return s.onToggleDone(u)}),t.TgZ(3,"div",3),t.Hsn(4),t.YNc(5,C,1,0,"ng-container",4),t.qZA(),t.YNc(6,B,3,1,"div",5),t.qZA()()),2&n&&(t.Tol(s.styleClass),t.Q6J("ngClass",t.WLB(12,P,s.toggleable,!s.collapsed&&s.toggleable))("ngStyle",s.style),t.uIk("id",s.id),t.xp6(1),t.Q6J("ngIf",s.showHeader),t.xp6(1),t.Q6J("@panelContent",s.collapsed?t.VKq(17,m,t.VKq(15,o,s.animating?s.transitionOptions:"0ms")):t.VKq(21,w,t.VKq(19,Z,s.animating?s.transitionOptions:"0ms"))),t.uIk("id",s.id+"-content")("aria-hidden",s.collapsed)("aria-labelledby",s.id+"-titlebar"),t.xp6(3),t.Q6J("ngTemplateOutlet",s.contentTemplate),t.xp6(1),t.Q6J("ngIf",s.footerFacet||s.footerTemplate))},dependencies:[i.mk,i.O5,i.tP,i.PC,v.H],styles:[".p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded .p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}\n"],encapsulation:2,data:{animation:[(0,d.X$)("panelContent",[(0,d.SB)("hidden",(0,d.oB)({height:"0"})),(0,d.SB)("void",(0,d.oB)({height:"{{height}}"}),{params:{height:"0"}}),(0,d.SB)("visible",(0,d.oB)({height:"*"})),(0,d.eR)("visible <=> hidden",[(0,d.jt)("{{transitionParams}}")]),(0,d.eR)("void => hidden",(0,d.jt)("{{transitionParams}}")),(0,d.eR)("void => visible",(0,d.jt)("{{transitionParams}}"))])]},changeDetection:0}),a})(),M=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[i.ez,e.m8,f.T,e.m8]}),a})()},3427:(A,b,l)=>{l.d(b,{Q:()=>t.Q});var t=l(7371)},7381:(A,b,l)=>{l.d(b,{a:()=>v,h:()=>d});var t=l(6895),i=l(1571);const e=["code"],f=["*"];let d=(()=>{class g{constructor(r){this.el=r,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return g.\u0275fac=function(r){return new(r||g)(i.Y36(i.SBq))},g.\u0275cmp=i.Xpm({type:g,selectors:[["app-code"]],viewQuery:function(r,_){if(1&r&&i.Gf(e,5),2&r){let T;i.iGM(T=i.CRH())&&(_.codeViewChild=T.first)}},inputs:{lang:"lang",style:"style",styleClass:"styleClass"},ngContentSelectors:f,decls:5,vars:5,consts:[[3,"ngClass"],["code",""]],template:function(r,_){1&r&&(i.F$t(),i.TgZ(0,"pre",0)(1,"code",null,1),i.Hsn(3),i._uU(4,"\n"),i.qZA()()),2&r&&(i.Akn(_.style),i.Tol(_.styleClass),i.Q6J("ngClass","language-"+_.lang))},dependencies:[t.mk],encapsulation:2}),g})(),v=(()=>{class g{}return g.\u0275fac=function(r){return new(r||g)},g.\u0275mod=i.oAB({type:g}),g.\u0275inj=i.cJS({imports:[t.ez]}),g})()},3620:(A,b,l)=>{l.r(b),l.d(b,{BadgeDemoModule:()=>P});var t=l(6895),i=l(9624),e=l(1571),f=l(2863),d=l(485),v=l(4619),g=l(5899),c=l(3032),r=l(7381);function _(o,m){1&o&&e._UZ(0,"iframe",30)}const T=function(){return["/theming"]};let y=(()=>{class o{}return o.\u0275fac=function(Z){return new(Z||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:250,vars:11,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","badge","stackblitz","badge-demo"],[1,"content-section","implementation"],[1,"card"],[1,"badges"],["styleClass","mr-2",3,"value"],["severity","success","styleClass","mr-2",3,"value"],["severity","info","styleClass","mr-2",3,"value"],["severity","warning","styleClass","mr-2",3,"value"],["severity","danger",3,"value"],["pBadge","","value","2",1,"pi","pi-bell","mr-4","p-text-secondary",2,"font-size","2rem"],["pBadge","","severity","danger",1,"pi","pi-calendar","mr-4","p-text-secondary",2,"font-size","2rem",3,"value"],["pBadge","","severity","danger",1,"pi","pi-envelope","p-text-secondary",2,"font-size","2rem"],["label","Emails","badge","8","styleClass","mr-2"],["label","Messages","icon","pi pi-users","styleClass","p-button-warning","badge","8","badgeClass","p-badge-danger"],["size","large","severity","warning","styleClass","mr-2",3,"value"],["size","xlarge","severity","success","styleClass","mr-2",3,"value"],[1,"content-section","documentation"],["header","\u6587\u6863"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","\u6848\u4f8b\u4ee3\u7801"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/badge","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-badge-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-badge-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(Z,w){1&Z&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"Badge"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Badge is a small status indicator for another element."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"h5"),e._uU(10,"Numbers"),e.qZA(),e.TgZ(11,"div",5),e._UZ(12,"p-badge",6)(13,"p-badge",7)(14,"p-badge",8)(15,"p-badge",9)(16,"p-badge",10),e.qZA(),e.TgZ(17,"h5"),e._uU(18,"Positioned Badge"),e.qZA(),e._UZ(19,"i",11)(20,"i",12)(21,"i",13),e.TgZ(22,"h5"),e._uU(23,"Inline Button Badge"),e.qZA(),e._UZ(24,"p-button",14)(25,"p-button",15),e.TgZ(26,"h5"),e._uU(27,"Sizes"),e.qZA(),e.TgZ(28,"div",5),e._UZ(29,"p-badge",6)(30,"p-badge",16)(31,"p-badge",17),e.qZA()()(),e.TgZ(32,"div",18)(33,"p-tabView")(34,"p-tabPanel",19)(35,"h5"),e._uU(36,"\u51c6\u5907\u5f00\u59cb"),e.qZA(),e.TgZ(37,"p"),e._uU(38,"Badge can either be used as a standalone component or as a directive."),e.qZA(),e.TgZ(39,"app-code",20),e.IAx(),e._uU(40,"\nimport {BadgeModule} from 'primeng/badge';\n"),e.fQ9(),e.qZA(),e.TgZ(41,"h6"),e._uU(42,"Component"),e.qZA(),e.TgZ(43,"p"),e._uU(44,"Content of the badge is specified using the "),e.TgZ(45,"i"),e._uU(46,"value"),e.qZA(),e._uU(47," property."),e.qZA(),e.TgZ(48,"app-code",21),e.IAx(),e._uU(49,'\n<p-badge [value]="2"></p-badge>\n'),e.fQ9(),e.qZA(),e.TgZ(50,"h6"),e._uU(51,"Directive"),e.qZA(),e.TgZ(52,"p"),e._uU(53,"Content of the badge is specified using the "),e.TgZ(54,"i"),e._uU(55,"value"),e.qZA(),e._uU(56," property."),e.qZA(),e.TgZ(57,"app-code",21),e.IAx(),e._uU(58,'\n<i class="pi pi-bell" pBadge value="2"></i>\n'),e.fQ9(),e.qZA(),e.TgZ(59,"h5"),e._uU(60,"Severities"),e.qZA(),e.TgZ(61,"p"),e._uU(62,"Different color options are available as severity levels. When used as a component use the "),e.TgZ(63,"i"),e._uU(64,"severity"),e.qZA(),e._uU(65," property to apply a severity and use a "),e.TgZ(66,"i"),e._uU(67,"modifier"),e.qZA(),e._uU(68," as the severity value in directive mode."),e.qZA(),e.TgZ(69,"ul")(70,"li"),e._uU(71,"success"),e.qZA(),e.TgZ(72,"li"),e._uU(73,"info"),e.qZA(),e.TgZ(74,"li"),e._uU(75,"warning"),e.qZA(),e.TgZ(76,"li"),e._uU(77,"danger"),e.qZA()(),e.TgZ(78,"app-code",21),e.IAx(),e._uU(79,'\n<p-badge [value]="2"  severity="success"  severity="success"></p-badge>\n\n<i class="pi pi-bell" pBadge value="2"  severity="success"></i>\n'),e.fQ9(),e.qZA(),e.TgZ(80,"h5"),e._uU(81,"Button Badges"),e.qZA(),e.TgZ(82,"p"),e._uU(83,"Buttons provide integrated badge support with the "),e.TgZ(84,"i"),e._uU(85,"badge"),e.qZA(),e._uU(86," and "),e.TgZ(87,"i"),e._uU(88,"badgeClass"),e.qZA(),e._uU(89," properties.\n"),e.TgZ(90,"app-code",21),e.IAx(),e._uU(91,'\n<p-button label="Emails" badge="8" styleClass="mr-2"></p-button>\n<p-button label="Messages" icon="pi pi-users" styleClass="p-button-warning" badge="8" badgeClass="p-badge-danger"></p-button>\n'),e.fQ9(),e.qZA()(),e.TgZ(92,"h5"),e._uU(93,"Sizes"),e.qZA(),e.TgZ(94,"p"),e._uU(95,"Badge sizes are adjusted with the "),e.TgZ(96,"i"),e._uU(97,"size"),e.qZA(),e._uU(98,' property that accepts "large" and "xlarge" as the possible alternatives to the default size. Currently sizes only apply to component mode.'),e.qZA(),e.TgZ(99,"app-code",21),e.IAx(),e._uU(100,'\n<p-badge value="2"></p-badge>\n<p-badge value="4" size="large" severity="warning"></p-badge>\n<p-badge value="6" size="xlarge" severity="success"></p-badge>\n'),e.fQ9(),e.qZA(),e.TgZ(101,"app-code",21),e.IAx(),e._uU(102,'\n<h1>Heading 1 <p-badge value="New"></p-badge></h1>\n<h2>Heading 2 <p-badge value="New"></p-badge></h2>\n'),e.fQ9(),e.qZA(),e.TgZ(103,"h5"),e._uU(104,"\u5c5e\u6027"),e.qZA(),e.TgZ(105,"p"),e._uU(106,"Any property as style and class are passed to the main container element. Following are the additional properties to configure the component."),e.qZA(),e.TgZ(107,"div",22)(108,"table",23)(109,"thead")(110,"tr")(111,"th"),e._uU(112,"\u540d\u79f0"),e.qZA(),e.TgZ(113,"th"),e._uU(114,"\u7c7b\u578b"),e.qZA(),e.TgZ(115,"th"),e._uU(116,"\u9ed8\u8ba4\u503c"),e.qZA(),e.TgZ(117,"th"),e._uU(118,"\u63cf\u8ff0"),e.qZA()()(),e.TgZ(119,"tbody")(120,"tr")(121,"td"),e._uU(122,"value"),e.qZA(),e.TgZ(123,"td"),e._uU(124,"any"),e.qZA(),e.TgZ(125,"td"),e._uU(126,"null"),e.qZA(),e.TgZ(127,"td"),e._uU(128,"Value to display inside the badge."),e.qZA()(),e.TgZ(129,"tr")(130,"td"),e._uU(131,"severity"),e.qZA(),e.TgZ(132,"td"),e._uU(133,"string"),e.qZA(),e.TgZ(134,"td"),e._uU(135,"null"),e.qZA(),e.TgZ(136,"td"),e._uU(137,"Severity type of the badge."),e.qZA()(),e.TgZ(138,"tr")(139,"td"),e._uU(140,"size"),e.qZA(),e.TgZ(141,"td"),e._uU(142,"string"),e.qZA(),e.TgZ(143,"td"),e._uU(144,"null"),e.qZA(),e.TgZ(145,"td"),e._uU(146,'Size of the badge, valid options are "large" and "xlarge".'),e.qZA()(),e.TgZ(147,"tr")(148,"td"),e._uU(149,"badgeDisabled"),e.qZA(),e.TgZ(150,"td"),e._uU(151,"boolean"),e.qZA(),e.TgZ(152,"td"),e._uU(153,"false"),e.qZA(),e.TgZ(154,"td"),e._uU(155,"When present, it specifies that the component should be disabled."),e.qZA()(),e.TgZ(156,"tr")(157,"td"),e._uU(158,"style"),e.qZA(),e.TgZ(159,"td"),e._uU(160,"object"),e.qZA(),e.TgZ(161,"td"),e._uU(162,"null"),e.qZA(),e.TgZ(163,"td"),e._uU(164,"Inline style of the component."),e.qZA()(),e.TgZ(165,"tr")(166,"td"),e._uU(167,"styleClass"),e.qZA(),e.TgZ(168,"td"),e._uU(169,"string"),e.qZA(),e.TgZ(170,"td"),e._uU(171,"null"),e.qZA(),e.TgZ(172,"td"),e._uU(173,"Style class of the component."),e.qZA()()()()(),e.TgZ(174,"h5"),e._uU(175,"\u6837\u5f0f"),e.qZA(),e.TgZ(176,"p"),e._uU(177,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(178,"a",24),e._uU(179,"theming"),e.qZA(),e._uU(180," page."),e.qZA(),e.TgZ(181,"div",22)(182,"table",23)(183,"thead")(184,"tr")(185,"th"),e._uU(186,"\u540d\u79f0"),e.qZA(),e.TgZ(187,"th"),e._uU(188,"\u5143\u7d20"),e.qZA()()(),e.TgZ(189,"tbody")(190,"tr")(191,"td"),e._uU(192,"p-badge"),e.qZA(),e.TgZ(193,"td"),e._uU(194,"Badge element"),e.qZA()(),e.TgZ(195,"tr")(196,"td"),e._uU(197,"p-overlay-badge"),e.qZA(),e.TgZ(198,"td"),e._uU(199,"Wrapper of a badge and its target."),e.qZA()(),e.TgZ(200,"tr")(201,"td"),e._uU(202,"p-badge-dot"),e.qZA(),e.TgZ(203,"td"),e._uU(204,"Badge element with no value."),e.qZA()(),e.TgZ(205,"tr")(206,"td"),e._uU(207,"p-badge-success"),e.qZA(),e.TgZ(208,"td"),e._uU(209,"Badge element with success severity."),e.qZA()(),e.TgZ(210,"tr")(211,"td"),e._uU(212,"p-badge-info"),e.qZA(),e.TgZ(213,"td"),e._uU(214,"Badge element with info severity."),e.qZA()(),e.TgZ(215,"tr")(216,"td"),e._uU(217,"p-badge-warning"),e.qZA(),e.TgZ(218,"td"),e._uU(219,"Badge element with warning severity."),e.qZA()(),e.TgZ(220,"tr")(221,"td"),e._uU(222,"p-badge-danger"),e.qZA(),e.TgZ(223,"td"),e._uU(224,"Badge element with danger severity."),e.qZA()(),e.TgZ(225,"tr")(226,"td"),e._uU(227,"p-badge-lg"),e.qZA(),e.TgZ(228,"td"),e._uU(229,"Large badge element"),e.qZA()(),e.TgZ(230,"tr")(231,"td"),e._uU(232,"p-badge-xl"),e.qZA(),e.TgZ(233,"td"),e._uU(234,"Extra large badge element"),e.qZA()()()()(),e.TgZ(235,"h5"),e._uU(236,"\u4f9d\u8d56"),e.qZA(),e.TgZ(237,"p"),e._uU(238,"None."),e.qZA()(),e.TgZ(239,"p-tabPanel",25)(240,"a",26)(241,"span"),e._uU(242,"GitHub\u4e2d\u8bbf\u95ee"),e.qZA()(),e.TgZ(243,"a",27)(244,"span"),e._uU(245,"StackBlitz\u4e2d\u7f16\u8f91"),e.qZA()(),e.TgZ(246,"app-code",21),e.IAx(),e._uU(247,'\n<h5>Numbers</h5>\n<div class="badges">\n    <p-badge [value]="2" styleClass="mr-2"></p-badge>\n    <p-badge [value]="8" severity="success" styleClass="mr-2"></p-badge>\n    <p-badge [value]="4" severity="info" styleClass="mr-2"></p-badge>\n    <p-badge [value]="12" severity="warning" styleClass="mr-2"></p-badge>\n    <p-badge [value]="3" severity="danger"></p-badge>\n</div>\n\n<h5>Positioned Badge</h5>\n<i class="pi pi-bell mr-4 p-text-secondary" pBadge style="font-size: 2rem" value="2"></i>\n<i class="pi pi-calendar mr-4 p-text-secondary" pBadge style="font-size: 2rem" [value]="\'10+\'" severity="danger"></i>\n<i class="pi pi-envelope p-text-secondary" pBadge style="font-size: 2rem" severity="danger"></i>\n\n\n<h5>Inline Button Badge</h5>\n<p-button label="Emails" badge="8" styleClass="mr-2"></p-button>\n<p-button label="Messages" icon="pi pi-users" styleClass="p-button-warning" badge="8" badgeClass="p-badge-danger"></p-button>\n\n<h5>Sizes</h5>\n<div class="badges">\n    <p-badge [value]="2" styleClass="mr-2"></p-badge>\n    <p-badge [value]="4" size="large" severity="warning" styleClass="mr-2"></p-badge>\n    <p-badge [value]="6" size="xlarge" severity="success" styleClass="mr-2"></p-badge>\n</div>\n'),e.fQ9(),e.qZA()(),e.TgZ(248,"p-tabPanel",28),e.YNc(249,_,1,0,"ng-template",29),e.qZA()()()),2&Z&&(e.xp6(12),e.Q6J("value",2),e.xp6(1),e.Q6J("value",8),e.xp6(1),e.Q6J("value",4),e.xp6(1),e.Q6J("value",12),e.xp6(1),e.Q6J("value",3),e.xp6(4),e.Q6J("value","10+"),e.xp6(9),e.Q6J("value",2),e.xp6(1),e.Q6J("value",4),e.xp6(1),e.Q6J("value",6),e.xp6(147),e.Q6J("routerLink",e.DdM(10,T)))},dependencies:[i.rH,f.zx,d.jx,v.xf,v.x4,g.Ct,g.lM,c.P,r.h],encapsulation:2}),o})(),U=(()=>{class o{}return o.\u0275fac=function(Z){return new(Z||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[i.Bz.forChild([{path:"",component:y}]),i.Bz]}),o})();var C=l(1928),q=l(3427),B=l(1508),x=l(4548);let P=(()=>{class o{}return o.\u0275fac=function(Z){return new(Z||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[t.ez,U,C.hJ,q.Q,B.LU,x.TX,c.L,r.a]}),o})()}}]);
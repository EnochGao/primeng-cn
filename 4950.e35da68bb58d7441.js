"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[4950],{7381:(v,m,a)=>{a.d(m,{a:()=>_,h:()=>u});var b=a(6895),d=a(1571);const Z=["code"],e=["*"];let u=(()=>{class l{constructor(p){this.el=p,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return l.\u0275fac=function(p){return new(p||l)(d.Y36(d.SBq))},l.\u0275cmp=d.Xpm({type:l,selectors:[["app-code"]],viewQuery:function(p,h){if(1&p&&d.Gf(Z,5),2&p){let g;d.iGM(g=d.CRH())&&(h.codeViewChild=g.first)}},inputs:{lang:"lang",style:"style",styleClass:"styleClass"},ngContentSelectors:e,decls:5,vars:5,consts:[[3,"ngClass"],["code",""]],template:function(p,h){1&p&&(d.F$t(),d.TgZ(0,"pre",0)(1,"code",null,1),d.Hsn(3),d._uU(4,"\n"),d.qZA()()),2&p&&(d.Akn(h.style),d.Tol(h.styleClass),d.Q6J("ngClass","language-"+h.lang))},dependencies:[b.mk],encapsulation:2}),l})(),_=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=d.oAB({type:l}),l.\u0275inj=d.cJS({imports:[b.ez]}),l})()},4950:(v,m,a)=>{a.r(m),a.d(m,{SidebarDemoModule:()=>H});var b=a(6895),d=a(433),Z=a(9624),e=a(1571),u=a(7340),_=a(3421),l=a(2240),c=a(8476),p=a(9716),h=a(4174);function g(i,r){1&i&&e.GkF(0)}function U(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(o){e.CHM(t);const s=e.oxw(2);return e.KtG(s.close(o))})("keydown.enter",function(o){e.CHM(t);const s=e.oxw(2);return e.KtG(s.close(o))}),e._UZ(1,"span",9),e.qZA()}if(2&i){const t=e.oxw(2);e.uIk("aria-label",t.ariaCloseLabel)}}function S(i,r){1&i&&e.GkF(0)}function q(i,r){1&i&&e.GkF(0)}const y=function(i,r,t,n,o,s){return{"p-sidebar":!0,"p-sidebar-active":i,"p-sidebar-left":r,"p-sidebar-right":t,"p-sidebar-top":n,"p-sidebar-bottom":o,"p-sidebar-full":s}},C=function(i,r){return{transform:i,transition:r}},k=function(i){return{value:"visible",params:i}};function w(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",1,2),e.NdJ("@panelState.start",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.onAnimationStart(o))})("@panelState.done",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.onAnimationEnd(o))}),e.TgZ(2,"div",3),e.YNc(3,g,1,0,"ng-container",4),e.YNc(4,U,2,1,"button",5),e.qZA(),e.TgZ(5,"div",6),e.Hsn(6),e.YNc(7,S,1,0,"ng-container",4),e.qZA(),e.TgZ(8,"div",7),e.YNc(9,q,1,0,"ng-container",4),e.qZA()()}if(2&i){const t=e.oxw();e.Tol(t.styleClass),e.Q6J("ngClass",e.HTZ(10,y,t.visible,"left"===t.position&&!t.fullScreen,"right"===t.position&&!t.fullScreen,"top"===t.position&&!t.fullScreen,"bottom"===t.position&&!t.fullScreen,t.fullScreen))("@panelState",e.VKq(20,k,e.WLB(17,C,t.transformOptions,t.transitionOptions)))("ngStyle",t.style),e.uIk("aria-modal",t.modal),e.xp6(3),e.Q6J("ngTemplateOutlet",t.headerTemplate),e.xp6(1),e.Q6J("ngIf",t.showCloseIcon),e.xp6(3),e.Q6J("ngTemplateOutlet",t.contentTemplate),e.xp6(2),e.Q6J("ngTemplateOutlet",t.footerTemplate)}}const x=["*"],I=(0,u.oQ)([(0,u.oB)({transform:"{{transform}}",opacity:0}),(0,u.jt)("{{transition}}")]),E=(0,u.oQ)([(0,u.jt)("{{transition}}",(0,u.oB)({transform:"{{transform}}",opacity:0}))]);let D=(()=>{class i{constructor(t,n,o,s){this.el=t,this.renderer=n,this.cd=o,this.config=s,this.blockScroll=!1,this.autoZIndex=!0,this.baseZIndex=0,this.modal=!0,this.dismissible=!0,this.showCloseIcon=!0,this.closeOnEscape=!0,this.transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.onShow=new e.vpe,this.onHide=new e.vpe,this.visibleChange=new e.vpe,this._position="left",this._fullScreen=!1,this.transformOptions="translate3d(-100%, 0px, 0px)"}ngAfterViewInit(){this.initialized=!0}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":default:this.contentTemplate=t.template;break;case"header":this.headerTemplate=t.template;break;case"footer":this.footerTemplate=t.template}})}get visible(){return this._visible}set visible(t){this._visible=t}get position(){return this._position}set position(t){switch(this._position=t,t){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)"}}get fullScreen(){return this._fullScreen}set fullScreen(t){this._fullScreen=t,t&&(this.transformOptions="none")}show(){this.autoZIndex&&p.P9.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(){this.onHide.emit({}),this.modal&&this.disableModality()}close(t){this.hide(),this.visibleChange.emit(!1),t.preventDefault()}enableModality(){this.mask||(this.mask=document.createElement("div"),this.mask.style.zIndex=String(parseInt(this.container.style.zIndex)-1),l.p.addMultipleClasses(this.mask,"p-component-overlay p-sidebar-mask p-component-overlay p-component-overlay-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",t=>{this.dismissible&&this.close(t)})),document.body.appendChild(this.mask),this.blockScroll&&l.p.addClass(document.body,"p-overflow-hidden"))}disableModality(){this.mask&&(l.p.addClass(this.mask,"p-component-overlay-leave"),this.animationEndListener=this.destroyModal.bind(this),this.mask.addEventListener("animationend",this.animationEndListener))}destroyModal(){this.unbindMaskClickListener(),this.mask&&document.body.removeChild(this.mask),this.blockScroll&&l.p.removeClass(document.body,"p-overflow-hidden"),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(t){"visible"===t.toState&&(this.container=t.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener())}onAnimationEnd(t){"void"===t.toState&&(this.hide(),p.P9.clear(this.container),this.unbindGlobalListeners())}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.container):l.p.appendChild(this.container,this.appendTo))}bindDocumentEscapeListener(){this.documentEscapeListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document","keydown",n=>{27==n.which&&parseInt(this.container.style.zIndex)===p.P9.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.mask.removeEventListener("animationend",this.animationEndListener),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.el.nativeElement.appendChild(this.container),this.container&&this.autoZIndex&&p.P9.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(c.b4))},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-sidebar"]],contentQueries:function(t,n,o){if(1&t&&e.Suo(o,c.jx,4),2&t){let s;e.iGM(s=e.CRH())&&(n.templates=s)}},hostAttrs:[1,"p-element"],inputs:{appendTo:"appendTo",blockScroll:"blockScroll",style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",modal:"modal",dismissible:"dismissible",showCloseIcon:"showCloseIcon",closeOnEscape:"closeOnEscape",transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},ngContentSelectors:x,decls:1,vars:1,consts:[["role","complementary",3,"ngClass","ngStyle","class",4,"ngIf"],["role","complementary",3,"ngClass","ngStyle"],["container",""],[1,"p-sidebar-header"],[4,"ngTemplateOutlet"],["type","button","class","p-sidebar-close p-sidebar-icon p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],[1,"p-sidebar-content"],[1,"p-sidebar-footer"],["type","button","pRipple","",1,"p-sidebar-close","p-sidebar-icon","p-link",3,"click","keydown.enter"],[1,"p-sidebar-close-icon","pi","pi-times"]],template:function(t,n){1&t&&(e.F$t(),e.YNc(0,w,10,22,"div",0)),2&t&&e.Q6J("ngIf",n.visible)},dependencies:[b.mk,b.O5,b.tP,b.PC,h.H],styles:[".p-sidebar{position:fixed;transition:transform .3s;display:flex;flex-direction:column}.p-sidebar-content{position:relative;overflow-y:auto}.p-sidebar-header{display:flex;align-items:center}.p-sidebar-footer{margin-top:auto}.p-sidebar-icon{display:flex;align-items:center;justify-content:center;margin-left:auto}.p-sidebar-left{top:0;left:0;width:20rem;height:100%}.p-sidebar-right{top:0;right:0;width:20rem;height:100%}.p-sidebar-top{top:0;left:0;width:100%;height:10rem}.p-sidebar-bottom{bottom:0;left:0;width:100%;height:10rem}.p-sidebar-full{width:100%;height:100%;top:0;left:0;transition:none}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-top.p-sidebar-sm,.p-sidebar-bottom.p-sidebar-sm{height:10rem}.p-sidebar-top.p-sidebar-md,.p-sidebar-bottom.p-sidebar-md{height:20rem}.p-sidebar-top.p-sidebar-lg,.p-sidebar-bottom.p-sidebar-lg{height:30rem}@media screen and (max-width: 64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}\n"],encapsulation:2,data:{animation:[(0,u.X$)("panelState",[(0,u.eR)("void => visible",[(0,u._7)(I)]),(0,u.eR)("visible => void",[(0,u._7)(E)])])]},changeDetection:0}),i})(),F=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[b.ez,_.T]}),i})();var L=a(2863),f=a(4619),M=a(485),T=a(3032),A=a(7381);function B(i,r){1&i&&e._UZ(0,"iframe",27)}const J=function(){return["/theming"]};let O=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:379,vars:13,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","sidebar","stackblitz","sidebar-demo"],[1,"content-section","implementation"],[1,"card"],[3,"visible","baseZIndex","visibleChange"],["position","right",3,"visible","baseZIndex","visibleChange"],["position","top",3,"visible","baseZIndex","visibleChange"],["position","bottom",3,"visible","baseZIndex","visibleChange"],[3,"visible","fullScreen","baseZIndex","visibleChange"],["type","button","icon","pi pi-arrow-right",1,"mr-2",3,"click"],["type","button","icon","pi pi-arrow-left",1,"mr-2",3,"click"],["type","button","icon","pi pi-arrow-down",1,"mr-2",3,"click"],["type","button","icon","pi pi-arrow-up",1,"mr-2",3,"click"],["type","button","icon","pi pi-th-large",1,"mr-2",3,"click"],[1,"content-section","documentation"],["header","\u6587\u6863"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","\u6848\u4f8b\u4ee3\u7801"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/sidebar","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-sidebar-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-sidebar-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"Sidebar"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Sidebar is a panel component displayed as an overlay at the edges of the screen."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"p-sidebar",5),e.NdJ("visibleChange",function(s){return n.visibleSidebar1=s}),e.TgZ(10,"h3"),e._uU(11,"Left Sidebar"),e.qZA()(),e.TgZ(12,"p-sidebar",6),e.NdJ("visibleChange",function(s){return n.visibleSidebar2=s}),e.TgZ(13,"h3"),e._uU(14,"Right Sidebar"),e.qZA()(),e.TgZ(15,"p-sidebar",7),e.NdJ("visibleChange",function(s){return n.visibleSidebar3=s}),e.TgZ(16,"h3"),e._uU(17,"Top Sidebar"),e.qZA()(),e.TgZ(18,"p-sidebar",8),e.NdJ("visibleChange",function(s){return n.visibleSidebar4=s}),e.TgZ(19,"h3"),e._uU(20,"Bottom Sidebar"),e.qZA()(),e.TgZ(21,"p-sidebar",9),e.NdJ("visibleChange",function(s){return n.visibleSidebar5=s}),e.TgZ(22,"h3"),e._uU(23,"Full Screen"),e.qZA()(),e.TgZ(24,"p-button",10),e.NdJ("click",function(){return n.visibleSidebar1=!0}),e.qZA(),e.TgZ(25,"p-button",11),e.NdJ("click",function(){return n.visibleSidebar2=!0}),e.qZA(),e.TgZ(26,"p-button",12),e.NdJ("click",function(){return n.visibleSidebar3=!0}),e.qZA(),e.TgZ(27,"p-button",13),e.NdJ("click",function(){return n.visibleSidebar4=!0}),e.qZA(),e.TgZ(28,"p-button",14),e.NdJ("click",function(){return n.visibleSidebar5=!0}),e.qZA()()(),e.TgZ(29,"div",15)(30,"p-tabView")(31,"p-tabPanel",16)(32,"h5"),e._uU(33,"\u5f15\u5165"),e.qZA(),e.TgZ(34,"app-code",17),e.IAx(),e._uU(35,"\nimport {SidebarModule} from 'primeng/sidebar';\n"),e.fQ9(),e.qZA(),e.TgZ(36,"h5"),e._uU(37,"\u51c6\u5907\u5f00\u59cb"),e.qZA(),e.TgZ(38,"p"),e._uU(39,"Sidebar is used as a container and visibility is controlled with visible property."),e.qZA(),e.TgZ(40,"app-code",18),e.IAx(),e._uU(41,'\n<p-sidebar [(visible)]="display">\n    Content\n</p-sidebar>\n\n<p-button type="text" (click)="display = true" icon="pi pi-plus" label="Show"></p-button>\n'),e.fQ9(),e.qZA(),e.TgZ(42,"h5"),e._uU(43,"Position"),e.qZA(),e.TgZ(44,"p"),e._uU(45,"Sidebar can either be located as the left (default), right, top or bottom of the screen depending on the "),e.TgZ(46,"i"),e._uU(47,"position"),e.qZA(),e._uU(48," property."),e.qZA(),e.TgZ(49,"app-code",18),e.IAx(),e._uU(50,'\n<p-sidebar [(visible)]="display" position="right">\n    Content\n</p-sidebar>\n'),e.fQ9(),e.qZA(),e.TgZ(51,"h5"),e._uU(52,"Size"),e.qZA(),e.TgZ(53,"p"),e._uU(54,"Sidebar size can be changed using a fixed value or using one of the three predefined ones."),e.qZA(),e.TgZ(55,"app-code",18),e.IAx(),e._uU(56,'\n<p-sidebar [(visible)]="display" [style]="{width:\'30em\'}"></p-sidebar>\n\n<p-sidebar [(visible)]="display" styleClass="p-sidebar-sm"></p-sidebar>\n<p-sidebar [(visible)]="display" styleClass="p-sidebar-md"></p-sidebar>\n<p-sidebar [(visible)]="display" styleClass="p-sidebar-lg"></p-sidebar>\n'),e.fQ9(),e.qZA(),e.TgZ(57,"h5"),e._uU(58,"\u52a8\u753b\u914d\u7f6e"),e.qZA(),e.TgZ(59,"p"),e._uU(60,"Transition of the Sidebar open and hide animations can be customized using the transitionOptions property with a default value as "),e.TgZ(61,"b"),e._uU(62,"150ms cubic-bezier(0, 0, 0.2, 1)"),e.qZA(),e._uU(63,", example below disables the animation altogether."),e.qZA(),e.TgZ(64,"app-code",18),e.IAx(),e._uU(65,'\n<p-sidebar [(visible)]="display" [transitionOptions]="\'0ms\'"></p-sidebar>\n'),e.fQ9(),e.qZA(),e.TgZ(66,"h5"),e._uU(67,"Full Screen"),e.qZA(),e.TgZ(68,"p"),e._uU(69,"Full screen mode allows the sidebar to cover whole screen."),e.qZA(),e.TgZ(70,"app-code",18),e.IAx(),e._uU(71,'\n<p-sidebar [(visible)]="display" [fullScreen]="true">\nContent\n</p-sidebar>\n'),e.fQ9(),e.qZA(),e.TgZ(72,"h5"),e._uU(73,"\u81ea\u5b9a\u4e49\u5185\u5bb9"),e.qZA(),e.TgZ(74,"app-code",18),e.IAx(),e._uU(75,'\n<p-sidebar [(visible)]="display">\n\u2003 <ng-template pTemplate="header">Header Content</ng-template>\n\u2003 <ng-template pTemplate="content">Body Content</ng-template>\n\u2003 <ng-template pTemplate="footer">Footer Content</ng-template>\n</p-sidebar>\n'),e.fQ9(),e.qZA(),e.TgZ(76,"h5"),e._uU(77,"\u5c5e\u6027"),e.qZA(),e.TgZ(78,"div",19)(79,"table",20)(80,"thead")(81,"tr")(82,"th"),e._uU(83,"\u540d\u79f0"),e.qZA(),e.TgZ(84,"th"),e._uU(85,"\u7c7b\u578b"),e.qZA(),e.TgZ(86,"th"),e._uU(87,"\u9ed8\u8ba4\u503c"),e.qZA(),e.TgZ(88,"th"),e._uU(89,"\u63cf\u8ff0"),e.qZA()()(),e.TgZ(90,"tbody")(91,"tr")(92,"td"),e._uU(93,"visible"),e.qZA(),e.TgZ(94,"td"),e._uU(95,"boolean"),e.qZA(),e.TgZ(96,"td"),e._uU(97,"false"),e.qZA(),e.TgZ(98,"td"),e._uU(99,"Specifies the visibility of the dialog."),e.qZA()(),e.TgZ(100,"tr")(101,"td"),e._uU(102,"position"),e.qZA(),e.TgZ(103,"td"),e._uU(104,"string"),e.qZA(),e.TgZ(105,"td"),e._uU(106,"left"),e.qZA(),e.TgZ(107,"td"),e._uU(108,'Specifies the position of the sidebar, valid values are "left", "right", "bottom" and "top".'),e.qZA()(),e.TgZ(109,"tr")(110,"td"),e._uU(111,"fullScreen"),e.qZA(),e.TgZ(112,"td"),e._uU(113,"boolean"),e.qZA(),e.TgZ(114,"td"),e._uU(115,"false"),e.qZA(),e.TgZ(116,"td"),e._uU(117,"Adds a close icon to the header to hide the dialog."),e.qZA()(),e.TgZ(118,"tr")(119,"td"),e._uU(120,"appendTo"),e.qZA(),e.TgZ(121,"td"),e._uU(122,"any"),e.qZA(),e.TgZ(123,"td"),e._uU(124,"null"),e.qZA(),e.TgZ(125,"td"),e._uU(126,'Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).'),e.qZA()(),e.TgZ(127,"tr")(128,"td"),e._uU(129,"style"),e.qZA(),e.TgZ(130,"td"),e._uU(131,"string"),e.qZA(),e.TgZ(132,"td"),e._uU(133,"null"),e.qZA(),e.TgZ(134,"td"),e._uU(135,"Inline style of the component."),e.qZA()(),e.TgZ(136,"tr")(137,"td"),e._uU(138,"styleClass"),e.qZA(),e.TgZ(139,"td"),e._uU(140,"string"),e.qZA(),e.TgZ(141,"td"),e._uU(142,"null"),e.qZA(),e.TgZ(143,"td"),e._uU(144,"Style class of the component."),e.qZA()(),e.TgZ(145,"tr")(146,"td"),e._uU(147,"blockScroll"),e.qZA(),e.TgZ(148,"td"),e._uU(149,"boolean"),e.qZA(),e.TgZ(150,"td"),e._uU(151,"false"),e.qZA(),e.TgZ(152,"td"),e._uU(153,"Whether to block scrolling of the document when sidebar is active."),e.qZA()(),e.TgZ(154,"tr")(155,"td"),e._uU(156,"baseZIndex"),e.qZA(),e.TgZ(157,"td"),e._uU(158,"number"),e.qZA(),e.TgZ(159,"td"),e._uU(160,"0"),e.qZA(),e.TgZ(161,"td"),e._uU(162,"Base zIndex value to use in layering."),e.qZA()(),e.TgZ(163,"tr")(164,"td"),e._uU(165,"autoZIndex"),e.qZA(),e.TgZ(166,"td"),e._uU(167,"boolean"),e.qZA(),e.TgZ(168,"td"),e._uU(169,"true"),e.qZA(),e.TgZ(170,"td"),e._uU(171,"Whether to automatically manage layering."),e.qZA()(),e.TgZ(172,"tr")(173,"td"),e._uU(174,"modal"),e.qZA(),e.TgZ(175,"td"),e._uU(176,"boolean"),e.qZA(),e.TgZ(177,"td"),e._uU(178,"true"),e.qZA(),e.TgZ(179,"td"),e._uU(180,"Whether an overlay mask is displayed behind the sidebar."),e.qZA()(),e.TgZ(181,"tr")(182,"td"),e._uU(183,"dismissible"),e.qZA(),e.TgZ(184,"td"),e._uU(185,"boolean"),e.qZA(),e.TgZ(186,"td"),e._uU(187,"true"),e.qZA(),e.TgZ(188,"td"),e._uU(189,"Whether to dismiss sidebar on click of the mask."),e.qZA()(),e.TgZ(190,"tr")(191,"td"),e._uU(192,"showCloseIcon"),e.qZA(),e.TgZ(193,"td"),e._uU(194,"boolean"),e.qZA(),e.TgZ(195,"td"),e._uU(196,"true"),e.qZA(),e.TgZ(197,"td"),e._uU(198,"Whether to display the close icon."),e.qZA()(),e.TgZ(199,"tr")(200,"td"),e._uU(201,"transitionOptions"),e.qZA(),e.TgZ(202,"td"),e._uU(203,"string"),e.qZA(),e.TgZ(204,"td"),e._uU(205,"150ms cubic-bezier(0, 0, 0.2, 1)"),e.qZA(),e.TgZ(206,"td"),e._uU(207,"Transition options of the animation."),e.qZA()(),e.TgZ(208,"tr")(209,"td"),e._uU(210,"ariaCloseLabel"),e.qZA(),e.TgZ(211,"td"),e._uU(212,"string"),e.qZA(),e.TgZ(213,"td"),e._uU(214,"close"),e.qZA(),e.TgZ(215,"td"),e._uU(216,"Aria label of the close icon."),e.qZA()(),e.TgZ(217,"tr")(218,"td"),e._uU(219,"closeOnEscape"),e.qZA(),e.TgZ(220,"td"),e._uU(221,"boolean"),e.qZA(),e.TgZ(222,"td"),e._uU(223,"true"),e.qZA(),e.TgZ(224,"td"),e._uU(225,"Specifies if pressing escape key should hide the sidebar."),e.qZA()()()()(),e.TgZ(226,"h5"),e._uU(227,"\u4e8b\u4ef6"),e.qZA(),e.TgZ(228,"div",19)(229,"table",20)(230,"thead")(231,"tr")(232,"th"),e._uU(233,"\u540d\u79f0"),e.qZA(),e.TgZ(234,"th"),e._uU(235,"\u53c2\u6570"),e.qZA(),e.TgZ(236,"th"),e._uU(237,"\u63cf\u8ff0"),e.qZA()()(),e.TgZ(238,"tbody")(239,"tr")(240,"td"),e._uU(241,"onShow"),e.qZA(),e.TgZ(242,"td"),e._uU(243,"event: Event object"),e.qZA(),e.TgZ(244,"td"),e._uU(245,"Callback to invoke when dialog is shown."),e.qZA()(),e.TgZ(246,"tr")(247,"td"),e._uU(248,"onHide"),e.qZA(),e.TgZ(249,"td"),e._uU(250,"event: Event object"),e.qZA(),e.TgZ(251,"td"),e._uU(252,"Callback to invoke when dialog is hidden."),e.qZA()(),e.TgZ(253,"tr")(254,"td"),e._uU(255,"visibleChange"),e.qZA(),e.TgZ(256,"td"),e._uU(257,"event: Event object"),e.qZA(),e.TgZ(258,"td"),e._uU(259,"Callback to invoke when dialog visibility is changed."),e.qZA()()()()(),e.TgZ(260,"h5"),e._uU(261,"\u6a21\u677f"),e.qZA(),e.TgZ(262,"div",19)(263,"table",20)(264,"thead")(265,"tr")(266,"th"),e._uU(267,"\u540d\u79f0"),e.qZA(),e.TgZ(268,"th"),e._uU(269,"\u53c2\u6570"),e.qZA()()(),e.TgZ(270,"tbody")(271,"tr")(272,"td"),e._uU(273,"header"),e.qZA(),e.TgZ(274,"td"),e._uU(275,"-"),e.qZA()(),e.TgZ(276,"tr")(277,"td"),e._uU(278,"content"),e.qZA(),e.TgZ(279,"td"),e._uU(280,"-"),e.qZA()(),e.TgZ(281,"tr")(282,"td"),e._uU(283,"footer"),e.qZA(),e.TgZ(284,"td"),e._uU(285,"-"),e.qZA()()()()(),e.TgZ(286,"h5"),e._uU(287,"\u6837\u5f0f"),e.qZA(),e.TgZ(288,"p"),e._uU(289,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(290,"a",21),e._uU(291,"theming page"),e.qZA(),e._uU(292,"."),e.qZA(),e.TgZ(293,"div",19)(294,"table",20)(295,"thead")(296,"tr")(297,"th"),e._uU(298,"\u540d\u79f0"),e.qZA(),e.TgZ(299,"th"),e._uU(300,"\u5143\u7d20"),e.qZA()()(),e.TgZ(301,"tbody")(302,"tr")(303,"td"),e._uU(304,"p-sidebar"),e.qZA(),e.TgZ(305,"td"),e._uU(306,"Container element"),e.qZA()(),e.TgZ(307,"tr")(308,"td"),e._uU(309,"p-sidebar-left"),e.qZA(),e.TgZ(310,"td"),e._uU(311,"Container element of left sidebar."),e.qZA()(),e.TgZ(312,"tr")(313,"td"),e._uU(314,"p-sidebar-right"),e.qZA(),e.TgZ(315,"td"),e._uU(316,"Container element of right sidebar."),e.qZA()(),e.TgZ(317,"tr")(318,"td"),e._uU(319,"p-sidebar-top"),e.qZA(),e.TgZ(320,"td"),e._uU(321,"Container element of top sidebar."),e.qZA()(),e.TgZ(322,"tr")(323,"td"),e._uU(324,"p-sidebar-bottom"),e.qZA(),e.TgZ(325,"td"),e._uU(326,"Container element of bottom sidebar."),e.qZA()(),e.TgZ(327,"tr")(328,"td"),e._uU(329,"p-sidebar-full"),e.qZA(),e.TgZ(330,"td"),e._uU(331,"Container element of a full screen sidebar."),e.qZA()(),e.TgZ(332,"tr")(333,"td"),e._uU(334,"p-sidebar-active"),e.qZA(),e.TgZ(335,"td"),e._uU(336,"Container element when sidebar is visible."),e.qZA()(),e.TgZ(337,"tr")(338,"td"),e._uU(339,"p-sidebar-close"),e.qZA(),e.TgZ(340,"td"),e._uU(341,"Close anchor element."),e.qZA()(),e.TgZ(342,"tr")(343,"td"),e._uU(344,"p-sidebar-sm"),e.qZA(),e.TgZ(345,"td"),e._uU(346,"Small sized sidebar."),e.qZA()(),e.TgZ(347,"tr")(348,"td"),e._uU(349,"p-sidebar-md"),e.qZA(),e.TgZ(350,"td"),e._uU(351,"Medium sized sidebar."),e.qZA()(),e.TgZ(352,"tr")(353,"td"),e._uU(354,"p-sidebar-lg"),e.qZA(),e.TgZ(355,"td"),e._uU(356,"Large sized sidebar."),e.qZA()(),e.TgZ(357,"tr")(358,"td"),e._uU(359,"p-sidebar-mask"),e.qZA(),e.TgZ(360,"td"),e._uU(361,"Modal layer of the sidebar."),e.qZA()()()()(),e.TgZ(362,"h5"),e._uU(363,"\u4f9d\u8d56"),e.qZA(),e.TgZ(364,"p"),e._uU(365,"None."),e.qZA()(),e.TgZ(366,"p-tabPanel",22)(367,"a",23)(368,"span"),e._uU(369,"GitHub\u4e2d\u8bbf\u95ee"),e.qZA()(),e.TgZ(370,"a",24)(371,"span"),e._uU(372,"StackBlitz\u4e2d\u7f16\u8f91"),e.qZA()(),e.TgZ(373,"app-code",18),e.IAx(),e._uU(374,'\n<p-sidebar [(visible)]="visibleSidebar1" [baseZIndex]="10000">\n    <h3>Left Sidebar</h3>\n</p-sidebar>\n\n<p-sidebar [(visible)]="visibleSidebar2" position="right" [baseZIndex]="10000">\n    <h3>Right Sidebar</h3>\n</p-sidebar>\n\n<p-sidebar [(visible)]="visibleSidebar3" position="top" [baseZIndex]="10000">\n    <h3>Top Sidebar</h3>\n</p-sidebar>\n\n<p-sidebar [(visible)]="visibleSidebar4" position="bottom" [baseZIndex]="10000">\n    <h3>Bottom Sidebar</h3>\n</p-sidebar>\n\n<p-sidebar [(visible)]="visibleSidebar5" [fullScreen]="true" [baseZIndex]="10000">\n    <h3>Full Screen Sidebar</h3>\n</p-sidebar>\n\n<p-button type="button" class="mr-2" (click)="visibleSidebar1 = true" icon="pi pi-arrow-right"></p-button>\n<p-button type="button" class="mr-2" (click)="visibleSidebar2 = true" icon="pi pi-arrow-left"></p-button>\n<p-button type="button" class="mr-2" (click)="visibleSidebar3 = true" icon="pi pi-arrow-down"></p-button>\n<p-button type="button" class="mr-2" (click)="visibleSidebar4 = true" icon="pi pi-arrow-up"></p-button>\n<p-button type="button" class="mr-2" (click)="visibleSidebar5 = true" icon="pi pi-th-large"></p-button>\n'),e.fQ9(),e.qZA(),e.TgZ(375,"app-code",17),e.IAx(),e._uU(376,"\nexport class SidebarDemo {\n\n    visibleSidebar1;\n\n    visibleSidebar2;\n\n    visibleSidebar3;\n\n    visibleSidebar4;\n\n    visibleSidebar5;\n\n}\n"),e.fQ9(),e.qZA()(),e.TgZ(377,"p-tabPanel",25),e.YNc(378,B,1,0,"ng-template",26),e.qZA()()()),2&t&&(e.xp6(9),e.Q6J("visible",n.visibleSidebar1)("baseZIndex",1e4),e.xp6(3),e.Q6J("visible",n.visibleSidebar2)("baseZIndex",1e4),e.xp6(3),e.Q6J("visible",n.visibleSidebar3)("baseZIndex",1e4),e.xp6(3),e.Q6J("visible",n.visibleSidebar4)("baseZIndex",1e4),e.xp6(3),e.Q6J("visible",n.visibleSidebar5)("fullScreen",!0)("baseZIndex",1e4),e.xp6(269),e.Q6J("routerLink",e.DdM(12,J)))},dependencies:[Z.rH,D,L.zx,f.xf,f.x4,M.jx,T.P,A.h],encapsulation:2}),i})(),Q=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[Z.Bz.forChild([{path:"",component:O}]),Z.Bz]}),i})();var z=a(1928),N=a(1508);let H=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[b.ez,Q,d.u5,F,z.hJ,N.LU,T.L,A.a]}),i})()}}]);
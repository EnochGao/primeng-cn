"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[6089],{9185:(f,Z,i)=>{i.d(Z,{$:()=>I,V:()=>S});var s=i(1571),o=i(6895),p=i(7340),e=i(8476),d=i(5963),u=i(3421),a=i(4174);function g(n,c){if(1&n&&s._UZ(0,"span",11),2&n){const t=s.oxw(2).$implicit;s.Q6J("innerHTML",t.summary,s.oJD)}}function r(n,c){if(1&n&&s._UZ(0,"span",12),2&n){const t=s.oxw(2).$implicit;s.Q6J("innerHTML",t.detail,s.oJD)}}function h(n,c){if(1&n&&(s.ynx(0),s.YNc(1,g,1,1,"span",9),s.YNc(2,r,1,1,"span",10),s.BQk()),2&n){const t=s.oxw().$implicit;s.xp6(1),s.Q6J("ngIf",t.summary),s.xp6(1),s.Q6J("ngIf",t.detail)}}function _(n,c){if(1&n&&(s.TgZ(0,"span",15),s._uU(1),s.qZA()),2&n){const t=s.oxw(2).$implicit;s.xp6(1),s.Oqu(t.summary)}}function T(n,c){if(1&n&&(s.TgZ(0,"span",16),s._uU(1),s.qZA()),2&n){const t=s.oxw(2).$implicit;s.xp6(1),s.Oqu(t.detail)}}function y(n,c){if(1&n&&(s.YNc(0,_,2,1,"span",13),s.YNc(1,T,2,1,"span",14)),2&n){const t=s.oxw().$implicit;s.Q6J("ngIf",t.summary),s.xp6(1),s.Q6J("ngIf",t.detail)}}function U(n,c){if(1&n){const t=s.EpF();s.TgZ(0,"button",17),s.NdJ("click",function(){s.CHM(t);const m=s.oxw().index,v=s.oxw(2);return s.KtG(v.removeMessage(m))}),s._UZ(1,"i",18),s.qZA()}}const M=function(n,c){return{showTransitionParams:n,hideTransitionParams:c}},A=function(n){return{value:"visible",params:n}},q=function(n,c,t,l){return{"pi-info-circle":n,"pi-check":c,"pi-exclamation-triangle":t,"pi-times-circle":l}};function b(n,c){if(1&n&&(s.TgZ(0,"div",4)(1,"div",5),s._UZ(2,"span",6),s.YNc(3,h,3,2,"ng-container",1),s.YNc(4,y,2,2,"ng-template",null,7,s.W1O),s.YNc(6,U,2,0,"button",8),s.qZA()()),2&n){const t=c.$implicit,l=s.MAs(5),m=s.oxw(2);s.Tol("p-message p-message-"+t.severity),s.Q6J("@messageAnimation",s.VKq(12,A,s.WLB(9,M,m.showTransitionOptions,m.hideTransitionOptions))),s.xp6(2),s.Tol("p-message-icon pi"+(t.icon?" "+t.icon:"")),s.Q6J("ngClass",s.l5B(14,q,"info"===t.severity,"success"===t.severity,"warn"===t.severity,"error"===t.severity)),s.xp6(1),s.Q6J("ngIf",!m.escape)("ngIfElse",l),s.xp6(3),s.Q6J("ngIf",m.closable)}}function C(n,c){if(1&n&&(s.ynx(0),s.YNc(1,b,7,19,"div",3),s.BQk()),2&n){const t=s.oxw();s.xp6(1),s.Q6J("ngForOf",t.messages)}}function w(n,c){1&n&&s.GkF(0)}function x(n,c){if(1&n&&(s.TgZ(0,"div",19)(1,"div",5),s.YNc(2,w,1,0,"ng-container",20),s.qZA()()),2&n){const t=s.oxw();s.Q6J("ngClass","p-message p-message-"+t.severity),s.xp6(2),s.Q6J("ngTemplateOutlet",t.contentTemplate)}}let S=(()=>{class n{constructor(t,l,m){this.messageService=t,this.el=l,this.cd=m,this.closable=!0,this.enableService=!0,this.escape=!0,this.showTransitionOptions="300ms ease-out",this.hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)",this.valueChange=new s.vpe,this.timerSubscriptions=[]}set value(t){this.messages=t,this.startMessageLifes(this.messages)}ngAfterContentInit(){this.templates.forEach(t=>{t.getType(),this.contentTemplate=t.template}),this.messageService&&this.enableService&&!this.contentTemplate&&(this.messageSubscription=this.messageService.messageObserver.subscribe(t=>{if(t){t instanceof Array||(t=[t]);const l=t.filter(m=>this.key===m.key);this.messages=this.messages?[...this.messages,...l]:[...l],this.startMessageLifes(l),this.cd.markForCheck()}}),this.clearSubscription=this.messageService.clearObserver.subscribe(t=>{t?this.key===t&&(this.messages=null):this.messages=null,this.cd.markForCheck()}))}hasMessages(){let t=this.el.nativeElement.parentElement;return!(!t||!t.offsetParent)&&(null!=this.contentTemplate||this.messages&&this.messages.length>0)}clear(){this.messages=[],this.valueChange.emit(this.messages)}removeMessage(t){this.messages=this.messages.filter((l,m)=>m!==t),this.valueChange.emit(this.messages)}get icon(){const t=this.severity||(this.hasMessages()?this.messages[0].severity:null);if(this.hasMessages())switch(t){case"success":return"pi-check";case"info":default:return"pi-info-circle";case"error":return"pi-times";case"warn":return"pi-exclamation-triangle"}return null}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.timerSubscriptions?.forEach(t=>t.unsubscribe())}startMessageLifes(t){t?.forEach(l=>l.life&&this.startMessageLife(l))}startMessageLife(t){const l=(0,d.H)(t.life).subscribe(()=>{this.messages=this.messages?.filter(m=>m!==t),this.timerSubscriptions=this.timerSubscriptions?.filter(m=>m!==l),this.valueChange.emit(this.messages),this.cd.markForCheck()});this.timerSubscriptions.push(l)}}return n.\u0275fac=function(t){return new(t||n)(s.Y36(e.ez,8),s.Y36(s.SBq),s.Y36(s.sBO))},n.\u0275cmp=s.Xpm({type:n,selectors:[["p-messages"]],contentQueries:function(t,l,m){if(1&t&&s.Suo(m,e.jx,4),2&t){let v;s.iGM(v=s.CRH())&&(l.templates=v)}},hostAttrs:[1,"p-element"],inputs:{value:"value",closable:"closable",style:"style",styleClass:"styleClass",enableService:"enableService",key:"key",escape:"escape",severity:"severity",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{valueChange:"valueChange"},decls:4,vars:5,consts:[["role","alert",1,"p-messages","p-component",3,"ngStyle"],[4,"ngIf","ngIfElse"],["staticMessage",""],["role","alert",3,"class",4,"ngFor","ngForOf"],["role","alert"],[1,"p-message-wrapper"],[3,"ngClass"],["escapeOut",""],["class","p-message-close p-link","type","button","pRipple","",3,"click",4,"ngIf"],["class","p-message-summary",3,"innerHTML",4,"ngIf"],["class","p-message-detail",3,"innerHTML",4,"ngIf"],[1,"p-message-summary",3,"innerHTML"],[1,"p-message-detail",3,"innerHTML"],["class","p-message-summary",4,"ngIf"],["class","p-message-detail",4,"ngIf"],[1,"p-message-summary"],[1,"p-message-detail"],["type","button","pRipple","",1,"p-message-close","p-link",3,"click"],[1,"p-message-close-icon","pi","pi-times"],["role","alert",3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(t,l){if(1&t&&(s.TgZ(0,"div",0),s.YNc(1,C,2,1,"ng-container",1),s.YNc(2,x,3,2,"ng-template",null,2,s.W1O),s.qZA()),2&t){const m=s.MAs(3);s.Tol(l.styleClass),s.Q6J("ngStyle",l.style),s.xp6(1),s.Q6J("ngIf",!l.contentTemplate)("ngIfElse",m)}},dependencies:[o.mk,o.sg,o.O5,o.tP,o.PC,a.H],styles:[".p-message-wrapper{display:flex;align-items:center}.p-message-close{display:flex;align-items:center;justify-content:center}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}.p-messages .p-message.ng-animating{overflow:hidden}\n"],encapsulation:2,data:{animation:[(0,p.X$)("messageAnimation",[(0,p.eR)(":enter",[(0,p.oB)({opacity:0,transform:"translateY(-25%)"}),(0,p.jt)("{{showTransitionParams}}")]),(0,p.eR)(":leave",[(0,p.jt)("{{hideTransitionParams}}",(0,p.oB)({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0}),n})(),I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[o.ez,u.T]}),n})()},678:(f,Z,i)=>{i.d(Z,{$:()=>s.$});var s=i(9185)},7381:(f,Z,i)=>{i.d(Z,{a:()=>u,h:()=>d});var s=i(6895),o=i(1571);const p=["code"],e=["*"];let d=(()=>{class a{constructor(r){this.el=r,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return a.\u0275fac=function(r){return new(r||a)(o.Y36(o.SBq))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-code"]],viewQuery:function(r,h){if(1&r&&o.Gf(p,5),2&r){let _;o.iGM(_=o.CRH())&&(h.codeViewChild=_.first)}},inputs:{lang:"lang",style:"style",styleClass:"styleClass"},ngContentSelectors:e,decls:5,vars:5,consts:[[3,"ngClass"],["code",""]],template:function(r,h){1&r&&(o.F$t(),o.TgZ(0,"pre",0)(1,"code",null,1),o.Hsn(3),o._uU(4,"\n"),o.qZA()()),2&r&&(o.Akn(h.style),o.Tol(h.styleClass),o.Q6J("ngClass","language-"+h.lang))},dependencies:[s.mk],encapsulation:2}),a})(),u=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[s.ez]}),a})()},6089:(f,Z,i)=>{i.r(Z),i.d(Z,{MessagesDemoModule:()=>I});var s=i(6895),o=i(9624),p=i(8476),e=i(1571),d=i(9185),u=i(1506),a=i(2863),g=i(6440),r=i(4619),h=i(485),_=i(4174),T=i(3032),y=i(7381);function U(n,c){1&n&&(e._UZ(0,"img",37),e.TgZ(1,"div",38),e._uU(2,"Always bet on Prime."),e.qZA())}function M(n,c){1&n&&e._UZ(0,"iframe",39)}const A=function(){return["/theming"]};let q=(()=>{class n{constructor(t){this.messageService=t}ngOnInit(){this.msgs1=[{severity:"success",summary:"Success",detail:"Message Content"},{severity:"info",summary:"Info",detail:"Message Content"},{severity:"warn",summary:"Warning",detail:"Message Content"},{severity:"error",summary:"Error",detail:"Message Content"},{severity:"custom",summary:"Custom",detail:"Message Content",icon:"pi-file"}]}addMessages(){this.msgs2=[{severity:"success",summary:"Success",detail:"Message Content"},{severity:"info",summary:"Info",detail:"Message Content"},{severity:"warn",summary:"Warning",detail:"Message Content"},{severity:"error",summary:"Error",detail:"Message Content"}]}clearMessages(){this.msgs2=[]}showViaService(){this.messageService.add({severity:"success",summary:"Service Message",detail:"Via MessageService"})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.ez))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],features:[e._Bn([p.ez])],decls:439,vars:8,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","messages","stackblitz","messages-demo"],[1,"content-section","implementation"],[1,"card"],[3,"value","enableService","valueChange"],["type","button","pButton","","pRipple","","label","Show",1,"mr-2",3,"click"],["type","button","pButton","","pRipple","","icon","pi pi-times","label","Clear",1,"p-button-secondary",3,"click"],["type","button","pButton","","label","Via Service",3,"click"],["severity","info"],["pTemplate",""],["severity","info","text","Message Content","styleClass","mr-2"],["severity","success","text","Message Content","styleClass","mr-2"],["severity","warn","text","Message Content","styleClass","mr-2"],["severity","error","text","Message Content"],[1,"mt-4"],["type","text","pInputText","","placeholder","Username",1,"ng-dirty","ng-invalid","mr-2"],["severity","error","text","Field is required"],["type","text","pInputText","","placeholder","Email",1,"ng-dirty","ng-invalid","mr-2"],["severity","error"],[1,"field","p-fluid"],["for","username"],["id","username","type","username","aria-describedby","username-help","pInputText","",1,"ng-invalid","ng-dirty"],["id","username-help",1,"p-error"],[1,"content-section","documentation"],["header","\u6587\u6863"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","\u6848\u4f8b\u4ee3\u7801"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/messages","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-messages-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["lang","css"],["header","StackBlitz"],["pTemplate","content"],["src","assets/showcase/images/primeng.svg","width","32"],[1,"ml-2"],["src","https://stackblitz.com/edit/primeng-messages-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"Messages"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Messages is used to display alerts inline."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"h5"),e._uU(10,"Severities"),e.qZA(),e.TgZ(11,"p-messages",5),e.NdJ("valueChange",function(v){return l.msgs1=v}),e.qZA(),e.TgZ(12,"h5"),e._uU(13,"Dynamic"),e.qZA(),e.TgZ(14,"button",6),e.NdJ("click",function(){return l.addMessages()}),e.qZA(),e.TgZ(15,"button",7),e.NdJ("click",function(){return l.clearMessages()}),e.qZA(),e.TgZ(16,"p-messages",5),e.NdJ("valueChange",function(v){return l.msgs2=v}),e.qZA(),e.TgZ(17,"h5"),e._uU(18,"Message Service"),e.qZA(),e.TgZ(19,"button",8),e.NdJ("click",function(){return l.showViaService()}),e.qZA(),e._UZ(20,"p-messages"),e.TgZ(21,"h5"),e._uU(22,"Static Content"),e.qZA(),e.TgZ(23,"p-messages",9),e.YNc(24,U,3,0,"ng-template",10),e.qZA(),e.TgZ(25,"h5"),e._uU(26,"Inline Message"),e.qZA(),e.TgZ(27,"p"),e._uU(28,"p-message component is used to display inline messages mostly within forms."),e.qZA(),e._UZ(29,"p-message",11)(30,"p-message",12)(31,"p-message",13)(32,"p-message",14),e.TgZ(33,"div",15),e._UZ(34,"input",16)(35,"p-message",17),e.qZA(),e.TgZ(36,"div",15),e._UZ(37,"input",18)(38,"p-message",19),e.qZA(),e.TgZ(39,"h5"),e._uU(40,"Form Layout"),e.qZA(),e.TgZ(41,"div",20)(42,"label",21),e._uU(43,"Username"),e.qZA(),e._UZ(44,"input",22),e.TgZ(45,"small",23),e._uU(46,"Username is not available."),e.qZA()()()(),e.TgZ(47,"div",24)(48,"p-tabView")(49,"p-tabPanel",25)(50,"h5"),e._uU(51,"\u5f15\u5165"),e.qZA(),e.TgZ(52,"app-code",26),e.IAx(),e._uU(53,"\nimport {MessagesModule} from 'primeng/messages';\nimport {MessageModule} from 'primeng/message';\n"),e.fQ9(),e.qZA(),e.TgZ(54,"h5"),e._uU(55,"\u51c6\u5907\u5f00\u59cb"),e.qZA(),e.TgZ(56,"p"),e._uU(57,"A single message is specified by Message interface in PrimeNG that defines the id, severity, summary and detail as the properties. Messages to display can either be defined using the value property which should an array of Message instances or using a MessageService are defined using the value property which should an array of Message instances."),e.qZA(),e.TgZ(58,"app-code",27),e.IAx(),e._uU(59,'\n<p-messages [(value)]="msgs"></p-messages>\n'),e.fQ9(),e.qZA(),e.TgZ(60,"h5"),e._uU(61,"Message Array"),e.qZA(),e.TgZ(62,"p"),e._uU(63,"A binding to the value property is required to provide messages to the component."),e.qZA(),e.TgZ(64,"app-code",27),e.IAx(),e._uU(65,'\n<p-messages [(value)]="msgs"></p-messages>\n\n<button type="button" (click)="show()">Show</button>\n<button type="button" (click)="clear()">Hide</button>\n'),e.fQ9(),e.qZA(),e.TgZ(66,"app-code",26),e.IAx(),e._uU(67,"\nshow() {\n    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});\n}\n\nhide() {\n    this.msgs = [];\n}\n"),e.fQ9(),e.qZA(),e.TgZ(68,"h5"),e._uU(69,"Message Service"),e.qZA(),e.TgZ(70,"p"),e._uU(71,"MessageService alternative does not require a value binding to an array. In order to use this service, import the class and define it as a provider in a component higher up in the component tree such as application instance itself so that descandant components can have it injected. If there are multiple message components having the same message service, you may use key property of the component to match the key of the message to implement scoping."),e.qZA(),e.TgZ(72,"app-code",26),e.IAx(),e._uU(73,"\nimport {MessageService} from 'primeng/api';\n"),e.fQ9(),e.qZA(),e.TgZ(74,"app-code",26),e.IAx(),e._uU(75,"\nimport {Component} from '@angular/core';\nimport {Message} from 'primeng//api';\nimport {MessageService} from 'primeng/api';\n\n@Component({\n    templateUrl: './messagesdemo.html'\n    })\n    export class MessageServiceDemo {\n\n        constructor(private messageService: MessageService) {}\n\n        addSingle() {\n            this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});\n        }\n\n        addMultiple() {\n            this.messageService.addAll([{severity:'success', summary:'Service Message', detail:'Via MessageService'},\n                            {severity:'info', summary:'Info Message', detail:'Via MessageService'}]);\n        }\n\n        clear() {\n            this.messageService.clear();\n        }\n}\n"),e.fQ9(),e.qZA(),e.TgZ(76,"h5"),e._uU(77,"Closable"),e.qZA(),e.TgZ(78,"p"),e._uU(79,"Messages are closable by default resulting in a close icon being displayed on top right corner."),e.qZA(),e.TgZ(80,"app-code",27),e.IAx(),e._uU(81,'\n<p-messages [(value)]="msgs"></p-messages>\n'),e.fQ9(),e.qZA(),e.TgZ(82,"p"),e._uU(83,"In order to disable closable messages, set "),e.TgZ(84,"i"),e._uU(85,"closable"),e.qZA(),e._uU(86," to false. Note that in this case two-way binding is not necessary as the component does not need to update its value."),e.qZA(),e.TgZ(87,"app-code",27),e.IAx(),e._uU(88,'\n<p-messages severity="info">\n    <ng-template pTemplate>\n        <img src="assets/showcase/images/demo/organization/walter.jpg" width="32" />\n        <span class="custom-message">I am the one who knocks.</span>\n    </ng-template>\n</p-messages>\n'),e.fQ9(),e.qZA(),e.TgZ(89,"h5"),e._uU(90,"Severities"),e.qZA(),e.TgZ(91,"p"),e._uU(92,"Here are the possible values for the severity of a message."),e.qZA(),e.TgZ(93,"ul")(94,"li"),e._uU(95,"success"),e.qZA(),e.TgZ(96,"li"),e._uU(97,"info"),e.qZA(),e.TgZ(98,"li"),e._uU(99,"warn"),e.qZA(),e.TgZ(100,"li"),e._uU(101,"error"),e.qZA()(),e.TgZ(102,"h5"),e._uU(103,"Static Content"),e.qZA(),e.TgZ(104,"p"),e._uU(105,"Alternative way to provide the content for the messages is templating. In this case value property and message service is ignored and only static is displayed. "),e.qZA(),e.TgZ(106,"app-code",27),e.IAx(),e._uU(107,'\n<p-messages severity="info">\n    <ng-template pTemplate>\n        <img src="assets/showcase/images/primeng.svg" width="32" />\n        <div class="ml-2">Always bet on Prime.</div>\n    </ng-template>\n</p-messages>\n'),e.fQ9(),e.qZA(),e.TgZ(108,"h5"),e._uU(109,"Message Component"),e.qZA(),e.TgZ(110,"p"),e._uU(111,"Message component is useful in cases where messages need to be displayed related to an element such as forms. It has two property, severity and text of the message."),e.qZA(),e.TgZ(112,"app-code",27),e.IAx(),e._uU(113,'\n<p-message severity="info" text="Message Content"></p-message>\n<p-message severity="success" text="Message Content"></p-message>\n<p-message severity="warn" text="Message Content"></p-message>\n<p-message severity="error" text="Message Content"></p-message>\n'),e.fQ9(),e.qZA(),e.TgZ(114,"h5"),e._uU(115,"\u52a8\u753b\u914d\u7f6e"),e.qZA(),e.TgZ(116,"p"),e._uU(117,"Transition of the open and hide animations can be customized using the "),e.TgZ(118,"i"),e._uU(119,"showTransitionOptions"),e.qZA(),e._uU(120," and "),e.TgZ(121,"i"),e._uU(122,"hideTransitionOptions"),e.qZA(),e._uU(123," properties, example below disables the animations altogether."),e.qZA(),e.TgZ(124,"app-code",27),e.IAx(),e._uU(125,'\n<p-message [showTransitionOptions]="\'0ms\'" [hideTransitionOptions]="\'0ms\'" severity="info" text="PrimeNG Rocks"></p-message>\n'),e.fQ9(),e.qZA(),e.TgZ(126,"h5"),e._uU(127,"Properties of Messages Component"),e.qZA(),e.TgZ(128,"div",28)(129,"table",29)(130,"thead")(131,"tr")(132,"th"),e._uU(133,"\u540d\u79f0"),e.qZA(),e.TgZ(134,"th"),e._uU(135,"\u7c7b\u578b"),e.qZA(),e.TgZ(136,"th"),e._uU(137,"\u9ed8\u8ba4\u503c"),e.qZA(),e.TgZ(138,"th"),e._uU(139,"\u63cf\u8ff0"),e.qZA()()(),e.TgZ(140,"tbody")(141,"tr")(142,"td"),e._uU(143,"value"),e.qZA(),e.TgZ(144,"td"),e._uU(145,"array"),e.qZA(),e.TgZ(146,"td"),e._uU(147,"null"),e.qZA(),e.TgZ(148,"td"),e._uU(149,"An array of messages to display."),e.qZA()(),e.TgZ(150,"tr")(151,"td"),e._uU(152,"closable"),e.qZA(),e.TgZ(153,"td"),e._uU(154,"boolean"),e.qZA(),e.TgZ(155,"td"),e._uU(156,"true"),e.qZA(),e.TgZ(157,"td"),e._uU(158,"Defines if message box can be closed by the click icon."),e.qZA()(),e.TgZ(159,"tr")(160,"td"),e._uU(161,"style"),e.qZA(),e.TgZ(162,"td"),e._uU(163,"string"),e.qZA(),e.TgZ(164,"td"),e._uU(165,"null"),e.qZA(),e.TgZ(166,"td"),e._uU(167,"Inline style of the component."),e.qZA()(),e.TgZ(168,"tr")(169,"td"),e._uU(170,"styleClass"),e.qZA(),e.TgZ(171,"td"),e._uU(172,"string"),e.qZA(),e.TgZ(173,"td"),e._uU(174,"null"),e.qZA(),e.TgZ(175,"td"),e._uU(176,"Style class of the component."),e.qZA()(),e.TgZ(177,"tr")(178,"td"),e._uU(179,"enableService"),e.qZA(),e.TgZ(180,"td"),e._uU(181,"boolean"),e.qZA(),e.TgZ(182,"td"),e._uU(183,"true"),e.qZA(),e.TgZ(184,"td"),e._uU(185,"Whether displaying services messages are enabled."),e.qZA()(),e.TgZ(186,"tr")(187,"td"),e._uU(188,"escape"),e.qZA(),e.TgZ(189,"td"),e._uU(190,"boolean"),e.qZA(),e.TgZ(191,"td"),e._uU(192,"true"),e.qZA(),e.TgZ(193,"td"),e._uU(194,"Whether displaying messages would be escaped or not."),e.qZA()(),e.TgZ(195,"tr")(196,"td"),e._uU(197,"key"),e.qZA(),e.TgZ(198,"td"),e._uU(199,"string"),e.qZA(),e.TgZ(200,"td"),e._uU(201,"null"),e.qZA(),e.TgZ(202,"td"),e._uU(203,"Id to match the key of the message to enable scoping in service based messaging."),e.qZA()(),e.TgZ(204,"tr")(205,"td"),e._uU(206,"showTransitionOptions"),e.qZA(),e.TgZ(207,"td"),e._uU(208,"string"),e.qZA(),e.TgZ(209,"td"),e._uU(210,"300ms ease-out"),e.qZA(),e.TgZ(211,"td"),e._uU(212,"Transition options of the show animation."),e.qZA()(),e.TgZ(213,"tr")(214,"td"),e._uU(215,"hideTransitionOptions"),e.qZA(),e.TgZ(216,"td"),e._uU(217,"string"),e.qZA(),e.TgZ(218,"td"),e._uU(219,"200ms cubic-bezier(0.86, 0, 0.07, 1)"),e.qZA(),e.TgZ(220,"td"),e._uU(221,"Transition options of the hide animation."),e.qZA()()()()(),e.TgZ(222,"h5"),e._uU(223,"\u6a21\u677f"),e.qZA(),e.TgZ(224,"div",28)(225,"table",29)(226,"thead")(227,"tr")(228,"th"),e._uU(229,"\u540d\u79f0"),e.qZA(),e.TgZ(230,"th"),e._uU(231,"\u53c2\u6570"),e.qZA()()(),e.TgZ(232,"tbody")(233,"tr")(234,"td"),e._uU(235,"content"),e.qZA(),e.TgZ(236,"td"),e._uU(237,"-"),e.qZA()()()()(),e.TgZ(238,"h5"),e._uU(239,"Properties of Message Component"),e.qZA(),e.TgZ(240,"div",28)(241,"table",29)(242,"thead")(243,"tr")(244,"th"),e._uU(245,"\u540d\u79f0"),e.qZA(),e.TgZ(246,"th"),e._uU(247,"\u7c7b\u578b"),e.qZA(),e.TgZ(248,"th"),e._uU(249,"\u9ed8\u8ba4\u503c"),e.qZA(),e.TgZ(250,"th"),e._uU(251,"\u63cf\u8ff0"),e.qZA()()(),e.TgZ(252,"tbody")(253,"tr")(254,"td"),e._uU(255,"severity"),e.qZA(),e.TgZ(256,"td"),e._uU(257,"string"),e.qZA(),e.TgZ(258,"td"),e._uU(259,"null"),e.qZA(),e.TgZ(260,"td"),e._uU(261,"Severity level of the message."),e.qZA()(),e.TgZ(262,"tr")(263,"td"),e._uU(264,"text"),e.qZA(),e.TgZ(265,"td"),e._uU(266,"string"),e.qZA(),e.TgZ(267,"td"),e._uU(268,"null"),e.qZA(),e.TgZ(269,"td"),e._uU(270,"Text content."),e.qZA()(),e.TgZ(271,"tr")(272,"td"),e._uU(273,"escape"),e.qZA(),e.TgZ(274,"td"),e._uU(275,"boolean"),e.qZA(),e.TgZ(276,"td"),e._uU(277,"true"),e.qZA(),e.TgZ(278,"td"),e._uU(279,"Whether displaying messages would be escaped or not."),e.qZA()(),e.TgZ(280,"tr")(281,"td"),e._uU(282,"style"),e.qZA(),e.TgZ(283,"td"),e._uU(284,"string"),e.qZA(),e.TgZ(285,"td"),e._uU(286,"null"),e.qZA(),e.TgZ(287,"td"),e._uU(288,"Inline style of the component."),e.qZA()(),e.TgZ(289,"tr")(290,"td"),e._uU(291,"styleClass"),e.qZA(),e.TgZ(292,"td"),e._uU(293,"string"),e.qZA(),e.TgZ(294,"td"),e._uU(295,"null"),e.qZA(),e.TgZ(296,"td"),e._uU(297,"Style class of the component."),e.qZA()()()()(),e.TgZ(298,"h5"),e._uU(299,"Styling for Messages Component"),e.qZA(),e.TgZ(300,"p"),e._uU(301,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(302,"a",30),e._uU(303,"theming page"),e.qZA(),e._uU(304,"."),e.qZA(),e.TgZ(305,"div",28)(306,"table",29)(307,"thead")(308,"tr")(309,"th"),e._uU(310,"\u540d\u79f0"),e.qZA(),e.TgZ(311,"th"),e._uU(312,"\u5143\u7d20"),e.qZA()()(),e.TgZ(313,"tbody")(314,"tr")(315,"td"),e._uU(316,"p-messages"),e.qZA(),e.TgZ(317,"td"),e._uU(318,"Container element."),e.qZA()(),e.TgZ(319,"tr")(320,"td"),e._uU(321,"p-message"),e.qZA(),e.TgZ(322,"td"),e._uU(323,"Message element."),e.qZA()(),e.TgZ(324,"tr")(325,"td"),e._uU(326,"p-message-info"),e.qZA(),e.TgZ(327,"td"),e._uU(328,"Message element when displaying info messages."),e.qZA()(),e.TgZ(329,"tr")(330,"td"),e._uU(331,"p-message-warn"),e.qZA(),e.TgZ(332,"td"),e._uU(333,"Message element when displaying warning messages."),e.qZA()(),e.TgZ(334,"tr")(335,"td"),e._uU(336,"p-message-error"),e.qZA(),e.TgZ(337,"td"),e._uU(338,"Message element when displaying error messages."),e.qZA()(),e.TgZ(339,"tr")(340,"td"),e._uU(341,"p-message-success"),e.qZA(),e.TgZ(342,"td"),e._uU(343,"Message element when displaying success messages."),e.qZA()(),e.TgZ(344,"tr")(345,"td"),e._uU(346,"p-message-close"),e.qZA(),e.TgZ(347,"td"),e._uU(348,"Close button."),e.qZA()(),e.TgZ(349,"tr")(350,"td"),e._uU(351,"p-message-close-icon"),e.qZA(),e.TgZ(352,"td"),e._uU(353,"Close icon."),e.qZA()(),e.TgZ(354,"tr")(355,"td"),e._uU(356,"p-message-icon"),e.qZA(),e.TgZ(357,"td"),e._uU(358,"Severity icon."),e.qZA()(),e.TgZ(359,"tr")(360,"td"),e._uU(361,"p-message-summary"),e.qZA(),e.TgZ(362,"td"),e._uU(363,"Summary of a message."),e.qZA()(),e.TgZ(364,"tr")(365,"td"),e._uU(366,"p-message-detail"),e.qZA(),e.TgZ(367,"td"),e._uU(368,"Detail of a message."),e.qZA()()()()(),e.TgZ(369,"h5"),e._uU(370,"Styling for Message Component"),e.qZA(),e.TgZ(371,"p"),e._uU(372,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(373,"a",30),e._uU(374,"theming page"),e.qZA(),e._uU(375,"."),e.qZA(),e.TgZ(376,"div",28)(377,"table",29)(378,"thead")(379,"tr")(380,"th"),e._uU(381,"\u540d\u79f0"),e.qZA(),e.TgZ(382,"th"),e._uU(383,"\u5143\u7d20"),e.qZA()()(),e.TgZ(384,"tbody")(385,"tr")(386,"td"),e._uU(387,"p-inline-message"),e.qZA(),e.TgZ(388,"td"),e._uU(389,"Message element."),e.qZA()(),e.TgZ(390,"tr")(391,"td"),e._uU(392,"p-inline-message-info"),e.qZA(),e.TgZ(393,"td"),e._uU(394,"Message element when displaying info messages."),e.qZA()(),e.TgZ(395,"tr")(396,"td"),e._uU(397,"p-inline-message-warn"),e.qZA(),e.TgZ(398,"td"),e._uU(399,"Message element when displaying warning messages."),e.qZA()(),e.TgZ(400,"tr")(401,"td"),e._uU(402,"p-inline-message-error"),e.qZA(),e.TgZ(403,"td"),e._uU(404,"Message element when displaying error messages."),e.qZA()(),e.TgZ(405,"tr")(406,"td"),e._uU(407,"p-inline-message-success"),e.qZA(),e.TgZ(408,"td"),e._uU(409,"Message element when displaying success messages."),e.qZA()(),e.TgZ(410,"tr")(411,"td"),e._uU(412,"p-inline-message-icon"),e.qZA(),e.TgZ(413,"td"),e._uU(414,"Severity icon."),e.qZA()(),e.TgZ(415,"tr")(416,"td"),e._uU(417,"p-inline-message-text"),e.qZA(),e.TgZ(418,"td"),e._uU(419,"Text of a message."),e.qZA()()()()(),e.TgZ(420,"h5"),e._uU(421,"\u4f9d\u8d56"),e.qZA(),e.TgZ(422,"p"),e._uU(423,"None."),e.qZA()(),e.TgZ(424,"p-tabPanel",31)(425,"a",32)(426,"span"),e._uU(427,"GitHub\u4e2d\u8bbf\u95ee"),e.qZA()(),e.TgZ(428,"a",33)(429,"span"),e._uU(430,"StackBlitz\u4e2d\u7f16\u8f91"),e.qZA()(),e.TgZ(431,"app-code",27),e.IAx(),e._uU(432,'\n<h5>Severities</h5>\n<p-messages [(value)]="msgs1" [enableService]="false"></p-messages>\n\n<h5>Dynamic</h5>\n<button type="button" pButton pRipple (click)="addMessages()" label="Show" class="mr-2"></button>\n<button type="button" pButton pRipple (click)="clearMessages()" icon="pi pi-times" label="Clear" class="p-button-secondary"></button>\n\n<p-messages [(value)]="msgs2" [enableService]="false"></p-messages>\n\n<h5>Message Service</h5>\n<button type="button" pButton (click)="showViaService()" label="Via Service"></button>\n<p-messages></p-messages>\n\n<h5>Static Content</h5>\n<p-messages severity="info">\n    <ng-template pTemplate>\n        <img src="assets/showcase/images/primeng.svg" width="32" />\n        <div class="ml-2">Always bet on Prime.</div>\n    </ng-template>\n</p-messages>\n\n<h5>Inline Message</h5>\n<p>p-message component is used to display inline messages mostly within forms.</p>\n<p-message severity="info" text="Message Content" styleClass="mr-2"></p-message>\n<p-message severity="success" text="Message Content" styleClass="mr-2"></p-message>\n<p-message severity="warn" text="Message Content" styleClass="mr-2"></p-message>\n<p-message severity="error" text="Message Content"></p-message>\n\n<div class="mt-4">\n    <input type="text" pInputText placeholder="Username" class="ng-dirty ng-invalid mr-2">\n    <p-message severity="error" text="Field is required"></p-message>\n</div>\n\n<div class="mt-4">\n    <input type="text" pInputText placeholder="Email" class="ng-dirty ng-invalid mr-2">\n    <p-message severity="error"></p-message>\n</div>\n\n<h5>Form Layout</h5>\n<div class="field p-fluid">\n    <label for="username">Username</label>\n    <input id="username" type="username" aria-describedby="username-help" class="ng-invalid ng-dirty" pInputText />\n    <small id="username-help" class="p-error">Username is not available.</small>\n</div>\n'),e.fQ9(),e.qZA(),e.TgZ(433,"app-code",26),e.IAx(),e._uU(434,"\n    import {Component, OnInit} from '@angular/core';\n    import {Message,MessageService} from 'primeng/api';\n\n    @Component({\n        templateUrl: './messagesdemo.html',\n        providers: [MessageService]\n    })\n    export class MessagesDemo implements OnInit {\n\n        msgs1: Message[];\n\n        msgs2: Message[];\n\n        constructor(private messageService: MessageService) {}\n\n        ngOnInit() {\n            this.msgs1 = [\n                {severity:'success', summary:'Success', detail:'Message Content'},\n                {severity:'info', summary:'Info', detail:'Message Content'},\n                {severity:'warn', summary:'Warning', detail:'Message Content'},\n                {severity:'error', summary:'Error', detail:'Message Content'},\n                {severity:'custom', summary:'Custom', detail:'Message Content', icon: 'pi-file'}\n            ];\n        }\n\n        addMessages() {\n            this.msgs2 = [\n                {severity:'success', summary:'Success', detail:'Message Content'},\n                {severity:'info', summary:'Info', detail:'Message Content'},\n                {severity:'warn', summary:'Warning', detail:'Message Content'},\n                {severity:'error', summary:'Error', detail:'Message Content'}\n            ];\n        }\n\n        clearMessages() {\n            this.msgs2 = [];\n        }\n\n        showViaService() {\n            this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});\n        }\n    }\n"),e.fQ9(),e.qZA(),e.TgZ(435,"app-code",34),e.IAx(),e._uU(436,"\n:host ::ng-deep .p-message-custom {\n    background-color: #E1CFE7;\n    border: solid #8A427A;\n    border-width: 0 0 0 6px;\n    color: #2c1e30;\n}\n\n:host ::ng-deep .p-message-close-icon {\n    color: #2c1e30;\n}\n"),e.fQ9(),e.qZA()(),e.TgZ(437,"p-tabPanel",35),e.YNc(438,M,1,0,"ng-template",36),e.qZA()()()),2&t&&(e.xp6(11),e.Q6J("value",l.msgs1)("enableService",!1),e.xp6(5),e.Q6J("value",l.msgs2)("enableService",!1),e.xp6(286),e.Q6J("routerLink",e.DdM(6,A)),e.xp6(71),e.Q6J("routerLink",e.DdM(7,A)))},dependencies:[o.rH,d.V,u.q,a.Hq,g.o,r.xf,r.x4,h.jx,_.H,T.P,y.h],styles:["[_nghost-%COMP%]     .p-message-custom{background-color:#e1cfe7;border:solid #8A427A;border-width:0 0 0 6px;color:#2c1e30}[_nghost-%COMP%]     .p-message-close-icon{color:#2c1e30}"]}),n})(),b=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[o.Bz.forChild([{path:"",component:q}]),o.Bz]}),n})();var C=i(678),w=i(1928),x=i(1508),S=i(3421);let I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.ez,b,C.$,u.O,w.hJ,g.j,x.LU,S.T,T.L,y.a]}),n})()},5963:(f,Z,i)=>{i.d(Z,{H:()=>d});var s=i(9751),o=i(4986),p=i(3532);function d(u=0,a,g=o.P){let r=-1;return null!=a&&((0,p.K)(a)?g=a:r=a),new s.y(h=>{let _=function e(u){return u instanceof Date&&!isNaN(u)}(u)?+u-g.now():u;_<0&&(_=0);let T=0;return g.schedule(function(){h.closed||(h.next(T++),0<=r?this.schedule(void 0,r):h.complete())},_)})}},4408:(f,Z,i)=>{i.d(Z,{o:()=>d});var s=i(727);class o extends s.w0{constructor(a,g){super()}schedule(a,g=0){return this}}const p={setInterval(u,a,...g){const{delegate:r}=p;return r?.setInterval?r.setInterval(u,a,...g):setInterval(u,a,...g)},clearInterval(u){const{delegate:a}=p;return(a?.clearInterval||clearInterval)(u)},delegate:void 0};var e=i(8737);class d extends o{constructor(a,g){super(a,g),this.scheduler=a,this.work=g,this.pending=!1}schedule(a,g=0){var r;if(this.closed)return this;this.state=a;const h=this.id,_=this.scheduler;return null!=h&&(this.id=this.recycleAsyncId(_,h,g)),this.pending=!0,this.delay=g,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(_,this.id,g),this}requestAsyncId(a,g,r=0){return p.setInterval(a.flush.bind(a,this),r)}recycleAsyncId(a,g,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return g;null!=g&&p.clearInterval(g)}execute(a,g){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(a,g);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(a,g){let h,r=!1;try{this.work(a)}catch(_){r=!0,h=_||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),h}unsubscribe(){if(!this.closed){const{id:a,scheduler:g}=this,{actions:r}=g;this.work=this.state=this.scheduler=null,this.pending=!1,(0,e.P)(r,this),null!=a&&(this.id=this.recycleAsyncId(g,a,null)),this.delay=null,super.unsubscribe()}}}},640:(f,Z,i)=>{i.d(Z,{v:()=>p});const s={now:()=>(s.delegate||Date).now(),delegate:void 0};class o{constructor(d,u=o.now){this.schedulerActionCtor=d,this.now=u}schedule(d,u=0,a){return new this.schedulerActionCtor(this,d).schedule(a,u)}}o.now=s.now;class p extends o{constructor(d,u=o.now){super(d,u),this.actions=[],this._active=!1}flush(d){const{actions:u}=this;if(this._active)return void u.push(d);let a;this._active=!0;do{if(a=d.execute(d.state,d.delay))break}while(d=u.shift());if(this._active=!1,a){for(;d=u.shift();)d.unsubscribe();throw a}}}},4986:(f,Z,i)=>{i.d(Z,{P:()=>e,z:()=>p});var s=i(4408);const p=new(i(640).v)(s.o),e=p}}]);
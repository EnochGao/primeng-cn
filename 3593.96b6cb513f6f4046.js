"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[3593],{7381:(c,A,l)=>{l.d(A,{a:()=>m,h:()=>T});var h=l(6895),n=l(1571);const Z=["code"],e=["*"];let T=(()=>{class d{constructor(o){this.el=o,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return d.\u0275fac=function(o){return new(o||d)(n.Y36(n.SBq))},d.\u0275cmp=n.Xpm({type:d,selectors:[["app-code"]],viewQuery:function(o,i){if(1&o&&n.Gf(Z,5),2&o){let _;n.iGM(_=n.CRH())&&(i.codeViewChild=_.first)}},inputs:{lang:"lang",style:"style",styleClass:"styleClass"},ngContentSelectors:e,decls:5,vars:5,consts:[[3,"ngClass"],["code",""]],template:function(o,i){1&o&&(n.F$t(),n.TgZ(0,"pre",0)(1,"code",null,1),n.Hsn(3),n._uU(4,"\n"),n.qZA()()),2&o&&(n.Akn(i.style),n.Tol(i.styleClass),n.Q6J("ngClass","language-"+i.lang))},dependencies:[h.mk],encapsulation:2}),d})(),m=(()=>{class d{}return d.\u0275fac=function(o){return new(o||d)},d.\u0275mod=n.oAB({type:d}),d.\u0275inj=n.cJS({imports:[h.ez]}),d})()},3593:(c,A,l)=>{l.r(A),l.d(A,{SliderDemoModule:()=>C});var h=l(6895),n=l(433),Z=l(9624),e=l(1571),T=l(4057),m=l(6440),d=l(4619),g=l(485),o=l(3032),i=l(7381);function _(t,s){1&t&&e._UZ(0,"iframe",22)}const U=function(){return["/theming"]};let v=(()=>{class t{constructor(){this.val2=50,this.rangeValues=[20,80]}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:282,vars:15,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","slider","stackblitz","slider-demo"],[1,"content-section","implementation"],[1,"card"],[3,"ngModel","ngModelChange"],["type","text","pInputText","","readonly","",3,"ngModel","ngModelChange"],[3,"ngModel","step","ngModelChange"],[3,"ngModel","range","ngModelChange"],["orientation","vertical",3,"ngModel","ngModelChange"],[1,"content-section","documentation"],["header","\u6587\u6863"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","\u6848\u4f8b\u4ee3\u7801"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/slider","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-slider-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-slider-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(r,a){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"Slider"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Slider is an input component to provide a numerical input."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"h5"),e._uU(10),e.qZA(),e.TgZ(11,"p-slider",5),e.NdJ("ngModelChange",function(u){return a.val1=u}),e.qZA(),e.TgZ(12,"h5"),e._uU(13),e.qZA(),e.TgZ(14,"input",6),e.NdJ("ngModelChange",function(u){return a.val2=u}),e.qZA(),e.TgZ(15,"p-slider",5),e.NdJ("ngModelChange",function(u){return a.val2=u}),e.qZA(),e.TgZ(16,"h5"),e._uU(17),e.qZA(),e.TgZ(18,"p-slider",7),e.NdJ("ngModelChange",function(u){return a.val3=u}),e.qZA(),e.TgZ(19,"h5"),e._uU(20),e.qZA(),e.TgZ(21,"p-slider",8),e.NdJ("ngModelChange",function(u){return a.rangeValues=u}),e.qZA(),e.TgZ(22,"h5"),e._uU(23),e.qZA(),e.TgZ(24,"p-slider",9),e.NdJ("ngModelChange",function(u){return a.val4=u}),e.qZA()()(),e.TgZ(25,"div",10)(26,"p-tabView")(27,"p-tabPanel",11)(28,"h5"),e._uU(29,"\u5f15\u5165"),e.qZA(),e.TgZ(30,"app-code",12),e.IAx(),e._uU(31,"\nimport {SliderModule} from 'primeng/slider';\n"),e.fQ9(),e.qZA(),e.TgZ(32,"h5"),e._uU(33,"\u51c6\u5907\u5f00\u59cb"),e.qZA(),e.TgZ(34,"p"),e._uU(35,"Two-way binding is defined using the standard "),e.TgZ(36,"i"),e._uU(37,"ngModel"),e.qZA(),e._uU(38," directive."),e.qZA(),e.TgZ(39,"app-code",13),e.IAx(),e._uU(40,'\n<p-slider [(ngModel)]="val"></p-slider>\n'),e.fQ9(),e.qZA(),e.TgZ(41,"app-code",12),e.IAx(),e._uU(42,"\nexport class MyModel {\n\n    val: number;\n\n}\n"),e.fQ9(),e.qZA(),e.TgZ(43,"h5"),e._uU(44,"\u54cd\u5e94\u5f0f\u8868\u5355"),e.qZA(),e.TgZ(45,"p"),e._uU(46,"Slider can be used in a model driven form as well."),e.qZA(),e.TgZ(47,"app-code",13),e.IAx(),e._uU(48,'\n<p-slider formControlName="age"></p-slider>\n'),e.fQ9(),e.qZA(),e.TgZ(49,"h5"),e._uU(50,"Min-Max"),e.qZA(),e.TgZ(51,"p"),e._uU(52,"Boundaries are specified with "),e.TgZ(53,"i"),e._uU(54,"min"),e.qZA(),e._uU(55," and "),e.TgZ(56,"i"),e._uU(57,"max"),e.qZA(),e._uU(58," attributes."),e.qZA(),e.TgZ(59,"app-code",13),e.IAx(),e._uU(60,'\n<p-slider [(ngModel)]="val" [min]="0" [max]="100"></p-slider>\n'),e.fQ9(),e.qZA(),e.TgZ(61,"h5"),e._uU(62,"Step"),e.qZA(),e.TgZ(63,"p"),e._uU(64,"Step factor is 1 by default and can be customized with "),e.TgZ(65,"i"),e._uU(66,"step"),e.qZA(),e._uU(67," option."),e.qZA(),e.TgZ(68,"app-code",13),e.IAx(),e._uU(69,'\n<p-slider [(ngModel)]="val" [step]="10"></p-slider>\n'),e.fQ9(),e.qZA(),e.TgZ(70,"h5"),e._uU(71,"Range"),e.qZA(),e.TgZ(72,"p"),e._uU(73,"Range slider provides two handles to define two values. In this case, value binding should refer to an array."),e.qZA(),e.TgZ(74,"app-code",13),e.IAx(),e._uU(75,'\n<p-slider [(ngModel)]="rangeValues" [range]="true"></p-slider>\n'),e.fQ9(),e.qZA(),e.TgZ(76,"app-code",12),e.IAx(),e._uU(77,"\nexport class MyModel {\n\n    rangeValues: number[];\n\n}\n"),e.fQ9(),e.qZA(),e.TgZ(78,"h5"),e._uU(79,"Orientation"),e.qZA(),e.TgZ(80,"p"),e._uU(81,"Sliders supports two "),e.TgZ(82,"i"),e._uU(83,"orientation"),e.qZA(),e._uU(84,", horizontal is the default and other alternative is vertical."),e.qZA(),e.TgZ(85,"app-code",13),e.IAx(),e._uU(86,'\n<p-slider [(ngModel)]="val" orientation="vertical"></p-slider>\n'),e.fQ9(),e.qZA(),e.TgZ(87,"h5"),e._uU(88,"\u5c5e\u6027"),e.qZA(),e.TgZ(89,"div",14)(90,"table",15)(91,"thead")(92,"tr")(93,"th"),e._uU(94,"\u540d\u79f0"),e.qZA(),e.TgZ(95,"th"),e._uU(96,"\u7c7b\u578b"),e.qZA(),e.TgZ(97,"th"),e._uU(98,"\u9ed8\u8ba4\u503c"),e.qZA(),e.TgZ(99,"th"),e._uU(100,"\u63cf\u8ff0"),e.qZA()()(),e.TgZ(101,"tbody")(102,"tr")(103,"td"),e._uU(104,"animate"),e.qZA(),e.TgZ(105,"td"),e._uU(106,"boolean"),e.qZA(),e.TgZ(107,"td"),e._uU(108,"false"),e.qZA(),e.TgZ(109,"td"),e._uU(110,"When enabled, displays an animation on click of the slider bar."),e.qZA()(),e.TgZ(111,"tr")(112,"td"),e._uU(113,"disabled"),e.qZA(),e.TgZ(114,"td"),e._uU(115,"boolean"),e.qZA(),e.TgZ(116,"td"),e._uU(117,"false"),e.qZA(),e.TgZ(118,"td"),e._uU(119,"When present, it specifies that the element should be disabled."),e.qZA()(),e.TgZ(120,"tr")(121,"td"),e._uU(122,"min"),e.qZA(),e.TgZ(123,"td"),e._uU(124,"number"),e.qZA(),e.TgZ(125,"td"),e._uU(126,"0"),e.qZA(),e.TgZ(127,"td"),e._uU(128,"Mininum boundary value."),e.qZA()(),e.TgZ(129,"tr")(130,"td"),e._uU(131,"max"),e.qZA(),e.TgZ(132,"td"),e._uU(133,"number"),e.qZA(),e.TgZ(134,"td"),e._uU(135,"100"),e.qZA(),e.TgZ(136,"td"),e._uU(137,"Maximum boundary value."),e.qZA()(),e.TgZ(138,"tr")(139,"td"),e._uU(140,"orientation"),e.qZA(),e.TgZ(141,"td"),e._uU(142,"string"),e.qZA(),e.TgZ(143,"td"),e._uU(144,"horizontal"),e.qZA(),e.TgZ(145,"td"),e._uU(146,"Orientation of the slider, valid values are horizontal and vertical."),e.qZA()(),e.TgZ(147,"tr")(148,"td"),e._uU(149,"step"),e.qZA(),e.TgZ(150,"td"),e._uU(151,"number"),e.qZA(),e.TgZ(152,"td"),e._uU(153,"1"),e.qZA(),e.TgZ(154,"td"),e._uU(155,"Step factor to increment/decrement the value."),e.qZA()(),e.TgZ(156,"tr")(157,"td"),e._uU(158,"range"),e.qZA(),e.TgZ(159,"td"),e._uU(160,"boolean"),e.qZA(),e.TgZ(161,"td"),e._uU(162,"false"),e.qZA(),e.TgZ(163,"td"),e._uU(164,"When specified, allows two boundary values to be picked."),e.qZA()(),e.TgZ(165,"tr")(166,"td"),e._uU(167,"style"),e.qZA(),e.TgZ(168,"td"),e._uU(169,"string"),e.qZA(),e.TgZ(170,"td"),e._uU(171,"null"),e.qZA(),e.TgZ(172,"td"),e._uU(173,"Inline style of the component."),e.qZA()(),e.TgZ(174,"tr")(175,"td"),e._uU(176,"styleClass"),e.qZA(),e.TgZ(177,"td"),e._uU(178,"string"),e.qZA(),e.TgZ(179,"td"),e._uU(180,"null"),e.qZA(),e.TgZ(181,"td"),e._uU(182,"Style class of the component."),e.qZA()(),e.TgZ(183,"tr")(184,"td"),e._uU(185,"tabindex"),e.qZA(),e.TgZ(186,"td"),e._uU(187,"number"),e.qZA(),e.TgZ(188,"td"),e._uU(189,"0"),e.qZA(),e.TgZ(190,"td"),e._uU(191,"Index of the element in tabbing order."),e.qZA()(),e.TgZ(192,"tr")(193,"td"),e._uU(194,"ariaLabelledBy"),e.qZA(),e.TgZ(195,"td"),e._uU(196,"string"),e.qZA(),e.TgZ(197,"td"),e._uU(198,"null"),e.qZA(),e.TgZ(199,"td"),e._uU(200,"Establishes relationships between the component and label(s) where its value should be one or more element IDs."),e.qZA()()()()(),e.TgZ(201,"h5"),e._uU(202,"\u4e8b\u4ef6"),e.qZA(),e.TgZ(203,"div",14)(204,"table",15)(205,"thead")(206,"tr")(207,"th"),e._uU(208,"\u540d\u79f0"),e.qZA(),e.TgZ(209,"th"),e._uU(210,"\u53c2\u6570"),e.qZA(),e.TgZ(211,"th"),e._uU(212,"\u63cf\u8ff0"),e.qZA()()(),e.TgZ(213,"tbody")(214,"tr")(215,"td"),e._uU(216,"onChange"),e.qZA(),e.TgZ(217,"td"),e._uU(218," event.originalEvent: Slide event "),e._UZ(219,"br"),e._uU(220," event.value: New value "),e._UZ(221,"br"),e._uU(222," event.values: Values in range mode "),e._UZ(223,"br"),e.qZA(),e.TgZ(224,"td"),e._uU(225,"Callback to invoke on value change via slide."),e.qZA()(),e.TgZ(226,"tr")(227,"td"),e._uU(228,"onSlideEnd"),e.qZA(),e.TgZ(229,"td"),e._uU(230," event.originalEvent: Mouseup event"),e._UZ(231,"br"),e._uU(232," event.value: New value "),e.qZA(),e.TgZ(233,"td"),e._uU(234,"Callback to invoke when slide stops."),e.qZA()()()()(),e.TgZ(235,"app-code",13),e.IAx(),e._uU(236,'\n<p-slider [(ngModel)]="val" (onChange)="handleChange($event)"></p-slider>\n'),e.fQ9(),e.qZA(),e.TgZ(237,"app-code",12),e.IAx(),e._uU(238,"\nhandleChange(e) {\n    //e.value is the new value\n}\n"),e.fQ9(),e.qZA(),e.TgZ(239,"h5"),e._uU(240,"\u6837\u5f0f"),e.qZA(),e.TgZ(241,"p"),e._uU(242,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(243,"a",16),e._uU(244,"theming page"),e.qZA(),e._uU(245,"."),e.qZA(),e.TgZ(246,"div",14)(247,"table",15)(248,"thead")(249,"tr")(250,"th"),e._uU(251,"\u540d\u79f0"),e.qZA(),e.TgZ(252,"th"),e._uU(253,"\u5143\u7d20"),e.qZA()()(),e.TgZ(254,"tbody")(255,"tr")(256,"td"),e._uU(257,"p-slider"),e.qZA(),e.TgZ(258,"td"),e._uU(259,"Container element"),e.qZA()(),e.TgZ(260,"tr")(261,"td"),e._uU(262,"p-slider-handle"),e.qZA(),e.TgZ(263,"td"),e._uU(264,"Handle element"),e.qZA()()()()(),e.TgZ(265,"h5"),e._uU(266,"\u4f9d\u8d56"),e.qZA(),e.TgZ(267,"p"),e._uU(268,"None."),e.qZA()(),e.TgZ(269,"p-tabPanel",17)(270,"a",18)(271,"span"),e._uU(272,"GitHub\u4e2d\u8bbf\u95ee"),e.qZA()(),e.TgZ(273,"a",19)(274,"span"),e._uU(275,"StackBlitz\u4e2d\u7f16\u8f91"),e.qZA()(),e.TgZ(276,"app-code",13),e.IAx(),e._uU(277,'\n<h5>Basic: {{val1}}</h5>\n<p-slider [(ngModel)]="val1"></p-slider>\n\n<h5>Input: {{val2}}</h5>\n<input type="text" pInputText [(ngModel)]="val2" readonly/>\n<p-slider [(ngModel)]="val2"></p-slider>\n\n<h5>Step: {{val3}}</h5>\n<p-slider [(ngModel)]="val3" [step]="20"></p-slider>\n\n<h5>Range: {{rangeValues[0] + \' - \' + rangeValues[1]}}</h5>\n<p-slider [(ngModel)]="rangeValues" [range]="true"></p-slider>\n\n<h5>Vertical: {{val4}}</h5>\n<p-slider [(ngModel)]="val4" orientation="vertical"></p-slider>\n'),e.fQ9(),e.qZA(),e.TgZ(278,"app-code",12),e.IAx(),e._uU(279,"\nexport class SliderDemo {\n\n    val1: number;\n\n    val2: number = 50;\n\n    val3: number;\n\n    val4: number;\n\n    rangeValues: number[] = [20,80];\n}\n"),e.fQ9(),e.qZA()(),e.TgZ(280,"p-tabPanel",20),e.YNc(281,_,1,0,"ng-template",21),e.qZA()()()),2&r&&(e.xp6(10),e.hij("Basic: ",a.val1,""),e.xp6(1),e.Q6J("ngModel",a.val1),e.xp6(2),e.hij("Input: ",a.val2,""),e.xp6(1),e.Q6J("ngModel",a.val2),e.xp6(1),e.Q6J("ngModel",a.val2),e.xp6(2),e.hij("Step: ",a.val3,""),e.xp6(1),e.Q6J("ngModel",a.val3)("step",20),e.xp6(2),e.hij("Range: ",a.rangeValues[0]+" - "+a.rangeValues[1],""),e.xp6(1),e.Q6J("ngModel",a.rangeValues)("range",!0),e.xp6(2),e.hij("Vertical: ",a.val4,""),e.xp6(1),e.Q6J("ngModel",a.val4),e.xp6(219),e.Q6J("routerLink",e.DdM(14,U)))},dependencies:[n.Fj,n.JJ,n.On,Z.rH,T.iR,m.o,d.xf,d.x4,g.jx,o.P,i.h],styles:[".p-inputtext[_ngcontent-%COMP%]{width:14rem}.p-slider-vertical[_ngcontent-%COMP%]{height:14rem}[_nghost-%COMP%]     .p-slider-horizontal{width:14rem}"]}),t})(),q=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[Z.Bz.forChild([{path:"",component:v}]),Z.Bz]}),t})();var f=l(1447),M=l(1508);let C=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h.ez,n.u5,q,f.JH,m.j,M.LU,o.L,i.a]}),t})()}}]);
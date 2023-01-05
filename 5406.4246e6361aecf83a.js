"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[5406],{7381:(h,A,o)=>{o.d(A,{a:()=>m,h:()=>T});var Z=o(6895),n=o(1571);const c=["code"],t=["*"];let T=(()=>{class u{constructor(i){this.el=i,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return u.\u0275fac=function(i){return new(i||u)(n.Y36(n.SBq))},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-code"]],viewQuery:function(i,s){if(1&i&&n.Gf(c,5),2&i){let _;n.iGM(_=n.CRH())&&(s.codeViewChild=_.first)}},inputs:{lang:"lang",style:"style",styleClass:"styleClass"},ngContentSelectors:t,decls:5,vars:5,consts:[[3,"ngClass"],["code",""]],template:function(i,s){1&i&&(n.F$t(),n.TgZ(0,"pre",0)(1,"code",null,1),n.Hsn(3),n._uU(4,"\n"),n.qZA()()),2&i&&(n.Akn(s.style),n.Tol(s.styleClass),n.Q6J("ngClass","language-"+s.lang))},dependencies:[Z.mk],encapsulation:2}),u})(),m=(()=>{class u{}return u.\u0275fac=function(i){return new(i||u)},u.\u0275mod=n.oAB({type:u}),u.\u0275inj=n.cJS({imports:[Z.ez]}),u})()},5406:(h,A,o)=>{o.r(A),o.d(A,{RadioButtonDemoModule:()=>v});var Z=o(6895),n=o(433),c=o(9624),t=o(1571),T=o(1445),m=o(4619),u=o(485),r=o(7381),i=o(3032);function s(e,l){if(1&e){const a=t.EpF();t.TgZ(0,"div",27)(1,"p-radioButton",28),t.NdJ("ngModelChange",function(p){t.CHM(a);const g=t.oxw();return t.KtG(g.selectedCategory=p)}),t.qZA(),t.TgZ(2,"label",29),t._uU(3),t.qZA()()}if(2&e){const a=l.$implicit,d=t.oxw();t.xp6(1),t.Q6J("inputId",a.key)("value",a)("ngModel",d.selectedCategory)("disabled","R"===a.key),t.xp6(1),t.Q6J("for",a.key),t.xp6(1),t.Oqu(a.name)}}function _(e,l){1&e&&t._UZ(0,"iframe",30)}const U=function(){return["/theming"]};let b=(()=>{class e{constructor(){this.selectedCategory=null,this.categories=[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}]}ngOnInit(){this.selectedCategory=this.categories[1]}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:305,vars:7,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","radiobutton","stackblitz","radiobutton-demo"],[1,"content-section","implementation"],[1,"card"],[1,"field-radiobutton"],["name","city","value","Chicago","inputId","city1",3,"ngModel","ngModelChange"],["for","city1"],["name","city","value","Los Angeles","inputId","city2",3,"ngModel","ngModelChange"],["for","city2"],["name","city","value","New York","inputId","city3",3,"ngModel","ngModelChange"],["for","city3"],["name","city","value","San Francisco","inputId","city4",3,"ngModel","ngModelChange"],["for","city4"],["class","field-checkbox",4,"ngFor","ngForOf"],[1,"content-section","documentation"],["header","\u6587\u6863"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","\u6848\u4f8b\u4ee3\u7801"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/radiobutton","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-radiobutton-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],[1,"field-checkbox"],["name","category",3,"inputId","value","ngModel","disabled","ngModelChange"],[3,"for"],["src","https://stackblitz.com/edit/primeng-radiobutton-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(a,d){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"RadioButton"),t.qZA(),t.TgZ(4,"p"),t._uU(5,"RadioButton is an extension to standard radio button element with theming."),t.qZA()(),t._UZ(6,"app-demoActions",2),t.qZA(),t.TgZ(7,"div",3)(8,"div",4)(9,"h5"),t._uU(10,"Basic"),t.qZA(),t.TgZ(11,"div",5)(12,"p-radioButton",6),t.NdJ("ngModelChange",function(g){return d.city=g}),t.qZA(),t.TgZ(13,"label",7),t._uU(14,"Chicago"),t.qZA()(),t.TgZ(15,"div",5)(16,"p-radioButton",8),t.NdJ("ngModelChange",function(g){return d.city=g}),t.qZA(),t.TgZ(17,"label",9),t._uU(18,"Los Angeles"),t.qZA()(),t.TgZ(19,"div",5)(20,"p-radioButton",10),t.NdJ("ngModelChange",function(g){return d.city=g}),t.qZA(),t.TgZ(21,"label",11),t._uU(22,"New York"),t.qZA()(),t.TgZ(23,"div",5)(24,"p-radioButton",12),t.NdJ("ngModelChange",function(g){return d.city=g}),t.qZA(),t.TgZ(25,"label",13),t._uU(26,"San Francisco"),t.qZA()(),t.TgZ(27,"h5"),t._uU(28,"Dynamic Values, Preselection, Value Binding and Disabled Option"),t.qZA(),t.YNc(29,s,4,6,"div",14),t.qZA()(),t.TgZ(30,"div",15)(31,"p-tabView")(32,"p-tabPanel",16)(33,"h5"),t._uU(34,"\u5f15\u5165"),t.qZA(),t.TgZ(35,"app-code",17),t.IAx(),t._uU(36,"\nimport {RadioButtonModule} from 'primeng/radiobutton';\n"),t.fQ9(),t.qZA(),t.TgZ(37,"h5"),t._uU(38,"\u51c6\u5907\u5f00\u59cb"),t.qZA(),t.TgZ(39,"p"),t._uU(40,"Two-way value binding is defined using the standard "),t.TgZ(41,"i"),t._uU(42,"ngModel"),t.qZA(),t._uU(43," directive."),t.qZA(),t.TgZ(44,"app-code",18),t.IAx(),t._uU(45,'\n<p-radioButton name="groupname" value="val1" [(ngModel)]="selectedValue"></p-radioButton>\n<p-radioButton name="groupname" value="val2" [(ngModel)]="selectedValue"></p-radioButton>\n'),t.fQ9(),t.qZA(),t.TgZ(46,"app-code",17),t.IAx(),t._uU(47,"\nexport class ModelComponent {\n\n    selectedValue: string;\n\n}\n"),t.fQ9(),t.qZA(),t.TgZ(48,"p"),t._uU(49,"As model is two-way binding enabled, giving a default value to the model is enough to display a radio button as checked by default."),t.qZA(),t.TgZ(50,"app-code",17),t.IAx(),t._uU(51,"\nexport class ModelComponent {\n\n    selectedValue: string = 'val1';\n\n}\n"),t.fQ9(),t.qZA(),t.TgZ(52,"h5"),t._uU(53,"\u54cd\u5e94\u5f0f\u8868\u5355"),t.qZA(),t.TgZ(54,"p"),t._uU(55,"RadioButton can be used in a model driven form as well."),t.qZA(),t.TgZ(56,"app-code",18),t.IAx(),t._uU(57,'\n<p-radioButton name="groupname" value="ps4" formControlName="console"></p-radioButton>\n'),t.fQ9(),t.qZA(),t.TgZ(58,"h4"),t._uU(59,"Label"),t.qZA(),t.TgZ(60,"p"),t._uU(61,"The "),t.TgZ(62,"i"),t._uU(63,"label"),t.qZA(),t._uU(64," attribute provides a label text for the radio button. This label is also clickable and selects value."),t.qZA(),t.TgZ(65,"app-code",18),t.IAx(),t._uU(66,'\n<p-radioButton name="groupname" value="val1" label="Option 2" [(ngModel)]="selectedValue"></p-radioButton>\n'),t.fQ9(),t.qZA(),t.TgZ(67,"h5"),t._uU(68,"\u5c5e\u6027"),t.qZA(),t.TgZ(69,"div",19)(70,"table",20)(71,"thead")(72,"tr")(73,"th"),t._uU(74,"\u540d\u79f0"),t.qZA(),t.TgZ(75,"th"),t._uU(76,"\u7c7b\u578b"),t.qZA(),t.TgZ(77,"th"),t._uU(78,"\u9ed8\u8ba4\u503c"),t.qZA(),t.TgZ(79,"th"),t._uU(80,"\u63cf\u8ff0"),t.qZA()()(),t.TgZ(81,"tbody")(82,"tr")(83,"td"),t._uU(84,"name"),t.qZA(),t.TgZ(85,"td"),t._uU(86,"string"),t.qZA(),t.TgZ(87,"td"),t._uU(88,"null"),t.qZA(),t.TgZ(89,"td"),t._uU(90,"Name of the radiobutton group."),t.qZA()(),t.TgZ(91,"tr")(92,"td"),t._uU(93,"value"),t.qZA(),t.TgZ(94,"td"),t._uU(95,"any"),t.qZA(),t.TgZ(96,"td"),t._uU(97,"null"),t.qZA(),t.TgZ(98,"td"),t._uU(99,"Value of the radiobutton."),t.qZA()(),t.TgZ(100,"tr")(101,"td"),t._uU(102,"label"),t.qZA(),t.TgZ(103,"td"),t._uU(104,"string"),t.qZA(),t.TgZ(105,"td"),t._uU(106,"null"),t.qZA(),t.TgZ(107,"td"),t._uU(108,"Label of the radiobutton."),t.qZA()(),t.TgZ(109,"tr")(110,"td"),t._uU(111,"disabled"),t.qZA(),t.TgZ(112,"td"),t._uU(113,"boolean"),t.qZA(),t.TgZ(114,"td"),t._uU(115,"false"),t.qZA(),t.TgZ(116,"td"),t._uU(117,"When present, it specifies that the element should be disabled."),t.qZA()(),t.TgZ(118,"tr")(119,"td"),t._uU(120,"tabindex"),t.qZA(),t.TgZ(121,"td"),t._uU(122,"number"),t.qZA(),t.TgZ(123,"td"),t._uU(124,"null"),t.qZA(),t.TgZ(125,"td"),t._uU(126,"Index of the element in tabbing order."),t.qZA()(),t.TgZ(127,"tr")(128,"td"),t._uU(129,"inputId"),t.qZA(),t.TgZ(130,"td"),t._uU(131,"string"),t.qZA(),t.TgZ(132,"td"),t._uU(133,"null"),t.qZA(),t.TgZ(134,"td"),t._uU(135,"Identifier of the focus input to match a label defined for the component."),t.qZA()(),t.TgZ(136,"tr")(137,"td"),t._uU(138,"ariaLabelledBy"),t.qZA(),t.TgZ(139,"td"),t._uU(140,"string"),t.qZA(),t.TgZ(141,"td"),t._uU(142,"null"),t.qZA(),t.TgZ(143,"td"),t._uU(144,"Establishes relationships between the component and label(s) where its value should be one or more element IDs."),t.qZA()(),t.TgZ(145,"tr")(146,"td"),t._uU(147,"ariaLabel"),t.qZA(),t.TgZ(148,"td"),t._uU(149,"string"),t.qZA(),t.TgZ(150,"td"),t._uU(151,"null"),t.qZA(),t.TgZ(152,"td"),t._uU(153,"Used to define a string that labels the input element."),t.qZA()(),t.TgZ(154,"tr")(155,"td"),t._uU(156,"style"),t.qZA(),t.TgZ(157,"td"),t._uU(158,"object"),t.qZA(),t.TgZ(159,"td"),t._uU(160,"null"),t.qZA(),t.TgZ(161,"td"),t._uU(162,"Inline style of the component."),t.qZA()(),t.TgZ(163,"tr")(164,"td"),t._uU(165,"styleClass"),t.qZA(),t.TgZ(166,"td"),t._uU(167,"string"),t.qZA(),t.TgZ(168,"td"),t._uU(169,"null"),t.qZA(),t.TgZ(170,"td"),t._uU(171,"Style class of the component."),t.qZA()(),t.TgZ(172,"tr")(173,"td"),t._uU(174,"labelStyleClass"),t.qZA(),t.TgZ(175,"td"),t._uU(176,"string"),t.qZA(),t.TgZ(177,"td"),t._uU(178,"null"),t.qZA(),t.TgZ(179,"td"),t._uU(180,"Style class of the label."),t.qZA()()()()(),t.TgZ(181,"h5"),t._uU(182,"\u4e8b\u4ef6"),t.qZA(),t.TgZ(183,"div",19)(184,"table",20)(185,"thead")(186,"tr")(187,"th"),t._uU(188,"\u540d\u79f0"),t.qZA(),t.TgZ(189,"th"),t._uU(190,"\u53c2\u6570"),t.qZA(),t.TgZ(191,"th"),t._uU(192,"\u63cf\u8ff0"),t.qZA()()(),t.TgZ(193,"tbody")(194,"tr")(195,"td"),t._uU(196,"onClick"),t.qZA(),t.TgZ(197,"td"),t._uU(198,"event.originalEvent: Click event"),t._UZ(199,"br"),t._uU(200," event.value: Value of the radio button "),t.qZA(),t.TgZ(201,"td"),t._uU(202,"Callback to invoke on radio button click."),t.qZA()(),t.TgZ(203,"tr")(204,"td"),t._uU(205,"onFocus"),t.qZA(),t.TgZ(206,"td"),t._uU(207,"event: Focus event"),t.qZA(),t.TgZ(208,"td"),t._uU(209,"Callback to invoke when the radio button receives focus."),t.qZA()(),t.TgZ(210,"tr")(211,"td"),t._uU(212,"onBlur"),t.qZA(),t.TgZ(213,"td"),t._uU(214,"event: Blur event"),t.qZA(),t.TgZ(215,"td"),t._uU(216,"Callback to invoke when the radio button loses focus."),t.qZA()()()()(),t.TgZ(217,"h5"),t._uU(218,"\u65b9\u6cd5"),t.qZA(),t.TgZ(219,"div",19)(220,"table",20)(221,"thead")(222,"tr")(223,"th"),t._uU(224,"\u540d\u79f0"),t.qZA(),t.TgZ(225,"th"),t._uU(226,"\u53c2\u6570"),t.qZA(),t.TgZ(227,"th"),t._uU(228,"\u63cf\u8ff0"),t.qZA()()(),t.TgZ(229,"tbody")(230,"tr")(231,"td"),t._uU(232,"focus"),t.qZA(),t.TgZ(233,"td"),t._uU(234,"-"),t.qZA(),t.TgZ(235,"td"),t._uU(236,"Applies focus."),t.qZA()()()()(),t.TgZ(237,"h5"),t._uU(238,"\u6837\u5f0f"),t.qZA(),t.TgZ(239,"p"),t._uU(240,"Following is the list of structural style classes, for theming classes visit "),t.TgZ(241,"a",21),t._uU(242,"theming page"),t.qZA(),t._uU(243,"."),t.qZA(),t.TgZ(244,"div",19)(245,"table",20)(246,"thead")(247,"tr")(248,"th"),t._uU(249,"\u540d\u79f0"),t.qZA(),t.TgZ(250,"th"),t._uU(251,"\u5143\u7d20"),t.qZA()()(),t.TgZ(252,"tbody")(253,"tr")(254,"td"),t._uU(255,"p-radiobutton"),t.qZA(),t.TgZ(256,"td"),t._uU(257,"Container element"),t.qZA()(),t.TgZ(258,"tr")(259,"td"),t._uU(260,"p-radiobutton-box"),t.qZA(),t.TgZ(261,"td"),t._uU(262,"Container of icon."),t.qZA()(),t.TgZ(263,"tr")(264,"td"),t._uU(265,"p-radiobutton-icon"),t.qZA(),t.TgZ(266,"td"),t._uU(267,"Icon element."),t.qZA()(),t.TgZ(268,"tr")(269,"td"),t._uU(270,"p-checkbox-label"),t.qZA(),t.TgZ(271,"td"),t._uU(272,"Label element."),t.qZA()(),t.TgZ(273,"tr")(274,"td"),t._uU(275,"p-label-active"),t.qZA(),t.TgZ(276,"td"),t._uU(277,"Label element of a checked state."),t.qZA()(),t.TgZ(278,"tr")(279,"td"),t._uU(280,"p-label-focus"),t.qZA(),t.TgZ(281,"td"),t._uU(282,"Label element of a focused state."),t.qZA()(),t.TgZ(283,"tr")(284,"td"),t._uU(285,"p-label-disabled"),t.qZA(),t.TgZ(286,"td"),t._uU(287,"Label element of a disabled state."),t.qZA()()()()(),t.TgZ(288,"h5"),t._uU(289,"\u4f9d\u8d56"),t.qZA(),t.TgZ(290,"p"),t._uU(291,"None."),t.qZA()(),t.TgZ(292,"p-tabPanel",22)(293,"a",23)(294,"span"),t._uU(295,"GitHub\u4e2d\u8bbf\u95ee"),t.qZA()(),t.TgZ(296,"a",24)(297,"span"),t._uU(298,"StackBlitz\u4e2d\u7f16\u8f91"),t.qZA()(),t.TgZ(299,"app-code",18),t.IAx(),t._uU(300,'\n<h5>Basic</h5>\n<div class="field-radiobutton">\n    <p-radioButton name="city" value="Chicago" [(ngModel)]="city" inputId="city1"></p-radioButton>\n    <label for="city1">Chicago</label>\n</div>\n<div class="field-radiobutton">\n    <p-radioButton name="city" value="Los Angeles" [(ngModel)]="city" inputId="city2"></p-radioButton>\n    <label for="city2">Los Angeles</label>\n</div>\n<div class="field-radiobutton">\n    <p-radioButton name="city" value="New York" [(ngModel)]="city" inputId="city3"></p-radioButton>\n    <label for="city3">New York</label>\n</div>\n<div class="field-radiobutton">\n    <p-radioButton name="city" value="San Francisco" [(ngModel)]="city" inputId="city4"></p-radioButton>\n    <label for="city4">San Francisco</label>\n</div>\n\n<h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>\n<div *ngFor="let category of categories" class="field-checkbox">\n    <p-radioButton [inputId]="category.key" name="category" [value]="category" [(ngModel)]="selectedCategory" [disabled]="category.key === \'R\'"></p-radioButton>\n    <label [for]="category.key">{{category.name}}</label>\n</div>\n'),t.fQ9(),t.qZA(),t.TgZ(301,"app-code",17),t.IAx(),t._uU(302,"\nexport class RadioButtonDemo {\n    city: string;\n\n    selectedCategory: any = null;\n\n    categories: any[] = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];\n\n    ngOnInit() {\n        this.selectedCategory = this.categories[1];\n    }\n}\n"),t.fQ9(),t.qZA()(),t.TgZ(303,"p-tabPanel",25),t.YNc(304,_,1,0,"ng-template",26),t.qZA()()()),2&a&&(t.xp6(12),t.Q6J("ngModel",d.city),t.xp6(4),t.Q6J("ngModel",d.city),t.xp6(4),t.Q6J("ngModel",d.city),t.xp6(4),t.Q6J("ngModel",d.city),t.xp6(5),t.Q6J("ngForOf",d.categories),t.xp6(212),t.Q6J("routerLink",t.DdM(6,U)))},dependencies:[Z.sg,n.JJ,n.On,c.rH,T.EU,m.xf,m.x4,u.jx,r.h,i.P],encapsulation:2}),e})(),q=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild([{path:"",component:b}]),c.Bz]}),e})();var f=o(9671),y=o(1508);let v=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[Z.ez,n.u5,q,f.cc,y.LU,r.a,i.L]}),e})()}}]);
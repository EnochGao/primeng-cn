"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[491],{7381:(m,l,Z)=>{Z.d(l,{a:()=>g,h:()=>s});var r=Z(6895),n=Z(1571);const e=["code"],d=["*"];let s=(()=>{class u{constructor(t){this.el=t,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return u.\u0275fac=function(t){return new(t||u)(n.Y36(n.SBq))},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-code"]],viewQuery:function(t,o){if(1&t&&n.Gf(e,5),2&t){let i;n.iGM(i=n.CRH())&&(o.codeViewChild=i.first)}},inputs:{lang:"lang",style:"style",styleClass:"styleClass"},ngContentSelectors:d,decls:5,vars:5,consts:[[3,"ngClass"],["code",""]],template:function(t,o){1&t&&(n.F$t(),n.TgZ(0,"pre",0)(1,"code",null,1),n.Hsn(3),n._uU(4,"\n"),n.qZA()()),2&t&&(n.Akn(o.style),n.Tol(o.styleClass),n.Q6J("ngClass","language-"+o.lang))},dependencies:[r.mk],encapsulation:2}),u})(),g=(()=>{class u{}return u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=n.oAB({type:u}),u.\u0275inj=n.cJS({imports:[r.ez]}),u})()},491:(m,l,Z)=>{Z.r(l),Z.d(l,{MenuModelDemoModule:()=>a});var r=Z(6895),n=Z(9624),e=Z(1571),d=Z(7381);const s=function(){return["/menumodel"]};let g=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:347,vars:2,consts:[[1,"content-section","introduction"],[1,"feature-intro"],[1,"content-section","documentation","implementation"],["lang","markup"],["lang","typescript"],[3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,p){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"MenuModel API"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"PrimeNG menus components share a common api to specify the menuitems and submenus."),e.qZA()()(),e.TgZ(6,"div",2)(7,"h5"),e._uU(8,"MenuItem"),e.qZA(),e.TgZ(9,"p"),e._uU(10,"Core of the api is MenuItem class that defines various options such as the label, icon and children of an item in a menu. Example below is a sample configuration with Menu component."),e.qZA(),e.TgZ(11,"app-code",3),e.IAx(),e._uU(12,'\n<p-menu [model]="items"></p-menu>\n'),e.fQ9(),e.qZA(),e.TgZ(13,"app-code",4),e.IAx(),e._uU(14,"\nimport {MenuModule} from 'primeng/menu';\nimport {MenuItem} from 'primeng/api';\nimport {MegaMenuItem} from 'primeng/api';  //required when using MegaMenu\n"),e.fQ9(),e.qZA(),e.TgZ(15,"app-code",4),e.IAx(),e._uU(16,"\nexport class MenuDemo {\n\n    private items: MenuItem[];\n\n    ngOnInit() {\n        this.items = [{\n            label: 'File',\n            items: [\n                {label: 'New', icon: 'pi pi-plus'},\n                {label: 'Open', icon: 'pi pi-download'}\n            ]\n        },\n        {\n            label: 'Edit',\n            items: [\n                {label: 'Undo', icon: 'pi pi-refresh'},\n                {label: 'Redo', icon: 'pi pi-repeat'}\n            ]\n        }];\n    }\n}\n"),e.fQ9(),e.qZA(),e.TgZ(17,"h5"),e._uU(18,"MegaMenu"),e.qZA(),e.TgZ(19,"p"),e._uU(20,"All menu components except MegaMenu uses MenuItem[] as the model, in the case of MegaMenu root level items should be MegaMenuItem[] whereas nested submenus can be MenuItem[]. See the "),e.TgZ(21,"a",5),e._uU(22,"MegaMenu"),e.qZA(),e._uU(23," documentation for samples."),e.qZA(),e.TgZ(24,"p"),e._uU(25,"MenuItem provides the following properties. Note that not all of them may be utilized by the menu component."),e.qZA(),e.TgZ(26,"div",6)(27,"table",7)(28,"thead")(29,"tr")(30,"th"),e._uU(31,"\u540d\u79f0"),e.qZA(),e.TgZ(32,"th"),e._uU(33,"\u7c7b\u578b"),e.qZA(),e.TgZ(34,"th"),e._uU(35,"\u9ed8\u8ba4\u503c"),e.qZA(),e.TgZ(36,"th"),e._uU(37,"\u63cf\u8ff0"),e.qZA()()(),e.TgZ(38,"tbody")(39,"tr")(40,"td"),e._uU(41,"id"),e.qZA(),e.TgZ(42,"td"),e._uU(43,"string"),e.qZA(),e.TgZ(44,"td"),e._uU(45,"null"),e.qZA(),e.TgZ(46,"td"),e._uU(47,"Identifier of the element."),e.qZA()(),e.TgZ(48,"tr")(49,"td"),e._uU(50,"label"),e.qZA(),e.TgZ(51,"td"),e._uU(52,"string"),e.qZA(),e.TgZ(53,"td"),e._uU(54,"null"),e.qZA(),e.TgZ(55,"td"),e._uU(56,"Text of the item."),e.qZA()(),e.TgZ(57,"tr")(58,"td"),e._uU(59,"icon"),e.qZA(),e.TgZ(60,"td"),e._uU(61,"string"),e.qZA(),e.TgZ(62,"td"),e._uU(63,"null"),e.qZA(),e.TgZ(64,"td"),e._uU(65,"Icon of the item."),e.qZA()(),e.TgZ(66,"tr")(67,"td"),e._uU(68,"iconStyle"),e.qZA(),e.TgZ(69,"td"),e._uU(70,"object"),e.qZA(),e.TgZ(71,"td"),e._uU(72,"null"),e.qZA(),e.TgZ(73,"td"),e._uU(74,"Inline style of the item's icon."),e.qZA()(),e.TgZ(75,"tr")(76,"td"),e._uU(77,"command"),e.qZA(),e.TgZ(78,"td"),e._uU(79,"function"),e.qZA(),e.TgZ(80,"td"),e._uU(81,"null"),e.qZA(),e.TgZ(82,"td"),e._uU(83,"Callback to execute when item is clicked."),e.qZA()(),e.TgZ(84,"tr")(85,"td"),e._uU(86,"url"),e.qZA(),e.TgZ(87,"td"),e._uU(88,"string"),e.qZA(),e.TgZ(89,"td"),e._uU(90,"null"),e.qZA(),e.TgZ(91,"td"),e._uU(92,"External link to navigate when item is clicked."),e.qZA()(),e.TgZ(93,"tr")(94,"td"),e._uU(95,"routerLink"),e.qZA(),e.TgZ(96,"td"),e._uU(97,"array"),e.qZA(),e.TgZ(98,"td"),e._uU(99,"null"),e.qZA(),e.TgZ(100,"td"),e._uU(101,"RouterLink definition for internal navigation."),e.qZA()(),e.TgZ(102,"tr")(103,"td"),e._uU(104,"routerLinkActiveOptions"),e.qZA(),e.TgZ(105,"td"),e._uU(106,"object"),e.qZA(),e.TgZ(107,"td"),e._uU(108,"null"),e.qZA(),e.TgZ(109,"td"),e._uU(110,"Configuration for active router link."),e.qZA()(),e.TgZ(111,"tr")(112,"td"),e._uU(113,"queryParams"),e.qZA(),e.TgZ(114,"td"),e._uU(115,"object"),e.qZA(),e.TgZ(116,"td"),e._uU(117,"null"),e.qZA(),e.TgZ(118,"td"),e._uU(119,"Query parameters for internal navigation via routerLink."),e.qZA()(),e.TgZ(120,"tr")(121,"td"),e._uU(122,"fragment"),e.qZA(),e.TgZ(123,"td"),e._uU(124,"string"),e.qZA(),e.TgZ(125,"td"),e._uU(126,"null"),e.qZA(),e.TgZ(127,"td"),e._uU(128,"Sets the hash fragment for the URL."),e.qZA()(),e.TgZ(129,"tr")(130,"td"),e._uU(131,"queryParamsHandling"),e.qZA(),e.TgZ(132,"td"),e._uU(133,"QueryParamsHandling"),e.qZA(),e.TgZ(134,"td"),e._uU(135,"null"),e.qZA(),e.TgZ(136,"td"),e._uU(137,"How to handle query parameters in the router link for the next navigation. One of:"),e._UZ(138,"br")(139,"br"),e._uU(140," merge : Merge new with current parameters."),e._UZ(141,"br"),e._uU(142," preserve : Preserve current parameters.k."),e.qZA()(),e.TgZ(143,"tr")(144,"td"),e._uU(145,"preserveFragment"),e.qZA(),e.TgZ(146,"td"),e._uU(147,"boolean"),e.qZA(),e.TgZ(148,"td"),e._uU(149,"false"),e.qZA(),e.TgZ(150,"td"),e._uU(151,"When true, preserves the URL fragment for the next navigation."),e.qZA()(),e.TgZ(152,"tr")(153,"td"),e._uU(154,"skipLocationChange"),e.qZA(),e.TgZ(155,"td"),e._uU(156,"boolean"),e.qZA(),e.TgZ(157,"td"),e._uU(158,"null"),e.qZA(),e.TgZ(159,"td"),e._uU(160,"When true, navigates without pushing a new state into history."),e.qZA()(),e.TgZ(161,"tr")(162,"td"),e._uU(163,"replaceUrl"),e.qZA(),e.TgZ(164,"td"),e._uU(165,"boolean"),e.qZA(),e.TgZ(166,"td"),e._uU(167,"null"),e.qZA(),e.TgZ(168,"td"),e._uU(169,"When true, navigates while replacing the current state in history."),e.qZA()(),e.TgZ(170,"tr")(171,"td"),e._uU(172,"state"),e.qZA(),e.TgZ(173,"td"),e._uU(174,"object"),e.qZA(),e.TgZ(175,"td"),e._uU(176,"null"),e.qZA(),e.TgZ(177,"td"),e._uU(178,"Developer-defined state that can be passed to any navigation."),e.qZA()(),e.TgZ(179,"tr")(180,"td"),e._uU(181,"items"),e.qZA(),e.TgZ(182,"td"),e._uU(183,"array"),e.qZA(),e.TgZ(184,"td"),e._uU(185,"null"),e.qZA(),e.TgZ(186,"td"),e._uU(187,"An array of children menuitems."),e.qZA()(),e.TgZ(188,"tr")(189,"td"),e._uU(190,"expanded"),e.qZA(),e.TgZ(191,"td"),e._uU(192,"boolean"),e.qZA(),e.TgZ(193,"td"),e._uU(194,"false"),e.qZA(),e.TgZ(195,"td"),e._uU(196,"Visibility of submenu."),e.qZA()(),e.TgZ(197,"tr")(198,"td"),e._uU(199,"disabled"),e.qZA(),e.TgZ(200,"td"),e._uU(201,"boolean"),e.qZA(),e.TgZ(202,"td"),e._uU(203,"false"),e.qZA(),e.TgZ(204,"td"),e._uU(205,"When set as true, disables the menuitem."),e.qZA()(),e.TgZ(206,"tr")(207,"td"),e._uU(208,"visible"),e.qZA(),e.TgZ(209,"td"),e._uU(210,"boolean"),e.qZA(),e.TgZ(211,"td"),e._uU(212,"true"),e.qZA(),e.TgZ(213,"td"),e._uU(214,"Whether the dom element of menuitem is created or not."),e.qZA()(),e.TgZ(215,"tr")(216,"td"),e._uU(217,"target"),e.qZA(),e.TgZ(218,"td"),e._uU(219,"string"),e.qZA(),e.TgZ(220,"td"),e._uU(221,"null"),e.qZA(),e.TgZ(222,"td"),e._uU(223,"Specifies where to open the linked document."),e.qZA()(),e.TgZ(224,"tr")(225,"td"),e._uU(226,"escape"),e.qZA(),e.TgZ(227,"td"),e._uU(228,"boolean"),e.qZA(),e.TgZ(229,"td"),e._uU(230,"true"),e.qZA(),e.TgZ(231,"td"),e._uU(232,"Whether to escape the label or not. Set to false to display html content."),e.qZA()(),e.TgZ(233,"tr")(234,"td"),e._uU(235,"separator"),e.qZA(),e.TgZ(236,"td"),e._uU(237,"boolean"),e.qZA(),e.TgZ(238,"td"),e._uU(239,"false"),e.qZA(),e.TgZ(240,"td"),e._uU(241,"Defines the item as a separator."),e.qZA()(),e.TgZ(242,"tr")(243,"td"),e._uU(244,"style"),e.qZA(),e.TgZ(245,"td"),e._uU(246,"object"),e.qZA(),e.TgZ(247,"td"),e._uU(248,"null"),e.qZA(),e.TgZ(249,"td"),e._uU(250,"Inline style of the menuitem."),e.qZA()(),e.TgZ(251,"tr")(252,"td"),e._uU(253,"styleClass"),e.qZA(),e.TgZ(254,"td"),e._uU(255,"string"),e.qZA(),e.TgZ(256,"td"),e._uU(257,"null"),e.qZA(),e.TgZ(258,"td"),e._uU(259,"Style class of the menuitem."),e.qZA()(),e.TgZ(260,"tr")(261,"td"),e._uU(262,"badge"),e.qZA(),e.TgZ(263,"td"),e._uU(264,"string"),e.qZA(),e.TgZ(265,"td"),e._uU(266,"null"),e.qZA(),e.TgZ(267,"td"),e._uU(268,"Value of the badge."),e.qZA()(),e.TgZ(269,"tr")(270,"td"),e._uU(271,"badgeStyleClass"),e.qZA(),e.TgZ(272,"td"),e._uU(273,"string"),e.qZA(),e.TgZ(274,"td"),e._uU(275,"null"),e.qZA(),e.TgZ(276,"td"),e._uU(277,"Style class of the badge."),e.qZA()(),e.TgZ(278,"tr")(279,"td"),e._uU(280,"title"),e.qZA(),e.TgZ(281,"td"),e._uU(282,"string"),e.qZA(),e.TgZ(283,"td"),e._uU(284,"null"),e.qZA(),e.TgZ(285,"td"),e._uU(286,"Tooltip text of the item."),e.qZA()(),e.TgZ(287,"tr")(288,"td"),e._uU(289,"automationId"),e.qZA(),e.TgZ(290,"td"),e._uU(291,"any"),e.qZA(),e.TgZ(292,"td"),e._uU(293,"null"),e.qZA(),e.TgZ(294,"td"),e._uU(295,"Value of HTML data-* attribute."),e.qZA()(),e.TgZ(296,"tr")(297,"td"),e._uU(298,"tabindex"),e.qZA(),e.TgZ(299,"td"),e._uU(300,"string"),e.qZA(),e.TgZ(301,"td"),e._uU(302,"0"),e.qZA(),e.TgZ(303,"td"),e._uU(304,"Specifies tab order of the item."),e.qZA()(),e.TgZ(305,"tr")(306,"td"),e._uU(307,"tooltipOptions"),e.qZA(),e.TgZ(308,"td"),e._uU(309,"TooltipOptions"),e.qZA(),e.TgZ(310,"td"),e._uU(311," - "),e.qZA(),e.TgZ(312,"td"),e._uU(313,"Options of the item's tooltip."),e.qZA()()()()(),e.TgZ(314,"h4"),e._uU(315,"Command"),e.qZA(),e.TgZ(316,"p"),e._uU(317,"The function to invoke when an item is clicked is defined using the "),e.TgZ(318,"i"),e._uU(319,"command"),e.qZA(),e._uU(320," property."),e.qZA(),e.TgZ(321,"app-code",4),e.IAx(),e._uU(322,"\nexport class MenuDemo {\n\n    private items: MenuItem[];\n\n    ngOnInit() {\n        this.items = [{\n            label: 'File',\n            items: [\n                {label: 'New', icon: 'pi pi-plus', command: (event) => {\n                    //event.originalEvent: Browser event\n                    //event.item: menuitem metadata\n                }}\n            ]\n        }\n    }\n}\n"),e.fQ9(),e.qZA(),e.TgZ(323,"h4"),e._uU(324,"Navigation"),e.qZA(),e.TgZ(325,"p"),e._uU(326,"Navigation is specified using url property for external links and with "),e.TgZ(327,"i"),e._uU(328,"routerLink"),e.qZA(),e._uU(329," for internal ones. If a menuitem has an active route, "),e.TgZ(330,"i"),e._uU(331,"p-menuitem-link-active"),e.qZA(),e._uU(332," style class is added as an indicator. Active route link can be configured with "),e.TgZ(333,"i"),e._uU(334,"routerLinkActiveOptions"),e.qZA(),e._uU(335," property of MenuItem API."),e.qZA(),e.TgZ(336,"app-code",4),e.IAx(),e._uU(337,"\nexport class MenuDemo {\n\n    private items: MenuItem[];\n\n    ngOnInit() {\n        this.items = [{\n            label: 'File',\n            items: [\n                {label: 'New', icon: 'pi pi-plus', url: 'http://www.primefaces.org/primeng'},\n                {label: 'Open', icon: 'pi pi-download', routerLink: ['/pagename']}\n                {label: 'Recent Files', icon: 'pi pi-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}\n            ]\n        }\n    }\n}\n"),e.fQ9(),e.qZA(),e.TgZ(338,"h4"),e._uU(339,"Custom Content"),e.qZA(),e.TgZ(340,"p"),e._uU(341,"Label of a menuitem both supports simple strings and html values as well. By default, html values are escaped, use "),e.TgZ(342,"i"),e._uU(343,"escape"),e.qZA(),e._uU(344," property to allow html."),e.qZA(),e.TgZ(345,"app-code",4),e.IAx(),e._uU(346,"\nexport class MenuDemo {\n\n    private items: MenuItem[];\n\n    ngOnInit() {\n        this.items = [{\n            label: '<h2>File</h2>',\n            escape: false,\n            //...\n        }\n    }\n}\n"),e.fQ9(),e.qZA()()),2&i&&(e.xp6(21),e.Q6J("routerLink",e.DdM(1,s)))},dependencies:[n.rH,d.h],encapsulation:2}),t})(),u=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[n.Bz.forChild([{path:"",component:g}]),n.Bz]}),t})(),a=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez,u,d.a]}),t})()}}]);
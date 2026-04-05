import{a as x}from"./chunk-5XDJJ2G4.js";import{a as y,b as k,c as M,d as T}from"./chunk-ZED5APBM.js";import"./chunk-R2PTQT2U.js";import{f as E,m as I}from"./chunk-5OGKUYSB.js";import"./chunk-UMM7A7ZK.js";import{a as S}from"./chunk-7KJL6RHT.js";import{a as v}from"./chunk-NO4W32D5.js";import{g as h}from"./chunk-VSHMVBPY.js";import{Db as f,La as a,Rb as e,S as c,Sb as s,Za as g,cc as r,dc as d,rb as p,sb as i,tb as t,ub as l}from"./chunk-VDWMVV4I.js";var B=class b{constructor(){this.uiService=c(S);this.titleService=c(v);this.modalGalleryService=c(I);this.images=[...x];this.configHtml=k;this.configTs=y;this.titleService.titleEvent.emit("Examples - Output events"),this.codeHtml='<button class="btn-modal" (click)="openModal(333, 0)">Click to open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
    } as ModalGalleryConfig) as ModalGalleryRef;
    this.closeSubscription = dialogRef.close$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - close$: ', event);
    });
    this.showSubscription = dialogRef.show$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - show$: ', event);
    });
    this.firstImageSubscription = dialogRef.firstImage$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - firstImage$: ', event);
    });
    this.lastImageSubscription = dialogRef.lastImage$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - lastImage$: ', event);
    });
    this.hasDataSubscription = dialogRef.hasData$.subscribe((event: ImageModalEvent) => {
      // angular-modal-gallery will emit this event if it will load successfully input images
      console.log('OUTPUT - hasData$: ', event);
    });
    this.buttonBeforeHookSubscription = dialogRef.buttonBeforeHook$.subscribe((event: ButtonEvent) => {
      console.log('OUTPUT - buttonBeforeHook$: ', event);
      if (!event || !event.button) {
        return;
      }
      // Invoked after a click on a button, but before that the related
      // action is applied.
      // For instance: this method will be invoked after a click
      // of 'close' button, but before that the modal gallery
      // will be really closed.
      if (event.button.type === ButtonType.DELETE) {
        // remove the current image and reassign all other to the array of images
        console.log('delete in app with images count ' + this.images.length);
        this.images = this.images.filter((val: Image) => event.image && val.id !== event.image.id);
      }
    });
    this.buttonAfterHookSubscription = dialogRef.buttonAfterHook$.subscribe((event: ButtonEvent) => {
      if (!event || !event.button) {
        return;
      }
      // Invoked after both a click on a button and its related action.
      // For instance: this method will be invoked after a click
      // of 'close' button, but before that the modal gallery
      // will be really closed.
    });
  }`}openModal(u,m){let o=this.modalGalleryService.open({id:u,images:this.images,currentImage:this.images[m]});this.closeSubscription=o.close$.subscribe(n=>{console.log("OUTPUT - close$: ",n),this.closeImageModal=n}),this.showSubscription=o.show$.subscribe(n=>{console.log("OUTPUT - show$: ",n),this.visibleIndex=n}),this.firstImageSubscription=o.firstImage$.subscribe(n=>{console.log("OUTPUT - firstImage$: ",n),this.isFirstImage=n}),this.lastImageSubscription=o.lastImage$.subscribe(n=>{console.log("OUTPUT - lastImage$: ",n),this.isLastImage=n}),this.hasDataSubscription=o.hasData$.subscribe(n=>{console.log("OUTPUT - hasData$: ",n),this.imageLoaded=n}),this.buttonBeforeHookSubscription=o.buttonBeforeHook$.subscribe(n=>{console.log("OUTPUT - buttonBeforeHook$: ",n),!(!n||!n.button)&&(n.button.type===E.DELETE&&(console.log("delete in app with images count "+this.images.length),this.images=this.images.filter(H=>n.image&&H.id!==n.image.id)),this.buttonBeforeHook=n)}),this.buttonAfterHookSubscription=o.buttonAfterHook$.subscribe(n=>{!n||!n.button||(this.buttonAfterHook=n)})}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Demo outputs"})}ngOnDestroy(){this.closeSubscription&&this.closeSubscription.unsubscribe(),this.showSubscription&&this.showSubscription.unsubscribe(),this.firstImageSubscription&&this.firstImageSubscription.unsubscribe(),this.lastImageSubscription&&this.lastImageSubscription.unsubscribe(),this.hasDataSubscription&&this.hasDataSubscription.unsubscribe(),this.buttonBeforeHookSubscription&&this.buttonBeforeHookSubscription.unsubscribe(),this.buttonAfterHookSubscription&&this.buttonAfterHookSubscription.unsubscribe()}static{this.\u0275fac=function(m){return new(m||b)}}static{this.\u0275cmp=g({type:b,selectors:[["app-output-events-page"]],decls:154,vars:25,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"text-success"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"table-responsive"],[1,"table","table-hover","table-sm"],[3,"content","language"]],template:function(m,o){m&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Output Events example"),t()(),i(4,"p"),e(5,"Minimal and simple modal gallery example with "),i(6,"b",3),e(7,"output events logged in console."),t()(),l(8,"br"),i(9,"h3"),e(10,"Live Demo"),t(),l(11,"br"),i(12,"button",4),f("click",function(){return o.openModal(333,0)}),e(13,"Click to open modal gallery id=1 at index=0"),t(),l(14,"br")(15,"br"),i(16,"h3"),e(17,"Live demo results"),t(),i(18,"div",5)(19,"table",6)(20,"thead")(21,"tr")(22,"th"),e(23,"Output"),t(),i(24,"th"),e(25,"$event value (Event payload)"),t()()(),i(26,"tbody")(27,"tr")(28,"td")(29,"code"),e(30,"(hasData)"),t()(),i(31,"td")(32,"div"),e(33),r(34,"json"),t()()(),i(35,"tr")(36,"td")(37,"code"),e(38,"(close)"),t()(),i(39,"td")(40,"div"),e(41),r(42,"json"),t()()(),i(43,"tr")(44,"td")(45,"code"),e(46,"(show)"),t()(),i(47,"td")(48,"div"),e(49),r(50,"json"),t()()(),i(51,"tr")(52,"td")(53,"code"),e(54,"(firstImage)"),t()(),i(55,"td")(56,"div"),e(57),r(58,"json"),t()()(),i(59,"tr")(60,"td")(61,"code"),e(62,"(lastImage)"),t()(),i(63,"td")(64,"div"),e(65),r(66,"json"),t()()(),i(67,"tr")(68,"td")(69,"code"),e(70,"(buttonBeforeHook)"),t()(),i(71,"td")(72,"div"),e(73),r(74,"json"),t()()(),i(75,"tr")(76,"td")(77,"code"),e(78,"(buttonAfterHook)"),t()(),i(79,"td")(80,"div"),e(81),r(82,"json"),t()()()()()(),l(83,"br")(84,"br"),i(85,"section")(86,"h3"),e(87,"Code"),t(),l(88,"br"),i(89,"h4"),e(90,"Template"),t(),l(91,"ks-codemirror",7)(92,"br"),i(93,"h4"),e(94,"Typescript"),t(),l(95,"ks-codemirror",7),t(),l(96,"br")(97,"br"),i(98,"section")(99,"h3"),e(100,"Service inputs"),t(),l(101,"br"),i(102,"table",6)(103,"thead")(104,"tr")(105,"th"),e(106,"Input"),t(),i(107,"th"),e(108,"Value"),t()()(),i(109,"tbody")(110,"tr")(111,"td")(112,"code"),e(113,"id"),t()(),i(114,"td")(115,"div")(116,"i"),e(117,"Value: "),t(),i(118,"code"),e(119,"NUMERIC UNIQUE ID"),t()(),i(120,"div")(121,"b",3),e(122,"Unique id"),t()()()(),i(123,"tr")(124,"td")(125,"code"),e(126,"images"),t()(),i(127,"td")(128,"div")(129,"i"),e(130,"Value: "),t(),i(131,"code"),e(132,"Image[]"),t()(),i(133,"div")(134,"b",3),e(135,"Array of "),i(136,"code"),e(137,"Image"),t(),e(138," objects"),t()()()(),i(139,"tr")(140,"td")(141,"code"),e(142,"currentImage"),t()(),i(143,"td")(144,"div")(145,"i"),e(146,"Value: "),t(),i(147,"code"),e(148,"Image"),t()(),i(149,"div")(150,"b",3)(151,"code"),e(152,"Image"),t(),e(153," object to show"),t()()()()()()()()),m&2&&(a(33),s(d(34,11,o.imageLoaded)),a(8),s(d(42,13,o.closeImageModal)),a(8),s(d(50,15,o.visibleIndex)),a(8),s(d(58,17,o.isFirstImage)),a(8),s(d(66,19,o.isLastImage)),a(8),s(d(74,21,o.buttonBeforeHook)),a(8),s(d(82,23,o.buttonAfterHook)),a(10),p("content",o.codeHtml)("language","html"),a(4),p("content",o.codeTypescript)("language","typescript"))},dependencies:[T,M,h],styles:["td[_ngcontent-%COMP%]{min-width:162px!important}"]})}};export{B as OutputEventsComponent};

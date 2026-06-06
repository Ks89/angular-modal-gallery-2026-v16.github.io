import {g}from'./chunk-C8CaFLi6.js';import {$ as $n,f as fn,v as vn,T as Tn}from'./chunk-C-_qsOA0.js';import {y,m,r,u as ur,N,U as Uv,l as bn,a as Uo,b as sI,e as ec,F as Ff,q as qf,o as wI,G as Gm,c as ap,p as bI,L as Lf}from'./main-B6H63E46.js';var H=class b{constructor(){this.uiService=y(m);this.titleService=y(r);this.modalGalleryService=y(ur);this.images=[...g];this.configHtml=$n;this.configTs=fn;this.titleService.titleEvent.emit("Examples - Output events"),this.codeHtml='<button class="btn-modal" (click)="openModal(333, 0)">Click to open modal gallery id=1 at index=0</button>',this.codeTypescript=`
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
  }`;}openModal(u,m){let o=this.modalGalleryService.open({id:u,images:this.images,currentImage:this.images[m]});this.closeSubscription=o.close$.subscribe(n=>{console.log("OUTPUT - close$: ",n),this.closeImageModal=n;}),this.showSubscription=o.show$.subscribe(n=>{console.log("OUTPUT - show$: ",n),this.visibleIndex=n;}),this.firstImageSubscription=o.firstImage$.subscribe(n=>{console.log("OUTPUT - firstImage$: ",n),this.isFirstImage=n;}),this.lastImageSubscription=o.lastImage$.subscribe(n=>{console.log("OUTPUT - lastImage$: ",n),this.isLastImage=n;}),this.hasDataSubscription=o.hasData$.subscribe(n=>{console.log("OUTPUT - hasData$: ",n),this.imageLoaded=n;}),this.buttonBeforeHookSubscription=o.buttonBeforeHook$.subscribe(n=>{console.log("OUTPUT - buttonBeforeHook$: ",n),!(!n||!n.button)&&(n.button.type===N.DELETE&&(console.log("delete in app with images count "+this.images.length),this.images=this.images.filter(B=>n.image&&B.id!==n.image.id)),this.buttonBeforeHook=n);}),this.buttonAfterHookSubscription=o.buttonAfterHook$.subscribe(n=>{!n||!n.button||(this.buttonAfterHook=n);});}ngOnInit(){this.metaData();}metaData(){this.uiService.setMetaData({title:"Demo outputs"});}ngOnDestroy(){this.closeSubscription&&this.closeSubscription.unsubscribe(),this.showSubscription&&this.showSubscription.unsubscribe(),this.firstImageSubscription&&this.firstImageSubscription.unsubscribe(),this.lastImageSubscription&&this.lastImageSubscription.unsubscribe(),this.hasDataSubscription&&this.hasDataSubscription.unsubscribe(),this.buttonBeforeHookSubscription&&this.buttonBeforeHookSubscription.unsubscribe(),this.buttonAfterHookSubscription&&this.buttonAfterHookSubscription.unsubscribe();}static{this.\u0275fac=function(m){return new(m||b)};}static{this.\u0275cmp=Uv({type:b,selectors:[["app-output-events-page"]],decls:154,vars:25,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"text-success"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"table-responsive"],[1,"table","table-hover","table-sm"],[3,"content","language"]],template:function(m,o){m&1&&(Uo(0,"div",0)(1,"h2",1)(2,"a",2),sI(3,"Output Events example"),ec()(),Uo(4,"p"),sI(5,"Minimal and simple modal gallery example with "),Uo(6,"b",3),sI(7,"output events logged in console."),ec()(),Ff(8,"br"),Uo(9,"h3"),sI(10,"Live Demo"),ec(),Ff(11,"br"),Uo(12,"button",4),qf("click",function(){return o.openModal(333,0)}),sI(13,"Click to open modal gallery id=1 at index=0"),ec(),Ff(14,"br")(15,"br"),Uo(16,"h3"),sI(17,"Live demo results"),ec(),Uo(18,"div",5)(19,"table",6)(20,"thead")(21,"tr")(22,"th"),sI(23,"Output"),ec(),Uo(24,"th"),sI(25,"$event value (Event payload)"),ec()()(),Uo(26,"tbody")(27,"tr")(28,"td")(29,"code"),sI(30,"(hasData)"),ec()(),Uo(31,"td")(32,"div"),sI(33),wI(34,"json"),ec()()(),Uo(35,"tr")(36,"td")(37,"code"),sI(38,"(close)"),ec()(),Uo(39,"td")(40,"div"),sI(41),wI(42,"json"),ec()()(),Uo(43,"tr")(44,"td")(45,"code"),sI(46,"(show)"),ec()(),Uo(47,"td")(48,"div"),sI(49),wI(50,"json"),ec()()(),Uo(51,"tr")(52,"td")(53,"code"),sI(54,"(firstImage)"),ec()(),Uo(55,"td")(56,"div"),sI(57),wI(58,"json"),ec()()(),Uo(59,"tr")(60,"td")(61,"code"),sI(62,"(lastImage)"),ec()(),Uo(63,"td")(64,"div"),sI(65),wI(66,"json"),ec()()(),Uo(67,"tr")(68,"td")(69,"code"),sI(70,"(buttonBeforeHook)"),ec()(),Uo(71,"td")(72,"div"),sI(73),wI(74,"json"),ec()()(),Uo(75,"tr")(76,"td")(77,"code"),sI(78,"(buttonAfterHook)"),ec()(),Uo(79,"td")(80,"div"),sI(81),wI(82,"json"),ec()()()()()(),Ff(83,"br")(84,"br"),Uo(85,"section")(86,"h3"),sI(87,"Code"),ec(),Ff(88,"br"),Uo(89,"h4"),sI(90,"Template"),ec(),Ff(91,"ks-codemirror",7)(92,"br"),Uo(93,"h4"),sI(94,"Typescript"),ec(),Ff(95,"ks-codemirror",7),ec(),Ff(96,"br")(97,"br"),Uo(98,"section")(99,"h3"),sI(100,"Service inputs"),ec(),Ff(101,"br"),Uo(102,"table",6)(103,"thead")(104,"tr")(105,"th"),sI(106,"Input"),ec(),Uo(107,"th"),sI(108,"Value"),ec()()(),Uo(109,"tbody")(110,"tr")(111,"td")(112,"code"),sI(113,"id"),ec()(),Uo(114,"td")(115,"div")(116,"i"),sI(117,"Value: "),ec(),Uo(118,"code"),sI(119,"NUMERIC UNIQUE ID"),ec()(),Uo(120,"div")(121,"b",3),sI(122,"Unique id"),ec()()()(),Uo(123,"tr")(124,"td")(125,"code"),sI(126,"images"),ec()(),Uo(127,"td")(128,"div")(129,"i"),sI(130,"Value: "),ec(),Uo(131,"code"),sI(132,"Image[]"),ec()(),Uo(133,"div")(134,"b",3),sI(135,"Array of "),Uo(136,"code"),sI(137,"Image"),ec(),sI(138," objects"),ec()()()(),Uo(139,"tr")(140,"td")(141,"code"),sI(142,"currentImage"),ec()(),Uo(143,"td")(144,"div")(145,"i"),sI(146,"Value: "),ec(),Uo(147,"code"),sI(148,"Image"),ec()(),Uo(149,"div")(150,"b",3)(151,"code"),sI(152,"Image"),ec(),sI(153," object to show"),ec()()()()()()()()),m&2&&(Gm(33),ap(bI(34,11,o.imageLoaded)),Gm(8),ap(bI(42,13,o.closeImageModal)),Gm(8),ap(bI(50,15,o.visibleIndex)),Gm(8),ap(bI(58,17,o.isFirstImage)),Gm(8),ap(bI(66,19,o.isLastImage)),Gm(8),ap(bI(74,21,o.buttonBeforeHook)),Gm(8),ap(bI(82,23,o.buttonAfterHook)),Gm(10),Lf("content",o.codeHtml)("language",o.configHtml),Gm(4),Lf("content",o.codeTypescript)("language",o.configTs));},dependencies:[vn,Tn,bn],styles:["td[_ngcontent-%COMP%]{min-width:162px!important}"],changeDetection:1});}};
export{H as OutputEventsComponent};
import{a as v}from"./chunk-5XDJJ2G4.js";import{a as C,b as h,c as x,d as k}from"./chunk-ZED5APBM.js";import"./chunk-R2PTQT2U.js";import{e as m,f as y,m as E}from"./chunk-5OGKUYSB.js";import"./chunk-UMM7A7ZK.js";import{a as S}from"./chunk-7KJL6RHT.js";import{a as f}from"./chunk-NO4W32D5.js";import"./chunk-VSHMVBPY.js";import{Db as s,La as g,Rb as t,S as d,Za as p,rb as b,sb as i,tb as e,ub as n}from"./chunk-VDWMVV4I.js";var M=class c{constructor(){this.uiService=d(S);this.titleService=d(f);this.modalGalleryService=d(E);this.images=[...v];this.configHtml=h;this.configTs=C;this.buttonsConfigDefault={visible:!0,strategy:m.DEFAULT};this.buttonsConfigSimple={visible:!0,strategy:m.SIMPLE};this.buttonsConfigAdvanced={visible:!0,strategy:m.ADVANCED};this.buttonsConfigFull={visible:!0,strategy:m.FULL};this.titleService.titleEvent.emit("Examples - Button strategies"),this.codeHtml=`
  <p>1. Strategy DEFAULT</p>
  <button (click)="openModal(308, 0, buttonsConfigDefault)">Click to open modal gallery id=1 at index=0</button>
  <br>
  <p>2. Strategy SIMPLE</p>
  <button (click)="openModal(309, 0, buttonsConfigSimple)">Click to open modal gallery id=1 at index=0</button>
  <br>
  <p>3. Strategy ADVANCED</p>
  <button (click)="openModal(310, 0, buttonsConfigAdvanced)">Click to open modal gallery id=1 at index=0</button>
  <br>
  <p>4. Strategy FULL</p>
  <button (click)="openModal(311, 0, buttonsConfigFull)">Click to open modal gallery id=1 at index=0</button>`,this.codeTypescript=`  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  buttonsConfigDefault: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  };
  buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };
  buttonsConfigAdvanced: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.ADVANCED
  };
  buttonsConfigFull: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.FULL
  };

  openModal(id: number, imageIndex: number, buttonsConfig: ButtonsConfig): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        buttonsConfig: buttonsConfig,
        // 'downloadable: true' is required to enable download button (if visible)
        currentImageConfig: {
          downloadable: true
        },
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;

    // required to enable DELETE button
    this.buttonAfterHookSubscription = dialogRef.buttonAfterHook$.subscribe((event: ButtonEvent) => {
      console.log('OUTPUT - buttonAfterHook$:', event);
      if (!event || !event.button) {
        return;
      }
      if (event.button.type === ButtonType.DELETE) {
        // remove the current image and reassign all other to the array of images
        this.images = this.images.filter((val: Image) => event.image && val.id !== event.image.id);
        this.modalGalleryService.updateModalImages(this.images);
      }
      // Invoked after both a click on a button and its related action.
      // For instance: this method will be invoked after a click
      // of 'close' button, but before that the modal gallery
      // will be really closed.
    });
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.buttonAfterHookSubscription) {
      this.buttonAfterHookSubscription.unsubscribe();
    }
  }`}ngOnInit(){this.metaData()}openModal(u,l,o){let r=this.modalGalleryService.open({id:u,images:this.images,currentImage:this.images[l],libConfig:{buttonsConfig:o,currentImageConfig:{downloadable:!0}}});this.buttonAfterHookSubscription=r.buttonAfterHook$.subscribe(a=>{console.log("OUTPUT - buttonAfterHook$:",a),!(!a||!a.button)&&a.button.type===y.DELETE&&(this.images=this.images.filter(I=>a.image&&I.id!==a.image.id),this.modalGalleryService.updateModalImages(this.images))})}metaData(){this.uiService.setMetaData({title:"Demo buttons strategies"})}ngOnDestroy(){this.buttonAfterHookSubscription&&this.buttonAfterHookSubscription.unsubscribe()}static{this.\u0275fac=function(l){return new(l||c)}}static{this.\u0275cmp=p({type:c,selectors:[["app-buttons-strategies-page"]],decls:155,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),t(3,"Button strategies"),e()(),i(4,"p"),t(5,"Modal button strategies."),e(),n(6,"br"),i(7,"h3"),t(8,"Live Demo"),e(),n(9,"br")(10,"br"),i(11,"p"),t(12,"1. Strategy DEFAULT"),e(),i(13,"button",3),s("click",function(){return o.openModal(308,0,o.buttonsConfigDefault)}),t(14,"Click to open modal gallery id=1 at index=0"),e(),n(15,"br")(16,"br"),i(17,"p"),t(18,"2. Strategy SIMPLE"),e(),i(19,"button",3),s("click",function(){return o.openModal(309,0,o.buttonsConfigSimple)}),t(20,"Click to open modal gallery id=1 at index=0"),e(),n(21,"br")(22,"br"),i(23,"p"),t(24,"3. Strategy ADVANCED"),e(),i(25,"button",3),s("click",function(){return o.openModal(310,0,o.buttonsConfigAdvanced)}),t(26,"Click to open modal gallery id=1 at index=0"),e(),n(27,"br")(28,"br"),i(29,"p"),t(30,"4. Strategy FULL"),e(),i(31,"button",3),s("click",function(){return o.openModal(311,0,o.buttonsConfigFull)}),t(32,"Click to open modal gallery id=1 at index=0"),e(),n(33,"br")(34,"br"),i(35,"section")(36,"h3"),t(37,"Code"),e(),n(38,"br"),i(39,"h4"),t(40,"Template"),e(),n(41,"ks-codemirror",4)(42,"br"),i(43,"h4"),t(44,"Typescript"),e(),n(45,"ks-codemirror",4),e(),n(46,"br")(47,"br"),i(48,"section")(49,"h3"),t(50,"Service inputs"),e(),n(51,"br"),i(52,"table",5)(53,"thead")(54,"tr")(55,"th"),t(56,"Input"),e(),i(57,"th"),t(58,"Value"),e()()(),i(59,"tbody")(60,"tr")(61,"td")(62,"code"),t(63,"id"),e()(),i(64,"td")(65,"div")(66,"i"),t(67,"Value: "),e(),i(68,"code"),t(69,"1, 2, 3 and 4"),e(),t(70," (one for every instance in this example)"),e(),i(71,"div")(72,"b",6),t(73,"Unique id"),e()()()(),i(74,"tr")(75,"td")(76,"code"),t(77,"images"),e()(),i(78,"td")(79,"div")(80,"i"),t(81,"Value: "),e(),i(82,"code"),t(83,"Image[]"),e()(),i(84,"div")(85,"b",6),t(86,"Array of "),i(87,"code"),t(88,"Image"),e(),t(89," objects"),e()()()(),i(90,"tr")(91,"td")(92,"code"),t(93,"currentImage"),e()(),i(94,"td")(95,"div")(96,"i"),t(97,"Value: "),e(),i(98,"code"),t(99,"Image"),e()(),i(100,"div")(101,"b",6)(102,"code"),t(103,"Image"),e(),t(104," object to show"),e()()()(),i(105,"tr")(106,"td")(107,"code"),t(108,"libConfig"),e()(),i(109,"td")(110,"div")(111,"i"),t(112,"Value: "),e(),i(113,"code"),t(114,"ModalLibConfig"),e()(),i(115,"div")(116,"b",6)(117,"code"),t(118,"ModalLibConfig"),e(),t(119," object to config the library. See below."),e()()()()()()(),i(120,"section")(121,"h4"),t(122,"ModalLibConfig"),e(),n(123,"br"),i(124,"table",5)(125,"thead")(126,"tr")(127,"th"),t(128,"Input"),e(),i(129,"th"),t(130,"Value"),e()()(),i(131,"tbody")(132,"tr")(133,"td")(134,"code"),t(135,"currentImageConfig"),e()(),i(136,"td")(137,"div")(138,"i"),t(139,"Value: "),e(),i(140,"code"),t(141,"{ downloadable: true }"),e()(),i(142,"div"),t(143,"Image download is enabled with keyboard shortcuts"),e()()(),i(144,"tr")(145,"td")(146,"code"),t(147,"buttonsConfig"),e()(),i(148,"td")(149,"div")(150,"i"),t(151,"Value: "),e(),t(152,"see all ButtonsConfig objects above"),e(),i(153,"div"),t(154,"It will show buttons, based on ButtonsStrategy. To enable all features related to buttons, you need to implement 'download' and 'delete images'."),e()()()()()()()),l&2&&(g(41),b("content",o.codeHtml)("language","html"),g(4),b("content",o.codeTypescript)("language","typescript"))},dependencies:[k,x],encapsulation:2})}};export{M as ButtonsStrategiesComponent};

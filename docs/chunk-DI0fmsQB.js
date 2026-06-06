import {g}from'./chunk-C8CaFLi6.js';import {$ as $n,f as fn,v as vn,T as Tn}from'./chunk-C-_qsOA0.js';import {y,m,r,u as ur,P as Pe,N,U as Uv,a as Uo,b as sI,e as ec,F as Ff,q as qf,G as Gm,L as Lf}from'./main-B6H63E46.js';var M=class c{constructor(){this.uiService=y(m);this.titleService=y(r);this.modalGalleryService=y(ur);this.images=[...g];this.configHtml=$n;this.configTs=fn;this.buttonsConfigDefault={visible:true,strategy:Pe.DEFAULT};this.buttonsConfigSimple={visible:true,strategy:Pe.SIMPLE};this.buttonsConfigAdvanced={visible:true,strategy:Pe.ADVANCED};this.buttonsConfigFull={visible:true,strategy:Pe.FULL};this.titleService.titleEvent.emit("Examples - Button strategies"),this.codeHtml=`
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
  }`;}ngOnInit(){this.metaData();}openModal(u,l,n){let r=this.modalGalleryService.open({id:u,images:this.images,currentImage:this.images[l],libConfig:{buttonsConfig:n,currentImageConfig:{downloadable:true}}});this.buttonAfterHookSubscription=r.buttonAfterHook$.subscribe(a=>{console.log("OUTPUT - buttonAfterHook$:",a),!(!a||!a.button)&&a.button.type===N.DELETE&&(this.images=this.images.filter(D=>a.image&&D.id!==a.image.id),this.modalGalleryService.updateModalImages(this.images));});}metaData(){this.uiService.setMetaData({title:"Demo buttons strategies"});}ngOnDestroy(){this.buttonAfterHookSubscription&&this.buttonAfterHookSubscription.unsubscribe();}static{this.\u0275fac=function(l){return new(l||c)};}static{this.\u0275cmp=Uv({type:c,selectors:[["app-buttons-strategies-page"]],decls:155,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,n){l&1&&(Uo(0,"div",0)(1,"h2",1)(2,"a",2),sI(3,"Button strategies"),ec()(),Uo(4,"p"),sI(5,"Modal button strategies."),ec(),Ff(6,"br"),Uo(7,"h3"),sI(8,"Live Demo"),ec(),Ff(9,"br")(10,"br"),Uo(11,"p"),sI(12,"1. Strategy DEFAULT"),ec(),Uo(13,"button",3),qf("click",function(){return n.openModal(308,0,n.buttonsConfigDefault)}),sI(14,"Click to open modal gallery id=1 at index=0"),ec(),Ff(15,"br")(16,"br"),Uo(17,"p"),sI(18,"2. Strategy SIMPLE"),ec(),Uo(19,"button",3),qf("click",function(){return n.openModal(309,0,n.buttonsConfigSimple)}),sI(20,"Click to open modal gallery id=1 at index=0"),ec(),Ff(21,"br")(22,"br"),Uo(23,"p"),sI(24,"3. Strategy ADVANCED"),ec(),Uo(25,"button",3),qf("click",function(){return n.openModal(310,0,n.buttonsConfigAdvanced)}),sI(26,"Click to open modal gallery id=1 at index=0"),ec(),Ff(27,"br")(28,"br"),Uo(29,"p"),sI(30,"4. Strategy FULL"),ec(),Uo(31,"button",3),qf("click",function(){return n.openModal(311,0,n.buttonsConfigFull)}),sI(32,"Click to open modal gallery id=1 at index=0"),ec(),Ff(33,"br")(34,"br"),Uo(35,"section")(36,"h3"),sI(37,"Code"),ec(),Ff(38,"br"),Uo(39,"h4"),sI(40,"Template"),ec(),Ff(41,"ks-codemirror",4)(42,"br"),Uo(43,"h4"),sI(44,"Typescript"),ec(),Ff(45,"ks-codemirror",4),ec(),Ff(46,"br")(47,"br"),Uo(48,"section")(49,"h3"),sI(50,"Service inputs"),ec(),Ff(51,"br"),Uo(52,"table",5)(53,"thead")(54,"tr")(55,"th"),sI(56,"Input"),ec(),Uo(57,"th"),sI(58,"Value"),ec()()(),Uo(59,"tbody")(60,"tr")(61,"td")(62,"code"),sI(63,"id"),ec()(),Uo(64,"td")(65,"div")(66,"i"),sI(67,"Value: "),ec(),Uo(68,"code"),sI(69,"1, 2, 3 and 4"),ec(),sI(70," (one for every instance in this example)"),ec(),Uo(71,"div")(72,"b",6),sI(73,"Unique id"),ec()()()(),Uo(74,"tr")(75,"td")(76,"code"),sI(77,"images"),ec()(),Uo(78,"td")(79,"div")(80,"i"),sI(81,"Value: "),ec(),Uo(82,"code"),sI(83,"Image[]"),ec()(),Uo(84,"div")(85,"b",6),sI(86,"Array of "),Uo(87,"code"),sI(88,"Image"),ec(),sI(89," objects"),ec()()()(),Uo(90,"tr")(91,"td")(92,"code"),sI(93,"currentImage"),ec()(),Uo(94,"td")(95,"div")(96,"i"),sI(97,"Value: "),ec(),Uo(98,"code"),sI(99,"Image"),ec()(),Uo(100,"div")(101,"b",6)(102,"code"),sI(103,"Image"),ec(),sI(104," object to show"),ec()()()(),Uo(105,"tr")(106,"td")(107,"code"),sI(108,"libConfig"),ec()(),Uo(109,"td")(110,"div")(111,"i"),sI(112,"Value: "),ec(),Uo(113,"code"),sI(114,"ModalLibConfig"),ec()(),Uo(115,"div")(116,"b",6)(117,"code"),sI(118,"ModalLibConfig"),ec(),sI(119," object to config the library. See below."),ec()()()()()()(),Uo(120,"section")(121,"h4"),sI(122,"ModalLibConfig"),ec(),Ff(123,"br"),Uo(124,"table",5)(125,"thead")(126,"tr")(127,"th"),sI(128,"Input"),ec(),Uo(129,"th"),sI(130,"Value"),ec()()(),Uo(131,"tbody")(132,"tr")(133,"td")(134,"code"),sI(135,"currentImageConfig"),ec()(),Uo(136,"td")(137,"div")(138,"i"),sI(139,"Value: "),ec(),Uo(140,"code"),sI(141,"{ downloadable: true }"),ec()(),Uo(142,"div"),sI(143,"Image download is enabled with keyboard shortcuts"),ec()()(),Uo(144,"tr")(145,"td")(146,"code"),sI(147,"buttonsConfig"),ec()(),Uo(148,"td")(149,"div")(150,"i"),sI(151,"Value: "),ec(),sI(152,"see all ButtonsConfig objects above"),ec(),Uo(153,"div"),sI(154,"It will show buttons, based on ButtonsStrategy. To enable all features related to buttons, you need to implement 'download' and 'delete images'."),ec()()()()()()()),l&2&&(Gm(41),Lf("content",n.codeHtml)("language",n.configHtml),Gm(4),Lf("content",n.codeTypescript)("language",n.configTs));},dependencies:[vn,Tn],encapsulation:2,changeDetection:1});}};
export{M as ButtonsStrategiesComponent};
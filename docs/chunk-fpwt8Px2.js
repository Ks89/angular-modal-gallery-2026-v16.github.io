import {g}from'./chunk-C8CaFLi6.js';import {$ as $n,f as fn,v as vn,T as Tn}from'./chunk-C-_qsOA0.js';import {y,m,r,u as ur,N,P as Pe,v as un,U as Uv,a as Uo,b as sI,e as ec,F as Ff,q as qf,G as Gm,L as Lf}from'./main-B6H63E46.js';var B=class c{constructor(){this.uiService=y(m);this.titleService=y(r);this.modalGalleryService=y(ur);this.images=[...g];this.configHtml=$n;this.configTs=fn;this.customButtonsConfig={visible:true,strategy:Pe.CUSTOM,buttons:[{className:"fas fa-plus white",type:N.CUSTOM,ariaLabel:"custom plus aria label",title:"custom plus title",fontSize:"20px"},{className:"fas fa-times white",type:N.CLOSE,ariaLabel:"custom close aria label",title:"custom close title",fontSize:"20px"},{className:"fas fa-download white",type:N.DOWNLOAD,ariaLabel:"custom download aria label",title:"custom download title",fontSize:"20px"},{className:"fas fa-external-link-alt white",type:N.EXTURL,ariaLabel:"custom exturl aria label",title:"custom exturl title",fontSize:"20px"}]};this.titleService.titleEvent.emit("Examples - Custom buttons with Font Awesome 5"),this.codeHtml='  <button (click)="openModal(306, 0, customButtonsConfig)">Click to open modal gallery id=1 at index=0</button>',this.codeTypescript=`  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  customButtonsConfig: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      {
        className: 'fa fa-plus white',
        type: ButtonType.CUSTOM,
        ariaLabel: 'custom plus aria label',
        title: 'custom plus title',
        fontSize: '20px'
      },
      {
        className: 'fa fa-close white',
        type: ButtonType.CLOSE,
        ariaLabel: 'custom close aria label',
        title: 'custom close title',
        fontSize: '20px'
      },
      {
        className: 'fa fa-download white',
        type: ButtonType.DOWNLOAD,
        ariaLabel: 'custom download aria label',
        title: 'custom download title',
        fontSize: '20px'
      },
      {
        className: 'fa fa-external-link white',
        type: ButtonType.EXTURL,
        ariaLabel: 'custom exturl aria label',
        title: 'custom exturl title',
        fontSize: '20px'
      }
    ]
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
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;

    // required to enable ADD button
    this.buttonBeforeHookSubscription = dialogRef.buttonBeforeHook$.subscribe((event: ButtonEvent) => {
      if (!event || !event.button) {
        return;
      }
      // Invoked after a click on a button, but before that the related
      // action is applied.

      if (event.button.type === ButtonType.CUSTOM) {
        console.log('adding a new random image at the end');

        // add to images array
        const imageToCopy: Image = this.images[Math.floor(Math.random() * this.images.length)];
        const newImage: Image = new Image(this.images.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
        this.images = [...this.images, newImage];

        setTimeout(() => {
          this.modalGalleryService.updateModalImages(this.images);
        }, 0);
      }
    });
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.buttonBeforeHookSubscription) {
      this.buttonBeforeHookSubscription.unsubscribe();
    }
  }
  `;}openModal(r,a,o){let b=this.modalGalleryService.open({id:r,images:this.images,currentImage:this.images[a],libConfig:{buttonsConfig:o,currentImageConfig:{downloadable:true}}});this.buttonBeforeHookSubscription=b.buttonBeforeHook$.subscribe(s=>{if(!(!s||!s.button)&&s.button.type===N.CUSTOM){console.log("adding a new random image at the end");let g=this.images[Math.floor(Math.random()*this.images.length)],T=new un(this.images.length-1+1,g.modal,g.plain);this.images=[...this.images,T],setTimeout(()=>{this.modalGalleryService.updateModalImages(this.images);},0);}});}ngOnInit(){this.metaData();}metaData(){this.uiService.setMetaData({title:"Demo buttons custom fa"});}ngOnDestroy(){this.buttonBeforeHookSubscription&&this.buttonBeforeHookSubscription.unsubscribe();}static{this.\u0275fac=function(a){return new(a||c)};}static{this.\u0275cmp=Uv({type:c,selectors:[["app-buttons-custom-fa-page"]],decls:138,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(a,o){a&1&&(Uo(0,"div",0)(1,"h2",1)(2,"a",2),sI(3,"Custom buttons with Font Awesome 5"),ec()(),Uo(4,"p"),sI(5,"Modal custom buttons with Font Awesome"),ec(),Ff(6,"br"),Uo(7,"p")(8,"b"),sI(9,"Warning: to implement custom buttons using Font Awesome, you must include Font Awesome in your project"),ec()(),Ff(10,"br"),Uo(11,"h3"),sI(12,"Live Demo"),ec(),Ff(13,"br"),Uo(14,"button",3),qf("click",function(){return o.openModal(306,0,o.customButtonsConfig)}),sI(15,"Click to open modal gallery id=1 at index=0"),ec(),Ff(16,"br")(17,"br"),Uo(18,"section")(19,"h3"),sI(20,"Code"),ec(),Ff(21,"br"),Uo(22,"h4"),sI(23,"Template"),ec(),Ff(24,"ks-codemirror",4)(25,"br"),Uo(26,"h4"),sI(27,"Typescript"),ec(),Ff(28,"ks-codemirror",4),ec(),Ff(29,"br")(30,"br"),Uo(31,"section")(32,"h3"),sI(33,"Service inputs"),ec(),Ff(34,"br"),Uo(35,"table",5)(36,"thead")(37,"tr")(38,"th"),sI(39,"Input"),ec(),Uo(40,"th"),sI(41,"Value"),ec()()(),Uo(42,"tbody")(43,"tr")(44,"td")(45,"code"),sI(46,"id"),ec()(),Uo(47,"td")(48,"div")(49,"i"),sI(50,"Value: "),ec(),Uo(51,"code"),sI(52,"1, 2, 3 and 4"),ec(),sI(53," (one for every instance in this example)"),ec(),Uo(54,"div")(55,"b",6),sI(56,"Unique id"),ec()()()(),Uo(57,"tr")(58,"td")(59,"code"),sI(60,"images"),ec()(),Uo(61,"td")(62,"div")(63,"i"),sI(64,"Value: "),ec(),Uo(65,"code"),sI(66,"Image[]"),ec()(),Uo(67,"div")(68,"b",6),sI(69,"Array of "),Uo(70,"code"),sI(71,"Image"),ec(),sI(72," objects"),ec()()()(),Uo(73,"tr")(74,"td")(75,"code"),sI(76,"currentImage"),ec()(),Uo(77,"td")(78,"div")(79,"i"),sI(80,"Value: "),ec(),Uo(81,"code"),sI(82,"Image"),ec()(),Uo(83,"div")(84,"b",6)(85,"code"),sI(86,"Image"),ec(),sI(87," object to show"),ec()()()(),Uo(88,"tr")(89,"td")(90,"code"),sI(91,"libConfig"),ec()(),Uo(92,"td")(93,"div")(94,"i"),sI(95,"Value: "),ec(),Uo(96,"code"),sI(97,"ModalLibConfig"),ec()(),Uo(98,"div")(99,"b",6)(100,"code"),sI(101,"ModalLibConfig"),ec(),sI(102," object to config the library. See below."),ec()()()()()()(),Uo(103,"section")(104,"h4"),sI(105,"ModalLibConfig"),ec(),Ff(106,"br"),Uo(107,"table",5)(108,"thead")(109,"tr")(110,"th"),sI(111,"Input"),ec(),Uo(112,"th"),sI(113,"Value"),ec()()(),Uo(114,"tbody")(115,"tr")(116,"td")(117,"code"),sI(118,"currentImageConfig"),ec()(),Uo(119,"td")(120,"div")(121,"i"),sI(122,"Value: "),ec(),Uo(123,"code"),sI(124,"{ downloadable: true }"),ec()(),Uo(125,"div"),sI(126,"Image download is enabled with keyboard shortcuts"),ec()()(),Uo(127,"tr")(128,"td")(129,"code"),sI(130,"buttonsConfig"),ec()(),Uo(131,"td")(132,"div")(133,"i"),sI(134,"Value: "),ec(),sI(135,"see the ButtonsConfig object above"),ec(),Uo(136,"div"),sI(137,"It will show custom buttons, with icons taken from Font Awesome 5. To enable all features related to buttons, you need to implement some stuff like 'download' and 'add images'."),ec()()()()()()()),a&2&&(Gm(24),Lf("content",o.codeHtml)("language",o.configHtml),Gm(4),Lf("content",o.codeTypescript)("language",o.configTs));},dependencies:[vn,Tn],encapsulation:2,changeDetection:1});}};
export{B as ButtonsCustomFaComponent};
import{a as v}from"./chunk-WVUO35GG.js";import{a as E,b as w,c as M,d as I}from"./chunk-ZED5APBM.js";import"./chunk-R2PTQT2U.js";import{b as y,e as x,f as l,m as C}from"./chunk-CWX23SAZ.js";import"./chunk-FXPWCWKA.js";import{a as S}from"./chunk-7KJL6RHT.js";import{a as h}from"./chunk-NO4W32D5.js";import"./chunk-VSHMVBPY.js";import{Db as f,La as d,Rb as t,S as m,Za as p,rb as u,sb as i,tb as e,ub as n}from"./chunk-VDWMVV4I.js";var B=class c{constructor(){this.uiService=m(S);this.titleService=m(h);this.modalGalleryService=m(C);this.images=[...v];this.configHtml=w;this.configTs=E;this.customButtonsConfig={visible:!0,strategy:x.CUSTOM,buttons:[{className:"fas fa-plus white",type:l.CUSTOM,ariaLabel:"custom plus aria label",title:"custom plus title",fontSize:"20px"},{className:"fas fa-times white",type:l.CLOSE,ariaLabel:"custom close aria label",title:"custom close title",fontSize:"20px"},{className:"fas fa-download white",type:l.DOWNLOAD,ariaLabel:"custom download aria label",title:"custom download title",fontSize:"20px"},{className:"fas fa-external-link-alt white",type:l.EXTURL,ariaLabel:"custom exturl aria label",title:"custom exturl title",fontSize:"20px"}]};this.titleService.titleEvent.emit("Examples - Custom buttons with Font Awesome 5"),this.codeHtml='  <button (click)="openModal(306, 0, customButtonsConfig)">Click to open modal gallery id=1 at index=0</button>',this.codeTypescript=`  images: Image[]; // init this array with your images

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
  `}openModal(r,o,a){let b=this.modalGalleryService.open({id:r,images:this.images,currentImage:this.images[o],libConfig:{buttonsConfig:a,currentImageConfig:{downloadable:!0}}});this.buttonBeforeHookSubscription=b.buttonBeforeHook$.subscribe(s=>{if(!(!s||!s.button)&&s.button.type===l.CUSTOM){console.log("adding a new random image at the end");let g=this.images[Math.floor(Math.random()*this.images.length)],T=new y(this.images.length-1+1,g.modal,g.plain);this.images=[...this.images,T],setTimeout(()=>{this.modalGalleryService.updateModalImages(this.images)},0)}})}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Demo buttons custom fa"})}ngOnDestroy(){this.buttonBeforeHookSubscription&&this.buttonBeforeHookSubscription.unsubscribe()}static{this.\u0275fac=function(o){return new(o||c)}}static{this.\u0275cmp=p({type:c,selectors:[["app-buttons-custom-fa-page"]],decls:138,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(o,a){o&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),t(3,"Custom buttons with Font Awesome 5"),e()(),i(4,"p"),t(5,"Modal custom buttons with Font Awesome"),e(),n(6,"br"),i(7,"p")(8,"b"),t(9,"Warning: to implement custom buttons using Font Awesome, you must include Font Awesome in your project"),e()(),n(10,"br"),i(11,"h3"),t(12,"Live Demo"),e(),n(13,"br"),i(14,"button",3),f("click",function(){return a.openModal(306,0,a.customButtonsConfig)}),t(15,"Click to open modal gallery id=1 at index=0"),e(),n(16,"br")(17,"br"),i(18,"section")(19,"h3"),t(20,"Code"),e(),n(21,"br"),i(22,"h4"),t(23,"Template"),e(),n(24,"ks-codemirror",4)(25,"br"),i(26,"h4"),t(27,"Typescript"),e(),n(28,"ks-codemirror",4),e(),n(29,"br")(30,"br"),i(31,"section")(32,"h3"),t(33,"Service inputs"),e(),n(34,"br"),i(35,"table",5)(36,"thead")(37,"tr")(38,"th"),t(39,"Input"),e(),i(40,"th"),t(41,"Value"),e()()(),i(42,"tbody")(43,"tr")(44,"td")(45,"code"),t(46,"id"),e()(),i(47,"td")(48,"div")(49,"i"),t(50,"Value: "),e(),i(51,"code"),t(52,"1, 2, 3 and 4"),e(),t(53," (one for every instance in this example)"),e(),i(54,"div")(55,"b",6),t(56,"Unique id"),e()()()(),i(57,"tr")(58,"td")(59,"code"),t(60,"images"),e()(),i(61,"td")(62,"div")(63,"i"),t(64,"Value: "),e(),i(65,"code"),t(66,"Image[]"),e()(),i(67,"div")(68,"b",6),t(69,"Array of "),i(70,"code"),t(71,"Image"),e(),t(72," objects"),e()()()(),i(73,"tr")(74,"td")(75,"code"),t(76,"currentImage"),e()(),i(77,"td")(78,"div")(79,"i"),t(80,"Value: "),e(),i(81,"code"),t(82,"Image"),e()(),i(83,"div")(84,"b",6)(85,"code"),t(86,"Image"),e(),t(87," object to show"),e()()()(),i(88,"tr")(89,"td")(90,"code"),t(91,"libConfig"),e()(),i(92,"td")(93,"div")(94,"i"),t(95,"Value: "),e(),i(96,"code"),t(97,"ModalLibConfig"),e()(),i(98,"div")(99,"b",6)(100,"code"),t(101,"ModalLibConfig"),e(),t(102," object to config the library. See below."),e()()()()()()(),i(103,"section")(104,"h4"),t(105,"ModalLibConfig"),e(),n(106,"br"),i(107,"table",5)(108,"thead")(109,"tr")(110,"th"),t(111,"Input"),e(),i(112,"th"),t(113,"Value"),e()()(),i(114,"tbody")(115,"tr")(116,"td")(117,"code"),t(118,"currentImageConfig"),e()(),i(119,"td")(120,"div")(121,"i"),t(122,"Value: "),e(),i(123,"code"),t(124,"{ downloadable: true }"),e()(),i(125,"div"),t(126,"Image download is enabled with keyboard shortcuts"),e()()(),i(127,"tr")(128,"td")(129,"code"),t(130,"buttonsConfig"),e()(),i(131,"td")(132,"div")(133,"i"),t(134,"Value: "),e(),t(135,"see the ButtonsConfig object above"),e(),i(136,"div"),t(137,"It will show custom buttons, with icons taken from Font Awesome 5. To enable all features related to buttons, you need to implement some stuff like 'download' and 'add images'."),e()()()()()()()),o&2&&(d(24),u("content",a.codeHtml)("language","html"),d(4),u("content",a.codeTypescript)("language","typescript"))},dependencies:[I,M],encapsulation:2})}};export{B as ButtonsCustomFaComponent};

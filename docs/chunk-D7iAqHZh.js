import {g}from'./chunk-C8CaFLi6.js';import {$ as $n,f as fn,v as vn,T as Tn}from'./chunk-C-_qsOA0.js';import {y,m,r,u as ur,U as Uv,a as Uo,b as sI,e as ec,F as Ff,q as qf,G as Gm,L as Lf}from'./main-B6H63E46.js';var M=class s{constructor(){this.uiService=y(m);this.titleService=y(r);this.modalGalleryService=y(ur);this.images=[...g];this.configHtml=$n;this.configTs=fn;this.accessibilityConfig={backgroundAriaLabel:"CUSTOM Modal gallery full screen background",backgroundTitle:"CUSTOM background title",plainGalleryContentAriaLabel:"CUSTOM Plain gallery content",plainGalleryContentTitle:"CUSTOM plain gallery content title",modalGalleryContentAriaLabel:"CUSTOM Modal gallery content",modalGalleryContentTitle:"CUSTOM modal gallery content title",loadingSpinnerAriaLabel:"CUSTOM The current image is loading. Please be patient.",loadingSpinnerTitle:"CUSTOM The current image is loading. Please be patient.",mainContainerAriaLabel:"CUSTOM Current image and navigation",mainContainerTitle:"CUSTOM main container title",mainPrevImageAriaLabel:"CUSTOM Previous image",mainPrevImageTitle:"CUSTOM Previous image",mainNextImageAriaLabel:"CUSTOM Next image",mainNextImageTitle:"CUSTOM Next image",dotsContainerAriaLabel:"CUSTOM Image navigation dots",dotsContainerTitle:"CUSTOM dots container title",dotAriaLabel:"CUSTOM Navigate to image number",previewsContainerAriaLabel:"CUSTOM Image previews",previewsContainerTitle:"CUSTOM previews title",previewScrollPrevAriaLabel:"CUSTOM Scroll previous previews",previewScrollPrevTitle:"CUSTOM Scroll previous previews",previewScrollNextAriaLabel:"CUSTOM Scroll next previews",previewScrollNextTitle:"CUSTOM Scroll next previews",carouselContainerAriaLabel:"Current image and navigation",carouselContainerTitle:"",carouselPrevImageAriaLabel:"Previous image",carouselPrevImageTitle:"Previous image",carouselNextImageAriaLabel:"Next image",carouselNextImageTitle:"Next image",carouselPreviewsContainerAriaLabel:"Image previews",carouselPreviewsContainerTitle:"",carouselPreviewScrollPrevAriaLabel:"Scroll previous previews",carouselPreviewScrollPrevTitle:"Scroll previous previews",carouselPreviewScrollNextAriaLabel:"Scroll next previews",carouselPreviewScrollNextTitle:"Scroll next previews"};this.titleService.titleEvent.emit("Examples - Custom accessibility"),this.codeHtml='<button (click)="openModal(300, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  accessibilityConfig: AccessibilityConfig = {
    backgroundAriaLabel: 'CUSTOM Modal gallery full screen background',
    backgroundTitle: 'CUSTOM background title',

    plainGalleryContentAriaLabel: 'CUSTOM Plain gallery content',
    plainGalleryContentTitle: 'CUSTOM plain gallery content title',

    modalGalleryContentAriaLabel: 'CUSTOM Modal gallery content',
    modalGalleryContentTitle: 'CUSTOM modal gallery content title',

    loadingSpinnerAriaLabel: 'CUSTOM The current image is loading. Please be patient.',
    loadingSpinnerTitle: 'CUSTOM The current image is loading. Please be patient.',

    mainContainerAriaLabel: 'CUSTOM Current image and navigation',
    mainContainerTitle: 'CUSTOM main container title',
    mainPrevImageAriaLabel: 'CUSTOM Previous image',
    mainPrevImageTitle: 'CUSTOM Previous image',
    mainNextImageAriaLabel: 'CUSTOM Next image',
    mainNextImageTitle: 'CUSTOM Next image',

    dotsContainerAriaLabel: 'CUSTOM Image navigation dots',
    dotsContainerTitle: 'CUSTOM dots container title',
    dotAriaLabel: 'CUSTOM Navigate to image number',

    previewsContainerAriaLabel: 'CUSTOM Image previews',
    previewsContainerTitle: 'CUSTOM previews title',
    previewScrollPrevAriaLabel: 'CUSTOM Scroll previous previews',
    previewScrollPrevTitle: 'CUSTOM Scroll previous previews',
    previewScrollNextAriaLabel: 'CUSTOM Scroll next previews',
    previewScrollNextTitle: 'CUSTOM Scroll next previews',

    carouselContainerAriaLabel: 'Current image and navigation',
    carouselContainerTitle: '',
    carouselPrevImageAriaLabel: 'Previous image',
    carouselPrevImageTitle: 'Previous image',
    carouselNextImageAriaLabel: 'Next image',
    carouselNextImageTitle: 'Next image',
    carouselPreviewsContainerAriaLabel: 'Image previews',
    carouselPreviewsContainerTitle: '',
    carouselPreviewScrollPrevAriaLabel: 'Scroll previous previews',
    carouselPreviewScrollPrevTitle: 'Scroll previous previews',
    carouselPreviewScrollNextAriaLabel: 'Scroll next previews',
    carouselPreviewScrollNextTitle: 'Scroll next previews'
  };

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        accessibilityConfig: this.accessibilityConfig
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`;}ngOnInit(){this.metaData();}openModal(o,l){this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{accessibilityConfig:this.accessibilityConfig}});}metaData(){this.uiService.setMetaData({title:"Demo accessibility"});}static{this.\u0275fac=function(l){return new(l||s)};}static{this.\u0275cmp=Uv({type:s,selectors:[["app-accessibility-page"]],decls:124,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,n){l&1&&(Uo(0,"div",0)(1,"h2",1)(2,"a",2),sI(3,"Custom accessibility"),ec()(),Uo(4,"p"),sI(5,"Modal gallery example with custom accessibility"),ec(),Ff(6,"br"),Uo(7,"h3"),sI(8,"Live Demo"),ec(),Ff(9,"br"),Uo(10,"button",3),qf("click",function(){return n.openModal(300,0)}),sI(11,"Click to open modal gallery id=1 at index=0"),ec(),Ff(12,"br")(13,"br"),Uo(14,"section")(15,"h3"),sI(16,"Code"),ec(),Ff(17,"br"),Uo(18,"h4"),sI(19,"Template"),ec(),Ff(20,"ks-codemirror",4)(21,"br"),Uo(22,"h4"),sI(23,"Typescript"),ec(),Ff(24,"ks-codemirror",4),ec(),Ff(25,"br")(26,"br"),Uo(27,"section")(28,"h3"),sI(29,"Service inputs"),ec(),Ff(30,"br"),Uo(31,"table",5)(32,"thead")(33,"tr")(34,"th"),sI(35,"Input"),ec(),Uo(36,"th"),sI(37,"Value"),ec()()(),Uo(38,"tbody")(39,"tr")(40,"td")(41,"code"),sI(42,"id"),ec()(),Uo(43,"td")(44,"div")(45,"i"),sI(46,"Value: "),ec(),Uo(47,"code"),sI(48,"NUMERIC UNIQUE ID"),ec()(),Uo(49,"div")(50,"b",6),sI(51,"Unique id"),ec()()()(),Uo(52,"tr")(53,"td")(54,"code"),sI(55,"images"),ec()(),Uo(56,"td")(57,"div")(58,"i"),sI(59,"Value: "),ec(),Uo(60,"code"),sI(61,"Image[]"),ec()(),Uo(62,"div")(63,"b",6),sI(64,"Array of "),Uo(65,"code"),sI(66,"Image"),ec(),sI(67," objects"),ec()()()(),Uo(68,"tr")(69,"td")(70,"code"),sI(71,"currentImage"),ec()(),Uo(72,"td")(73,"div")(74,"i"),sI(75,"Value: "),ec(),Uo(76,"code"),sI(77,"Image"),ec()(),Uo(78,"div")(79,"b",6)(80,"code"),sI(81,"Image"),ec(),sI(82," object to show"),ec()()()(),Uo(83,"tr")(84,"td")(85,"code"),sI(86,"libConfig"),ec()(),Uo(87,"td")(88,"div")(89,"i"),sI(90,"Value: "),ec(),Uo(91,"code"),sI(92,"ModalLibConfig"),ec()(),Uo(93,"div")(94,"b",6)(95,"code"),sI(96,"ModalLibConfig"),ec(),sI(97," object to config the library. See below."),ec()()()()()()(),Uo(98,"section")(99,"h4"),sI(100,"ModalLibConfig"),ec(),Ff(101,"br"),Uo(102,"table",5)(103,"thead")(104,"tr")(105,"th"),sI(106,"Input"),ec(),Uo(107,"th"),sI(108,"Value"),ec()()(),Uo(109,"tbody")(110,"tr")(111,"td")(112,"code"),sI(113,"accessibilityConfig"),ec()(),Uo(114,"td")(115,"div")(116,"i"),sI(117,"Value: "),ec(),sI(118,"see "),Uo(119,"code"),sI(120,"accessibilityConfig"),ec(),sI(121," above"),ec(),Uo(122,"div"),sI(123,"Custom accessibility values."),ec()()()()()()()),l&2&&(Gm(20),Lf("content",n.codeHtml)("language",n.configHtml),Gm(4),Lf("content",n.codeTypescript)("language",n.configTs));},dependencies:[vn,Tn],encapsulation:2,changeDetection:1});}};
export{M as AccessibilityComponent};
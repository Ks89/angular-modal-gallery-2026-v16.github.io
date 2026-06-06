import {g}from'./chunk-C8CaFLi6.js';import {$ as $n,f as fn,v as vn,T as Tn}from'./chunk-C-_qsOA0.js';import {y,m,r,u as ur,a1 as C,U as Uv,a as Uo,b as sI,e as ec,F as Ff,q as qf,G as Gm,L as Lf,v as un}from'./main-B6H63E46.js';var A=class h{constructor(){this.uiService=y(m);this.titleService=y(r);this.modalGalleryService=y(ur);this.images=[...g];this.configHtml=$n;this.configTs=fn;this.count=0;this.titleService.titleEvent.emit("Examples - Gallery service"),this.codeHtml='  <button (click)="openModalWithAutoClose(303, images, 2)">Click to open modal gallery id=1 at index=2 (third image)</button>',this.codeHtml2='  <button (click)="openModalWithAutoUpdate(304, images, 2)">Click to open modal gallery id=1 at index=2 (third image)</button>',this.codeTypescript=`  private timeout: any;

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModalWithAutoClose(id: number, imagesArrayToUse: Image[], imageIndex: number): void {
    const imageToShow: Image = imagesArrayToUse[imageIndex];
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: imagesArrayToUse,
      currentImage: imageToShow
    } as ModalGalleryConfig) as ModalGalleryRef;

    this.showSubscription = dialogRef.show$.subscribe((event: ImageModalEvent) => {
      const galleryId: number = event.galleryId;
      // clear previous timeout
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        console.log('setTimeout end - closing gallery with id=' + galleryId);
        this.modalGalleryService.close(galleryId, false);
      }, 3000);
    });
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.showSubscription) {
      this.showSubscription.unsubscribe();
    }
  }`,this.codeTypescript2=`  private count = 0;

  openModalWithAutoUpdate(id: number, imagesArrayToUse: Image[], imageIndex: number): void {
    const imageToShow: Image = imagesArrayToUse[imageIndex];
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: imagesArrayToUse,
      currentImage: imageToShow
    } as ModalGalleryConfig) as ModalGalleryRef;
    this.showSubscription = dialogRef.show$.subscribe((event: ImageModalEvent) => {
      if (this.count !== 0) {
        return;
      }
      const indexToRefresh = 1;
      const image: Image = new Image(1, {
        img: '../assets/images/gallery/img5.jpg',
        description: 'Description 2 updated with imag5.jpg'
      });

      // create the new array of images with the updated image inside
      const newImages: Image[] = [...this.images];
      newImages[indexToRefresh] = image;

      setTimeout(() => {
        this.modalGalleryService.updateModalImages(newImages);
        console.log('image updated successfully!');
      }, 4000);
    });
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.showSubscription) {
      this.showSubscription.unsubscribe();
    }
  }`;}openModalWithAutoClose(m,n,o){let s=n[o],u=this.modalGalleryService.open({id:m,images:n,currentImage:s});this.showSubscription=u.show$.subscribe(l=>{console.log("OUTPUT - show$: ",l);let r=l.galleryId;console.log(`onShowAutoCloseExample with id=${r} action: `+C[l.action]),console.log("onShowAutoCloseExample result:"+l.result),console.log("Starting timeout of 3 seconds to close modal gallery automatically"),clearTimeout(this.timeout),this.timeout=setTimeout(()=>{console.log("setTimeout end - closing gallery with id="+r),this.modalGalleryService.close(r,false);},3e3);});}openModalWithAutoUpdate(m,n,o){let s=n[o],u=this.modalGalleryService.open({id:m,images:n,currentImage:s});this.showSubscription=u.show$.subscribe(l=>{if(console.log("OUTPUT - show$: ",l),this.count!==0)return;let r=1,G=new un(1,{img:"../assets/images/gallery/img5.jpg",description:"Description 2 updated with imag5.jpg"});console.log("updating image at index "+r+", after 4 seconds");let y=[...this.images];y[r]=G,setTimeout(()=>{this.modalGalleryService.updateModalImages(y),console.log("image updated successfully!");},4e3);});}ngOnInit(){this.metaData();}metaData(){this.uiService.setMetaData({title:"Demo gallery service"});}ngOnDestroy(){this.showSubscription&&this.showSubscription.unsubscribe();}static{this.\u0275fac=function(n){return new(n||h)};}static{this.\u0275cmp=Uv({type:h,selectors:[["app-auto-close-and-auto-update-page"]],decls:129,vars:8,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(n,o){n&1&&(Uo(0,"div",0)(1,"h2",1)(2,"a",2),sI(3,"Gallery service example"),ec()(),Uo(4,"p"),sI(5,"Minimal example of Modal gallery service with "),Uo(6,"code"),sI(7,"close"),ec(),sI(8," and "),Uo(9,"code"),sI(10,"updateModalImages"),ec(),sI(11," methods."),ec(),Ff(12,"br"),Uo(13,"h3"),sI(14,"Live Demos"),ec(),Ff(15,"br")(16,"br"),Uo(17,"h4"),sI(18,"1) Example of "),Uo(19,"code"),sI(20,"close"),ec(),sI(21," method"),ec(),Uo(22,"p"),sI(23,"Modal gallery (with id=1) "),Uo(24,"b"),sI(25,"will close automatically after 3 seconds."),ec()(),Ff(26,"br"),Uo(27,"button",3),qf("click",function(){return o.openModalWithAutoClose(303,o.images,2)}),sI(28,"Click to open modal gallery id=1 at index=2 (third image)"),ec(),Ff(29,"br")(30,"br")(31,"br")(32,"br"),Uo(33,"section")(34,"h3"),sI(35,"Code"),ec(),Ff(36,"br"),Uo(37,"h4"),sI(38,"Template"),ec(),Ff(39,"ks-codemirror",4)(40,"br"),Uo(41,"h4"),sI(42,"Typescript"),ec(),Ff(43,"ks-codemirror",4),ec(),Ff(44,"br")(45,"br"),Uo(46,"h4"),sI(47,"2) Example of "),Uo(48,"code"),sI(49,"updateModalImages"),ec(),sI(50," method"),ec(),Uo(51,"p"),sI(52,"Modal gallery (with id=2) "),Uo(53,"b"),sI(54,"will update second image automatically after 4 seconds."),ec()(),Ff(55,"br"),Uo(56,"button",3),qf("click",function(){return o.openModalWithAutoUpdate(304,o.images,2)}),sI(57,"Click to open modal gallery id=1 at index=2 (third image)"),ec(),Ff(58,"br")(59,"br"),Uo(60,"section")(61,"h3"),sI(62,"Code"),ec(),Ff(63,"br"),Uo(64,"h4"),sI(65,"Template"),ec(),Ff(66,"ks-codemirror",4)(67,"br"),Uo(68,"h4"),sI(69,"Typescript"),ec(),Ff(70,"ks-codemirror",4),ec(),Ff(71,"br")(72,"br"),Uo(73,"section")(74,"h3"),sI(75,"Service inputs"),ec(),Ff(76,"br"),Uo(77,"table",5)(78,"thead")(79,"tr")(80,"th"),sI(81,"Input"),ec(),Uo(82,"th"),sI(83,"Value"),ec()()(),Uo(84,"tbody")(85,"tr")(86,"td")(87,"code"),sI(88,"id"),ec()(),Uo(89,"td")(90,"div")(91,"i"),sI(92,"Value: "),ec(),Uo(93,"code"),sI(94,"NUMERIC UNIQUE ID"),ec()(),Uo(95,"div")(96,"b",6),sI(97,"Unique id"),ec()()()(),Uo(98,"tr")(99,"td")(100,"code"),sI(101,"images"),ec()(),Uo(102,"td")(103,"div")(104,"i"),sI(105,"Value: "),ec(),Uo(106,"code"),sI(107,"Image[]"),ec()(),Uo(108,"div")(109,"b",6),sI(110,"Array of "),Uo(111,"code"),sI(112,"Image"),ec(),sI(113," objects"),ec()()()(),Uo(114,"tr")(115,"td")(116,"code"),sI(117,"currentImage"),ec()(),Uo(118,"td")(119,"div")(120,"i"),sI(121,"Value: "),ec(),Uo(122,"code"),sI(123,"Image"),ec()(),Uo(124,"div")(125,"b",6)(126,"code"),sI(127,"Image"),ec(),sI(128," object to show"),ec()()()()()()()()),n&2&&(Gm(39),Lf("content",o.codeHtml)("language",o.configHtml),Gm(4),Lf("content",o.codeTypescript)("language",o.configTs),Gm(23),Lf("content",o.codeHtml2)("language",o.configHtml),Gm(4),Lf("content",o.codeTypescript2)("language",o.configTs));},dependencies:[vn,Tn],encapsulation:2,changeDetection:1});}};
export{A as AutoCloseAndAutoUpdateComponent};
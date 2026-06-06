import {p}from'./chunk-C8CaFLi6.js';import {$ as $n,f as fn,v as vn,T as Tn}from'./chunk-C-_qsOA0.js';import {y,m,r,u as ur,U as Uv,a as Uo,b as sI,e as ec,F as Ff,q as qf,G as Gm,L as Lf}from'./main-B6H63E46.js';var v=class d{constructor(){this.uiService=y(m);this.titleService=y(r);this.modalGalleryService=y(ur);this.images=[...p];this.configHtml=$n;this.configTs=fn;this.titleService.titleEvent.emit("Examples - Same images"),this.codeHtml='  <button (click)="openModal(338, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`  images: Image[] = [
  new Image(0, {
    img: '/assets/images/gallery/img1.jpg?0',
    extUrl: 'https://www.google.com'
  }),
  new Image(1, {
    img: '/assets/images/gallery/img1.jpg?1',
    extUrl: 'https://www.google.com'
  }),
  new Image(2, {
    img: '/assets/images/gallery/img1.jpg?2',
    extUrl: 'https://www.google.com'
  })];

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex]
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`;}ngOnInit(){this.metaData();}openModal(r,a){this.modalGalleryService.open({id:r,images:this.images,currentImage:this.images[a]});}metaData(){this.uiService.setMetaData({title:"Demo same images"});}static{this.\u0275fac=function(a){return new(a||d)};}static{this.\u0275cmp=Uv({type:d,selectors:[["app-same-images-page"]],decls:88,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(a,m){a&1&&(Uo(0,"div",0)(1,"h2",1)(2,"a",2),sI(3,"Same images example"),ec()(),Uo(4,"p"),sI(5,"Array with the same image multiple times."),ec(),Ff(6,"br"),Uo(7,"p")(8,"b"),sI(9,"Warning: To prevent caching issues, you must use unique image src paths."),ec(),sI(10," In this example, the same image is reused multiple times; to ensure unique paths, a query parameter (?imgIndex) has been appended to each image URL. "),Ff(11,"br"),ec(),Uo(12,"h3"),sI(13,"Live Demo"),ec(),Ff(14,"br"),Uo(15,"button",3),qf("click",function(){return m.openModal(338,0)}),sI(16,"Click to open modal gallery id=1 at index=0"),ec(),Ff(17,"br")(18,"br"),Uo(19,"section")(20,"h3"),sI(21,"Code"),ec(),Ff(22,"br"),Uo(23,"h4"),sI(24,"Template"),ec(),Ff(25,"ks-codemirror",4)(26,"br"),Uo(27,"h4"),sI(28,"Typescript"),ec(),Ff(29,"ks-codemirror",4),ec(),Ff(30,"br")(31,"br"),Uo(32,"section")(33,"h3"),sI(34,"Service inputs"),ec(),Ff(35,"br"),Uo(36,"table",5)(37,"thead")(38,"tr")(39,"th"),sI(40,"Input"),ec(),Uo(41,"th"),sI(42,"Value"),ec()()(),Uo(43,"tbody")(44,"tr")(45,"td")(46,"code"),sI(47,"id"),ec()(),Uo(48,"td")(49,"div")(50,"i"),sI(51,"Value: "),ec(),Uo(52,"code"),sI(53,"NUMERIC UNIQUE ID"),ec()(),Uo(54,"div")(55,"b",6),sI(56,"Unique id"),ec()()()(),Uo(57,"tr")(58,"td")(59,"code"),sI(60,"images"),ec()(),Uo(61,"td")(62,"div")(63,"i"),sI(64,"Value: "),ec(),Uo(65,"code"),sI(66,"Image[]"),ec()(),Uo(67,"div")(68,"b",6),sI(69,"Array of "),Uo(70,"code"),sI(71,"Image"),ec(),sI(72," objects"),ec()()()(),Uo(73,"tr")(74,"td")(75,"code"),sI(76,"currentImage"),ec()(),Uo(77,"td")(78,"div")(79,"i"),sI(80,"Value: "),ec(),Uo(81,"code"),sI(82,"Image"),ec()(),Uo(83,"div")(84,"b",6)(85,"code"),sI(86,"Image"),ec(),sI(87," object to show"),ec()()()()()()()()),a&2&&(Gm(25),Lf("content",m.codeHtml)("language",m.configHtml),Gm(4),Lf("content",m.codeTypescript)("language",m.configTs));},dependencies:[vn,Tn],encapsulation:2,changeDetection:1});}};
export{v as SameImagesComponent};
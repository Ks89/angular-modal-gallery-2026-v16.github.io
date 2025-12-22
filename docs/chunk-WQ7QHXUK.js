import{c as h}from"./chunk-WVUO35GG.js";import{a as x,b,c as y,d as f}from"./chunk-ZED5APBM.js";import"./chunk-R2PTQT2U.js";import{m as S}from"./chunk-CWX23SAZ.js";import"./chunk-FXPWCWKA.js";import{a as u}from"./chunk-7KJL6RHT.js";import{a as p}from"./chunk-NO4W32D5.js";import"./chunk-VSHMVBPY.js";import{Db as g,La as o,Rb as t,S as l,Za as c,rb as s,sb as i,tb as e,ub as n}from"./chunk-VDWMVV4I.js";var v=class d{constructor(){this.uiService=l(u);this.titleService=l(p);this.modalGalleryService=l(S);this.images=[...h];this.configHtml=b;this.configTs=x;this.titleService.titleEvent.emit("Examples - Same images"),this.codeHtml='  <button (click)="openModal(338, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`  images: Image[] = [
  new Image(0, {
    img: '/assets/images/gallery/img1.jpg?0',
    extUrl: 'http://www.google.com'
  }),
  new Image(1, {
    img: '/assets/images/gallery/img1.jpg?1',
    extUrl: 'http://www.google.com'
  }),
  new Image(2, {
    img: '/assets/images/gallery/img1.jpg?2',
    extUrl: 'http://www.google.com'
  })];

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex]
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(r,a){let m=this.modalGalleryService.open({id:r,images:this.images,currentImage:this.images[a]})}metaData(){this.uiService.setMetaData({title:"Demo same images"})}static{this.\u0275fac=function(a){return new(a||d)}}static{this.\u0275cmp=c({type:d,selectors:[["app-same-images-page"]],decls:88,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(a,m){a&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),t(3,"Same images example"),e()(),i(4,"p"),t(5,"Array with the same image multiple times."),e(),n(6,"br"),i(7,"p")(8,"b"),t(9,"Warning: To prevent caching issues, you must use unique image src paths."),e(),t(10," In this example, the same image is reused multiple times; to ensure unique paths, a query parameter (?imgIndex) has been appended to each image URL. "),n(11,"br"),e(),i(12,"h3"),t(13,"Live Demo"),e(),n(14,"br"),i(15,"button",3),g("click",function(){return m.openModal(338,0)}),t(16,"Click to open modal gallery id=1 at index=0"),e(),n(17,"br")(18,"br"),i(19,"section")(20,"h3"),t(21,"Code"),e(),n(22,"br"),i(23,"h4"),t(24,"Template"),e(),n(25,"ks-codemirror",4)(26,"br"),i(27,"h4"),t(28,"Typescript"),e(),n(29,"ks-codemirror",4),e(),n(30,"br")(31,"br"),i(32,"section")(33,"h3"),t(34,"Service inputs"),e(),n(35,"br"),i(36,"table",5)(37,"thead")(38,"tr")(39,"th"),t(40,"Input"),e(),i(41,"th"),t(42,"Value"),e()()(),i(43,"tbody")(44,"tr")(45,"td")(46,"code"),t(47,"id"),e()(),i(48,"td")(49,"div")(50,"i"),t(51,"Value: "),e(),i(52,"code"),t(53,"NUMERIC UNIQUE ID"),e()(),i(54,"div")(55,"b",6),t(56,"Unique id"),e()()()(),i(57,"tr")(58,"td")(59,"code"),t(60,"images"),e()(),i(61,"td")(62,"div")(63,"i"),t(64,"Value: "),e(),i(65,"code"),t(66,"Image[]"),e()(),i(67,"div")(68,"b",6),t(69,"Array of "),i(70,"code"),t(71,"Image"),e(),t(72," objects"),e()()()(),i(73,"tr")(74,"td")(75,"code"),t(76,"currentImage"),e()(),i(77,"td")(78,"div")(79,"i"),t(80,"Value: "),e(),i(81,"code"),t(82,"Image"),e()(),i(83,"div")(84,"b",6)(85,"code"),t(86,"Image"),e(),t(87," object to show"),e()()()()()()()()),a&2&&(o(25),s("content",m.codeHtml)("language","html"),o(4),s("content",m.codeTypescript)("language","typescript"))},dependencies:[f,y],encapsulation:2})}};export{v as SameImagesComponent};

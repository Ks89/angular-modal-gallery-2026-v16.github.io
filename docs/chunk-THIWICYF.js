import{b as S}from"./chunk-5XDJJ2G4.js";import{a as C,b as y,c as f,d as v}from"./chunk-ZED5APBM.js";import"./chunk-R2PTQT2U.js";import{k as w}from"./chunk-5OGKUYSB.js";import"./chunk-UMM7A7ZK.js";import{a as g}from"./chunk-7KJL6RHT.js";import{a as p}from"./chunk-NO4W32D5.js";import"./chunk-VSHMVBPY.js";import{Db as s,La as n,Rb as e,S as u,Sb as m,Za as h,rb as l,sb as t,tb as i,ub as a}from"./chunk-VDWMVV4I.js";var E=class c{constructor(){this.uiService=u(g);this.titleService=u(p);this.images=[...S];this.configHtml=y;this.configTs=C;this.autoPlay=!0;this.showArrows=!0;this.showDots=!0;this.titleService.titleEvent.emit("Examples - Carousel disable features"),this.codeHtml=`  <p>Autoplay: <button class="btn btn-primary" (click)="onChangeAutoPlay()">{{autoPlay ? 'disable autoplay' : 'enable autoplay'}}</button></p>
  <p>Show Arrows: <button class="btn btn-primary" (click)="onChangeShowArrows()">{{showArrows ? 'Hide Arrows' : 'Show Arrows'}}</button></p>
  <p>Show Dots: <button class="btn btn-primary" (click)="onChangeShowDots()">{{showDots ? 'Hide Dots' : 'Show Dots'}}</button></p>
  <br>
  <ks-carousel [id]="108" [images]="images" [config]="getLibConfig(autoPlay, showArrows, showDots)"></ks-carousel>`,this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  getLibConfig(autoPlay: boolean, showArrows: boolean, showDots: boolean): CarouselLibConfig {
    return {
      carouselDotsConfig: {
        visible: showDots
      },
      carouselPlayConfig: {
        autoPlay: autoPlay,
        interval: 3000,
        pauseOnHover: true
      },
      carouselConfig: {
        maxWidth: '100%',
        maxHeight: '400px',
        showArrows: showArrows,
        objectFit: 'cover',
        keyboardEnable: true,
        modalGalleryEnable: false
      }
    } as CarouselLibConfig;
  }

  onChangeAutoPlay() {
    this.autoPlay = !this.autoPlay;
  }

  onChangeShowArrows() {
    this.showArrows = !this.showArrows;
  }

  onChangeShowDots() {
    this.showDots = !this.showDots;
  }`}getLibConfig(d,r,o){return{carouselDotsConfig:{visible:o},carouselPlayConfig:{autoPlay:d,interval:3e3,pauseOnHover:!0},carouselConfig:{maxWidth:"100%",maxHeight:"400px",showArrows:r,objectFit:"cover",keyboardEnable:!0,modalGalleryEnable:!1}}}onChangeAutoPlay(){this.autoPlay=!this.autoPlay}onChangeShowArrows(){this.showArrows=!this.showArrows}onChangeShowDots(){this.showDots=!this.showDots}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Carousel disable features"})}static{this.\u0275fac=function(r){return new(r||c)}}static{this.\u0275cmp=h({type:c,selectors:[["app-carousel-features-disables-page"]],decls:143,vars:10,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary",3,"click"],[3,"id","images","config"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(r,o){r&1&&(t(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Carousel disable features"),i()(),t(4,"p"),e(5,"Carousel disable features demo without previews."),i(),a(6,"br"),t(7,"h3"),e(8,"Live Demo"),i(),a(9,"br"),t(10,"p"),e(11,"Autoplay: "),t(12,"button",3),s("click",function(){return o.onChangeAutoPlay()}),e(13),i()(),t(14,"p"),e(15,"Show Arrows: "),t(16,"button",3),s("click",function(){return o.onChangeShowArrows()}),e(17),i()(),t(18,"p"),e(19,"Show Dots: "),t(20,"button",3),s("click",function(){return o.onChangeShowDots()}),e(21),i()(),a(22,"br")(23,"ks-carousel",4)(24,"br")(25,"br"),t(26,"section")(27,"h3"),e(28,"Code"),i(),a(29,"br"),t(30,"h4"),e(31,"Template"),i(),a(32,"ks-codemirror",5)(33,"br"),t(34,"h4"),e(35,"Typescript"),i(),a(36,"ks-codemirror",5),i(),a(37,"br")(38,"br"),t(39,"section")(40,"h3"),e(41,"Details"),i(),a(42,"br"),t(43,"table",6)(44,"thead")(45,"tr")(46,"th"),e(47,"Input (.html)"),i(),t(48,"th"),e(49,"Value (.ts)"),i()()(),t(50,"tbody")(51,"tr")(52,"td")(53,"code"),e(54,"id"),i()(),t(55,"td")(56,"div")(57,"i"),e(58,"Value: "),i(),t(59,"code"),e(60,"NUMERIC UNIQUE ID"),i()(),t(61,"div")(62,"b",7),e(63,"Unique id"),i()()()(),t(64,"tr")(65,"td")(66,"code"),e(67,"images"),i()(),t(68,"td")(69,"div")(70,"i"),e(71,"Value: "),i(),t(72,"code"),e(73,"Image[]"),i()(),t(74,"div")(75,"b",7),e(76,"Array of "),t(77,"code"),e(78,"Image"),i(),e(79," objects"),i()()()(),t(80,"tr")(81,"td")(82,"code"),e(83,"config"),i()(),t(84,"td")(85,"div")(86,"i"),e(87,"Value: "),i(),t(88,"code"),e(89,"CarouselLibConfig"),i()(),t(90,"div")(91,"b",7)(92,"code"),e(93,"CarouselLibConfig"),i(),e(94," object to config the library. See below."),i()()()()()()(),t(95,"section")(96,"h4"),e(97,"CarouselLibConfig"),i(),a(98,"br"),t(99,"table",6)(100,"thead")(101,"tr")(102,"th"),e(103,"Input"),i(),t(104,"th"),e(105,"Value"),i()()(),t(106,"tbody")(107,"tr")(108,"td")(109,"code"),e(110,"carouselConfig"),i()(),t(111,"td")(112,"div")(113,"i"),e(114,"Value: "),i(),t(115,"code"),e(116,"{ maxWidth: '100%', maxHeight: '400px', showArrows: showArrows, objectFit: 'cover', keyboardEnable: true, modalGalleryEnable: false }"),i()(),t(117,"div"),e(118,"Full width carousel with height 400px, image cover, toggleable arrows via an external variable, keyboard navigation, but without modal gallery "),i()()(),t(119,"tr")(120,"td")(121,"code"),e(122,"carouselPlayConfig"),i()(),t(123,"td")(124,"div")(125,"i"),e(126,"Value: "),i(),t(127,"code"),e(128,"{ autoPlay: autoPlay, interval: 3000, pauseOnHover: true }"),i()(),t(129,"div"),e(130,"toggleable autoPlay via an external variable, pauseOnHover is enabled and there are 3000mx of delay"),i()()(),t(131,"tr")(132,"td")(133,"code"),e(134,"carouselDotsConfig"),i()(),t(135,"td")(136,"div")(137,"i"),e(138,"Value: "),i(),t(139,"code"),e(140,"visible: showDots"),i()(),t(141,"div"),e(142,"toggleable dots via an external variable"),i()()()()()()()),r&2&&(n(13),m(o.autoPlay?"disable autoplay":"enable autoplay"),n(4),m(o.showArrows?"Hide Arrows":"Show Arrows"),n(4),m(o.showDots?"Hide Dots":"Show Dots"),n(2),l("id",108)("images",o.images)("config",o.getLibConfig(o.autoPlay,o.showArrows,o.showDots)),n(9),l("content",o.codeHtml)("language","html"),n(4),l("content",o.codeTypescript)("language","typescript"))},dependencies:[w,v,f],encapsulation:2})}};export{E as CarouselFeaturesDisablesComponent};

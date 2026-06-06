import {o}from'./chunk-C8CaFLi6.js';import {$ as $n,f as fn,v as vn,T as Tn}from'./chunk-C-_qsOA0.js';import {y,m,r,U as Uv,g as ja,a as Uo,b as sI,e as ec,F as Ff,q as qf,G as Gm,c as ap,L as Lf}from'./main-B6H63E46.js';var E=class c{constructor(){this.uiService=y(m);this.titleService=y(r);this.images=[...o];this.configHtml=$n;this.configTs=fn;this.autoPlay=true;this.showArrows=true;this.showDots=true;this.titleService.titleEvent.emit("Examples - Carousel disable features"),this.codeHtml=`  <p>Autoplay: <button class="btn btn-primary" (click)="onChangeAutoPlay()">{{autoPlay ? 'disable autoplay' : 'enable autoplay'}}</button></p>
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
  }`;}getLibConfig(d,r,o){return {carouselDotsConfig:{visible:o},carouselPlayConfig:{autoPlay:d,interval:3e3,pauseOnHover:true},carouselConfig:{maxWidth:"100%",maxHeight:"400px",showArrows:r,objectFit:"cover",keyboardEnable:true,modalGalleryEnable:false}}}onChangeAutoPlay(){this.autoPlay=!this.autoPlay;}onChangeShowArrows(){this.showArrows=!this.showArrows;}onChangeShowDots(){this.showDots=!this.showDots;}ngOnInit(){this.metaData();}metaData(){this.uiService.setMetaData({title:"Carousel disable features"});}static{this.\u0275fac=function(r){return new(r||c)};}static{this.\u0275cmp=Uv({type:c,selectors:[["app-carousel-features-disables-page"]],decls:143,vars:10,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary",3,"click"],[3,"id","images","config"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(r,o){r&1&&(Uo(0,"div",0)(1,"h2",1)(2,"a",2),sI(3,"Carousel disable features"),ec()(),Uo(4,"p"),sI(5,"Carousel disable features demo without previews."),ec(),Ff(6,"br"),Uo(7,"h3"),sI(8,"Live Demo"),ec(),Ff(9,"br"),Uo(10,"p"),sI(11,"Autoplay: "),Uo(12,"button",3),qf("click",function(){return o.onChangeAutoPlay()}),sI(13),ec()(),Uo(14,"p"),sI(15,"Show Arrows: "),Uo(16,"button",3),qf("click",function(){return o.onChangeShowArrows()}),sI(17),ec()(),Uo(18,"p"),sI(19,"Show Dots: "),Uo(20,"button",3),qf("click",function(){return o.onChangeShowDots()}),sI(21),ec()(),Ff(22,"br")(23,"ks-carousel",4)(24,"br")(25,"br"),Uo(26,"section")(27,"h3"),sI(28,"Code"),ec(),Ff(29,"br"),Uo(30,"h4"),sI(31,"Template"),ec(),Ff(32,"ks-codemirror",5)(33,"br"),Uo(34,"h4"),sI(35,"Typescript"),ec(),Ff(36,"ks-codemirror",5),ec(),Ff(37,"br")(38,"br"),Uo(39,"section")(40,"h3"),sI(41,"Details"),ec(),Ff(42,"br"),Uo(43,"table",6)(44,"thead")(45,"tr")(46,"th"),sI(47,"Input (.html)"),ec(),Uo(48,"th"),sI(49,"Value (.ts)"),ec()()(),Uo(50,"tbody")(51,"tr")(52,"td")(53,"code"),sI(54,"id"),ec()(),Uo(55,"td")(56,"div")(57,"i"),sI(58,"Value: "),ec(),Uo(59,"code"),sI(60,"NUMERIC UNIQUE ID"),ec()(),Uo(61,"div")(62,"b",7),sI(63,"Unique id"),ec()()()(),Uo(64,"tr")(65,"td")(66,"code"),sI(67,"images"),ec()(),Uo(68,"td")(69,"div")(70,"i"),sI(71,"Value: "),ec(),Uo(72,"code"),sI(73,"Image[]"),ec()(),Uo(74,"div")(75,"b",7),sI(76,"Array of "),Uo(77,"code"),sI(78,"Image"),ec(),sI(79," objects"),ec()()()(),Uo(80,"tr")(81,"td")(82,"code"),sI(83,"config"),ec()(),Uo(84,"td")(85,"div")(86,"i"),sI(87,"Value: "),ec(),Uo(88,"code"),sI(89,"CarouselLibConfig"),ec()(),Uo(90,"div")(91,"b",7)(92,"code"),sI(93,"CarouselLibConfig"),ec(),sI(94," object to config the library. See below."),ec()()()()()()(),Uo(95,"section")(96,"h4"),sI(97,"CarouselLibConfig"),ec(),Ff(98,"br"),Uo(99,"table",6)(100,"thead")(101,"tr")(102,"th"),sI(103,"Input"),ec(),Uo(104,"th"),sI(105,"Value"),ec()()(),Uo(106,"tbody")(107,"tr")(108,"td")(109,"code"),sI(110,"carouselConfig"),ec()(),Uo(111,"td")(112,"div")(113,"i"),sI(114,"Value: "),ec(),Uo(115,"code"),sI(116,"{ maxWidth: '100%', maxHeight: '400px', showArrows: showArrows, objectFit: 'cover', keyboardEnable: true, modalGalleryEnable: false }"),ec()(),Uo(117,"div"),sI(118,"Full width carousel with height 400px, image cover, toggleable arrows via an external variable, keyboard navigation, but without modal gallery "),ec()()(),Uo(119,"tr")(120,"td")(121,"code"),sI(122,"carouselPlayConfig"),ec()(),Uo(123,"td")(124,"div")(125,"i"),sI(126,"Value: "),ec(),Uo(127,"code"),sI(128,"{ autoPlay: autoPlay, interval: 3000, pauseOnHover: true }"),ec()(),Uo(129,"div"),sI(130,"toggleable autoPlay via an external variable, pauseOnHover is enabled and there are 3000mx of delay"),ec()()(),Uo(131,"tr")(132,"td")(133,"code"),sI(134,"carouselDotsConfig"),ec()(),Uo(135,"td")(136,"div")(137,"i"),sI(138,"Value: "),ec(),Uo(139,"code"),sI(140,"visible: showDots"),ec()(),Uo(141,"div"),sI(142,"toggleable dots via an external variable"),ec()()()()()()()),r&2&&(Gm(13),ap(o.autoPlay?"disable autoplay":"enable autoplay"),Gm(4),ap(o.showArrows?"Hide Arrows":"Show Arrows"),Gm(4),ap(o.showDots?"Hide Dots":"Show Dots"),Gm(2),Lf("id",108)("images",o.images)("config",o.getLibConfig(o.autoPlay,o.showArrows,o.showDots)),Gm(9),Lf("content",o.codeHtml)("language",o.configHtml),Gm(4),Lf("content",o.codeTypescript)("language",o.configTs));},dependencies:[ja,vn,Tn],encapsulation:2,changeDetection:1});}};
export{E as CarouselFeaturesDisablesComponent};
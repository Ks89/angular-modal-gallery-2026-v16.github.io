import {m as m$1}from'./chunk-C8CaFLi6.js';import {$ as $n,f as fn,v as vn,T as Tn}from'./chunk-C-_qsOA0.js';import {y,m,r,U as Uv,g as ja,a as Uo,b as sI,e as ec,F as Ff,G as Gm,L as Lf}from'./main-B6H63E46.js';var E=class o{constructor(){this.uiService=y(m);this.titleService=y(r);this.images=[...m$1];this.configHtml=$n;this.configTs=fn;this.titleService.titleEvent.emit("Examples - Carousel lcp"),this.codeHtml='  <ks-carousel [id]="110" [images]="images"></ks-carousel>',this.codeTypescript=`  images: Image[]; // init this array with your images
/*
  image would be like:
    new Image(
      0,
      {
        img: "/assets/images/carousel/milan-pegasus-gallery-statue.jpg",
        description: "Description 1",
        sources: [
          {
            media: "(max-width: 480px)",
            srcset:
              "/assets/images/carousel/milan-pegasus-gallery-statue-480w.jpg",
          },
          {
            media: "(max-width: 768px)",
            srcset:
              "/assets/images/carousel/milan-pegasus-gallery-statue-768w.jpg",
          },
          {
            media: "(max-width: 1024px)",
            srcset:
              "/assets/images/carousel/milan-pegasus-gallery-statue-1024w.jpg",
          },
        ],
      },
      {
        img: "/assets/images/carousel/thumbs/t-milan-pegasus-gallery-statue.jpg",
        title: "First image title",
        alt: "First image alt",
        ariaLabel: "First image aria-label",
      }
    )
*/
      `;}ngOnInit(){this.metaData();}metaData(){this.uiService.setMetaData({title:"Carousel lcp"});}static{this.\u0275fac=function(r){return new(r||o)};}static{this.\u0275cmp=Uv({type:o,selectors:[["app-carousel-lcp-page"]],decls:70,vars:6,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],["href","https://web.dev/lcp/"],[3,"id","images"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(r,n){r&1&&(Uo(0,"div",0)(1,"h2",1)(2,"a",2),sI(3,"Carousel lcp"),ec()(),Uo(4,"p"),sI(5,"Carousel LCP demo. Largest Contentful Paint (LCP) is an important metric for measuring perceived load speed, because it marks the point in the page load timeline when the page's main content has likely loaded. For further information please refer to "),Uo(6,"a",3),sI(7,"web.dev"),ec(),sI(8,". "),ec(),Ff(9,"br"),Uo(10,"h3"),sI(11,"Live Demo"),ec(),Ff(12,"br")(13,"ks-carousel",4)(14,"br")(15,"br"),Uo(16,"section")(17,"h3"),sI(18,"Code"),ec(),Ff(19,"br"),Uo(20,"h4"),sI(21,"Template"),ec(),Ff(22,"ks-codemirror",5)(23,"br"),Uo(24,"h4"),sI(25,"Typescript"),ec(),Ff(26,"ks-codemirror",5),ec(),Ff(27,"br")(28,"br"),Uo(29,"section")(30,"h3"),sI(31,"Details"),ec(),Ff(32,"br"),Uo(33,"table",6)(34,"thead")(35,"tr")(36,"th"),sI(37,"Input (.html)"),ec(),Uo(38,"th"),sI(39,"Value (.ts)"),ec()()(),Uo(40,"tbody")(41,"tr")(42,"td")(43,"code"),sI(44,"id"),ec()(),Uo(45,"td")(46,"div")(47,"i"),sI(48,"Value: "),ec(),Uo(49,"code"),sI(50,"NUMERIC UNIQUE ID"),ec()(),Uo(51,"div")(52,"b",7),sI(53,"Unique id"),ec()()()(),Uo(54,"tr")(55,"td")(56,"code"),sI(57,"images"),ec()(),Uo(58,"td")(59,"div")(60,"i"),sI(61,"Value: "),ec(),Uo(62,"code"),sI(63,"Image[]"),ec()(),Uo(64,"div")(65,"b",7),sI(66,"Array of "),Uo(67,"code"),sI(68,"Image"),ec(),sI(69," objects"),ec()()()()()()()()),r&2&&(Gm(13),Lf("id",110)("images",n.images),Gm(9),Lf("content",n.codeHtml)("language",n.configHtml),Gm(4),Lf("content",n.codeTypescript)("language",n.configTs));},dependencies:[ja,vn,Tn],encapsulation:2,changeDetection:1});}};
export{E as CarouselLcpComponent};
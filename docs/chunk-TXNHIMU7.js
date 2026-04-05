import{d as u}from"./chunk-5XDJJ2G4.js";import{a as h,b,c as f,d as x}from"./chunk-ZED5APBM.js";import"./chunk-R2PTQT2U.js";import{k as g}from"./chunk-5OGKUYSB.js";import"./chunk-UMM7A7ZK.js";import{a as p}from"./chunk-7KJL6RHT.js";import{a as d}from"./chunk-NO4W32D5.js";import"./chunk-VSHMVBPY.js";import{La as r,Rb as e,S as s,Za as c,rb as l,sb as i,tb as t,ub as a}from"./chunk-VDWMVV4I.js";var S=class o{constructor(){this.uiService=s(p);this.titleService=s(d);this.images=[...u];this.configHtml=b;this.configTs=h;this.titleService.titleEvent.emit("Examples - Carousel lcp"),this.codeHtml='  <ks-carousel [id]="110" [images]="images"></ks-carousel>',this.codeTypescript=`  images: Image[]; // init this array with your images
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
      `}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Carousel lcp"})}static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275cmp=c({type:o,selectors:[["app-carousel-lcp-page"]],decls:70,vars:6,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],["href","https://web.dev/lcp/"],[3,"id","images"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(n,m){n&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Carousel lcp"),t()(),i(4,"p"),e(5,"Carousel LCP demo. Largest Contentful Paint (LCP) is an important metric for measuring perceived load speed, because it marks the point in the page load timeline when the page's main content has likely loaded. For further information please refer to "),i(6,"a",3),e(7,"web.dev"),t(),e(8,". "),t(),a(9,"br"),i(10,"h3"),e(11,"Live Demo"),t(),a(12,"br")(13,"ks-carousel",4)(14,"br")(15,"br"),i(16,"section")(17,"h3"),e(18,"Code"),t(),a(19,"br"),i(20,"h4"),e(21,"Template"),t(),a(22,"ks-codemirror",5)(23,"br"),i(24,"h4"),e(25,"Typescript"),t(),a(26,"ks-codemirror",5),t(),a(27,"br")(28,"br"),i(29,"section")(30,"h3"),e(31,"Details"),t(),a(32,"br"),i(33,"table",6)(34,"thead")(35,"tr")(36,"th"),e(37,"Input (.html)"),t(),i(38,"th"),e(39,"Value (.ts)"),t()()(),i(40,"tbody")(41,"tr")(42,"td")(43,"code"),e(44,"id"),t()(),i(45,"td")(46,"div")(47,"i"),e(48,"Value: "),t(),i(49,"code"),e(50,"NUMERIC UNIQUE ID"),t()(),i(51,"div")(52,"b",7),e(53,"Unique id"),t()()()(),i(54,"tr")(55,"td")(56,"code"),e(57,"images"),t()(),i(58,"td")(59,"div")(60,"i"),e(61,"Value: "),t(),i(62,"code"),e(63,"Image[]"),t()(),i(64,"div")(65,"b",7),e(66,"Array of "),i(67,"code"),e(68,"Image"),t(),e(69," objects"),t()()()()()()()()),n&2&&(r(13),l("id",110)("images",m.images),r(9),l("content",m.codeHtml)("language","html"),r(4),l("content",m.codeTypescript)("language","typescript"))},dependencies:[g,x,f],encapsulation:2})}};export{S as CarouselLcpComponent};

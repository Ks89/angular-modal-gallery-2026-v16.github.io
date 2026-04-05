import{a as S}from"./chunk-5XDJJ2G4.js";import{a as b,b as E,c as x,d as y}from"./chunk-ZED5APBM.js";import"./chunk-R2PTQT2U.js";import{e as u,m as v}from"./chunk-5OGKUYSB.js";import"./chunk-UMM7A7ZK.js";import{a as p}from"./chunk-7KJL6RHT.js";import{a as f}from"./chunk-NO4W32D5.js";import"./chunk-VSHMVBPY.js";import{Db as g,La as m,Rb as t,S as r,Za as c,rb as d,sb as i,tb as e,ub as n}from"./chunk-VDWMVV4I.js";var C=class s{constructor(){this.uiService=r(p);this.titleService=r(f);this.modalGalleryService=r(v);this.images=[...S];this.configHtml=E;this.configTs=b;this.titleService.titleEvent.emit("Examples - Only current image"),this.codeHtml='<button (click)="openModal(332, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        previewConfig: {
          visible: false
        },
        dotsConfig: {
          visible: false
        },
        slideConfig: {
          infinite: false,
          sidePreviews: {
            show: false
          }
        },
        buttonsConfig: {
          visible: false,
          strategy: ButtonsStrategy.DEFAULT
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{previewConfig:{visible:!1},dotsConfig:{visible:!1},slideConfig:{infinite:!1,sidePreviews:{show:!1}},buttonsConfig:{visible:!1,strategy:u.DEFAULT}}})}metaData(){this.uiService.setMetaData({title:"Demo only current"})}static{this.\u0275fac=function(l){return new(l||s)}}static{this.\u0275cmp=c({type:s,selectors:[["app-only-current-img-page"]],decls:158,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),t(3,"Only current image"),e()(),i(4,"p"),t(5,"Modal gallery with only the current image."),e(),n(6,"br"),i(7,"h3"),t(8,"Live Demo"),e(),n(9,"br"),i(10,"button",3),g("click",function(){return a.openModal(332,0)}),t(11,"Click to open modal gallery id=1 at index=0"),e(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),t(16,"Code"),e(),n(17,"br"),i(18,"h4"),t(19,"Template"),e(),n(20,"ks-codemirror",4)(21,"br"),i(22,"h4"),t(23,"Typescript"),e(),n(24,"ks-codemirror",4),e(),n(25,"br")(26,"br"),i(27,"section")(28,"h3"),t(29,"Service inputs"),e(),n(30,"br"),i(31,"table",5)(32,"thead")(33,"tr")(34,"th"),t(35,"Input"),e(),i(36,"th"),t(37,"Value"),e()()(),i(38,"tbody")(39,"tr")(40,"td")(41,"code"),t(42,"id"),e()(),i(43,"td")(44,"div")(45,"i"),t(46,"Value: "),e(),i(47,"code"),t(48,"NUMERIC UNIQUE ID"),e()(),i(49,"div")(50,"b",6),t(51,"Unique id"),e()()()(),i(52,"tr")(53,"td")(54,"code"),t(55,"images"),e()(),i(56,"td")(57,"div")(58,"i"),t(59,"Value: "),e(),i(60,"code"),t(61,"Image[]"),e()(),i(62,"div")(63,"b",6),t(64,"Array of "),i(65,"code"),t(66,"Image"),e(),t(67," objects"),e()()()(),i(68,"tr")(69,"td")(70,"code"),t(71,"currentImage"),e()(),i(72,"td")(73,"div")(74,"i"),t(75,"Value: "),e(),i(76,"code"),t(77,"Image"),e()(),i(78,"div")(79,"b",6)(80,"code"),t(81,"Image"),e(),t(82," object to show"),e()()()(),i(83,"tr")(84,"td")(85,"code"),t(86,"libConfig"),e()(),i(87,"td")(88,"div")(89,"i"),t(90,"Value: "),e(),i(91,"code"),t(92,"ModalLibConfig"),e()(),i(93,"div")(94,"b",6)(95,"code"),t(96,"ModalLibConfig"),e(),t(97," object to config the library. See below."),e()()()()()()(),i(98,"section")(99,"h4"),t(100,"ModalLibConfig"),e(),n(101,"br"),i(102,"table",5)(103,"thead")(104,"tr")(105,"th"),t(106,"Input"),e(),i(107,"th"),t(108,"Value"),e()()(),i(109,"tbody")(110,"tr")(111,"td")(112,"code"),t(113,"buttonsConfig"),e()(),i(114,"td")(115,"div")(116,"i"),t(117,"Value: "),e(),i(118,"code"),t(119,"{visible: false, strategy: 1}"),e()(),i(120,"div"),t(121,"It will hide all buttons"),e()()(),i(122,"tr")(123,"td")(124,"code"),t(125,"dotsConfig"),e()(),i(126,"td")(127,"div")(128,"i"),t(129,"Value: "),e(),i(130,"code"),t(131,"{visible: false}"),e()(),i(132,"div"),t(133,"It will hide dots below the current modal image"),e()()(),i(134,"tr")(135,"td")(136,"code"),t(137,"previewConfig"),e()(),i(138,"td")(139,"div")(140,"i"),t(141,"Value: "),e(),i(142,"code"),t(143,"{visible: false}"),e()(),i(144,"div"),t(145,"It will hide previews below the current modal image"),e()()(),i(146,"tr")(147,"td")(148,"code"),t(149,"slideConfig"),e()(),i(150,"td")(151,"div")(152,"i"),t(153,"Value: "),e(),i(154,"code"),t(155,"{visible: false, sidePreviews: {show: false}}"),e()(),i(156,"div"),t(157,"Hide side previews and let infinite sliding to the default value (false)"),e()()()()()()()),l&2&&(m(20),d("content",a.codeHtml)("language","html"),m(4),d("content",a.codeTypescript)("language","typescript"))},dependencies:[y,x],encapsulation:2})}};export{C as OnlyCurrentImgComponent};

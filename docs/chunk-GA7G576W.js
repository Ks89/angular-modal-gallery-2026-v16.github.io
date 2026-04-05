import{a as P}from"./chunk-5XDJJ2G4.js";import{a as w,b as x,c as v,d as E}from"./chunk-ZED5APBM.js";import"./chunk-R2PTQT2U.js";import{g as c,h as S,i as s,l as C,m as G}from"./chunk-5OGKUYSB.js";import"./chunk-UMM7A7ZK.js";import{a as b}from"./chunk-7KJL6RHT.js";import{a as h}from"./chunk-NO4W32D5.js";import"./chunk-VSHMVBPY.js";import{Db as g,La as r,Rb as t,S as y,Za as f,rb as o,sb as i,tb as e,ub as n}from"./chunk-VDWMVV4I.js";var k=class u{constructor(){this.uiService=y(b);this.modalGalleryService=y(G);this.titleService=y(h);this.images=[...P];this.configHtml=x;this.configTs=w;this.libConfigPlainGalleryRow={plainGalleryConfig:{strategy:s.ROW,layout:new c({width:"80px",height:"80px"},{length:2,wrap:!0},"flex-start")}};this.libConfigPlainGalleryRowSpaceAround={plainGalleryConfig:{strategy:s.ROW,layout:new c({width:"50px",height:"50px"},{length:2,wrap:!0},"space-around")}};this.libConfigPlainGalleryColumn={plainGalleryConfig:{strategy:s.COLUMN,layout:new c({width:"50px",height:"50px"},{length:3,wrap:!0},"flex-start")}};this.libConfigPlainGalleryGrid={plainGalleryConfig:{strategy:s.GRID,layout:new S({width:"80px",height:"80px"},{length:3,wrap:!0})}};this.titleService.titleEvent.emit("Examples - Plain gallery layouts"),this.codeHtml=`<section>
    <h4>Plain gallery layout (limit 2) and custom size</h4>
    <br>
    <ks-plain-gallery [id]="200" [images]="images"
                      [config]="libConfigPlainGalleryRow"
                      (clickImage)="onShow(200, $event)"></ks-plain-gallery>
  </section>
  <section>
    <h4>Plain gallery row layout space around (limit 2)</h4>
    <br>
    <ks-plain-gallery [id]="201" [images]="images"
                      [config]="libConfigPlainGalleryRowSpaceAround"
                      (clickImage)="onShow(201, $event)"></ks-plain-gallery>
  </section>
  <section>
    <h4>Plain gallery column layout (limit 3)</h4>
    <br>
    <ks-plain-gallery [id]="202" [images]="images"
                      [config]="libConfigPlainGalleryColumn"
                      (clickImage)="onShow(202, $event)"></ks-plain-gallery>
  </section>
  <section>
    <h4>Plain gallery grid layout and custom size</h4>
    <br>
    <ks-plain-gallery [id]="203" [images]="images"
                      [config]="libConfigPlainGalleryGrid"
                      (clickImage)="onShow(203, $event)"></ks-plain-gallery>
  </section>`,this.codeTypescript=`
  constructor(private modalGalleryService: ModalGalleryService) {}

  libConfigPlainGalleryRow: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.ROW,
      layout: new LineLayout({ width: '80px', height: '80px' }, { length: 2, wrap: true }, 'flex-start')
    }
  };
  libConfigPlainGalleryRowSpaceAround: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.ROW,
      layout: new LineLayout({width: '50px', height: '50px'}, {length: 2, wrap: true}, 'space-around')
    }
  };
  libConfigPlainGalleryColumn: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.COLUMN,
      layout: new LineLayout({ width: '50px', height: '50px' }, { length: 3, wrap: true }, 'flex-start')
    }
  };
  libConfigPlainGalleryGrid: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.GRID,
      layout: new GridLayout({ width: '80px', height: '80px' }, { length: 3, wrap: true })
    }
  };

  onShow(id: number, index: number, images: Image[] = this.images): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index]
    }) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}onShow(p,m,l=this.images){let d=this.modalGalleryService.open({id:p,images:l,currentImage:l[m]})}metaData(){this.uiService.setMetaData({title:"Demo plain layouts"})}static{this.\u0275fac=function(m){return new(m||u)}}static{this.\u0275cmp=f({type:u,selectors:[["app-plain-gallery-layouts-page"]],decls:124,vars:16,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[3,"clickImage","id","images","config"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(m,l){m&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),t(3,"Plain gallery layouts"),e()(),i(4,"p"),t(5,"Plain gallery with different layouts."),e(),n(6,"br"),i(7,"h3"),t(8,"Live Demo"),e(),n(9,"br"),i(10,"section")(11,"h4"),t(12,"Plain gallery layout (limit 2) and custom size"),e(),n(13,"br"),i(14,"ks-plain-gallery",3),g("clickImage",function(a){return l.onShow(200,a)}),e()(),i(15,"section")(16,"h4"),t(17,"Plain gallery row layout space around (limit 2)"),e(),n(18,"br"),i(19,"ks-plain-gallery",3),g("clickImage",function(a){return l.onShow(201,a)}),e()(),i(20,"section")(21,"h4"),t(22,"Plain gallery column layout (limit 3)"),e(),n(23,"br"),i(24,"ks-plain-gallery",3),g("clickImage",function(a){return l.onShow(202,a)}),e()(),i(25,"section")(26,"h4"),t(27,"Plain gallery grid layout and custom size"),e(),n(28,"br"),i(29,"ks-plain-gallery",3),g("clickImage",function(a){return l.onShow(203,a)}),e()(),n(30,"br")(31,"br"),i(32,"section")(33,"h3"),t(34,"Code"),e(),n(35,"br"),i(36,"h4"),t(37,"Template"),e(),n(38,"ks-codemirror",4)(39,"br"),i(40,"h4"),t(41,"Typescript"),e(),n(42,"ks-codemirror",4),e(),n(43,"br")(44,"br"),i(45,"section")(46,"h3"),t(47,"Details"),e(),n(48,"br"),i(49,"table",5)(50,"thead")(51,"tr")(52,"th"),t(53,"Input (.html)"),e(),i(54,"th"),t(55,"Value (.ts)"),e()()(),i(56,"tbody")(57,"tr")(58,"td")(59,"code"),t(60,"id"),e()(),i(61,"td")(62,"div")(63,"i"),t(64,"Value: "),e(),i(65,"code"),t(66,"NUMERIC UNIQUE ID"),e()(),i(67,"div")(68,"b",6),t(69,"Unique id"),e()()()(),i(70,"tr")(71,"td")(72,"code"),t(73,"images"),e()(),i(74,"td")(75,"div")(76,"i"),t(77,"Value: "),e(),i(78,"code"),t(79,"Image[]"),e()(),i(80,"div")(81,"b",6),t(82,"Array of "),i(83,"code"),t(84,"Image"),e(),t(85," objects"),e()()()(),i(86,"tr")(87,"td")(88,"code"),t(89,"config"),e()(),i(90,"td")(91,"div")(92,"i"),t(93,"Value: "),e(),i(94,"code"),t(95,"PlainLibConfig"),e()(),i(96,"div")(97,"b",6)(98,"code"),t(99,"PlainLibConfig"),e(),t(100," object to config the library. See below."),e()()()()()()(),i(101,"section")(102,"h4"),t(103,"PlainLibConfig"),e(),n(104,"br"),i(105,"table",5)(106,"thead")(107,"tr")(108,"th"),t(109,"Input"),e(),i(110,"th"),t(111,"Value"),e()()(),i(112,"tbody")(113,"tr")(114,"td")(115,"code"),t(116,"plainGalleryConfig"),e()(),i(117,"td")(118,"div")(119,"i"),t(120,"Value: "),e(),t(121,"see above"),e(),i(122,"div"),t(123,"Plain gallery with different layouts"),e()()()()()()()),m&2&&(r(14),o("id",200)("images",l.images)("config",l.libConfigPlainGalleryRow),r(5),o("id",201)("images",l.images)("config",l.libConfigPlainGalleryRowSpaceAround),r(5),o("id",202)("images",l.images)("config",l.libConfigPlainGalleryColumn),r(5),o("id",203)("images",l.images)("config",l.libConfigPlainGalleryGrid),r(9),o("content",l.codeHtml)("language","html"),r(4),o("content",l.codeTypescript)("language","typescript"))},dependencies:[C,E,v],encapsulation:2})}};export{k as PlainGalleryLayoutsComponent};

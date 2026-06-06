import {g}from'./chunk-C8CaFLi6.js';import {$ as $n,f as fn,v as vn,T as Tn}from'./chunk-C-_qsOA0.js';import {y,m,u as ur,r,J as Ke,Q as Se,T as St,U as Uv,R as Ra,a as Uo,b as sI,e as ec,F as Ff,q as qf,G as Gm,L as Lf}from'./main-B6H63E46.js';var k=class u{constructor(){this.uiService=y(m);this.modalGalleryService=y(ur);this.titleService=y(r);this.images=[...g];this.configHtml=$n;this.configTs=fn;this.libConfigPlainGalleryRow={plainGalleryConfig:{strategy:Se.ROW,layout:new Ke({width:"80px",height:"80px"},{length:2,wrap:true},"flex-start")}};this.libConfigPlainGalleryRowSpaceAround={plainGalleryConfig:{strategy:Se.ROW,layout:new Ke({width:"50px",height:"50px"},{length:2,wrap:true},"space-around")}};this.libConfigPlainGalleryColumn={plainGalleryConfig:{strategy:Se.COLUMN,layout:new Ke({width:"50px",height:"50px"},{length:3,wrap:true},"flex-start")}};this.libConfigPlainGalleryGrid={plainGalleryConfig:{strategy:Se.GRID,layout:new St({width:"80px",height:"80px"},{length:3,wrap:true})}};this.titleService.titleEvent.emit("Examples - Plain gallery layouts"),this.codeHtml=`<section>
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
  }`;}ngOnInit(){this.metaData();}onShow(p,m,l=this.images){this.modalGalleryService.open({id:p,images:l,currentImage:l[m]});}metaData(){this.uiService.setMetaData({title:"Demo plain layouts"});}static{this.\u0275fac=function(m){return new(m||u)};}static{this.\u0275cmp=Uv({type:u,selectors:[["app-plain-gallery-layouts-page"]],decls:124,vars:16,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[3,"clickImage","id","images","config"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(m,l){m&1&&(Uo(0,"div",0)(1,"h2",1)(2,"a",2),sI(3,"Plain gallery layouts"),ec()(),Uo(4,"p"),sI(5,"Plain gallery with different layouts."),ec(),Ff(6,"br"),Uo(7,"h3"),sI(8,"Live Demo"),ec(),Ff(9,"br"),Uo(10,"section")(11,"h4"),sI(12,"Plain gallery layout (limit 2) and custom size"),ec(),Ff(13,"br"),Uo(14,"ks-plain-gallery",3),qf("clickImage",function(a){return l.onShow(200,a)}),ec()(),Uo(15,"section")(16,"h4"),sI(17,"Plain gallery row layout space around (limit 2)"),ec(),Ff(18,"br"),Uo(19,"ks-plain-gallery",3),qf("clickImage",function(a){return l.onShow(201,a)}),ec()(),Uo(20,"section")(21,"h4"),sI(22,"Plain gallery column layout (limit 3)"),ec(),Ff(23,"br"),Uo(24,"ks-plain-gallery",3),qf("clickImage",function(a){return l.onShow(202,a)}),ec()(),Uo(25,"section")(26,"h4"),sI(27,"Plain gallery grid layout and custom size"),ec(),Ff(28,"br"),Uo(29,"ks-plain-gallery",3),qf("clickImage",function(a){return l.onShow(203,a)}),ec()(),Ff(30,"br")(31,"br"),Uo(32,"section")(33,"h3"),sI(34,"Code"),ec(),Ff(35,"br"),Uo(36,"h4"),sI(37,"Template"),ec(),Ff(38,"ks-codemirror",4)(39,"br"),Uo(40,"h4"),sI(41,"Typescript"),ec(),Ff(42,"ks-codemirror",4),ec(),Ff(43,"br")(44,"br"),Uo(45,"section")(46,"h3"),sI(47,"Details"),ec(),Ff(48,"br"),Uo(49,"table",5)(50,"thead")(51,"tr")(52,"th"),sI(53,"Input (.html)"),ec(),Uo(54,"th"),sI(55,"Value (.ts)"),ec()()(),Uo(56,"tbody")(57,"tr")(58,"td")(59,"code"),sI(60,"id"),ec()(),Uo(61,"td")(62,"div")(63,"i"),sI(64,"Value: "),ec(),Uo(65,"code"),sI(66,"NUMERIC UNIQUE ID"),ec()(),Uo(67,"div")(68,"b",6),sI(69,"Unique id"),ec()()()(),Uo(70,"tr")(71,"td")(72,"code"),sI(73,"images"),ec()(),Uo(74,"td")(75,"div")(76,"i"),sI(77,"Value: "),ec(),Uo(78,"code"),sI(79,"Image[]"),ec()(),Uo(80,"div")(81,"b",6),sI(82,"Array of "),Uo(83,"code"),sI(84,"Image"),ec(),sI(85," objects"),ec()()()(),Uo(86,"tr")(87,"td")(88,"code"),sI(89,"config"),ec()(),Uo(90,"td")(91,"div")(92,"i"),sI(93,"Value: "),ec(),Uo(94,"code"),sI(95,"PlainLibConfig"),ec()(),Uo(96,"div")(97,"b",6)(98,"code"),sI(99,"PlainLibConfig"),ec(),sI(100," object to config the library. See below."),ec()()()()()()(),Uo(101,"section")(102,"h4"),sI(103,"PlainLibConfig"),ec(),Ff(104,"br"),Uo(105,"table",5)(106,"thead")(107,"tr")(108,"th"),sI(109,"Input"),ec(),Uo(110,"th"),sI(111,"Value"),ec()()(),Uo(112,"tbody")(113,"tr")(114,"td")(115,"code"),sI(116,"plainGalleryConfig"),ec()(),Uo(117,"td")(118,"div")(119,"i"),sI(120,"Value: "),ec(),sI(121,"see above"),ec(),Uo(122,"div"),sI(123,"Plain gallery with different layouts"),ec()()()()()()()),m&2&&(Gm(14),Lf("id",200)("images",l.images)("config",l.libConfigPlainGalleryRow),Gm(5),Lf("id",201)("images",l.images)("config",l.libConfigPlainGalleryRowSpaceAround),Gm(5),Lf("id",202)("images",l.images)("config",l.libConfigPlainGalleryColumn),Gm(5),Lf("id",203)("images",l.images)("config",l.libConfigPlainGalleryGrid),Gm(9),Lf("content",l.codeHtml)("language",l.configHtml),Gm(4),Lf("content",l.codeTypescript)("language",l.configTs));},dependencies:[Ra,vn,Tn],encapsulation:2,changeDetection:1});}};
export{k as PlainGalleryLayoutsComponent};
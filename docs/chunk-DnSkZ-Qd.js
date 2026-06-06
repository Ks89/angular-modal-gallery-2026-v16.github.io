import {g}from'./chunk-C8CaFLi6.js';import {$ as $n,f as fn,v as vn,T as Tn}from'./chunk-C-_qsOA0.js';import {y,m,r,u as ur,U as Uv,a as Uo,b as sI,e as ec,F as Ff,q as qf,G as Gm,L as Lf}from'./main-B6H63E46.js';var C=class s{constructor(){this.uiService=y(m);this.titleService=y(r);this.modalGalleryService=y(ur);this.images=[...g];this.configHtml=$n;this.configTs=fn;this.titleService.titleEvent.emit("Examples - Loading spinner types"),this.codeHtml=`
  <p>1. Type STANDARD</p>
  <button (click)="openModal(322, 0, 1)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>2. Type CIRCULAR</p>
  <button (click)="openModal(323, 0, 2)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>3. Type BARS</p>
  <button (click)="openModal(324, 0, 3)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>4. Type DOTS</p>
  <button (click)="openModal(325, 0, 4)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>5. Type CUBE_FLIPPING</p>
  <button (click)="openModal(326, 0, 5)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>6. Type CIRCLES</p>
  <button (click)="openModal(327, 0, 6)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>7. Type EXPLODING_SQUARES</p>
  <button (click)="openModal(328, 0, 7)">Open modal gallery id=1 at index=0</button>
  <br>
  `,this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number, loadingType: LoadingType): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        currentImageConfig: {
          loadingConfig: {
            enable: true,
            type: loadingType
          }
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`;}ngOnInit(){this.metaData();}openModal(d,r,l){this.modalGalleryService.open({id:d,images:this.images,currentImage:this.images[r],libConfig:{currentImageConfig:{loadingConfig:{enable:true,type:l}}}});}metaData(){this.uiService.setMetaData({title:"Demo spinner type"});}static{this.\u0275fac=function(r){return new(r||s)};}static{this.\u0275cmp=Uv({type:s,selectors:[["app-loading-spinner-type-page"]],decls:161,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(r,l){r&1&&(Uo(0,"div",0)(1,"h2",1)(2,"a",2),sI(3,"Loading spinner types"),ec()(),Uo(4,"p"),sI(5,"Modal gallery example with different types of loading spinners."),ec(),Ff(6,"br"),Uo(7,"h3"),sI(8,"Live Demos"),ec(),Ff(9,"br"),Uo(10,"p"),sI(11,"1. Type STANDARD"),ec(),Uo(12,"button",3),qf("click",function(){return l.openModal(322,0,1)}),sI(13,"Open modal gallery id=1 at index=0"),ec(),Ff(14,"br")(15,"br"),Uo(16,"p"),sI(17,"2. Type CIRCULAR"),ec(),Uo(18,"button",3),qf("click",function(){return l.openModal(323,0,2)}),sI(19,"Open modal gallery id=1 at index=0"),ec(),Ff(20,"br")(21,"br"),Uo(22,"p"),sI(23,"3. Type BARS"),ec(),Uo(24,"button",3),qf("click",function(){return l.openModal(324,0,3)}),sI(25,"Open modal gallery id=1 at index=0"),ec(),Ff(26,"br")(27,"br"),Uo(28,"p"),sI(29,"4. Type DOTS"),ec(),Uo(30,"button",3),qf("click",function(){return l.openModal(325,0,4)}),sI(31,"Open modal gallery id=1 at index=0"),ec(),Ff(32,"br")(33,"br"),Uo(34,"p"),sI(35,"5. Type CUBE_FLIPPING"),ec(),Uo(36,"button",3),qf("click",function(){return l.openModal(326,0,5)}),sI(37,"Open modal gallery id=1 at index=0"),ec(),Ff(38,"br")(39,"br"),Uo(40,"p"),sI(41,"6. Type CIRCLES"),ec(),Uo(42,"button",3),qf("click",function(){return l.openModal(327,0,6)}),sI(43,"Open modal gallery id=1 at index=0"),ec(),Ff(44,"br")(45,"br"),Uo(46,"p"),sI(47,"7. Type EXPLODING_SQUARES"),ec(),Uo(48,"button",3),qf("click",function(){return l.openModal(328,0,7)}),sI(49,"Open modal gallery id=1 at index=0"),ec(),Ff(50,"br")(51,"br"),Uo(52,"section")(53,"h3"),sI(54,"Code"),ec(),Ff(55,"br"),Uo(56,"h4"),sI(57,"Template"),ec(),Ff(58,"ks-codemirror",4)(59,"br"),Uo(60,"h4"),sI(61,"Typescript"),ec(),Ff(62,"ks-codemirror",4),ec(),Ff(63,"br")(64,"br"),Uo(65,"section")(66,"h3"),sI(67,"Service inputs"),ec(),Ff(68,"br"),Uo(69,"table",5)(70,"thead")(71,"tr")(72,"th"),sI(73,"Input"),ec(),Uo(74,"th"),sI(75,"Value"),ec()()(),Uo(76,"tbody")(77,"tr")(78,"td")(79,"code"),sI(80,"id"),ec()(),Uo(81,"td")(82,"div")(83,"i"),sI(84,"Value: "),ec(),Uo(85,"code"),sI(86,"from 1 to 7"),ec(),sI(87," (one for every instance in this example)"),ec(),Uo(88,"div")(89,"b",6),sI(90,"Unique id"),ec()()()(),Uo(91,"tr")(92,"td")(93,"code"),sI(94,"images"),ec()(),Uo(95,"td")(96,"div")(97,"i"),sI(98,"Value: "),ec(),Uo(99,"code"),sI(100,"Image[]"),ec()(),Uo(101,"div")(102,"b",6),sI(103,"Array of "),Uo(104,"code"),sI(105,"Image"),ec(),sI(106," objects"),ec()()()(),Uo(107,"tr")(108,"td")(109,"code"),sI(110,"currentImage"),ec()(),Uo(111,"td")(112,"div")(113,"i"),sI(114,"Value: "),ec(),Uo(115,"code"),sI(116,"Image"),ec()(),Uo(117,"div")(118,"b",6)(119,"code"),sI(120,"Image"),ec(),sI(121," object to show"),ec()()()(),Uo(122,"tr")(123,"td")(124,"code"),sI(125,"libConfig"),ec()(),Uo(126,"td")(127,"div")(128,"i"),sI(129,"Value: "),ec(),Uo(130,"code"),sI(131,"ModalLibConfig"),ec()(),Uo(132,"div")(133,"b",6)(134,"code"),sI(135,"ModalLibConfig"),ec(),sI(136," object to config the library. See below."),ec()()()()()()(),Uo(137,"section")(138,"h4"),sI(139,"ModalLibConfig"),ec(),Ff(140,"br"),Uo(141,"table",5)(142,"thead")(143,"tr")(144,"th"),sI(145,"Input"),ec(),Uo(146,"th"),sI(147,"Value"),ec()()(),Uo(148,"tbody")(149,"tr")(150,"td")(151,"code"),sI(152,"currentImageConfig"),ec()(),Uo(153,"td")(154,"div")(155,"i"),sI(156,"Value: "),ec(),Uo(157,"code"),sI(158,"{ loadingConfig: { enable: true, type: 1 } }"),ec()(),Uo(159,"div"),sI(160,"It will show loading spinners of different types, based on the value of 'type' (number from 1 to 7, also available as LoadingType enum)"),ec()()()()()()()),r&2&&(Gm(58),Lf("content",l.codeHtml)("language",l.configHtml),Gm(4),Lf("content",l.codeTypescript)("language",l.configTs));},dependencies:[vn,Tn],encapsulation:2,changeDetection:1});}};
export{C as LoadingSpinnerTypeComponent};
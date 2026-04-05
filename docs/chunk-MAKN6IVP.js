import{a as S}from"./chunk-5XDJJ2G4.js";import{a as f,b as x,c as E,d as T}from"./chunk-ZED5APBM.js";import"./chunk-R2PTQT2U.js";import{m as u}from"./chunk-5OGKUYSB.js";import"./chunk-UMM7A7ZK.js";import{a as y}from"./chunk-7KJL6RHT.js";import{a as b}from"./chunk-NO4W32D5.js";import"./chunk-VSHMVBPY.js";import{Db as a,La as p,Rb as t,S as m,Za as g,rb as c,sb as n,tb as e,ub as i}from"./chunk-VDWMVV4I.js";var C=class s{constructor(){this.uiService=m(y);this.titleService=m(b);this.modalGalleryService=m(u);this.images=[...S];this.configHtml=x;this.configTs=f;this.titleService.titleEvent.emit("Examples - Loading spinner types"),this.codeHtml=`
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
  }`}ngOnInit(){this.metaData()}openModal(d,r,l){let o=this.modalGalleryService.open({id:d,images:this.images,currentImage:this.images[r],libConfig:{currentImageConfig:{loadingConfig:{enable:!0,type:l}}}})}metaData(){this.uiService.setMetaData({title:"Demo spinner type"})}static{this.\u0275fac=function(r){return new(r||s)}}static{this.\u0275cmp=g({type:s,selectors:[["app-loading-spinner-type-page"]],decls:161,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(r,l){r&1&&(n(0,"div",0)(1,"h2",1)(2,"a",2),t(3,"Loading spinner types"),e()(),n(4,"p"),t(5,"Modal gallery example with different types of loading spinners."),e(),i(6,"br"),n(7,"h3"),t(8,"Live Demos"),e(),i(9,"br"),n(10,"p"),t(11,"1. Type STANDARD"),e(),n(12,"button",3),a("click",function(){return l.openModal(322,0,1)}),t(13,"Open modal gallery id=1 at index=0"),e(),i(14,"br")(15,"br"),n(16,"p"),t(17,"2. Type CIRCULAR"),e(),n(18,"button",3),a("click",function(){return l.openModal(323,0,2)}),t(19,"Open modal gallery id=1 at index=0"),e(),i(20,"br")(21,"br"),n(22,"p"),t(23,"3. Type BARS"),e(),n(24,"button",3),a("click",function(){return l.openModal(324,0,3)}),t(25,"Open modal gallery id=1 at index=0"),e(),i(26,"br")(27,"br"),n(28,"p"),t(29,"4. Type DOTS"),e(),n(30,"button",3),a("click",function(){return l.openModal(325,0,4)}),t(31,"Open modal gallery id=1 at index=0"),e(),i(32,"br")(33,"br"),n(34,"p"),t(35,"5. Type CUBE_FLIPPING"),e(),n(36,"button",3),a("click",function(){return l.openModal(326,0,5)}),t(37,"Open modal gallery id=1 at index=0"),e(),i(38,"br")(39,"br"),n(40,"p"),t(41,"6. Type CIRCLES"),e(),n(42,"button",3),a("click",function(){return l.openModal(327,0,6)}),t(43,"Open modal gallery id=1 at index=0"),e(),i(44,"br")(45,"br"),n(46,"p"),t(47,"7. Type EXPLODING_SQUARES"),e(),n(48,"button",3),a("click",function(){return l.openModal(328,0,7)}),t(49,"Open modal gallery id=1 at index=0"),e(),i(50,"br")(51,"br"),n(52,"section")(53,"h3"),t(54,"Code"),e(),i(55,"br"),n(56,"h4"),t(57,"Template"),e(),i(58,"ks-codemirror",4)(59,"br"),n(60,"h4"),t(61,"Typescript"),e(),i(62,"ks-codemirror",4),e(),i(63,"br")(64,"br"),n(65,"section")(66,"h3"),t(67,"Service inputs"),e(),i(68,"br"),n(69,"table",5)(70,"thead")(71,"tr")(72,"th"),t(73,"Input"),e(),n(74,"th"),t(75,"Value"),e()()(),n(76,"tbody")(77,"tr")(78,"td")(79,"code"),t(80,"id"),e()(),n(81,"td")(82,"div")(83,"i"),t(84,"Value: "),e(),n(85,"code"),t(86,"from 1 to 7"),e(),t(87," (one for every instance in this example)"),e(),n(88,"div")(89,"b",6),t(90,"Unique id"),e()()()(),n(91,"tr")(92,"td")(93,"code"),t(94,"images"),e()(),n(95,"td")(96,"div")(97,"i"),t(98,"Value: "),e(),n(99,"code"),t(100,"Image[]"),e()(),n(101,"div")(102,"b",6),t(103,"Array of "),n(104,"code"),t(105,"Image"),e(),t(106," objects"),e()()()(),n(107,"tr")(108,"td")(109,"code"),t(110,"currentImage"),e()(),n(111,"td")(112,"div")(113,"i"),t(114,"Value: "),e(),n(115,"code"),t(116,"Image"),e()(),n(117,"div")(118,"b",6)(119,"code"),t(120,"Image"),e(),t(121," object to show"),e()()()(),n(122,"tr")(123,"td")(124,"code"),t(125,"libConfig"),e()(),n(126,"td")(127,"div")(128,"i"),t(129,"Value: "),e(),n(130,"code"),t(131,"ModalLibConfig"),e()(),n(132,"div")(133,"b",6)(134,"code"),t(135,"ModalLibConfig"),e(),t(136," object to config the library. See below."),e()()()()()()(),n(137,"section")(138,"h4"),t(139,"ModalLibConfig"),e(),i(140,"br"),n(141,"table",5)(142,"thead")(143,"tr")(144,"th"),t(145,"Input"),e(),n(146,"th"),t(147,"Value"),e()()(),n(148,"tbody")(149,"tr")(150,"td")(151,"code"),t(152,"currentImageConfig"),e()(),n(153,"td")(154,"div")(155,"i"),t(156,"Value: "),e(),n(157,"code"),t(158,"{ loadingConfig: { enable: true, type: 1 } }"),e()(),n(159,"div"),t(160,"It will show loading spinners of different types, based on the value of 'type' (number from 1 to 7, also available as LoadingType enum)"),e()()()()()()()),r&2&&(p(58),c("content",l.codeHtml)("language","html"),p(4),c("content",l.codeTypescript)("language","typescript"))},dependencies:[T,E],encapsulation:2})}};export{C as LoadingSpinnerTypeComponent};

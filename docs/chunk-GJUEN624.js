import{a as M}from"./chunk-SBBMKDSH.js";import{b as k,c as G,d as T,e as R,f as $}from"./chunk-6GULLGYR.js";import"./chunk-3LLG6XAK.js";import{m as E}from"./chunk-NTGHJOJC.js";import"./chunk-UMM7A7ZK.js";import{a as P}from"./chunk-4564DW3Q.js";import{a as b}from"./chunk-NOX7MSRO.js";import"./chunk-PEJK4JWN.js";import{Ab as C,Bb as l,Ea as h,Ia as s,Ob as n,P as g,Qb as v,V as u,W as _,Wa as I,jb as x,kb as y,mb as S,nb as w,ob as p,pb as i,qb as t,rb as m,wb as f}from"./chunk-YABA45OP.js";import"./chunk-MM6P7SRG.js";import"./chunk-QK2PNWNX.js";import"./chunk-W5F55XZK.js";import"./chunk-2VMXMS7J.js";var O=(o,r)=>r.id;function V(o,r){if(o&1){let e=f();i(0,"a",9),C("click",function(){u(e);let c=l(2).$implicit,d=l();return _(d.openImageModalRow(205,c))}),n(1),t()}if(o&2){let e=l(3);s(),v(" +",e.images.length-2-1," more ")}}function D(o,r){if(o&1){let e=f();i(0,"img",10),C("click",function(){u(e);let c=l(2).$implicit,d=l();return _(d.openImageModalRow(205,c))}),t()}if(o&2){let e=l(2).$implicit;p("src",e.plain.img,h)("alt",e.modal.description)}}function U(o,r){if(o&1){let e=f();i(0,"img",10),C("click",function(){u(e);let c=l(2).$implicit,d=l();return _(d.openImageModalRow(205,c))}),t()}if(o&2){let e=l(2).$implicit;p("src",e.modal.img,h)("alt",e.modal.description)}}function H(o,r){if(o&1&&(x(0,V,2,1,"a",7),x(1,D,1,2,"img",8)(2,U,1,2,"img",8)),o&2){let e=l(),a=e.$implicit,c=e.$index;y(c==2?0:-1),s(),y(a.plain&&a.plain.img?1:2)}}function L(o,r){if(o&1&&x(0,H,3,2),o&2){let e=r.$index;y(e<=2?0:-1)}}var F=class o{constructor(){this.uiService=g(P);this.modalGalleryService=g(E);this.titleService=g(b);this.images=[...M];this.configHtml=k;this.configScss=G;this.configTs=T;this.titleService.titleEvent.emit("Examples - Plain gallery with image pointer"),this.codeHtml=`<div class="my-app-custom-plain-container-row">
    @for (img of images; track img.id; let i = $index) {
      @if (i <= 2) {
        <!-- 2 is a fixed value that I'm using to display only two images -->
        @if (i == 2) {
          <a class="more" (click)="openImageModalRow(205, img)"> +{{ images.length - 2 - 1 }} more </a>
        }
        @if (img.plain && img.plain.img) {
          <img class="my-app-custom-image-row"
               [src]="img.plain.img"
               (click)="openImageModalRow(205, img)"
               [alt]="img.modal.description"/>
        } @else {
          <img class="my-app-custom-image-row"
               [src]="img.modal.img"
               (click)="openImageModalRow(205, img)"
               [alt]="img.modal.description"/>
        }
      }
    }
</div>`,this.codeTypescript=`
constructor(private modalGalleryService: ModalGalleryService) {}

openImageModalRow(id: number, image: Image): void {
  const index: number = this.getCurrentIndexCustomLayout(image, this.images);
  const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
    id,
    images: this.images,
    currentImage: this.images[index]
  }) as ModalGalleryRef;
}

private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
  return image ? images.indexOf(image) : -1;
}`,this.codeScss=`$text-color: #FFF;
  $background: rgba(0, 0, 0, .7);

  .my-app-custom-plain-container-row {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    .my-app-custom-image-row {
      cursor: pointer;
      height: auto;
      margin-right: 2px;
      width: 50px;

      &.after {
        border-top: 2px;
        cursor: pointer;
        display: none;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
    }
  }

  .more {
    background: $background;
    cursor: pointer;
    color: $text-color !important;
    padding-top: 4px;
    height: 50px;
    position: absolute;
    text-align: center;
    width: 50px;
  }`}openImageModalRow(r,e){console.log("Opening modal gallery from custom plain gallery row, with image: ",e);let a=this.getCurrentIndexCustomLayout(e,this.images),c=this.modalGalleryService.open({id:r,images:this.images,currentImage:this.images[a]})}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Demo plain pointer"})}getCurrentIndexCustomLayout(r,e){return r?e.indexOf(r):-1}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=I({type:o,selectors:[["app-plain-gallery-image-pointer-page"]],decls:73,vars:6,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"my-app-custom-plain-container-row"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"],[1,"more"],[1,"my-app-custom-image-row",3,"src","alt"],[1,"more",3,"click"],[1,"my-app-custom-image-row",3,"click","src","alt"]],template:function(e,a){e&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),n(3,"Plain gallery with image pointer"),t()(),i(4,"p"),n(5,"Plain gallery with image pointer."),t(),m(6,"br"),i(7,"h3"),n(8,"Live Demo"),t(),m(9,"br"),i(10,"div",3),S(11,L,1,1,null,null,O),t(),m(13,"br")(14,"br"),i(15,"section")(16,"h3"),n(17,"Code"),t(),m(18,"br"),i(19,"h4"),n(20,"Template"),t(),m(21,"ks-codemirror",4)(22,"br"),i(23,"h4"),n(24,"Typescript"),t(),m(25,"ks-codemirror",4)(26,"br"),i(27,"h4"),n(28,"Style (SCSS)"),t(),m(29,"ks-codemirror",4),t(),m(30,"br")(31,"br"),i(32,"section")(33,"h3"),n(34,"Details"),t(),m(35,"br"),i(36,"table",5)(37,"thead")(38,"tr")(39,"th"),n(40,"Input (.html)"),t(),i(41,"th"),n(42,"Value (.ts)"),t()()(),i(43,"tbody")(44,"tr")(45,"td")(46,"code"),n(47,"id"),t()(),i(48,"td")(49,"div")(50,"i"),n(51,"Value: "),t(),i(52,"code"),n(53,"NUMERIC UNIQUE ID"),t()(),i(54,"div")(55,"b",6),n(56,"Unique id"),t()()()(),i(57,"tr")(58,"td")(59,"code"),n(60,"images"),t()(),i(61,"td")(62,"div")(63,"i"),n(64,"Value: "),t(),i(65,"code"),n(66,"Image[]"),t()(),i(67,"div")(68,"b",6),n(69,"Array of "),i(70,"code"),n(71,"Image"),t(),n(72," objects"),t()()()()()()()()),e&2&&(s(11),w(a.images),s(10),p("content",a.codeHtml)("language",a.configHtml),s(4),p("content",a.codeTypescript)("language",a.configTs),s(4),p("content",a.codeScss)("language",a.configScss))},dependencies:[$,R],styles:[".my-app-custom-plain-container-row[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start}.my-app-custom-plain-container-row[_ngcontent-%COMP%]   .my-app-custom-image-row[_ngcontent-%COMP%]{cursor:pointer;height:auto;margin-right:2px;width:50px}.my-app-custom-plain-container-row[_ngcontent-%COMP%]   .my-app-custom-image-row.after[_ngcontent-%COMP%]{border-top:2px;cursor:pointer;display:none;height:100%;left:0;position:absolute;top:0;width:100%}.more[_ngcontent-%COMP%]{background:#000000b3;cursor:pointer;color:#fff!important;padding-top:4px;height:50px;position:absolute;text-align:center;width:50px}"]})}};export{F as PlainGalleryImagePointerComponent};

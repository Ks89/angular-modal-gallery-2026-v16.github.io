import {g}from'./chunk-C8CaFLi6.js';import {$ as $n,u as un,f as fn,v as vn,T as Tn}from'./chunk-C-_qsOA0.js';import {y,m,u as ur,r,U as Uv,a as Uo,b as sI,e as ec,F as Ff,W as pE,G as Gm,X as hE,L as Lf,h as uE,i as dE,Y as ME,Z as IE,q as qf,_ as Sl,$ as xl,a0 as ic,w as wd}from'./main-B6H63E46.js';var F=(o,r)=>r.id;function O(o,r){if(o&1){let e=IE();Uo(0,"a",9),qf("click",function(){Sl(e);let c=ME(2).$implicit,d=ME();return xl(d.openImageModalRow(205,c))}),sI(1),ec();}if(o&2){let e=ME(3);Gm(),ic(" +",e.images.length-2-1," more ");}}function V(o,r){if(o&1){let e=IE();Uo(0,"img",10),qf("click",function(){Sl(e);let c=ME(2).$implicit,d=ME();return xl(d.openImageModalRow(205,c))}),ec();}if(o&2){let e=ME(2).$implicit;Lf("src",e.plain.img,wd)("alt",e.modal.description);}}function U(o,r){if(o&1){let e=IE();Uo(0,"img",10),qf("click",function(){Sl(e);let c=ME(2).$implicit,d=ME();return xl(d.openImageModalRow(205,c))}),ec();}if(o&2){let e=ME(2).$implicit;Lf("src",e.modal.img,wd)("alt",e.modal.description);}}function H(o,r){if(o&1&&(uE(0,O,2,1,"a",7),uE(1,V,1,2,"img",8)(2,U,1,2,"img",8)),o&2){let e=ME(),a=e.$implicit,c=e.$index;dE(c==2?0:-1),Gm(),dE(a.plain&&a.plain.img?1:2);}}function L(o,r){if(o&1&&uE(0,H,3,2),o&2){let e=r.$index;dE(e<=2?0:-1);}}var D=class o{constructor(){this.uiService=y(m);this.modalGalleryService=y(ur);this.titleService=y(r);this.images=[...g];this.configHtml=$n;this.configScss=un;this.configTs=fn;this.titleService.titleEvent.emit("Examples - Plain gallery with image pointer"),this.codeHtml=`<div class="my-app-custom-plain-container-row">
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
  }`;}openImageModalRow(r,e){console.log("Opening modal gallery from custom plain gallery row, with image: ",e);let a=this.getCurrentIndexCustomLayout(e,this.images);this.modalGalleryService.open({id:r,images:this.images,currentImage:this.images[a]});}ngOnInit(){this.metaData();}metaData(){this.uiService.setMetaData({title:"Demo plain pointer"});}getCurrentIndexCustomLayout(r,e){return r?e.indexOf(r):-1}static{this.\u0275fac=function(e){return new(e||o)};}static{this.\u0275cmp=Uv({type:o,selectors:[["app-plain-gallery-image-pointer-page"]],decls:73,vars:6,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"my-app-custom-plain-container-row"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"],[1,"more"],[1,"my-app-custom-image-row",3,"src","alt"],[1,"more",3,"click"],[1,"my-app-custom-image-row",3,"click","src","alt"]],template:function(e,a){e&1&&(Uo(0,"div",0)(1,"h2",1)(2,"a",2),sI(3,"Plain gallery with image pointer"),ec()(),Uo(4,"p"),sI(5,"Plain gallery with image pointer."),ec(),Ff(6,"br"),Uo(7,"h3"),sI(8,"Live Demo"),ec(),Ff(9,"br"),Uo(10,"div",3),pE(11,L,1,1,null,null,F),ec(),Ff(13,"br")(14,"br"),Uo(15,"section")(16,"h3"),sI(17,"Code"),ec(),Ff(18,"br"),Uo(19,"h4"),sI(20,"Template"),ec(),Ff(21,"ks-codemirror",4)(22,"br"),Uo(23,"h4"),sI(24,"Typescript"),ec(),Ff(25,"ks-codemirror",4)(26,"br"),Uo(27,"h4"),sI(28,"Style (SCSS)"),ec(),Ff(29,"ks-codemirror",4),ec(),Ff(30,"br")(31,"br"),Uo(32,"section")(33,"h3"),sI(34,"Details"),ec(),Ff(35,"br"),Uo(36,"table",5)(37,"thead")(38,"tr")(39,"th"),sI(40,"Input (.html)"),ec(),Uo(41,"th"),sI(42,"Value (.ts)"),ec()()(),Uo(43,"tbody")(44,"tr")(45,"td")(46,"code"),sI(47,"id"),ec()(),Uo(48,"td")(49,"div")(50,"i"),sI(51,"Value: "),ec(),Uo(52,"code"),sI(53,"NUMERIC UNIQUE ID"),ec()(),Uo(54,"div")(55,"b",6),sI(56,"Unique id"),ec()()()(),Uo(57,"tr")(58,"td")(59,"code"),sI(60,"images"),ec()(),Uo(61,"td")(62,"div")(63,"i"),sI(64,"Value: "),ec(),Uo(65,"code"),sI(66,"Image[]"),ec()(),Uo(67,"div")(68,"b",6),sI(69,"Array of "),Uo(70,"code"),sI(71,"Image"),ec(),sI(72," objects"),ec()()()()()()()()),e&2&&(Gm(11),hE(a.images),Gm(10),Lf("content",a.codeHtml)("language",a.configHtml),Gm(4),Lf("content",a.codeTypescript)("language",a.configTs),Gm(4),Lf("content",a.codeScss)("language",a.configScss));},dependencies:[vn,Tn],styles:[".my-app-custom-plain-container-row[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start}.my-app-custom-plain-container-row[_ngcontent-%COMP%]   .my-app-custom-image-row[_ngcontent-%COMP%]{cursor:pointer;height:auto;margin-right:2px;width:50px}.my-app-custom-plain-container-row[_ngcontent-%COMP%]   .my-app-custom-image-row.after[_ngcontent-%COMP%]{border-top:2px;cursor:pointer;display:none;height:100%;left:0;position:absolute;top:0;width:100%}.more[_ngcontent-%COMP%]{background:#000000b3;cursor:pointer;color:#fff!important;padding-top:4px;height:50px;position:absolute;text-align:center;width:50px}"],changeDetection:1});}};
export{D as PlainGalleryImagePointerComponent};
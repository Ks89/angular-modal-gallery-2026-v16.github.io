import {g}from'./chunk-C8CaFLi6.js';import {$ as $n,u as un,f as fn,v as vn,T as Tn}from'./chunk-C-_qsOA0.js';import {y,m,u as ur,r,U as Uv,a as Uo,b as sI,e as ec,F as Ff,W as pE,G as Gm,X as hE,L as Lf,Z as IE,q as qf,_ as Sl,Y as ME,$ as xl,w as wd,a0 as ic}from'./main-B6H63E46.js';var R=(l,a)=>a.id;function T(l,a){if(l&1){let n=IE();Uo(0,"figure",4)(1,"img",8),qf("click",function(){let d=Sl(n).$implicit,k=ME();return xl(k.openImageModalRowDescription(206,d))}),ec(),Uo(2,"figcaption",9),sI(3),ec()();}if(l&2){let n=a.$implicit;Gm(),Lf("src",n.modal.img,wd),Gm(2),ic("",n.modal.description?n.modal.description:"No description available"," ");}}var G=class l{constructor(){this.uiService=y(m);this.modalGalleryService=y(ur);this.titleService=y(r);this.images=[...g];this.configHtml=$n;this.configScss=un;this.configTs=fn;this.titleService.titleEvent.emit("Examples - Plain gallery custom with description"),this.codeHtml=`<div class="my-app-custom-plain-container-with-desc">
    @for (img of images; track img.id) {
      <figure class="my-app-custom-image-with-desc">
        <img [src]="img.modal.img"
             (click)="openImageModalRowDescription(206, img)"/>
        <figcaption class="description">{{ img.modal.description ? img.modal.description : 'No description available' }}
        </figcaption>
      </figure>
    }
  </div>
`,this.codeTypescript=`
  constructor(private modalGalleryService: ModalGalleryService) {}

  openImageModalRowDescription(id: number, image: Image): void {
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[index]
    }) as ModalGalleryRef;
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };`,this.codeScss=`$background: rgba(0, 0, 0, .7);

.my-app-custom-plain-container-with-desc {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  figure {
    margin: 0;
    position: relative;

    img {
      max-width: 100%;
      height: auto;
      cursor: pointer;
    }

    figcaption {
      background: rgba(0, 0, 0, .5);
      color: #fff;
      font-size: 85%;
      padding: 5px;
      position: absolute;
      bottom: 3px;
      left: 0;
      right: 0;
    }
  }

  .description {
    font-weight: 400;
    text-align: center;
  }

  .my-app-custom-image-with-desc {
    height: auto;
    margin-right: 2px;
    width: 200px;
    align-self: start;
  }
}`;}ngOnInit(){this.metaData();}openImageModalRowDescription(a,n){console.log("Opening modal gallery from custom plain gallery row and description, with image: ",n);let o=this.getCurrentIndexCustomLayout(n,this.images);this.modalGalleryService.open({id:a,images:this.images,currentImage:this.images[o]});}metaData(){this.uiService.setMetaData({title:"Demo plain custom desc"});}getCurrentIndexCustomLayout(a,n){return a?n.indexOf(a):-1}static{this.\u0275fac=function(n){return new(n||l)};}static{this.\u0275cmp=Uv({type:l,selectors:[["app-plain-gallery-custom-with-desc-page"]],decls:73,vars:6,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"my-app-custom-plain-container-with-desc"],[1,"my-app-custom-image-with-desc"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"],[3,"click","src"],[1,"description"]],template:function(n,o){n&1&&(Uo(0,"div",0)(1,"h2",1)(2,"a",2),sI(3,"Plain gallery custom with description"),ec()(),Uo(4,"p"),sI(5,"Custom plain gallery with descriptions."),ec(),Ff(6,"br"),Uo(7,"h3"),sI(8,"Live Demo"),ec(),Ff(9,"br"),Uo(10,"div",3),pE(11,T,4,2,"figure",4,R),ec(),Ff(13,"br")(14,"br"),Uo(15,"section")(16,"h3"),sI(17,"Code"),ec(),Ff(18,"br"),Uo(19,"h4"),sI(20,"Template"),ec(),Ff(21,"ks-codemirror",5)(22,"br"),Uo(23,"h4"),sI(24,"Typescript"),ec(),Ff(25,"ks-codemirror",5)(26,"br"),Uo(27,"h3"),sI(28,"Styles (SCSS)"),ec(),Ff(29,"ks-codemirror",5),ec(),Ff(30,"br")(31,"br"),Uo(32,"section")(33,"h3"),sI(34,"Details"),ec(),Ff(35,"br"),Uo(36,"table",6)(37,"thead")(38,"tr")(39,"th"),sI(40,"Input (.html)"),ec(),Uo(41,"th"),sI(42,"Value (.ts)"),ec()()(),Uo(43,"tbody")(44,"tr")(45,"td")(46,"code"),sI(47,"id"),ec()(),Uo(48,"td")(49,"div")(50,"i"),sI(51,"Value: "),ec(),Uo(52,"code"),sI(53,"NUMERIC UNIQUE ID"),ec()(),Uo(54,"div")(55,"b",7),sI(56,"Unique id"),ec()()()(),Uo(57,"tr")(58,"td")(59,"code"),sI(60,"images"),ec()(),Uo(61,"td")(62,"div")(63,"i"),sI(64,"Value: "),ec(),Uo(65,"code"),sI(66,"Image[]"),ec()(),Uo(67,"div")(68,"b",7),sI(69,"Array of "),Uo(70,"code"),sI(71,"Image"),ec(),sI(72," objects"),ec()()()()()()()()),n&2&&(Gm(11),hE(o.images),Gm(10),Lf("content",o.codeHtml)("language",o.configHtml),Gm(4),Lf("content",o.codeTypescript)("language",o.configTs),Gm(4),Lf("content",o.codeScss)("language",o.configScss));},dependencies:[vn,Tn],styles:[".my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{margin:0;position:relative}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto;cursor:pointer}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{background:#00000080;color:#fff;font-size:85%;padding:5px;position:absolute;bottom:3px;left:0;right:0}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-weight:400;text-align:center}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   .my-app-custom-image-with-desc[_ngcontent-%COMP%]{height:auto;margin-right:2px;width:200px;align-self:start}"],changeDetection:1});}};
export{G as PlainGalleryCustomWithDescComponent};
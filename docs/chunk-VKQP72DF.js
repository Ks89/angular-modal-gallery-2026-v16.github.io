import{a as I}from"./chunk-SBBMKDSH.js";import{b as _,c as E,d as P,e as D,f as O}from"./chunk-6GULLGYR.js";import"./chunk-3LLG6XAK.js";import{m as M}from"./chunk-NTGHJOJC.js";import"./chunk-UMM7A7ZK.js";import{a as w}from"./chunk-4564DW3Q.js";import{a as b}from"./chunk-NOX7MSRO.js";import"./chunk-PEJK4JWN.js";import{Ab as v,Bb as S,Ea as u,Ia as m,Ob as i,P as s,Qb as C,V as p,W as g,Wa as f,mb as h,nb as y,ob as c,pb as t,qb as e,rb as r,wb as x}from"./chunk-YABA45OP.js";import"./chunk-MM6P7SRG.js";import"./chunk-QK2PNWNX.js";import"./chunk-W5F55XZK.js";import"./chunk-2VMXMS7J.js";var R=(l,a)=>a.id;function T(l,a){if(l&1){let n=x();t(0,"figure",4)(1,"img",8),v("click",function(){let d=p(n).$implicit,k=S();return g(k.openImageModalRowDescription(206,d))}),e(),t(2,"figcaption",9),i(3),e()()}if(l&2){let n=a.$implicit;m(),c("src",n.modal.img,u),m(2),C("",n.modal.description?n.modal.description:"No description available"," ")}}var G=class l{constructor(){this.uiService=s(w);this.modalGalleryService=s(M);this.titleService=s(b);this.images=[...I];this.configHtml=_;this.configScss=E;this.configTs=P;this.titleService.titleEvent.emit("Examples - Plain gallery custom with description"),this.codeHtml=`<div class="my-app-custom-plain-container-with-desc">
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
}`}ngOnInit(){this.metaData()}openImageModalRowDescription(a,n){console.log("Opening modal gallery from custom plain gallery row and description, with image: ",n);let o=this.getCurrentIndexCustomLayout(n,this.images),d=this.modalGalleryService.open({id:a,images:this.images,currentImage:this.images[o]})}metaData(){this.uiService.setMetaData({title:"Demo plain custom desc"})}getCurrentIndexCustomLayout(a,n){return a?n.indexOf(a):-1}static{this.\u0275fac=function(n){return new(n||l)}}static{this.\u0275cmp=f({type:l,selectors:[["app-plain-gallery-custom-with-desc-page"]],decls:73,vars:6,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"my-app-custom-plain-container-with-desc"],[1,"my-app-custom-image-with-desc"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"],[3,"click","src"],[1,"description"]],template:function(n,o){n&1&&(t(0,"div",0)(1,"h2",1)(2,"a",2),i(3,"Plain gallery custom with description"),e()(),t(4,"p"),i(5,"Custom plain gallery with descriptions."),e(),r(6,"br"),t(7,"h3"),i(8,"Live Demo"),e(),r(9,"br"),t(10,"div",3),h(11,T,4,2,"figure",4,R),e(),r(13,"br")(14,"br"),t(15,"section")(16,"h3"),i(17,"Code"),e(),r(18,"br"),t(19,"h4"),i(20,"Template"),e(),r(21,"ks-codemirror",5)(22,"br"),t(23,"h4"),i(24,"Typescript"),e(),r(25,"ks-codemirror",5)(26,"br"),t(27,"h3"),i(28,"Styles (SCSS)"),e(),r(29,"ks-codemirror",5),e(),r(30,"br")(31,"br"),t(32,"section")(33,"h3"),i(34,"Details"),e(),r(35,"br"),t(36,"table",6)(37,"thead")(38,"tr")(39,"th"),i(40,"Input (.html)"),e(),t(41,"th"),i(42,"Value (.ts)"),e()()(),t(43,"tbody")(44,"tr")(45,"td")(46,"code"),i(47,"id"),e()(),t(48,"td")(49,"div")(50,"i"),i(51,"Value: "),e(),t(52,"code"),i(53,"NUMERIC UNIQUE ID"),e()(),t(54,"div")(55,"b",7),i(56,"Unique id"),e()()()(),t(57,"tr")(58,"td")(59,"code"),i(60,"images"),e()(),t(61,"td")(62,"div")(63,"i"),i(64,"Value: "),e(),t(65,"code"),i(66,"Image[]"),e()(),t(67,"div")(68,"b",7),i(69,"Array of "),t(70,"code"),i(71,"Image"),e(),i(72," objects"),e()()()()()()()()),n&2&&(m(11),y(o.images),m(10),c("content",o.codeHtml)("language",o.configHtml),m(4),c("content",o.codeTypescript)("language",o.configTs),m(4),c("content",o.codeScss)("language",o.configScss))},dependencies:[O,D],styles:[".my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{margin:0;position:relative}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto;cursor:pointer}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{background:#00000080;color:#fff;font-size:85%;padding:5px;position:absolute;bottom:3px;left:0;right:0}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-weight:400;text-align:center}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   .my-app-custom-image-with-desc[_ngcontent-%COMP%]{height:auto;margin-right:2px;width:200px;align-self:start}"]})}};export{G as PlainGalleryCustomWithDescComponent};

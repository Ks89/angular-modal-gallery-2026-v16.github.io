import {g}from'./chunk-C8CaFLi6.js';import {$ as $n,p as pn,f as fn,v as vn$1,T as Tn}from'./chunk-C-_qsOA0.js';import {y,m,r,u as ur,A as xO,v as un,U as Uv,B as vn,I as Fn,a as Uo,b as sI,e as ec,F as Ff,q as qf,M as Mf,C as MI,G as Gm,L as Lf,D as Gf,O as OE,o as wI,c as ap,p as bI,H as Hf}from'./main-B6H63E46.js';var R=["previewsTemplate"];function H(m,r){m&1&&Hf(0);}function L(m,r){if(m&1&&(Uo(0,"div",8)(1,"div",9),sI(2),wI(3,"date"),ec(),Uo(4,"div",10),Mf(5,H,1,0,"ng-container",11),ec()()),m&2){let a=r.preview,n=r.defaultTemplate;Gm(2),ap(bI(3,2,a.modal.pictureDate)),Gm(3),Lf("ngTemplateOutlet",n);}}var O=class m$1{constructor(){this.uiService=y(m);this.titleService=y(r);this.modalGalleryService=y(ur);this.previewsTemplate=xO("previewsTemplate");this.configHtml=$n;this.configCss=pn;this.configTs=fn;this.titleService.titleEvent.emit("Examples - Previews custom template"),this.codeHtml=`<button (click)="openModal(334, 0)">Open modal gallery id=1 at index=0</button>
<ng-template #previewsTemplate let-preview="preview" let-defaultTemplate="defaultTemplate">
  <div class="preview-block">
    <div class="preview-date">{{ preview.modal.pictureDate | date }}</div>
    <div class="preview-default">
      <ng-container *ngTemplateOutlet="defaultTemplate"></ng-container>
    </div>
  </div>
</ng-template>`,this.codeCss=`.preview-block {
  scroll-margin-left: 10px;
  margin-right: 10px;
}
.preview-date {
  text-align: center;
  color: #fff;
  margin-bottom: 3px;
  opacity: 0.8;
}
.preview-default {
  text-align: center;
}`,this.codeTypescript=`// Here, we extends ModalImage, but we could extend Image and/or PlainImage as well
interface CustomModalImage extends ModalImage {
  pictureDate: Date;
}

@Component()
export class MyComponent implements OnInit {
    // a reference to the template defined in the HTML part
  @ViewChild('previewsTemplate') previewsTemplate?: TemplateRef<HTMLElement>;

  images: Image[] = []; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  ngOnInit(): void {
    // when creating the Image array, use the CustomModalImage structure
    // to add the picture-specific data
    this.images.push(new Image(
      imageId,
      {
        img: imageUrl,
        pictureDate: imageDate, // here, we provide the date of each picture, to show in the previews
        ...,
      } as CustomModalImage,
      // Thumbnail (aka 'plain' image)
      {
        img: thumbUrl,
      } as PlainImage,
    );
  }

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        previewConfig: {
          visible: true,
        }
      } as PlainLibConfig,
      previewsTemplate: this.previewsTemplate,
    } as ModalGalleryConfig) as ModalGalleryRef;
  }
}`;let r$1=[new Date(2022,1,13,14,15),new Date(2022,1,15,16,30),new Date(2022,1,16,11,0),new Date(2022,1,20,14,15),new Date(2022,2,2,17,0),new Date(2022,2,10,18,0),new Date(2022,2,13,9,0),new Date(2022,3,3,9,30)];this.images=g.map((a,n)=>new un(a.id,Object.assign({},a.modal,{pictureDate:r$1[n]}),a.plain));}ngOnInit(){this.metaData();}openModal(r,a){this.modalGalleryService.open({id:r,images:this.images,currentImage:this.images[a],libConfig:{previewConfig:{visible:true}},previewsTemplate:this.previewsTemplate()});}metaData(){this.uiService.setMetaData({title:"Demo previews custom template"});}static{this.\u0275fac=function(a){return new(a||m$1)};}static{this.\u0275cmp=Uv({type:m$1,selectors:[["app-previews-template"]],viewQuery:function(a,n){a&1&&Gf(n.previewsTemplate,R,5),a&2&&OE();},decls:161,vars:6,consts:[["previewsTemplate",""],[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"],[1,"preview-block"],[1,"preview-date"],[1,"preview-default"],[4,"ngTemplateOutlet"]],template:function(a,n){a&1&&(Uo(0,"div",1)(1,"h2",2)(2,"a",3),sI(3,"Previews custom template with additional data"),ec()(),Uo(4,"p"),sI(5,"Modal gallery example "),Uo(6,"b"),sI(7,"with custom previews"),ec(),sI(8,", using an Angular template and custom image-related data."),ec(),Uo(9,"p"),sI(10,"This example demonstrates how to use custom image-specific data (here, the date of the picture) to render the previews."),ec(),Ff(11,"br"),Uo(12,"h3"),sI(13,"Live Demo"),ec(),Ff(14,"br"),Uo(15,"button",4),qf("click",function(){return n.openModal(334,0)}),sI(16,"Click to open modal gallery id=1 at index=0"),ec(),Mf(17,L,6,4,"ng-template",null,0,MI),Ff(19,"br")(20,"br"),Uo(21,"section")(22,"h3"),sI(23,"Code"),ec(),Ff(24,"br"),Uo(25,"h4"),sI(26,"Template"),ec(),Ff(27,"ks-codemirror",5)(28,"br"),Uo(29,"h4"),sI(30,"Css"),ec(),Ff(31,"ks-codemirror",5)(32,"br"),Uo(33,"h4"),sI(34,"Typescript"),ec(),Ff(35,"ks-codemirror",5),ec(),Ff(36,"br")(37,"br"),Uo(38,"section")(39,"h3"),sI(40,"Service inputs"),ec(),Ff(41,"br"),Uo(42,"table",6)(43,"thead")(44,"tr")(45,"th"),sI(46,"Input"),ec(),Uo(47,"th"),sI(48,"Value"),ec()()(),Uo(49,"tbody")(50,"tr")(51,"td")(52,"code"),sI(53,"id"),ec()(),Uo(54,"td")(55,"div")(56,"i"),sI(57,"Value: "),ec(),Uo(58,"code"),sI(59,"NUMERIC UNIQUE ID"),ec()(),Uo(60,"div")(61,"b",7),sI(62,"Unique id"),ec()()()(),Uo(63,"tr")(64,"td")(65,"code"),sI(66,"images"),ec()(),Uo(67,"td")(68,"div")(69,"i"),sI(70,"Value: "),ec(),Uo(71,"code"),sI(72,"Image[]"),ec()(),Uo(73,"div")(74,"b",7),sI(75,"Array of "),Uo(76,"code"),sI(77,"Image"),ec(),sI(78," objects"),ec()()()(),Uo(79,"tr")(80,"td")(81,"code"),sI(82,"currentImage"),ec()(),Uo(83,"td")(84,"div")(85,"i"),sI(86,"Value: "),ec(),Uo(87,"code"),sI(88,"Image"),ec()(),Uo(89,"div")(90,"b",7)(91,"code"),sI(92,"Image"),ec(),sI(93," object to show"),ec()()()(),Uo(94,"tr")(95,"td")(96,"code"),sI(97,"libConfig"),ec()(),Uo(98,"td")(99,"div")(100,"i"),sI(101,"Value: "),ec(),Uo(102,"code"),sI(103,"ModalLibConfig"),ec()(),Uo(104,"div")(105,"b",7)(106,"code"),sI(107,"ModalLibConfig"),ec(),sI(108," object to config the library. See below."),ec()()()(),Uo(109,"tr")(110,"td")(111,"code"),sI(112,"previewsTemplate"),ec()(),Uo(113,"td")(114,"div")(115,"i"),sI(116,"Value: "),ec(),Uo(117,"code"),sI(118,"TemplateRef<HTMLElement>"),ec()(),Uo(119,"div")(120,"b",7),sI(121,"A reference to an Angular template."),ec(),Ff(122,"br"),sI(123," This template can take 2 template variables: "),Uo(124,"ul")(125,"li")(126,"b"),sI(127,"let-preview"),ec(),sI(128,": gives access to the "),Uo(129,"code"),sI(130,"Image"),ec(),sI(131," associated with the preview"),ec(),Uo(132,"li")(133,"b"),sI(134,"let-defaultTemplate"),ec(),sI(135,": gives access to the default template used to render the preview; helpful if the need is to wrap the preview with additional information. Insert the default template with: "),Uo(136,"code"),sI(137,'<ng-container *ngTemplateOutlet="defaultTemplate"></ng-container>'),ec(),sI(138,". "),ec()()()()()()()(),Uo(139,"section")(140,"h4"),sI(141,"ModalLibConfig"),ec(),Ff(142,"br"),Uo(143,"table",6)(144,"thead")(145,"tr")(146,"th"),sI(147,"Input"),ec(),Uo(148,"th"),sI(149,"Value"),ec()()(),Uo(150,"tbody")(151,"tr")(152,"td")(153,"code"),sI(154,"previewConfig"),ec()(),Uo(155,"td")(156,"div")(157,"i"),sI(158,"Value: "),ec(),Uo(159,"code"),sI(160,"{ visible: true }"),ec()()()()()()()()),a&2&&(Gm(27),Lf("content",n.codeHtml)("language",n.configHtml),Gm(4),Lf("content",n.codeCss)("language",n.configCss),Gm(4),Lf("content",n.codeTypescript)("language",n.configTs));},dependencies:[vn,vn$1,Tn,Fn],styles:[".preview-block[_ngcontent-%COMP%]{scroll-margin-left:10px;margin-right:10px}.preview-date[_ngcontent-%COMP%]{text-align:center;color:#fff;margin-bottom:3px;opacity:.8}.preview-default[_ngcontent-%COMP%]{text-align:center}"],changeDetection:1});}};
export{O as PreviewsTemplateAdditionalDataComponent};
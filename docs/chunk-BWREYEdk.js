import {g}from'./chunk-C8CaFLi6.js';import {$ as $n,p as pn,f as fn,v as vn$1,T as Tn}from'./chunk-C-_qsOA0.js';import {y,m,r,u as ur,A as xO,U as Uv,B as vn,a as Uo,b as sI,e as ec,F as Ff,q as qf,M as Mf,C as MI,G as Gm,L as Lf,D as Gf,O as OE,c as ap,H as Hf}from'./main-B6H63E46.js';var R=["previewsTemplate"];function k(m,r){m&1&&Hf(0);}function D(m,r){if(m&1&&(Uo(0,"div",8)(1,"div",9),sI(2),ec(),Uo(3,"div",10),Mf(4,k,1,0,"ng-container",11),ec()()),m&2){let a=r.preview,n=r.defaultTemplate;Gm(2),ap(a?.modal?.description??"\xA0"),Gm(2),Lf("ngTemplateOutlet",n);}}var G=class m$1{constructor(){this.uiService=y(m);this.titleService=y(r);this.modalGalleryService=y(ur);this.previewsTemplate=xO("previewsTemplate");this.images=[...g];this.configHtml=$n;this.configCss=pn;this.configTs=fn;this.titleService.titleEvent.emit("Examples - Previews custom template"),this.codeHtml=`<button (click)="openModal(334, 0)">Open modal gallery id=1 at index=0</button>
<ng-template #previewsTemplate let-preview="preview" let-defaultTemplate="defaultTemplate">
  <div class="preview-block">
    <div class="preview-description">{{preview?.modal?.description ?? '&nbsp;'}}</div>
    <div class="preview-default">
      <ng-container *ngTemplateOutlet="defaultTemplate"></ng-container>
    </div>
  </div>
</ng-template>
`,this.codeCss=`.preview-description {
  text-align: center;
  color: #fff;
  margin-bottom: 3px;
  opacity: 0.8;
}
.preview-default {
  text-align: center;
}`,this.codeTypescript=`  // a reference to the template defined in the HTML part
  @ViewChild('previewsTemplate') previewsTemplate?: TemplateRef<HTMLElement>;

  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

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
  }`;}ngOnInit(){this.metaData();}openModal(r,a){this.modalGalleryService.open({id:r,images:this.images,currentImage:this.images[a],libConfig:{previewConfig:{visible:true}},previewsTemplate:this.previewsTemplate()});}metaData(){this.uiService.setMetaData({title:"Demo previews custom template"});}static{this.\u0275fac=function(a){return new(a||m$1)};}static{this.\u0275cmp=Uv({type:m$1,selectors:[["app-previews-template"]],viewQuery:function(a,n){a&1&&Gf(n.previewsTemplate,R,5),a&2&&OE();},decls:159,vars:6,consts:[["previewsTemplate",""],[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"],[1,"preview-block"],[1,"preview-description"],[1,"preview-default"],[4,"ngTemplateOutlet"]],template:function(a,n){a&1&&(Uo(0,"div",1)(1,"h2",2)(2,"a",3),sI(3,"Previews custom template"),ec()(),Uo(4,"p"),sI(5,"Modal gallery example "),Uo(6,"b"),sI(7,"with custom previews"),ec(),sI(8,", using an Angular template."),ec(),Ff(9,"br"),Uo(10,"h3"),sI(11,"Live Demo"),ec(),Ff(12,"br"),Uo(13,"button",4),qf("click",function(){return n.openModal(334,0)}),sI(14,"Click to open modal gallery id=1 at index=0"),ec(),Mf(15,D,5,2,"ng-template",null,0,MI),Ff(17,"br")(18,"br"),Uo(19,"section")(20,"h3"),sI(21,"Code"),ec(),Ff(22,"br"),Uo(23,"h4"),sI(24,"Template"),ec(),Ff(25,"ks-codemirror",5)(26,"br"),Uo(27,"h4"),sI(28,"Css"),ec(),Ff(29,"ks-codemirror",5)(30,"br"),Uo(31,"h4"),sI(32,"Typescript"),ec(),Ff(33,"ks-codemirror",5),ec(),Ff(34,"br")(35,"br"),Uo(36,"section")(37,"h3"),sI(38,"Service inputs"),ec(),Ff(39,"br"),Uo(40,"table",6)(41,"thead")(42,"tr")(43,"th"),sI(44,"Input"),ec(),Uo(45,"th"),sI(46,"Value"),ec()()(),Uo(47,"tbody")(48,"tr")(49,"td")(50,"code"),sI(51,"id"),ec()(),Uo(52,"td")(53,"div")(54,"i"),sI(55,"Value: "),ec(),Uo(56,"code"),sI(57,"NUMERIC UNIQUE ID"),ec()(),Uo(58,"div")(59,"b",7),sI(60,"Unique id"),ec()()()(),Uo(61,"tr")(62,"td")(63,"code"),sI(64,"images"),ec()(),Uo(65,"td")(66,"div")(67,"i"),sI(68,"Value: "),ec(),Uo(69,"code"),sI(70,"Image[]"),ec()(),Uo(71,"div")(72,"b",7),sI(73,"Array of "),Uo(74,"code"),sI(75,"Image"),ec(),sI(76," objects"),ec()()()(),Uo(77,"tr")(78,"td")(79,"code"),sI(80,"currentImage"),ec()(),Uo(81,"td")(82,"div")(83,"i"),sI(84,"Value: "),ec(),Uo(85,"code"),sI(86,"Image"),ec()(),Uo(87,"div")(88,"b",7)(89,"code"),sI(90,"Image"),ec(),sI(91," object to show"),ec()()()(),Uo(92,"tr")(93,"td")(94,"code"),sI(95,"libConfig"),ec()(),Uo(96,"td")(97,"div")(98,"i"),sI(99,"Value: "),ec(),Uo(100,"code"),sI(101,"ModalLibConfig"),ec()(),Uo(102,"div")(103,"b",7)(104,"code"),sI(105,"ModalLibConfig"),ec(),sI(106," object to config the library. See below."),ec()()()(),Uo(107,"tr")(108,"td")(109,"code"),sI(110,"previewsTemplate"),ec()(),Uo(111,"td")(112,"div")(113,"i"),sI(114,"Value: "),ec(),Uo(115,"code"),sI(116,"TemplateRef<HTMLElement>"),ec()(),Uo(117,"div")(118,"b",7),sI(119,"A reference to an Angular template."),ec(),Ff(120,"br"),sI(121," This template can take 2 template variables: "),Uo(122,"ul")(123,"li")(124,"b"),sI(125,"let-preview"),ec(),sI(126,": gives access to the "),Uo(127,"code"),sI(128,"Image"),ec(),sI(129," associated with the preview"),ec(),Uo(130,"li")(131,"b"),sI(132,"let-defaultTemplate"),ec(),sI(133,": gives access to the default template used to render the preview; helpful if the need is to wrap the preview with additional information. Insert the default template with: "),Uo(134,"code"),sI(135,'<ng-container *ngTemplateOutlet="defaultTemplate"></ng-container>'),ec(),sI(136,". "),ec()()()()()()()(),Uo(137,"section")(138,"h4"),sI(139,"ModalLibConfig"),ec(),Ff(140,"br"),Uo(141,"table",6)(142,"thead")(143,"tr")(144,"th"),sI(145,"Input"),ec(),Uo(146,"th"),sI(147,"Value"),ec()()(),Uo(148,"tbody")(149,"tr")(150,"td")(151,"code"),sI(152,"previewConfig"),ec()(),Uo(153,"td")(154,"div")(155,"i"),sI(156,"Value: "),ec(),Uo(157,"code"),sI(158,"{ visible: true }"),ec()()()()()()()()),a&2&&(Gm(25),Lf("content",n.codeHtml)("language",n.configHtml),Gm(4),Lf("content",n.codeCss)("language",n.configCss),Gm(4),Lf("content",n.codeTypescript)("language",n.configTs));},dependencies:[vn,vn$1,Tn],styles:[".preview-description[_ngcontent-%COMP%]{text-align:center;color:#fff;margin-bottom:3px;opacity:.8}.preview-default[_ngcontent-%COMP%]{text-align:center}"],changeDetection:1});}};
export{G as PreviewsTemplateComponent};
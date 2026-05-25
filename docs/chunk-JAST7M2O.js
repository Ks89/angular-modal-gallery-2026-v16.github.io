import{a as I}from"./chunk-SBBMKDSH.js";import{a as _,b as P,d as G,e as R,f as k}from"./chunk-6GULLGYR.js";import"./chunk-3LLG6XAK.js";import{m as M}from"./chunk-NTGHJOJC.js";import"./chunk-UMM7A7ZK.js";import{a as C}from"./chunk-4564DW3Q.js";import{a as y}from"./chunk-NOX7MSRO.js";import{e as h}from"./chunk-PEJK4JWN.js";import{$a as s,Ab as w,Hb as b,Ia as o,Ib as x,Ob as e,P as p,Pb as S,V as c,W as v,Wa as g,bc as E,hc as T,ob as d,pb as i,qb as t,rb as a,vb as u,wb as f}from"./chunk-YABA45OP.js";import"./chunk-MM6P7SRG.js";import"./chunk-QK2PNWNX.js";import"./chunk-W5F55XZK.js";import"./chunk-2VMXMS7J.js";var O=["previewsTemplate"];function D(m,r){m&1&&u(0)}function H(m,r){if(m&1&&(i(0,"div",8)(1,"div",9),e(2),t(),i(3,"div",10),s(4,D,1,0,"ng-container",11),t()()),m&2){let n=r.preview,l=r.defaultTemplate;o(2),S((n==null||n.modal==null?null:n.modal.description)??"\xA0"),o(2),d("ngTemplateOutlet",l)}}var V=class m{constructor(){this.uiService=p(C);this.titleService=p(y);this.modalGalleryService=p(M);this.previewsTemplate=T("previewsTemplate");this.images=[...I];this.configHtml=P;this.configCss=_;this.configTs=G;this.titleService.titleEvent.emit("Examples - Previews custom template"),this.codeHtml=`<button (click)="openModal(334, 0)">Open modal gallery id=1 at index=0</button>
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
  }`}ngOnInit(){this.metaData()}openModal(r,n){let l=this.modalGalleryService.open({id:r,images:this.images,currentImage:this.images[n],libConfig:{previewConfig:{visible:!0}},previewsTemplate:this.previewsTemplate()})}metaData(){this.uiService.setMetaData({title:"Demo previews custom template"})}static{this.\u0275fac=function(n){return new(n||m)}}static{this.\u0275cmp=g({type:m,selectors:[["app-previews-template"]],viewQuery:function(n,l){n&1&&b(l.previewsTemplate,O,5),n&2&&x()},decls:159,vars:6,consts:[["previewsTemplate",""],[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"],[1,"preview-block"],[1,"preview-description"],[1,"preview-default"],[4,"ngTemplateOutlet"]],template:function(n,l){if(n&1){let L=f();i(0,"div",1)(1,"h2",2)(2,"a",3),e(3,"Previews custom template"),t()(),i(4,"p"),e(5,"Modal gallery example "),i(6,"b"),e(7,"with custom previews"),t(),e(8,", using an Angular template."),t(),a(9,"br"),i(10,"h3"),e(11,"Live Demo"),t(),a(12,"br"),i(13,"button",4),w("click",function(){return c(L),v(l.openModal(334,0))}),e(14,"Click to open modal gallery id=1 at index=0"),t(),s(15,H,5,2,"ng-template",null,0,E),a(17,"br")(18,"br"),i(19,"section")(20,"h3"),e(21,"Code"),t(),a(22,"br"),i(23,"h4"),e(24,"Template"),t(),a(25,"ks-codemirror",5)(26,"br"),i(27,"h4"),e(28,"Css"),t(),a(29,"ks-codemirror",5)(30,"br"),i(31,"h4"),e(32,"Typescript"),t(),a(33,"ks-codemirror",5),t(),a(34,"br")(35,"br"),i(36,"section")(37,"h3"),e(38,"Service inputs"),t(),a(39,"br"),i(40,"table",6)(41,"thead")(42,"tr")(43,"th"),e(44,"Input"),t(),i(45,"th"),e(46,"Value"),t()()(),i(47,"tbody")(48,"tr")(49,"td")(50,"code"),e(51,"id"),t()(),i(52,"td")(53,"div")(54,"i"),e(55,"Value: "),t(),i(56,"code"),e(57,"NUMERIC UNIQUE ID"),t()(),i(58,"div")(59,"b",7),e(60,"Unique id"),t()()()(),i(61,"tr")(62,"td")(63,"code"),e(64,"images"),t()(),i(65,"td")(66,"div")(67,"i"),e(68,"Value: "),t(),i(69,"code"),e(70,"Image[]"),t()(),i(71,"div")(72,"b",7),e(73,"Array of "),i(74,"code"),e(75,"Image"),t(),e(76," objects"),t()()()(),i(77,"tr")(78,"td")(79,"code"),e(80,"currentImage"),t()(),i(81,"td")(82,"div")(83,"i"),e(84,"Value: "),t(),i(85,"code"),e(86,"Image"),t()(),i(87,"div")(88,"b",7)(89,"code"),e(90,"Image"),t(),e(91," object to show"),t()()()(),i(92,"tr")(93,"td")(94,"code"),e(95,"libConfig"),t()(),i(96,"td")(97,"div")(98,"i"),e(99,"Value: "),t(),i(100,"code"),e(101,"ModalLibConfig"),t()(),i(102,"div")(103,"b",7)(104,"code"),e(105,"ModalLibConfig"),t(),e(106," object to config the library. See below."),t()()()(),i(107,"tr")(108,"td")(109,"code"),e(110,"previewsTemplate"),t()(),i(111,"td")(112,"div")(113,"i"),e(114,"Value: "),t(),i(115,"code"),e(116,"TemplateRef<HTMLElement>"),t()(),i(117,"div")(118,"b",7),e(119,"A reference to an Angular template."),t(),a(120,"br"),e(121," This template can take 2 template variables: "),i(122,"ul")(123,"li")(124,"b"),e(125,"let-preview"),t(),e(126,": gives access to the "),i(127,"code"),e(128,"Image"),t(),e(129," associated with the preview"),t(),i(130,"li")(131,"b"),e(132,"let-defaultTemplate"),t(),e(133,": gives access to the default template used to render the preview; helpful if the need is to wrap the preview with additional information. Insert the default template with: "),i(134,"code"),e(135,'<ng-container *ngTemplateOutlet="defaultTemplate"></ng-container>'),t(),e(136,". "),t()()()()()()()(),i(137,"section")(138,"h4"),e(139,"ModalLibConfig"),t(),a(140,"br"),i(141,"table",6)(142,"thead")(143,"tr")(144,"th"),e(145,"Input"),t(),i(146,"th"),e(147,"Value"),t()()(),i(148,"tbody")(149,"tr")(150,"td")(151,"code"),e(152,"previewConfig"),t()(),i(153,"td")(154,"div")(155,"i"),e(156,"Value: "),t(),i(157,"code"),e(158,"{ visible: true }"),t()()()()()()()()}n&2&&(o(25),d("content",l.codeHtml)("language",l.configHtml),o(4),d("content",l.codeCss)("language",l.configCss),o(4),d("content",l.codeTypescript)("language",l.configTs))},dependencies:[h,k,R],styles:[".preview-description[_ngcontent-%COMP%]{text-align:center;color:#fff;margin-bottom:3px;opacity:.8}.preview-default[_ngcontent-%COMP%]{text-align:center}"]})}};export{V as PreviewsTemplateComponent};

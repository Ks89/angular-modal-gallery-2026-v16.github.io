/*
 * MIT License
 *
 * Copyright (c) 2017-2026 Stefano Cappa (Ks89) Stefano Cappa
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Component, OnInit, inject } from '@angular/core';

import {
  Image,
  ModalGalleryRef,
  ModalGalleryService
} from '@ks89/angular-modal-gallery';

import { IMAGES_ARRAY } from '../../../shared/images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { Metadata, UiService } from '../../../core/services/ui.service';
import { CodemirrorModule } from '@ks89/ngx-codemirror6';

@Component({
  selector: 'app-plain-gallery-custom-with-desc-page',
  templateUrl: 'plain-gallery-custom-with-desc.html',
  styleUrls: ['plain-gallery-custom-with-desc.scss'],
  imports: [CodemirrorModule]
})
export class PlainGalleryCustomWithDescComponent implements OnInit {
  private uiService = inject(UiService);
  private modalGalleryService = inject(ModalGalleryService);
  private titleService = inject(TitleService);

  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;
  codeScss: string;

  constructor() {
    this.titleService.titleEvent.emit('Examples - Plain gallery custom with description');

    this.codeHtml =
      `<div class="my-app-custom-plain-container-with-desc">
    @for (img of images; track img.id) {
      <figure class="my-app-custom-image-with-desc">
        <img [src]="img.modal.img"
             (click)="openImageModalRowDescription(206, img)"/>
        <figcaption class="description">{{ img.modal.description ? img.modal.description : 'No description available' }}
        </figcaption>
      </figure>
    }
  </div>
`;

    this.codeTypescript = `
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
  };`;

    this.codeScss = `$background: rgba(0, 0, 0, .7);

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
}`;
  }

  ngOnInit(): void {
    this.metaData();
  }

  openImageModalRowDescription(id: number, image: Image): void {
    console.log('Opening modal gallery from custom plain gallery row and description, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[index]
    }) as ModalGalleryRef;
  }

  metaData() {
    this.uiService.setMetaData({
      title: 'Demo plain custom desc'
    } as Metadata);
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }
}

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
  ModalGalleryService,
} from '@ks89/angular-modal-gallery';

import { IMAGES_ARRAY } from '../../../shared/images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorScss, codemirrorTs } from '../../codemirror.config';
import { Metadata, UiService } from '../../../core/services/ui.service';
import { CodemirrorModule } from '@ks89/ngx-codemirror6';

@Component({
  selector: 'app-plain-gallery-image-pointer-page',
  templateUrl: 'plain-gallery-image-pointer.html',
  styleUrls: ['plain-gallery-image-pointer.scss'],
  imports: [CodemirrorModule]
})
export class PlainGalleryImagePointerComponent implements OnInit {
  private uiService = inject(UiService);
  private modalGalleryService = inject(ModalGalleryService);
  private titleService = inject(TitleService);

  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configScss: any = codemirrorScss;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;
  codeScss: string;

  constructor() {

    this.titleService.titleEvent.emit('Examples - Plain gallery with image pointer');

    this.codeHtml =
      `<div class="my-app-custom-plain-container-row">
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
</div>`;

    this.codeTypescript = `
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
}`;

    this.codeScss = `$text-color: #FFF;
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
  }`;

  }

  openImageModalRow(id: number, image: Image): void {
    console.log('Opening modal gallery from custom plain gallery row, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[index]
    }) as ModalGalleryRef;
  }

  ngOnInit(): void {
    this.metaData();
  }

  metaData() {
    this.uiService.setMetaData({
      title: 'Demo plain pointer'
    } as Metadata);
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }
}

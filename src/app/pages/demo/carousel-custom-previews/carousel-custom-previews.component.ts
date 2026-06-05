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

import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { CarouselLibConfig, Image, CarouselComponent } from '@ks89/angular-modal-gallery';

import { IMAGES_RECT_ARRAY } from '../../../shared/images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { Metadata, UiService } from '../../../core/services/ui.service';
import { CodemirrorModule } from '@ks89/ngx-codemirror6';

@Component({
  selector: 'app-carousel-custom-previews-page',
  templateUrl: 'carousel-custom-previews.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CarouselComponent, CodemirrorModule]
})
export class CarouselCustomPreviewsComponent implements OnInit {
  private uiService = inject(UiService);
  private titleService = inject(TitleService);

  images: Image[] = [...IMAGES_RECT_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  libConfig: CarouselLibConfig = {
    carouselPreviewsConfig: {
      visible: true,
      number: 7,
      width: 'auto',
      maxHeight: '100px'
    }
  };

  constructor() {

    this.titleService.titleEvent.emit('Examples - Carousel custom previews');

    this.codeHtml =
      `  <ks-carousel [id]="107" [images]="images" [config]="libConfig">
  </ks-carousel>`;

    this.codeTypescript =
      `  images: Image[]; // init this array with your images

  libConfig: CarouselLibConfig = {
    carouselPreviewsConfig: {
      visible: true,
      number: 7,
      width: 'auto',
      maxHeight: '100px'
    }
  };`;
  }

  ngOnInit(): void {
    this.metaData();
  }

  metaData() {
    this.uiService.setMetaData({
      title: 'Carousel custom previews'
    } as Metadata);
  }
}

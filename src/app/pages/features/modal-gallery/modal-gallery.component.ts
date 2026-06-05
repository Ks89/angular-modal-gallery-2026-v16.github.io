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

import { Image, ModalGalleryConfig, ModalGalleryRef, ModalGalleryService, ModalLibConfig } from '@ks89/angular-modal-gallery';

import { TitleService } from '../../../core/services/title.service';
import { Metadata, UiService } from '../../../core/services/ui.service';
import { IMAGES_ARRAY } from '../../../shared/images';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { RouterLink } from '@angular/router';
import { CodemirrorModule } from '@ks89/ngx-codemirror6';
import { TableLibconfigComponent } from '../../../shared/components/table-libconfig/table-libconfig.component';
import { TableImageComponent } from '../../../shared/components/table-image/table-image.component';

@Component({
  selector: 'app-modal-gallery-page',
  templateUrl: 'modal-gallery.html',
  styleUrls: ['modal-gallery.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink, CodemirrorModule, TableLibconfigComponent, TableImageComponent]
})
export class ModalGalleryComponent implements OnInit {
  private uiService = inject(UiService);
  private titleService = inject(TitleService);
  private modalGalleryService = inject(ModalGalleryService);

  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  constructor() {
    this.titleService.titleEvent.emit('Features - Modal Gallery');

    this.codeHtml = `<button (click)="openModal(500, 0)">Click to open modal gallery id=1 at index=0</button>`;

    this.codeTypescript =
      `  constructor(private modalGalleryService: ModalGalleryService) {}

  images: Image[]; // your images array

  openModal(id: number, imageIndex: number, libConfig?: ModalLibConfig): void {
    const imageToShow: Image = this.images[imageIndex];
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: imageToShow,
      libConfig
    } as ModalGalleryConfig);
  }`;
  }

  ngOnInit(): void {
    this.metaData();
  }

  openModal(id: number, imageIndex: number, libConfig?: ModalLibConfig): void {
    const imageToShow: Image = this.images[imageIndex];
    const dialogRef: ModalGalleryRef | undefined = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: imageToShow,
      libConfig
    } as ModalGalleryConfig);
  }

  metaData() {
    this.uiService.setMetaData({
      title: 'Modal gallery'
    } as Metadata);
  }
}

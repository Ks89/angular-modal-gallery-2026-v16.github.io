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

import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TitleService } from '../../core/services/title.service';
import { SidebarDemoComponent } from '../../shared/components/sidebar-demo/sidebar-demo.component';

@Component({
  selector: 'app-demo-page',
  templateUrl: 'demo.html',
  styleUrls: ['demo.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [SidebarDemoComponent, RouterOutlet]
})
export class DemoComponent {
  private titleService = inject(TitleService);


  title = 'Modal Gallery';

  constructor() {
    this.titleService.titleEvent.subscribe((val: string) => {
      this.onUpdateTitle(val);
    });
  }

  onUpdateTitle(event: string) {
    this.title = event;
  }
}

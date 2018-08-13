import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { PageComponent } from './components/page/page.component';
import { MediaRowComponent } from './components/media-row/media-row.component';
// Material Design
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
// Router
import { RouterModule } from '../../../node_modules/@angular/router';
// iDangerous Swiper
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    MatChipsModule,
    MatProgressBarModule,
    MatListModule,
    MatCardModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatExpansionModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  declarations: [
    PageComponent,
    MediaRowComponent
  ],
  exports: [
    RouterModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatChipsModule,
    MatProgressBarModule,
    MatListModule,
    MatCardModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatExpansionModule,
    PageComponent,
    MediaRowComponent,
    SwiperModule
  ]
})
export class SharedModule { }

import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SwiperConfigInterface, SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SimpleMedia } from '../../models/simple-media';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media-row',
  templateUrl: './media-row.component.html',
  styleUrls: ['./media-row.component.scss']
})
export class MediaRowComponent implements OnInit {
  @Input() media: SimpleMedia[] = [];
  @Input() emptyMessage: string = "No Results";
  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;
  
  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 7,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false,
    spaceBetween: 26,
    breakpoints: {
        1181: { slidesPerView: 4, spaceBetween: 15 },
        1180: { slidesPerView: 3, spaceBetween: 15 },
        1020: { slidesPerView: 2, spaceBetween: 15 },
        700: { slidesPerView: 1, spaceBetween: 15 }
    }
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  routeToMedia(media: SimpleMedia): void {
    if (media.Type === 'movie') {
      this.router.navigate(['/movies', media.Id.toString()]);
    }
    else if (media.Type === 'tv') {
      if (!media.Season) {
        this.router.navigate(['/tvshows', media.Id.toString()]);
      }
      else if (!media.Episode) {
        this.router.navigate(['/tvshows', media.Id.toString()], {queryParams: {season: media.Season.toString()}});
      }
      this.router.navigate(['/tvshows', media.Id.toString()], {queryParams: {season: media.Season.toString(), episode: media.Episode.toString()}});
    }
  }
}
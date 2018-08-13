import { Component, OnInit, OnDestroy } from '@angular/core';
import { SimpleMedia } from '../../../shared/models/simple-media';
import { MediaService } from '../../../shared/services/media.service';
import { Subscription } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  inProgressMedia: SimpleMedia[] = [];
  recentlyAddedMedia: SimpleMedia[] = [];
  subscription: Subscription = new Subscription();
  constructor(
    private mediaService: MediaService
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.mediaService.getInProgress().subscribe(media => {
        this.inProgressMedia = media;
      })
    );
    this.subscription.add(
      this.mediaService.getRecentlyAdded().subscribe(media => {
        this.recentlyAddedMedia = media;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

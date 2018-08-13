import { Component, OnInit, OnDestroy } from '@angular/core';
import { SimpleMedia } from '../../../shared/models/simple-media';
import { Subscription } from 'rxjs';
import { TvshowsService } from '../../services/tvshows.service';

@Component({
  selector: 'app-tvshows-all',
  templateUrl: './tvshows-all.component.html',
  styleUrls: ['./tvshows-all.component.scss']
})
export class TvshowsAllComponent implements OnInit, OnDestroy {

  tvshows: SimpleMedia[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(
    private tvshowsService: TvshowsService
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.tvshowsService.getAll().subscribe(shows => {
        this.tvshows = shows;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

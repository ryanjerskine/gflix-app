import { Component, OnInit } from '@angular/core';
import { SimpleMedia } from '../../../shared/models/simple-media';
import { Subscription } from 'rxjs';
import { TvshowsService } from '../../services/tvshows.service';

@Component({
  selector: 'app-tvshows-dashboard',
  templateUrl: './tvshows-dashboard.component.html',
  styleUrls: ['./tvshows-dashboard.component.scss']
})
export class TvshowsDashboardComponent implements OnInit {

  inProgressTvshows: SimpleMedia[] = [];
  subscriptions: Subscription = new Subscription();
  
  constructor(
    private tvshowsService: TvshowsService
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.tvshowsService.getInProgress().subscribe((movies) => {
        this.inProgressTvshows = movies;
      })
    );
  }

}

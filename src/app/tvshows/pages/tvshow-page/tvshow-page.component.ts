import { Component, OnInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { TvshowsService } from '../../services/tvshows.service';
import { TvShow } from '../../models/tvshow';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tvshow-page',
  templateUrl: './tvshow-page.component.html',
  styleUrls: ['./tvshow-page.component.scss']
})
export class TvshowPageComponent implements OnInit, OnDestroy {
  @ViewChildren('viewEpisodes') viewEpisodes:QueryList<any>;
  tvshow: TvShow;
  subscriptions: Subscription = new Subscription();
  currentEpisode: number = null;
  currentSeason: number = 1;
  initialSeasonSet: boolean = false;
  /**
   * Construct the tv show page.
   * @param tvshowsService 
   * @param route 
   */
  constructor(
    private tvshowsService: TvshowsService,
    private route: ActivatedRoute
  ) { }
  /**
   * Handle loading on initialion.
   */
  ngOnInit():void {
    this.subscriptions.add(
      this.route.params.subscribe(params => {
        this.loadShow(+params['id']);
      })
    );
    this.subscriptions.add(
      this.route.queryParams.subscribe(query => {
        this.setSeason(query.season ? parseInt(query.season) : 1);
        this.setEpisode(query.episode ? parseInt(query.episode) : null);
      })
    );
  }
  /**
   * Load the tv show details.
   * @param id 
   */
  loadShow(id: number) {
    this.subscriptions.add(
      this.tvshowsService.get(id).subscribe(show => {
        this.tvshow = show;
        this.scrollEpisode();
      })
    );
  }
  /**
   * Set the current episode number. Can be a duplicate between
   * seasons (example, 2 could mean s01e02 or s02e02 depending
   * on the season).
   * @param Number 
   */
  setEpisode(Number: number): void {
    this.currentEpisode = (Number == this.currentEpisode ? null : Number);
  }
  /**
   * Set the current season.
   * @param Number 
   */
  setSeason(Number: number): void {
    this.currentSeason = Number;
  }
  /**
   * Scroll to the current episode. Only applicable if a current episode
   * is in the url when the page loads.
   */
  scrollEpisode() {
    if (this.currentEpisode && this.currentEpisode > 1) {
      var offset = this.currentEpisode - 1;
      window.setTimeout(() => {
        // Season computation...
        this.viewEpisodes.forEach((e, i) => {
          if (i === offset) {
            window.scrollTo(0, e.nativeElement.getBoundingClientRect().top - 60);
          }
        });
      }, 25);
    }
  }
  /**
   * Triggered when the season is changed. The first time shouldn't
   * clear the current episode since it may have been linked to.
   */
  seasonChanged() {
    if (this.initialSeasonSet) {
      this.currentEpisode = null;
    }
    else {
      this.initialSeasonSet = true;
    }
  }
  /**
   * Clean up subscriptions to avoid memory leak.
   */
  ngOnDestroy():void {
    this.subscriptions.unsubscribe();
  }
}
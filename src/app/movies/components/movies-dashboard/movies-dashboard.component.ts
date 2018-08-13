import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { SimpleMedia } from '../../../shared/models/simple-media';
import { Subscription } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.scss']
})
export class MoviesDashboardComponent implements OnInit, OnDestroy {

  inProgressMovies: SimpleMedia[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.moviesService.getInProgress().subscribe((movies) => {
        this.inProgressMovies = movies;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { SimpleMedia } from '../../../shared/models/simple-media';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-all',
  templateUrl: './movies-all.component.html',
  styleUrls: ['./movies-all.component.scss']
})
export class MoviesAllComponent implements OnInit, OnDestroy {

  movies: SimpleMedia[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.moviesService.getMovies().subscribe((movies) => {
        this.movies = movies;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {

  movie: Movie;
  subscriptions: Subscription = new Subscription();

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.params.subscribe(params => {
        this.loadMovie(+params['id']);
      })
    );
  }

  loadMovie(id: number): void {
    this.subscriptions.add(
      this.moviesService.getMovie(id).subscribe((movie) => {
        this.movie = movie;
      })
    );
  }

  toggleWatched(): void {
    this.moviesService.markWatched(this.movie.Id, !this.movie.Watched);
    this.movie.Watched = !this.movie.Watched;
    this.movie.ProgressPercentage = 0;
  }
}

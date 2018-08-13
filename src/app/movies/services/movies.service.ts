import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { Observable, of } from 'rxjs';
import { Genre } from '../models/genre';
import { SimpleMedia } from '../../shared/models/simple-media';
import { environment } from '../../../environments/environment';
import { HttpClient } from 'node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  getMovie(id: number): Observable<Movie> {
    if (environment.jsonBackend){
      return this.http.get<Movie>('/assets/jsonMocks/movies/' + id.toString() + '.json');
    }
    else {
      throw new Error("API not yet implemented.");
    }
  }

  getMovies(): Observable<SimpleMedia[]> {
    if (environment.jsonBackend){
      return this.http.get<SimpleMedia[]>('/assets/jsonMocks/allMovies.json');
    }
    else {
      throw new Error("API not yet implemented.");
    }
  }

  getInProgress(): Observable<SimpleMedia[]> {
    if (environment.jsonBackend){
      return this.http.get<SimpleMedia[]>('/assets/jsonMocks/inProgressMovies.json');
    }
    else {
      throw new Error("API not yet implemented.");
    }
  }

  markWatched(id: number, watched: boolean) {
    // TODO: Call API
  }
}

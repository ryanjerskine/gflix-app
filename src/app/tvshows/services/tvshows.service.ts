import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TvShow } from '../models/tvshow';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SimpleMedia } from '../../shared/models/simple-media';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

  constructor(
    private http: HttpClient
  ) { }

  get(id: number): Observable<TvShow> {
    if (environment.jsonBackend) {
      return this.http.get<TvShow>('/assets/jsonMocks/tvshows/' + id.toString() + '.json');
    }
    else {
      throw new Error("API not yet implemented.");
    }
  }

  getInProgress(): Observable<SimpleMedia[]> {
    if (environment.jsonBackend) {
      return this.http.get<SimpleMedia[]>('/assets/jsonMocks/inProgressTv.json');
    }
    else {
      throw new Error("API nnot yet implemented.");
    }
  }

  getAll(): Observable<SimpleMedia[]> {
    if (environment.jsonBackend){
      return this.http.get<SimpleMedia[]>('/assets/jsonMocks/allTv.json');
    }
    else {
      throw new Error("API not yet implemented.");
    }
  }
}

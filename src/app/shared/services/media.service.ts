import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'node_modules/rxjs';
import { SimpleMedia } from '../models/simple-media';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(
    private http: HttpClient
  ) { }

  getInProgress(): Observable<SimpleMedia[]> {
    if (environment.jsonBackend) {
      return this.http.get<SimpleMedia[]>('/assets/jsonMocks/inProgressMedia.json');
    }
    else {
      throw new Error("API not yet implemented.");
    }
  }

  getRecentlyAdded(): Observable<SimpleMedia[]> {
    if (environment.jsonBackend) {
      return this.http.get<SimpleMedia[]>('/assets/jsonMocks/recentlyAddedMedia.json');
    }
    else {
      throw new Error("API not yet implemented.");
    }
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

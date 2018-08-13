import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { MoviesAllComponent } from './components/movies-all/movies-all.component';
import { MoviesDashboardComponent } from './components/movies-dashboard/movies-dashboard.component';
// Pages
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
// Routing
import { MoviesRoutingModule } from './movies.routing.module';
// Shared
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ],
  declarations: [
    MoviesPageComponent,
    MoviePageComponent,
    MoviesAllComponent,
    MoviesDashboardComponent
  ]
})
export class MoviesModule { }
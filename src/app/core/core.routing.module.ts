import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';
// Pages
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AccountModule } from '../account/account.module';
import { HomeModule } from '../home/home.module';
import { MoviesModule } from '../movies/movies.module';
import { TvshowsModule } from '../tvshows/tvshows.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: 'account',
    loadChildren: () => AccountModule
  },
  {
    path: 'home',
    loadChildren: () => HomeModule
  },
  {
    path: 'movies',
    loadChildren: () => MoviesModule
  },
  {
    path: 'tvshows',
    loadChildren: () => TvshowsModule
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
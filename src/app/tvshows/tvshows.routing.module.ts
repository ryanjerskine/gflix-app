import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';
// Pages
import { TvshowsPageComponent } from './pages/tvshows-page/tvshows-page.component';
import { TvshowPageComponent } from './pages/tvshow-page/tvshow-page.component';

const routes: Routes = [
  {
    path: '',
    component: TvshowsPageComponent
  },
  {
    path: ':id',
    component: TvshowPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvshowsRoutingModule { }
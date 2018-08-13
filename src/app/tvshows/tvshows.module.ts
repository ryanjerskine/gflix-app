import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Pages
import { TvshowsPageComponent } from './pages/tvshows-page/tvshows-page.component';
// Routing
import { TvshowsRoutingModule } from './tvshows.routing.module';
// Shared
import { SharedModule } from '../shared/shared.module';
import { TvshowPageComponent } from './pages/tvshow-page/tvshow-page.component';
import { TvshowsAllComponent } from './components/tvshows-all/tvshows-all.component';
import { TvshowsDashboardComponent } from './components/tvshows-dashboard/tvshows-dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    TvshowsRoutingModule,
    SharedModule
  ],
  declarations: [
    TvshowsPageComponent,
    TvshowPageComponent,
    TvshowsAllComponent,
    TvshowsDashboardComponent
  ]
})
export class TvshowsModule { }

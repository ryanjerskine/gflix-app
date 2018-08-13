import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
// Routing
import { HomeRoutingModule } from './home.routing.module';
// Shared
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomePageComponent
  ]
})
export class HomeModule { }

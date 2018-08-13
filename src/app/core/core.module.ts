import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Pages
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
// Routing
import { CoreRoutingModule } from './core.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [
    NotFoundPageComponent,
    ErrorPageComponent
  ],
  exports: [
    RouterModule
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Pages
import { AccountPageComponent } from './pages/account-page/account-page.component';
// Routing
import { AccountRoutingModule } from './account.routing.module';
// Shared
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ],
  declarations: [
    AccountPageComponent
  ]
})
export class AccountModule { }

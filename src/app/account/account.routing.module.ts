import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';
// Pages
import { AccountPageComponent } from './pages/account-page/account-page.component';

const routes: Routes = [
  {
    path: '',
    component: AccountPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginInfoPage } from './login-info.page';

const routes: Routes = [
  {
    path: '',
    component: LoginInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginInfoPageRoutingModule {}

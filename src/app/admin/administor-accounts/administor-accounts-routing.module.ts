import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministorAccountsPage } from './administor-accounts.page';

const routes: Routes = [
  {
    path: '',
    component: AdministorAccountsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministorAccountsPageRoutingModule {}

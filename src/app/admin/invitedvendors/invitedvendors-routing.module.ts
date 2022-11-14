import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitedvendorsPage } from './invitedvendors.page';

const routes: Routes = [
  {
    path: '',
    component: InvitedvendorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitedvendorsPageRoutingModule {}

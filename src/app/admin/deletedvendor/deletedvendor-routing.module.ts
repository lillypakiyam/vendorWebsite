import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletedvendorPage } from './deletedvendor.page';

const routes: Routes = [
  {
    path: '',
    component: DeletedvendorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletedvendorPageRoutingModule {}

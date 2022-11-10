import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorInfoPage } from './vendor-info.page';

const routes: Routes = [
  {
    path: '',
    component: VendorInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorInfoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxFormPage } from './tax-form.page';

const routes: Routes = [
  {
    path: '',
    component: TaxFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxFormPageRoutingModule {}

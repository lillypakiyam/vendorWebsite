import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalSubmissionPage } from './final-submission.page';

const routes: Routes = [
  {
    path: '',
    component: FinalSubmissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalSubmissionPageRoutingModule {}

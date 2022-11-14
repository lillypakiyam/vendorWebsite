import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopLevelPage } from './top-level.page';

const routes: Routes = [
  {
    path: '',
    component: TopLevelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopLevelPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalSubmissionPageRoutingModule } from './final-submission-routing.module';

import { FinalSubmissionPage } from './final-submission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalSubmissionPageRoutingModule
  ],
  declarations: [FinalSubmissionPage]
})
export class FinalSubmissionPageModule {}

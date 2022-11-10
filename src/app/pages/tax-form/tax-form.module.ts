import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxFormPageRoutingModule } from './tax-form-routing.module';

import { TaxFormPage } from './tax-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxFormPageRoutingModule
  ],
  declarations: [TaxFormPage]
})
export class TaxFormPageModule {}

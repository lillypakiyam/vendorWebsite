import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorInfoPageRoutingModule } from './vendor-info-routing.module';

import { VendorInfoPage } from './vendor-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorInfoPageRoutingModule
  ],
  declarations: [VendorInfoPage]
})
export class VendorInfoPageModule {}

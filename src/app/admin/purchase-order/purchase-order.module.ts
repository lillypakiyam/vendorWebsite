import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseOrderPageRoutingModule } from './purchase-order-routing.module';

import { PurchaseOrderPage } from './purchase-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseOrderPageRoutingModule
  ],
  declarations: [PurchaseOrderPage]
})
export class PurchaseOrderPageModule {}

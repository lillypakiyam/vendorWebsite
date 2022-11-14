import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletedvendorPageRoutingModule } from './deletedvendor-routing.module';

import { DeletedvendorPage } from './deletedvendor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletedvendorPageRoutingModule
  ],
  declarations: [DeletedvendorPage]
})
export class DeletedvendorPageModule {}

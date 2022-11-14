import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdministorAccountsPageRoutingModule } from './administor-accounts-routing.module';
import { AdministorAccountsPage } from './administor-accounts.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild()
    // AdministorAccountsPageRoutingModule
  ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [AdministorAccountsPage]
})
export class AdministorAccountsPageModule {}

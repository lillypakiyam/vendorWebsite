import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitedvendorsPageRoutingModule } from './invitedvendors-routing.module';

import { InvitedvendorsPage } from './invitedvendors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitedvendorsPageRoutingModule
  ],
  declarations: [InvitedvendorsPage]
})
export class InvitedvendorsPageModule {}

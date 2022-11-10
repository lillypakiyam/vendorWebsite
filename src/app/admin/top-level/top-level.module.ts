import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopLevelPageRoutingModule } from './top-level-routing.module';

import { TopLevelPage } from './top-level.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopLevelPageRoutingModule
  ],
  declarations: [TopLevelPage]
})
export class TopLevelPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreventivasPageRoutingModule } from './preventivas-routing.module';

import { PreventivasPage } from './preventivas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreventivasPageRoutingModule
  ],
  declarations: [PreventivasPage]
})
export class PreventivasPageModule {}

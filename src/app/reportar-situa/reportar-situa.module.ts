import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportarSituaPageRoutingModule } from './reportar-situa-routing.module';

import { ReportarSituaPage } from './reportar-situa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportarSituaPageRoutingModule
  ],
  declarations: [ReportarSituaPage]
})
export class ReportarSituaPageModule {}

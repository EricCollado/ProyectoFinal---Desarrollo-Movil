import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportarSituaPageRoutingModule } from './reportar-situa-routing.module';

import { ReportarSituaPage } from './reportar-situa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReportarSituaPageRoutingModule
  ],
  declarations: [ReportarSituaPage]
})
export class ReportarSituaPageModule {}

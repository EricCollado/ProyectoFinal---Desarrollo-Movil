import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaReportePageRoutingModule } from './mapa-reporte-routing.module';

import { MapaReportePage } from './mapa-reporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaReportePageRoutingModule
  ],
  declarations: [MapaReportePage]
})
export class MapaReportePageModule {}

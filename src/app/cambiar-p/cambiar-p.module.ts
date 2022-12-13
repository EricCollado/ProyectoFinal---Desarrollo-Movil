import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarPPageRoutingModule } from './cambiar-p-routing.module';

import { CambiarPPage } from './cambiar-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CambiarPPageRoutingModule
  ],
  declarations: [CambiarPPage]
})
export class CambiarPPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoMenuPageRoutingModule } from './nuevo-menu-routing.module';

import { NuevoMenuPage } from './nuevo-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoMenuPageRoutingModule
  ],
  declarations: [NuevoMenuPage]
})
export class NuevoMenuPageModule {}

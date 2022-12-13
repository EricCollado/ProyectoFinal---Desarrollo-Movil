import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasLoginPageRoutingModule } from './noticias-login-routing.module';

import { NoticiasLoginPage } from './noticias-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasLoginPageRoutingModule
  ],
  declarations: [NoticiasLoginPage]
})
export class NoticiasLoginPageModule {}

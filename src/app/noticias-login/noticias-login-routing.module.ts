import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasLoginPage } from './noticias-login.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasLoginPageRoutingModule {}

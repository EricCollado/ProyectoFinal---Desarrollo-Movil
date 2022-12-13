import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarPPage } from './cambiar-p.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarPPageRoutingModule {}

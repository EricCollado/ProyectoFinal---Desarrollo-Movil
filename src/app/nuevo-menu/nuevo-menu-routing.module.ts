import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoMenuPage } from './nuevo-menu.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoMenuPageRoutingModule {}

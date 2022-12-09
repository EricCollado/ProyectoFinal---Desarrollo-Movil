import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportarSituaPage } from './reportar-situa.page';

const routes: Routes = [
  {
    path: '',
    component: ReportarSituaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportarSituaPageRoutingModule {}

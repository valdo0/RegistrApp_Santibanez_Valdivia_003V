import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScannQrPage } from './scann-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ScannQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScannQrPageRoutingModule {}

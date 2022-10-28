import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScannQrPageRoutingModule } from './scann-qr-routing.module';

import { ScannQrPage } from './scann-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScannQrPageRoutingModule
  ],
  declarations: [ScannQrPage]
})
export class ScannQrPageModule {}

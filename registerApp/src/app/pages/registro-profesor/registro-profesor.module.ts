import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroProfesorPageRoutingModule } from './registro-profesor-routing.module';

import { RegistroProfesorPage } from './registro-profesor.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistroProfesorPageRoutingModule
  ],
  declarations: [RegistroProfesorPage]
})
export class RegistroProfesorPageModule {}

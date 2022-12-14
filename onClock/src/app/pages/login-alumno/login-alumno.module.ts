import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAlumnoPageRoutingModule } from './login-alumno-routing.module';

import { LoginAlumnoPage } from './login-alumno.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginAlumnoPageRoutingModule
  ],
  declarations: [LoginAlumnoPage]
})
export class LoginAlumnoPageModule {}

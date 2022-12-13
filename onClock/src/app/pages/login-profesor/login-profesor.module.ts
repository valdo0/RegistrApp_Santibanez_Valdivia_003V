import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginProfesorPageRoutingModule } from './login-profesor-routing.module';

import { LoginProfesorPage } from './login-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginProfesorPageRoutingModule
  ],
  declarations: [LoginProfesorPage]
})
export class LoginProfesorPageModule {}

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.page.html',
  styleUrls: ['./registro-alumno.page.scss'],
})
export class RegistroAlumnoPage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first')
  }
  usuario={
    nombre:'',
    correo:'',
    password:'',
    password2:'',
    sede:['maipu','san bernardo'],
  }
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}

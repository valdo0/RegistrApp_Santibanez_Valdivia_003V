import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.page.html',
  styleUrls: ['./registro-asistencia.page.scss'],
})
export class RegistroAsistenciaPage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first')
  }

}

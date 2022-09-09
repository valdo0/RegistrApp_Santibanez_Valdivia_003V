import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.page.html',
  styleUrls: ['./inicio-alumno.page.scss'],
})
export class InicioAlumnoPage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first')
  }

}

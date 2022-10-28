import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.page.html',
  styleUrls: ['./inicio-alumno.page.scss'],
})
export class InicioAlumnoPage implements OnInit {
  public name: string;
  public rol: string;
  constructor(private menuController:MenuController,
              private navController:NavController) { }

  ngOnInit() {
    this.name=localStorage.getItem('nombre');
    this.rol=localStorage.getItem('rol');
  }
  mostrarMenu(){
    this.menuController.open('first')
  }
  async Salir(){

    localStorage.removeItem('ingresado')
    localStorage.removeItem('rol')
    this.navController.navigateRoot('inicio');
  }
  
  

}

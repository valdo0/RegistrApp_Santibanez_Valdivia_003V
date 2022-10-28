import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-inicio-profesor',
  templateUrl: './inicio-profesor.page.html',
  styleUrls: ['./inicio-profesor.page.scss'],
})
export class InicioProfesorPage implements OnInit {
  public name: string;
  public rol: string;
  constructor(private menuController:MenuController) { }

  ngOnInit() {
    this.name=localStorage.getItem('nombre');
    this.rol=localStorage.getItem('rol');
  }
  mostrarMenu(){
    this.menuController.open('first')
  }

}

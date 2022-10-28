import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
interface Componente {
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private menuController:MenuController,
    private navController:NavController) {}
  componentes : Componente[] = [
    {
      icon: 'person-outline',
      name: 'Perfil',
      redirecTo: '/perfil'
    },
    {
      icon: 'calendar',
      name: 'Feriados',
      redirecTo: '/feriados'
    }
    
  ];

  async Salir(){

    localStorage.removeItem('ingresado')
    localStorage.removeItem('rol')
    this.navController.navigateRoot('inicio');
}

}


import { Component } from '@angular/core';
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
  constructor() {}
  componentes : Componente[] = [
    {
      icon: 'home-outline',
      name: 'Home',
      redirecTo: '/inicio'
    },
    {
      icon: 'log-in-outline',
      name: 'Login Alumno',
      redirecTo: '/alumno'
    },
    {
      icon: 'log-in-outline',
      name: 'Login Profesor',
      redirecTo: '/profesor'
    },
    {
      icon: 'person-circle-outline',
      name: 'Perfil',
      redirecTo: '/perfil'
    }
    
  ];
  componentes2 :Componente[] = [


  ]

}


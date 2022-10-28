import { Component, OnInit } from '@angular/core';

interface Componente {
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor() { }

    componentes : Componente[] = [
      {
        icon: 'home-outline',
        name: 'Home',
        redirecTo: '/inicio'
      },
      {
        icon: 'person-circle-outline',
        name: 'Perfil',
        redirecTo: '/perfil'
      },
      {
        icon: 'calendar',
        name: 'Feriados',
        redirecTo: '/feriados'
      }
      
    ];

  ngOnInit() {}

}

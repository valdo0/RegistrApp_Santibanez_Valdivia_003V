import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public name: string;
  public correo: string;
  public rol:string;

  constructor(private menuController:MenuController) { }

  ngOnInit() {
    this.name=localStorage.getItem('nombre');
    this.correo=localStorage.getItem('correo');
    this.rol=localStorage.getItem('rol');
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


}


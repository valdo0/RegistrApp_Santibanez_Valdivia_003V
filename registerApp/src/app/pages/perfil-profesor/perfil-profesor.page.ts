import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-profesor',
  templateUrl: './perfil-profesor.page.html',
  styleUrls: ['./perfil-profesor.page.scss'],
})
export class PerfilProfesorPage implements OnInit {
  public name: string;
  public correo: string;
  public rol:string;;
  constructor() { }

  ngOnInit() {
    this.name=localStorage.getItem('nombre');
    this.correo=localStorage.getItem('correo');
    this.rol=localStorage.getItem('rol');
  }

}

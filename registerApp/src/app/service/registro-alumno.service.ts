import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
export  interface UsuarioAlumno{
  nomUsuario:string;
  correoUsuario:string;
  sede:string;
  jornada:string;
  rol:string;
  passUsuario:string;
  repassUsuario:string;
}
const USERS_KEY = 'my-usuariosAlumno'

@Injectable({
  providedIn: 'root'
})
export class RegistroAlumnoService {

  private _storage;
  constructor(private storage:Storage) { 
    this.init();
  }

  async init(){
    const storage =await this.storage.create();
    this._storage = storage;
  }

  async addUsuario(dato:UsuarioAlumno):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos:UsuarioAlumno[])=>{
      if(datos){
        datos.push(dato);
        console.log(datos.length);
        return this.storage.set(USERS_KEY,datos);
      }
      else{
        return this.storage.set(USERS_KEY,[dato]);
      }
    })
  }
  async cantidad(){
     return USERS_KEY.length

  }

  async getUsuarios():Promise<UsuarioAlumno[]>{
    return this.storage.get(USERS_KEY);
  }

}

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
export interface UsuarioProfesor{
  nomUsuario:string;
  correoUsuario:string;
  sede:string;
  rol:string;
  passUsuario:string;
  repassUsuario:string;

}
const USERS_KEY = 'my-usuariosProfesor'
 var UsuarioProfeso=<UsuarioProfesor>{};
@Injectable({
  providedIn: 'root'
})
export class RegistroProfesorService {
  public _storage;
  constructor(private storage:Storage) { 
    this.init();
  }
  async init(){
    const storage =await this.storage.create();
    this._storage = storage;
  }

  async addUsuario(dato:UsuarioProfesor):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos:UsuarioProfesor[])=>{
      if(datos){
        datos.push(dato);
        return this.storage.set(USERS_KEY,datos);
      }
      else{
        return this.storage.set(USERS_KEY,[dato]);
      }
    })
  }
  async getUsuarios():Promise<UsuarioProfesor[]>{
    return this.storage.get(USERS_KEY);
  }

}

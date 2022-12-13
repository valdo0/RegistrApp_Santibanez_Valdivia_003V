import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/modelo';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  rol='';
  nombre='';
  login:boolean=false;
  constructor(private auth:FirestoreService,) { 
    this.auth.stateAuth().subscribe(res => {
      if(res){
        console.log('esta logeado');
        this.login=true;
        this.geteDatosUser(res.uid)
      }else{
        console.log('no esta logeado');
        this.login=false;
        localStorage.removeItem('rol');
        
      }
    })
  }

  ngOnInit() {
  }
  geteDatosUser(uid:string){
    const path ='Usuarios';
    const id =uid;
    this.auth.getDoc<Usuario>(path,id).subscribe(res => {
      console.log('datos',res);
      if(res){
        console.log(res.nombre);
        this.rol=res.rol;
        this.nombre=res.nombre;
      }
    })
  }

}

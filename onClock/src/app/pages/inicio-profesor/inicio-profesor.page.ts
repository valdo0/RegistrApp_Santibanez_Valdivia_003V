import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interface/modelo';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-profesor',
  templateUrl: './inicio-profesor.page.html',
  styleUrls: ['./inicio-profesor.page.scss'],
})
export class InicioProfesorPage implements OnInit {
  login:boolean=false;
  nombre='';
  constructor(private auth:FirestoreService,
              private menuController:MenuController,
              private _router:Router) { 
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
  async ngOnInit() {

  }
  salir(){
    this.auth.logout();
    this._router.navigate(['/inicio']);
    localStorage.removeItem('ingresado');
    localStorage.removeItem('rol');

  }
  geteDatosUser(uid:string){
    const path ='Usuarios';
    const id =uid;
    this.auth.getDoc<Usuario>(path,id).subscribe(res => {
      console.log('datos',res);
      if(res){
        console.log(res.nombre);
        this.nombre=res.nombre;
      }
    })
  }
  mostrarMenu(){
    this.menuController.enable(true,'first');
    this.menuController.open('first');
  }
  
}

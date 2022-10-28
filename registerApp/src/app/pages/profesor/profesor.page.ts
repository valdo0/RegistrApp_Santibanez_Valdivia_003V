import { Component, OnInit } from '@angular/core';
import { MenuController,NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { RegistroProfesorService } from 'src/app/service/registro-profesor.service';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {
  formularioLogin:FormGroup;
  constructor(private menuController:MenuController,
              private navController:NavController,
              private alertController:AlertController,
              private registroService:RegistroProfesorService,
              private toastController:ToastController,
              private fb:FormBuilder) {
                this.formularioLogin = fb.group({
                  'correo':new FormControl("",Validators.required),
                  'password':new FormControl("",Validators.required)
                })
               }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

  async Ingresar(){
    var f =this.formularioLogin.value;
    var a=0;
    this.registroService.getUsuarios().then(datos=>{

      if(datos!=null){
      for(let obj of datos){
        if(obj.correoUsuario===f.correo && obj.passUsuario===f.password){
          a=1;
          const rol=obj.rol;
          var nom=obj.nomUsuario;
          console.log('ingresado');
          localStorage.setItem('ingresado','true');
          localStorage.setItem('rol',rol);
          localStorage.setItem('nombre',nom);
          localStorage.setItem('correo',obj.correoUsuario);
          this.navController.navigateRoot('inicio-profesor');
          this.showToast('Bienvenido '+nom);
        }
      }
    }
      if(a==0){
        this.alertMsg();
      }
      
    })

  }
  async alertMsg(){
    const alert = await this.alertController.create({ 
      header: 'Error..',
      message: 'Los datos ingresados son incorrectos',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message:msg,
      duration:2000,
      position:'middle'
    })
    await toast.present();
  }


}

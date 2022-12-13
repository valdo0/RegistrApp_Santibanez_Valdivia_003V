import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormControl, FormGroup, Validators, FormBuilder, MinValidator} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.page.html',
  styleUrls: ['./registro-alumno.page.scss'],
})
export class RegistroAlumnoPage implements OnInit {
  formularioRegistro:FormGroup;

  constructor(public auth:FirestoreService,
              private _router: Router,
              private toastController:ToastController,
              private alertController:AlertController,
              private fb:FormBuilder ) {
                this.formularioRegistro = fb.group({
                  'nombre':new FormControl("",Validators.required),
                  //'correo':new FormControl("",Validators.required),
                  'correo':new FormControl(
                    "",[Validators.required,
                      Validators.pattern(
                        '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}'),
                      ]),
                 //'password':new FormControl("",Validators.required),.
                  'password':new FormControl(                    
                    "",[Validators.required,
                      Validators.minLength(6),              
                    ]),
                  //'confirmaPass':new FormControl("",Validators.required),
                  'confirmaPass':new FormControl("", [Validators.required]),
                  'sede':new FormControl("",Validators.required),
                  'jornada':new FormControl("",Validators.required)
                })
               }

  async ngOnInit() {
  }
  async registrarse(){
    var f=this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header:'Error..',
        message:'Debe rellenar todos los campos , la contraseña debe ser de un mínimo de 6 caracteres y debe respetar el formato de mail.',
        buttons:['Aceptar']
      })
      await alert.present();
    }else if(f.password===f.confirmaPass){
      const res = await this.auth.registrar(f.correo,f.password).catch(error => this.showToast('Email ya existente') );
      const uid = await this.auth.getUid();
      console.log(uid);
      this.guardarUsuario();
    }else{
      const alert = await this.alertController.create({
        header:'Error..',
        message:'Las contraseñas no coinciden',
        buttons:['Aceptar']
      })
      await alert.present();

    }
  }
  async guardarUsuario(){
    const uid = await this.auth.getUid();
    const path='Usuarios';
    var f=this.formularioRegistro.value;
    var data={
      rol:'alumno',
      nombre:f.nombre,
      sede:f.sede,
      jornada:f.jornada

    }
    this.auth.createDoc(data,path,uid).then( res => {
      console.log('guardado con exito');
      this.showToast('Usuario Creado!');
      this._router.navigate(['/inicio-alumno']);
      localStorage.setItem('ingresado','true');
      localStorage.setItem('rol','alumno');
    });

  }
  async showToast(msg){
    const toast = await this.toastController.create({
      message:msg,
      duration:2000
    })
    await toast.present();
  }

}

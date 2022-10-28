import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { RegistroAlumnoService, UsuarioAlumno } from '../../service/registro-alumno.service';
import { ToastController } from '@ionic/angular';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.page.html',
  styleUrls: ['./registro-alumno.page.scss'],
})
export class RegistroAlumnoPage implements OnInit {
  formularioRegistro:FormGroup;
  newUsuario:UsuarioAlumno=<UsuarioAlumno>{};
  //usuarios:UsuarioAlumno;

  constructor(private menuController:MenuController,
              private alertController:AlertController,
              private registroService:RegistroAlumnoService,
              private toastController:ToastController,
              private _router: Router,
              private fb:FormBuilder) {
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
                      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,})/),                    
                    ]),
                  //'confirmaPass':new FormControl("",Validators.required),
                  'confirmaPass':new FormControl("", [Validators.required]),
                  'sede':new FormControl("",Validators.required),
                  'jornada':new FormControl("",Validators.required)
                })
               }

  ngOnInit() {}
  

  mostrarMenu(){
    this.menuController.open('first')
  }

  async CrearUsuario(){
    var a=0;
    var form = this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header:'Error..',
        message:'Los datos ingresados son incorrectos',
        buttons:['Aceptar']
      })
      await alert.present();
    }
    else{

      this.formularioRegistro.reset();
      
        if(form.confirmaPass!=form.password){
          this.showToast('Contraseñas No Coinciden');
          a=1;    
        }
        this.registroService.getUsuarios().then(datos=>{
           var b=0;
           if(datos!=null){
            for(let obj of datos){
              if(obj.correoUsuario===form.correo ){
                a=1;
                this.showToast('Correo ya Existente');
              }
              b=b+1
            }
           }
           console.log(b)
          if(b==0){
            this.newUsuario.nomUsuario=form.nombre;
            this.newUsuario.correoUsuario=form.correo;
            this.newUsuario.sede=form.sede;
            this.newUsuario.rol='Alumno';
            this.newUsuario.passUsuario=form.password;
            this.newUsuario.repassUsuario=form.confirmaPass;
            this.registroService.addUsuario(this.newUsuario).then(dato=>{
              this.newUsuario=<UsuarioAlumno>{};
              this.showToast('Usuario Creado!');
              this._router.navigateByUrl('/alumno');
            })
            this.formularioRegistro.reset();
          }
          
          if(a==0 && b!=0){
            this.newUsuario.nomUsuario=form.nombre;
            this.newUsuario.correoUsuario=form.correo;
            this.newUsuario.sede=form.sede;
            this.newUsuario.rol='Alumno';
            this.newUsuario.passUsuario=form.password;
            this.newUsuario.repassUsuario=form.confirmaPass;
            this.registroService.addUsuario(this.newUsuario).then(dato=>{
              this.newUsuario=<UsuarioAlumno>{};
              this.showToast('Usuario Creado!');
              this._router.navigateByUrl('/alumno');
            })
            this.formularioRegistro.reset();
          }

          
        })
}
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message:msg,
      duration:2000
    })
    await toast.present();
  }



}

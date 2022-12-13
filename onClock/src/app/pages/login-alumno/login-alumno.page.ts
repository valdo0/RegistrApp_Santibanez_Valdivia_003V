import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Usuario } from 'src/app/interface/modelo';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.page.html',
  styleUrls: ['./login-alumno.page.scss'],
})
export class LoginAlumnoPage implements OnInit {
  formularioLogin :FormGroup;
  uid='';

  constructor(public firebaseauth:FirestoreService,
              private fb:FormBuilder,
              private _router:Router,
              private toastController:ToastController
            ) {
              this.firebaseauth.stateAuth().subscribe( res => {
                if(res !== null){
                  this.uid = res.uid;
                  this.firebaseauth.getDoc<Usuario>('Usuarios',this.uid).subscribe(res => {
                    console.log('datos',res);
                    if(res.rol==='alumno'){
                      localStorage.setItem('rol','alumno');
                      this._router.navigate(['/inicio-alumno']);
                    }else if(res.rol==='profesor'){
                      localStorage.setItem('rol','profesor');
                      this._router.navigate(['/inicio-profesor']);                  
                    }
                  })
                  console.log(this.uid+'hola');
                }else{
                  console.log('null')
                }
              }),
                this.formularioLogin = fb.group({
                  'correo':new FormControl("",Validators.required),
                  'password':new FormControl("",Validators.required)
                })
               }

  ngOnInit() {
  }
  ingresar(){
    var f=this.formularioLogin.value;
      this.firebaseauth.login(f.correo,f.password).then( res =>{
        console.log(res);
        localStorage.setItem('ingresado','true');
        this.showToast('Ingresado con exito!');
  
      }).catch(error => this.showToast('Credenciales No Existen o No Corresponden!'));
    

  }
  async showToast(msg){
    const toast = await this.toastController.create({
      message:msg,
      duration:2000
    })
    await toast.present();
  }
}

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first')
  }
  usuario={
    nombre:'',
    correo:'',
    password:'',
    password2:'',
    codigo:'',
  }
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}

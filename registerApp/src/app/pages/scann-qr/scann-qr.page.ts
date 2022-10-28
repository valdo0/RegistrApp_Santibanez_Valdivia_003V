import { Component, OnInit } from '@angular/core';
import { AlertController,MenuController } from '@ionic/angular';
@Component({
  selector: 'app-scann-qr',
  templateUrl: './scann-qr.page.html',
  styleUrls: ['./scann-qr.page.scss'],
})
export class ScannQrPage implements OnInit {

  constructor(private alertController: AlertController,private menuController:MenuController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Excelente',
      subHeader: '',
      message: '!Registrada tu asistencia!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async alertFoto() {
    const foto = await this.alertController.create({
      header: '¡Alerta!',
      subHeader: '',
      message: 'Se requieren permisos para acceder a la camara',
      buttons: ['Rechazar', 'Permitir'],
    });

    await foto.present();
    
  }
  mostrarMenu(){
    this.menuController.open('first')
  }

}

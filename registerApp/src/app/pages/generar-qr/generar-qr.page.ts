import { Component, OnInit } from '@angular/core';
import { AlertController,MenuController } from '@ionic/angular';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {

  constructor(private alertController: AlertController,private menuController:MenuController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Excelente!',
      subHeader: '',
      message: '¡Se ha generado QR!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async alertFoto() {
    const foto = await this.alertController.create({
      header: 'Alerta',
      subHeader: '¿Deseas tomar una foto?',
      message: '',
      buttons: ['OK','cancelar'],
    });

    await foto.present();
    
  }
  mostrarMenu(){
    this.menuController.open('first')
  }
}

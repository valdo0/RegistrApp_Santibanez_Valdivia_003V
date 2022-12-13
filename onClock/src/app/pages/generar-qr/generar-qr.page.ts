import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {
  qrCodeString='';
  fecha='';
  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }
  generarQr(){
    this.qrCodeString='hola';
    this.fecha=Date.now().toString();
    this.qrCodeString='hola'+this.fecha;
  }
  mostrarMenu(){
    this.menuController.enable(true,'first');
    this.menuController.open('first');
  }
  
}

import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage implements OnInit {

  constructor(private photoService:PhotoService,
              private menuController:MenuController) { }

  ngOnInit() {
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  mostrarMenu(){
    this.menuController.enable(true,'second')
    this.menuController.open('second');
  }

}

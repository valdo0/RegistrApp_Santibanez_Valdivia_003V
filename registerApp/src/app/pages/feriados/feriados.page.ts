import { Component, OnInit } from '@angular/core';
import { FeriadosService } from 'src/app/service/feriados.service';
import { Data } from '../../interfaces/interface';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {
  feriados:Data[]=[];
  constructor(private menuController: MenuController,
     private feriadosService:FeriadosService
  ) { }

  ngOnInit() {
    this.feriadosService.getTop().subscribe(resp => {
      console.log('noticias', resp);
      this.feriados.push(...resp.data);
    })
  }
  mostrarMenu()
  {
    this.menuController.open('first');
  }

}

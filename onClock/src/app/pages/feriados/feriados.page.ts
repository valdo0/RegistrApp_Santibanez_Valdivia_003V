import { Component, OnInit } from '@angular/core';
import { Data } from '../../interface/modelo';
import { FeriadosService } from '../../services/feriados.service';
@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {
  feriados:Data[]=[];
  constructor(private feriadosService:FeriadosService) { }

  ngOnInit() {
    this.feriadosService.getTop().subscribe(resp => {
      console.log('noticias', resp);
      this.feriados.push(...resp.data);
    })
  }

}

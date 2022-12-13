import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Top } from '../interface/modelo';
@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  constructor(private httpClient:HttpClient) { }
  getTop(){
    return (this.httpClient.get<Top>('https://api.victorsanmartin.com/feriados/en.json'));

  }
}

import { Component } from '@angular/core';
import { FirestoreService } from './services/firestore.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private auth:FirestoreService,
    private _router:Router
  ) {}
  async salir(){
    this.auth.logout();
    localStorage.removeItem('ingresado');
    localStorage.removeItem('rol');
    this._router.navigate(['/inicio']);
    console.log('funciona uwu')

  }
  redireccionar(page){
    this._router.navigate([page]);
  }

}

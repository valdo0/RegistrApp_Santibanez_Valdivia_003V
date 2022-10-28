import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {
  constructor(private navController:NavController){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (localStorage.getItem('ingresado')){
        const rolEsperado = route.data.rol;
        console.log(rolEsperado);
        if(localStorage.getItem('rol')==rolEsperado || !rolEsperado){
          return true;
        }
        else{
          return false;
        }
      }
      else{
        this.navController.navigateRoot('login');
        return false;
      }
  }
  
}

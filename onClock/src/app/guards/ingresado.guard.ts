import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/firestore.service';
import { Usuario } from '../interface/modelo';
@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {
  constructor(private auth:FirestoreService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('ingresado')==='true'){
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
        return false;
      }
  }
  
}

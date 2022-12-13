import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/firestore.service';
import { NavController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {
  login:boolean=false;
  constructor(private auth:FirestoreService, private navController:NavController){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      localStorage.getItem('ingresado')
      if(localStorage.getItem('ingresado')==='true'){
        return false
      }else{
       return true
      }
  }


  
}

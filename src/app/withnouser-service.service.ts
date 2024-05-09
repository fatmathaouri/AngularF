import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class WithnouserServiceService {

  constructor(private router : Router) { }

  canActivate(){
    if(!localStorage.getItem('accessToken')){
      this.router.navigate(["/login"])
    }
    return true;
  }
}

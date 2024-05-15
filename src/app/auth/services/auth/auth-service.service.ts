import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(){}

  private logged = new BehaviorSubject(this.userIsLogged());
  logged$ = this.logged.asObservable();

  userIsLogged(){
    const userLogin = localStorage.getItem("Auth");
    if(userLogin === 'true'){
      console.log(true);
      return true;
    }
    return false;
  }

  userLogin(){
    localStorage.setItem("Auth", 'true');
  }

  userLogOut(){
    localStorage.setItem("Auth", 'false')
  }

}

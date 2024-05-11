import { NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { SystemService } from '../../../shared/services/system/system.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  darkTheme = signal(false);
  public passwordInvalid = signal(false);
  public hidePassword = signal(true);
  public showRegisterForm = false;
  public showForm = true;
 

  constructor(
    private systemService : SystemService,
    private router : Router,
  ){}

  ngOnInit() : void {
    this.systemService.preferences$.subscribe((preferences : any) => {
      this.getPreferences();
    });
  }

  getPreferences(){
    this.darkTheme.set(this.systemService.getThemeState());
  }

  redirectToCourses() {
    console.log('Redirigiendo a cursos');
    this.router.navigate(['cursos/inicio']);
  }  
  
  togglePassword(): void {
    if(this.hidePassword() === true){
      this.hidePassword.set(false);
    }else{
      this.hidePassword.set(true);
    }
  }

  toggleForm(): void {
    this.showRegisterForm = !this.showRegisterForm;
  }

  closeForm(): void {
    this.showForm = false;
}



}
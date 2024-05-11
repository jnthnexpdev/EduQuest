import { NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { SystemService } from '../../../shared/services/system/system.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  darkTheme = signal(false);
  public passwordInvalid = signal(false);
  public hidePassword = signal(true);
  public showRegisterForm = false;
  public showForm = true;
  public loginForm !: FormGroup;

  constructor(
    private systemService : SystemService,
    private formBuilder : FormBuilder,
    private router : Router,
  ){
    this.loginForm = this.formBuilder.group({
      correo : ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_%+-][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password : ['', Validators.required]
    });
  }

  ngOnInit() : void {
    this.systemService.preferences$.subscribe((preferences : any) => {
      this.getPreferences();
    });
  }

  getPreferences(){
    this.darkTheme.set(this.systemService.getThemeState());
  }

  redirectToCourses() {
<<<<<<< HEAD
=======
    console.log('Redirigiendo a cursos');
>>>>>>> d9a068d293e141428cd360bb4fb45a9ec7b006b6
    this.router.navigate(['/cursos/inicio']);
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
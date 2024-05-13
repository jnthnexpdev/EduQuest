import { NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { SystemService } from '../../../shared/services/system/system.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  darkTheme = signal(false);
  public passwordInvalid = signal(false);
  public hidePassword = signal(true);
  public loginForm !: FormGroup;
  isUserLoggedIn: boolean = false; // Suponiendo que inicialmente el usuario no ha iniciado sesión


  constructor(
    private systemService: SystemService,
    private formBuilder: FormBuilder,
    private matDialog : MatDialog,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_%+-][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.systemService.preferences$.subscribe((preferences: any) => {
      this.getPreferences();
    });
  }

  getPreferences() {
    this.darkTheme.set(this.systemService.getThemeState());
  }

  redirectToCourses() {
    this.router.navigate(['/cursos/inicio']);
    this.matDialog.closeAll();
  }

  togglePassword(): void {
    if (this.hidePassword() === true) {
      this.hidePassword.set(false);
    } else {
      this.hidePassword.set(true);
    }
  }
  Register() : void{
    // this.alertService.error('Revisa tu informacion y vuelve a intentarlo', 5000);
    this.matDialog.closeAll();
    this.matDialog.open(RegisterComponent);
  }

  closeForm() : void{
    this.matDialog.closeAll();
  }
  
}
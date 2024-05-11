import { NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { SystemService } from '../../../shared/services/system/system.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgClass, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  darkTheme = signal(false);
  public passwordInvalid = signal(false);
  public hidePassword = signal(true);
  public loginForm !: FormGroup;

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

  togglePassword(): void {
    if (this.hidePassword() === true) {
      this.hidePassword.set(false);
    } else {
      this.hidePassword.set(true);
    }
  }
  closeForm() : void{
    this.matDialog.closeAll();
  }

 login() : void{
  this.matDialog.closeAll();
  this.matDialog.open(LoginComponent);
  
 }

}

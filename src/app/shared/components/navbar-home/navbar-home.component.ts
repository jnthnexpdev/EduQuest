import { Component, OnInit, signal, Output, EventEmitter  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { SystemService } from '../../../shared/services/system/system.service';

import { LoginComponent } from '../../../auth/components/login/login.component';

@Component({
  selector: 'app-navbar-home',
  standalone: true,
  templateUrl: './navbar-home.component.html',
  styleUrl: './navbar-home.component.css',
  imports: [NgClass]
})
export class NavbarHomeComponent implements OnInit{

  darkTheme = signal(false);

  constructor(
    private matDialog: MatDialog,
    private systemService: SystemService,
    private alertService: AlertService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.systemService.preferences$.subscribe((preferences: any) => {
      this.getPreferences();
    });
  }

  getPreferences() {
    this.darkTheme.set(this.systemService.getThemeState());
  }

  login(): void {
    // this.alertService.error('Revisa tu informacion y vuelve a intentarlo', 5000);
    this.matDialog.open(LoginComponent);

  }

  scrollToPlans() {
    const element = document.getElementById('plans');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToCategories() {
    const element = document.getElementById('categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // redirectToForum() {
  //   this.router.navigate(['/foro/inicio']);
  // }
// navbar-courses.component.ts
// redirectToForum(source: string) {
//   if (source === 'home') {
//     this.router.navigate(['/foro/inicio']);
//   }
// }
@Output() forumClicked = new EventEmitter<void>();

redirectToForum() {
  this.router.navigate(['/foro/inicio']);
}


  redirectToInicio() {
    this.router.navigate(['/inicio']);
  }

}

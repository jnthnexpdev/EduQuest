import { Component, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationEnd } from '@angular/router';
import { NgClass } from '@angular/common';
import { AlertService } from '../../services/alert/alert.service';
import { SystemService } from '../../services/system/system.service';
import { AuthServiceService } from '../../../auth/services/auth/auth-service.service';

import { LoginComponent } from '../../../auth/components/login/login.component';

@Component({
  selector: 'app-menu-home',
  standalone: true,
  templateUrl: './menu-home.component.html',
  styleUrl: './menu-home.component.css',
  imports: [NgClass]
})
export class MenuHomeComponent implements OnInit {

  public darkTheme = signal(false);
  showIcon: boolean = false;
  public isAuth = signal(false);

  constructor(
    private matDialog: MatDialog,
    private systemService: SystemService,
    private alertService: AlertService,
    private router: Router,
    private authService: AuthServiceService,

  ) { }

  ngOnInit(): void {
    this.systemService.preferences$.subscribe((preferences: any) => {
      this.getPreferences();
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateIconState();
      }
    });
    this.updateIconState();
  }

  getPreferences() {
    this.darkTheme.set(this.systemService.getThemeState());
  }


  updateIconState() {
    const currentUrl = this.router.url;
    this.showIcon = currentUrl.startsWith('/foro') || currentUrl.startsWith('/cursos') && currentUrl !== '/inicio';
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

  redirectToForum() {
    this.router.navigate(['/foro/inicio']);
  }


  redirectToInicio() {
    this.router.navigate(['/inicio']);
  }

}

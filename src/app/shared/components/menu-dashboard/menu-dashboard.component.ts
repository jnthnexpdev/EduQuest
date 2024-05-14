import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { NgClass } from '@angular/common';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { SystemService } from '../../../shared/services/system/system.service';


@Component({
  selector: 'app-menu-dashboard',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './menu-dashboard.component.html',
  styleUrl: './menu-dashboard.component.css'
})
export class MenuDashboardComponent implements OnInit {

  darkTheme = signal(false);


  public  = false;
  public showIcon = false;


  constructor(
    private systemService: SystemService,
    private alertService: AlertService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.systemService.preferences$.subscribe((preferences: any) => {
      this.getPreferences();
    });
    this.router.events.subscribe(() => {
      this.updateIconState();
    });
    this.updateIconState();
  }

  
  getPreferences() {
    this.darkTheme.set(this.systemService.getThemeState());
  }
  
  updateIconState() {
    const currentUrl = this.router.url;
    this.showIcon = currentUrl.startsWith('/foro');
  }
  
  
  redirectToHome() {
    // this.alertService.question('Saldrás de tu sesión actual ¿Deseas continuar?', 500);
    this.router.navigate(['/inicio']);
  }

  redirectToForum() {
    this.router.navigate(['/foro/inicio']);
  }
  
  redirectToCourses() {
    this.router.navigate(['/cursos/inicio']);
  }
  

  
}

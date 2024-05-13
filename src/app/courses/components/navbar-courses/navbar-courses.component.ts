import { Component, OnInit, signal } from '@angular/core';

import { NgClass } from '@angular/common';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { SystemService } from '../../../shared/services/system/system.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-courses',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar-courses.component.html',
  styleUrl: './navbar-courses.component.css'
})
export class NavbarCoursesComponent implements OnInit {

  darkTheme = signal(false);

  constructor(
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
  
  redirectToHome() {
    this.alertService.question('Saldrás de tu sesión actual ¿Deseas continuar?', 5000);
    this.router.navigate(['/inicio']);
  }
  redirectToForum() {
    this.router.navigate(['/foro/inicio']);
  }

  redirectToProfile() {
    this.router.navigate(['/cursos/perfil']);
  }

 
  

}

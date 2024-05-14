import { Component, OnInit, signal, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { NgClass } from '@angular/common';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { SystemService } from '../../../shared/services/system/system.service';

@Component({
  selector: 'app-navbar-courses',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './navbar-courses.component.html',
  styleUrl: './navbar-courses.component.css'
})
export class NavbarCoursesComponent implements OnInit {

  darkTheme = signal(false);
  @Output() forumClicked = new EventEmitter<void>();

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
    // this.alertService.question('Saldrás de tu sesión actual ¿Deseas continuar?', 500);
    this.router.navigate(['/inicio']);
  }
  // redirectToForum() {
  //   this.router.navigate(['/foro/inicio']);
  // }

  // redirectToForum(source: string) {
  //   if (source === 'courses') {
  //     this.router.navigate(['/foro/inicio']);
  //   }
  // }
  
  redirectToForum() {
    this.router.navigate(['/foro/inicio']);
}

  
  redirectToProfile() {
    this.router.navigate(['/cursos/perfil']);
  }
}

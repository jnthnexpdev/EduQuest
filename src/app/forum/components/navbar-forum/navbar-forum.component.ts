import { Component, OnInit, signal } from '@angular/core';

import { NgClass } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { SystemService } from '../../../shared/services/system/system.service';



@Component({
  selector: 'app-navbar-forum',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar-forum.component.html',
  styleUrl: './navbar-forum.component.css'
})
export class NavbarForumComponent  implements OnInit {

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

  redirectToProfile() {
    this.router.navigate(['/foro/perfil']);
  }

  redirectToCourses() {
    this.router.navigate(['/cursos/inicio']);
  }
}

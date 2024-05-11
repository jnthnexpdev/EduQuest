import { Component, OnInit, signal } from '@angular/core';

import { NgClass } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { SystemService } from '../../../shared/services/system/system.service';
import { CategoriesComponent } from "../../../shared/components/categories/categories.component";



@Component({
    selector: 'app-forum-page',
    standalone: true,
    templateUrl: './forum-page.component.html',
    styleUrl: './forum-page.component.css',
    imports: [NgClass, CategoriesComponent]
})
export class ForumPageComponent  implements OnInit{
  
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
}

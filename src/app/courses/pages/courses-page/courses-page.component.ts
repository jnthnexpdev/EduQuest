import { Component, OnInit, signal } from '@angular/core';

import { NgClass } from '@angular/common';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { SystemService } from '../../../shared/services/system/system.service';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoriesComponent } from '../../../shared/components/categories/categories.component';


@Component({
  selector: 'app-courses-page',
  standalone: true,
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.css',
  imports: [NgClass, CategoriesComponent],
})
export class CoursesPageComponent implements OnInit {

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

  cards = [
    { title: 'Gastronomía', icon: '' },
    { title: 'Salud y Deportes', icon: 'path_to_icon_2.svg' },
    { title: 'Marketing y Ventas', icon: 'path_to_icon_3.svg' },
    { title: 'Finanzas', icon: 'path_to_icon_4.svg' },
    { title: 'Programación', icon: 'path_to_icon_5.svg' },
    { title: 'Diseño', icon: 'path_to_icon_6.svg' },
    { title: 'Idiomas', icon: 'path_to_icon_7.svg' }, 
    { title: 'Música', icon: 'path_to_icon_7.sv g' },
    // Add more cards if needed
  ];

  currentIndex = 0;

  next() {
    if (this.currentIndex < this.cards.length - 4) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  
}

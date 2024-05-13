import { Component, OnInit, signal } from '@angular/core';

import { NgClass } from '@angular/common';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { SystemService } from '../../../shared/services/system/system.service';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoriesComponent } from '../../../shared/components/categories/categories.component';
import { NavbarCoursesComponent } from '../../../courses/components/navbar-courses/navbar-courses.component';

@Component({
  selector: 'app-courses-page',
  standalone: true,
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.css',
  imports: [NgClass, CategoriesComponent, NavbarCoursesComponent],
})
export class CoursesPageComponent implements OnInit {

  darkTheme = signal(false);
  isForumPage = false;
  
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
  
}

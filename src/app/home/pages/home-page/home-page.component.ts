import { Component, OnInit, signal } from '@angular/core';

import { AlertService } from '../../../shared/services/alert/alert.service';
import { SystemService } from '../../../shared/services/system/system.service';
import { NgClass } from '@angular/common';
import { Route, Router } from '@angular/router';

import { PlansComponent } from '../../../shared/components/plans/plans.component';
import { CategoriesComponent } from '../../../shared/components/categories/categories.component';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { MenuHomeComponent } from "../../../shared/components/menu-home/menu-home.component";
import { MenuDashboardComponent } from "../../../shared/components/menu-dashboard/menu-dashboard.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [NgClass, CategoriesComponent, PlansComponent, FooterComponent, MenuHomeComponent,MenuDashboardComponent]
})
export class HomePageComponent implements OnInit {

  darkTheme = signal(false);

  constructor(
    private router : Router,
    private systemService: SystemService,
    private alertService: AlertService,

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

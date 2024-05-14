import { Component, OnInit, signal } from '@angular/core';

import { AlertService } from '../../../shared/services/alert/alert.service';
import { SystemService } from '../../../shared/services/system/system.service';
import { NgClass } from '@angular/common';

import { PlansComponent } from '../../../shared/components/plans/plans.component';
import { CategoriesComponent } from '../../../shared/components/categories/categories.component';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { NavbarHomeComponent } from "../../../shared/components/navbar-home/navbar-home.component";
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [NgClass, CategoriesComponent, PlansComponent, FooterComponent, NavbarHomeComponent]
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
    console.log(this.router.url);
  }

  getPreferences() {
    this.darkTheme.set(this.systemService.getThemeState());
  }


}

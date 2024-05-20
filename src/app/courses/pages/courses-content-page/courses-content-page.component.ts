import { Component, signal, OnInit } from '@angular/core';
import { SystemService } from '../../../shared/services/system/system.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuDashboardComponent } from "../../../shared/components/menu-dashboard/menu-dashboard.component";
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-courses-content-page',
    standalone: true,
    templateUrl: './courses-content-page.component.html',
    styleUrl: './courses-content-page.component.css',
    imports: [MenuDashboardComponent, NgClass]
})
export class CoursesContentPageComponent implements OnInit {

  darkTheme = signal(false);

  constructor(
    private systemService : SystemService,
    private router: Router,
  ){}

  ngOnInit() : void {
    this.systemService.preferences$.subscribe((preferences : any) => {
      this.getPreferences();
    });
  }

  getPreferences(){
    this.darkTheme.set(this.systemService.getThemeState());
  }

  redirectToContentClass() {
    this.router.navigate(['/cursos/contenido/clase']);
  }
}

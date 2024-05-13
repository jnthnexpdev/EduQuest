import { Component, OnInit, signal } from '@angular/core';

import { NgClass } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { SystemService } from '../../../shared/services/system/system.service';
import { NavbarHomeComponent } from "../../../shared/components/navbar-home/navbar-home.component";
import { NavbarForumComponent } from "../../../forum/components/navbar-forum/navbar-forum.component";


@Component({
    selector: 'app-forum-page',
    standalone: true,
    templateUrl: './forum-page.component.html',
    styleUrl: './forum-page.component.css',
    imports: [NgClass, NavbarHomeComponent, NavbarForumComponent ]
})
export class ForumPageComponent  implements OnInit{
  
  darkTheme = signal(false);
  isNavbarHome: boolean = true;
  isForumPage: boolean = false;

  constructor(
    private systemService: SystemService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute, 

  ) { }

  ngOnInit(): void {
    this.systemService.preferences$.subscribe((preferences: any) => {
      this.getPreferences();
    });

    this.route.url.subscribe(url => {
      this.isNavbarHome = url[0].path !== 'cursos';
    });
  }
  getPreferences() {
    this.darkTheme.set(this.systemService.getThemeState());
  }

onForumClicked() {
  this.isForumPage = true;
  this.isNavbarHome = false; 
}

redirectToForum() {
  this.router.navigate(['/foro/inicio']);
}


}

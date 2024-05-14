import { Component, OnInit, signal } from '@angular/core';

import { NgClass } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { SystemService } from '../../../shared/services/system/system.service';
import { MenuHomeComponent } from "../../../shared/components/menu-home/menu-home.component";
import { MenuDashboardComponent } from "../../../shared/components/menu-dashboard/menu-dashboard.component";


@Component({
    selector: 'app-forum-page',
    standalone: true,
    templateUrl: './forum-page.component.html',
    styleUrl: './forum-page.component.css',
    imports: [NgClass, MenuHomeComponent, MenuDashboardComponent ]
})
export class ForumPageComponent  implements OnInit{
  
  darkTheme = signal(false);
  public logedUser =false;
  

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
  
  }
  
  getPreferences() {
    this.darkTheme.set(this.systemService.getThemeState());
  }



  redirectToForum() {
    this.router.navigate(['/foro/inicio']);
}

}

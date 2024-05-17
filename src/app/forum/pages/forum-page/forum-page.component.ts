import { Component, OnInit, signal } from '@angular/core';

import { NgClass } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { SystemService } from '../../../shared/services/system/system.service';
import { MenuHomeComponent } from "../../../shared/components/menu-home/menu-home.component";
import { MenuDashboardComponent } from "../../../shared/components/menu-dashboard/menu-dashboard.component";
import { Subscription, window } from 'rxjs';
import { AuthServiceService } from '../../../auth/services/auth/auth-service.service';


@Component({
    selector: 'app-forum-page',
    standalone: true,
    templateUrl: './forum-page.component.html',
    styleUrl: './forum-page.component.css',
    imports: [NgClass, MenuHomeComponent, MenuDashboardComponent ]
})
export class ForumPageComponent  implements OnInit{
  
  darkTheme = signal(false);
  public isAuth = signal(false);
  ShowContent1 = signal(false);
  ShowContent2 = signal(false);
  public userLoggedSubscription: Subscription | undefined;
  public logedUser =false;
  

  constructor(
    private systemService: SystemService,
    private alertService: AlertService,
    private authService : AuthServiceService,
    private router: Router,
    private route: ActivatedRoute, 

  ){}

  ngOnInit(): void {
   
    this.systemService.preferences$.subscribe((preferences: any) => {
      this.getPreferences();
    }); 

    this.authService.logged$.subscribe((preferences: any) => {
      this.updateSession();
      
    }); 

    this.updateSession();
  }
  
  getPreferences() {
    this.darkTheme.set(this.systemService.getThemeState());
  }

  ContentCards1(): void {
    this.ShowContent1.set(!this.ShowContent1());
  }
  ContentCards2(): void {
    this.ShowContent2.set(!this.ShowContent2());
  }


  updateSession(){
    this.isAuth.set(this.authService.userIsLogged());
  }

  redirectToForum() {
    this.router.navigate(['/foro/inicio']);
    
}

}

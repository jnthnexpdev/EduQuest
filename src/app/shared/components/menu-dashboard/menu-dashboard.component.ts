  import { Component, OnInit, signal } from '@angular/core';
  import { Router, NavigationEnd } from '@angular/router';

  import { NgClass } from '@angular/common';
  import { MatDialog } from '@angular/material/dialog';
  import { AlertService } from '../../../shared/services/alert/alert.service';
  import { SystemService } from '../../../shared/services/system/system.service';
  import { AuthServiceService } from '../../../auth/services/auth/auth-service.service';
  import { NotificationsComponent } from '../../../forum/components/notifications/notifications.component';
  import { ProfileForumComponent } from '../../../forum/components/profile-forum/profile-forum.component';
  import { ProfileCoursesComponent } from '../../../courses/components/profile-courses/profile-courses.component';

  @Component({
    selector: 'app-menu-dashboard',
    standalone: true,
    imports: [NgClass, NotificationsComponent, ProfileForumComponent, ProfileCoursesComponent],
    templateUrl: './menu-dashboard.component.html',
    styleUrl: './menu-dashboard.component.css'
  })
  export class MenuDashboardComponent implements OnInit {

    darkTheme = signal(false);
    showIcon: boolean = false;
    currentContext: string = 'cursos';
    showPopup = false;

    constructor(
      private systemService: SystemService,
      private alertService: AlertService,
      private authService: AuthServiceService,
      private router: Router,
      private matDialog: MatDialog,
    ) { }

    ngOnInit(): void {
      this.systemService.preferences$.subscribe((preferences: any) => {
        this.getPreferences();
      });

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.updateIconState();
          this.updateContext(); 
        }
      });
      this.updateIconState();
      this.updateContext();
    }


    getPreferences() {
      this.darkTheme.set(this.systemService.getThemeState());
    }

    updateIconState() {
      const currentUrl = this.router.url;
      this.showIcon = currentUrl.startsWith('/foro') && currentUrl !== '/cursos';
    }

    updateContext() {
      const currentUrl = this.router.url;
      if (currentUrl.includes('foro')) {
        this.currentContext = 'foro';
      } else if (currentUrl.includes('cursos')) {
        this.currentContext = 'cursos';
      }
    }
    redirectToHome() {
      this.authService.userLogOut();
      this.router.navigate(['/inicio']);
    }

    redirectToForum() {
      this.router.navigate(['/foro/inicio']);
    }
    
    redirectToCourses() {
      this.router.navigate(['/cursos/inicio']);
    }

        
    redirectToUserCourses() {
      this.router.navigate(['/cursos/mis-cursos']);
    }

    navigateToProfile(from: string): void {
      this.currentContext = from;
      this.router.navigate(['/eduquest/perfil'], { queryParams: { from: from } });
    }

    redirectToSettings(from: string): void {
      this.currentContext = from;
      this.router.navigate(['/eduquest/ajustes'], { queryParams: { from: from } });
    }

    togglePopup() {
      this.showPopup = !this.showPopup;
    }
  }

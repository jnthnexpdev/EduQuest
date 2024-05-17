import { Component, OnInit, signal } from '@angular/core';
import { SystemService } from '../../../shared/services/system/system.service';
import { NgClass } from '@angular/common';
import { MenuDashboardComponent } from '../../../shared/components/menu-dashboard/menu-dashboard.component';
import { ProfileCoursesComponent } from '../../../courses/components/profile-courses/profile-courses.component';
import { ProfileForumComponent } from '../../../forum/components/profile-forum/profile-forum.component';
import { PlansComponent } from '../../../shared/components/plans/plans.component';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgClass, MenuDashboardComponent, ProfileCoursesComponent, ProfileForumComponent, PlansComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  darkTheme = signal(false);
  profileImage: string = '/assets/img/profile/user2.jpeg';
  showSaveButton: boolean = false;
  ShowContent = signal(false);
  showCoursesProfile = false;
  showForumProfile = false;

  constructor(
    private systemService: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.systemService.preferences$.subscribe((preferences: any) => {
      this.getPreferences();
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateProfileView();
    });

    this.updateProfileView();
  }

  getPreferences() {
    this.darkTheme.set(this.systemService.getThemeState());
  }

  ContentCards(): void {
    this.ShowContent.set(!this.ShowContent());
  }

  private updateProfileView(): void {
    const currentUrl = this.router.url;

    if (currentUrl.includes('cursos') || this.route.snapshot.queryParams['from'] === 'cursos') {
      this.showCoursesProfile = true;
      this.showForumProfile = false;
    } else if (currentUrl.includes('foro' )) {
      this.showCoursesProfile = false;
      this.showForumProfile = true;
    } else {
      this.showCoursesProfile = false;
      this.showForumProfile = false;
    }
  }
}

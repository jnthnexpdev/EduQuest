import { Component, OnInit, signal } from '@angular/core';
import { SystemService } from '../../../shared/services/system/system.service';
import { NgClass } from '@angular/common';
import { MenuDashboardComponent } from '../../../shared/components/menu-dashboard/menu-dashboard.component';
import { ProfileCoursesComponent } from '../../../courses/components/profile-courses/profile-courses.component';
import { ProfileForumComponent } from '../../../forum/components/profile-forum/profile-forum.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgClass, MenuDashboardComponent,ProfileCoursesComponent,ProfileForumComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  darkTheme = signal(false);

  constructor(
    private systemService : SystemService
  ){}

  ngOnInit() : void {
    this.systemService.preferences$.subscribe((preferences : any) => {
      this.getPreferences();
    });
  }

  getPreferences(){
    this.darkTheme.set(this.systemService.getThemeState());
  }

}

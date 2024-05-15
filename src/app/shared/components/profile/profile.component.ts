import { Component, OnInit, signal } from '@angular/core';
import { SystemService } from '../../../shared/services/system/system.service';
import { NgClass } from '@angular/common';
import { MenuDashboardComponent } from '../../../shared/components/menu-dashboard/menu-dashboard.component';
import { ProfileCoursesComponent } from '../../../courses/components/profile-courses/profile-courses.component';
import { ProfileForumComponent } from '../../../forum/components/profile-forum/profile-forum.component';
import { PlansComponent } from '../../../shared/components/plans/plans.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgClass, MenuDashboardComponent, ProfileCoursesComponent, ProfileForumComponent, PlansComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  darkTheme = signal(false);
  profileImage: string = '/assets/img/profile/user.png';
  originalProfileImage: string = '/assets/img/profile/user.png';
  showSaveButton: boolean = false;


  constructor(
    private systemService: SystemService
  ) { }

  ngOnInit(): void {
    this.systemService.preferences$.subscribe((preferences: any) => {
      this.getPreferences();
    });
  }

  getPreferences() {
    this.darkTheme.set(this.systemService.getThemeState());
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImage = reader.result as string;
        this.showSaveButton = true;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  cancel(): void {
    this.profileImage = this.originalProfileImage; // Restaura la imagen original
    this.showSaveButton = false;
  }
}

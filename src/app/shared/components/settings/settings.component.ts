import { Component, OnInit, signal } from '@angular/core';
import { MenuDashboardComponent } from "../menu-dashboard/menu-dashboard.component";
import { SystemService } from '../../../shared/services/system/system.service';
import { NgClass } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


@Component({
    selector: 'app-settings',
    standalone: true,
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.css',
    imports: [NgClass, MenuDashboardComponent]
})
export class SettingsComponent implements OnInit{

    darkTheme = signal(false);
    profileImage: string = '/assets/img/profile/user2.jpeg';
    originalProfileImage: string = '/assets/img/profile/user2.jpeg';
    showSaveButton: boolean = false;
    showButtons: boolean = false;
    public hidePassword = signal(true);

    constructor(
        private systemService: SystemService,
        private router: Router,
        private route: ActivatedRoute
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
        this.profileImage = this.originalProfileImage;
        this.showSaveButton = false;
      }

      toggleDarkMode(){
        this.systemService.toggleTheme();
        this.darkTheme.set(this.systemService.getThemeState());
    }

    
    togglePassword(): void {
      if (this.hidePassword() === true) {
        this.hidePassword.set(false);
      } else {
        this.hidePassword.set(true);
      }
    }
  
    requestContentCreator() {
      console.log('Solicitud de creador de contenido enviada');
    }
  
    deleteAccount() {
      console.log('Cuenta eliminada');
    }
    
    onInputChange() {
      this.showButtons = true;
    }
    
}
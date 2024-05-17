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

}
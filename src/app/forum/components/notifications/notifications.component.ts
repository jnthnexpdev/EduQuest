import { NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { SystemService } from '../../../shared/services/system/system.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NgClass],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit{
  darkTheme = signal(false);

  constructor(
    private systemService: SystemService,
    private router: Router,
    
  ) {}
  

  ngOnInit(): void {
    this.systemService.preferences$.subscribe((preferences: any) => {
      this.getPreferences();
    });
  }

  getPreferences() {
    this.darkTheme.set(this.systemService.getThemeState());
  }

}

import { Component, OnInit, signal } from '@angular/core';

import { NgClass } from '@angular/common';

import { AlertService } from '../../../shared/services/alert/alert.service';
import { SystemService } from '../../../shared/services/system/system.service';


@Component({
  selector: 'app-forum-page',
  standalone: true,
  templateUrl: './forum-page.component.html',
  styleUrl: './forum-page.component.css',
  imports: [NgClass],
})
export class ForumPageComponent  implements OnInit{
  
  darkTheme = signal(false);

  constructor(
    private systemService: SystemService,
    private alertService: AlertService,
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
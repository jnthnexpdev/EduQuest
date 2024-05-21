import { Component, signal, OnInit } from '@angular/core';
import { SystemService } from '../../../shared/services/system/system.service';
import { NgClass } from '@angular/common';
import { MenuDashboardComponent } from "../../../shared/components/menu-dashboard/menu-dashboard.component";

@Component({
    selector: 'app-courses-class-page',
    standalone: true,
    templateUrl: './courses-class-page.component.html',
    styleUrl: './courses-class-page.component.css',
    imports: [NgClass, MenuDashboardComponent]
})
export class CoursesClassPageComponent implements OnInit  {

  darkTheme = signal(false);
  ShowContent = signal(false);

  activeTab: 'comments' | 'notes' = 'comments';


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

  ShowContentComments() {
    this.activeTab = 'comments';
  }

  ShowContentNotes() {
    this.activeTab = 'notes';
  }
}

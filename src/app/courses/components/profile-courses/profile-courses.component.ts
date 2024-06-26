import { Component, OnInit, signal } from '@angular/core';
import { SystemService } from '../../../shared/services/system/system.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-profile-courses',
  standalone: true,
  imports: [NgClass],
  templateUrl: './profile-courses.component.html',
  styleUrl: './profile-courses.component.css'
})
export class ProfileCoursesComponent implements OnInit {

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

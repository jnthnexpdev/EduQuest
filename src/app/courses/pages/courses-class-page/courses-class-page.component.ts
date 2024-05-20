import { Component, signal, OnInit } from '@angular/core';
import { SystemService } from '../../../shared/services/system/system.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-courses-class-page',
  standalone: true,
  imports: [NgClass],
  templateUrl: './courses-class-page.component.html',
  styleUrl: './courses-class-page.component.css'
})
export class CoursesClassPageComponent implements OnInit  {

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

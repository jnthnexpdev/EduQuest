import { Component, OnInit, signal} from '@angular/core';
import { SystemService } from '../../../shared/services/system/system.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [NgClass],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent implements OnInit{

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

import { Component, OnInit, signal} from '@angular/core';
import { SystemService } from '../../../shared/services/system/system.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-profile-forum',
  standalone: true,
  imports: [NgClass ],
  templateUrl: './profile-forum.component.html',
  styleUrl: './profile-forum.component.css'
})
export class ProfileForumComponent  implements OnInit{
  
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


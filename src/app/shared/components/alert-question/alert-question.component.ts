import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SystemService } from '../../services/system/system.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-alert-question',
  standalone: true,
  imports: [NgClass],
  templateUrl: './alert-question.component.html',
  styleUrl: './alert-question.component.css'
})
export class AlertQuestionComponent implements OnInit{

  darkTheme = signal(false);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string },
    private systemService : SystemService
  ){}

  ngOnInit() : void {
    this.systemService.preferences$.subscribe((preferences : any) => {
      this.getPreferences();
    });

    this.getPreferences();
  }

  getPreferences(){
    this.darkTheme.set(this.systemService.getThemeState());
  }
}

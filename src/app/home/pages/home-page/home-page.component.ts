import { Component, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { LoginComponent } from '../../../auth/components/login/login.component';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { SystemService } from '../../../shared/services/system/system.service';
import { NgClass } from '@angular/common';
import { CategoriesComponent } from '../../components/categories/categories.component';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [NgClass, CategoriesComponent]
})
export class HomePageComponent implements OnInit{

    darkTheme = signal(false);
  
    constructor(
    private matDialog : MatDialog,
    private systemService : SystemService,
    private alertService : AlertService
    ){}
  
    ngOnInit() : void {
      this.systemService.preferences$.subscribe((preferences : any) => {
        this.getPreferences();
      });
    }
  
    getPreferences(){
      this.darkTheme.set(this.systemService.getThemeState());
    }

    login() : void{
        this.alertService.error('Revisa tu informacion y vuelve a intentarlo', 5000);
        this.matDialog.open(LoginComponent);
    }
}
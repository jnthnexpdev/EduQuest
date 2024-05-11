import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { ScrollTopComponent } from "./shared/components/scroll-top/scroll-top.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, FooterComponent, ScrollTopComponent]
})
export class AppComponent {
  title = 'EduQuest';
}
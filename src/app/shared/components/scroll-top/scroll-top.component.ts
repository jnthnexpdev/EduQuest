import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [],
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.css'
})
export class ScrollTopComponent {
  showScrollButton: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.pageYOffset;
    const scrollTrigger = window.innerHeight * 0.2; // Muestra el botón cuando el usuario ha hecho scroll más allá del 20% del alto de la ventana
    this.showScrollButton = yOffset > scrollTrigger;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

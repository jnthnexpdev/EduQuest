import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCoursesComponent } from './navbar-courses.component';

describe('NavbarCoursesComponent', () => {
  let component: NavbarCoursesComponent;
  let fixture: ComponentFixture<NavbarCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

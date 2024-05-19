import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesUserPageComponent } from './courses-user-page.component';

describe('CoursesUserPageComponent', () => {
  let component: CoursesUserPageComponent;
  let fixture: ComponentFixture<CoursesUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesUserPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

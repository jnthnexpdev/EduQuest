import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesClassPageComponent } from './courses-class-page.component';

describe('CoursesClassPageComponent', () => {
  let component: CoursesClassPageComponent;
  let fixture: ComponentFixture<CoursesClassPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesClassPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesClassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

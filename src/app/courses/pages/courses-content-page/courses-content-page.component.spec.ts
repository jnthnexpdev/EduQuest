import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesContentPageComponent } from './courses-content-page.component';

describe('CoursesContentPageComponent', () => {
  let component: CoursesContentPageComponent;
  let fixture: ComponentFixture<CoursesContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesContentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

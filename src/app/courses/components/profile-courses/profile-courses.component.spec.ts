import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCoursesComponent } from './profile-courses.component';

describe('ProfileCoursesComponent', () => {
  let component: ProfileCoursesComponent;
  let fixture: ComponentFixture<ProfileCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

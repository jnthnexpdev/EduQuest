import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileForumComponent } from './profile-forum.component';

describe('ProfileForumComponent', () => {
  let component: ProfileForumComponent;
  let fixture: ComponentFixture<ProfileForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileForumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

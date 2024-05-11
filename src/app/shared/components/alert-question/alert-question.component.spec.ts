import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertQuestionComponent } from './alert-question.component';

describe('AlertQuestionComponent', () => {
  let component: AlertQuestionComponent;
  let fixture: ComponentFixture<AlertQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

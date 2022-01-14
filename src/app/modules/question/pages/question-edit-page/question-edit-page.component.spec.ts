import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionEditPageComponent } from './question-edit-page.component';

describe('QuestionEditPageComponent', () => {
  let component: QuestionEditPageComponent;
  let fixture: ComponentFixture<QuestionEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

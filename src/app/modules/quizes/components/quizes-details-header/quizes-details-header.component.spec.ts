/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Quiz } from '@appApi';
import { QuizesEvents } from '@appModules/quizes/shared/models';
import { TranslateModule } from '@ngx-translate/core';

import { QuizesDetailsHeaderComponent } from './quizes-details-header.component';

describe('QuizesDetailsHeaderComponent', () => {
  let component: QuizesDetailsHeaderComponent;
  let fixture: ComponentFixture<QuizesDetailsHeaderComponent>;

  const expectedQuiz: Quiz = {
    id: 12,
    name: 'Test #4',
    discipline: 'Disc #2',
    createdDate: new Date(),
    modifiedDate: new Date(),
    teacherId: 36
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot()],
        declarations: [QuizesDetailsHeaderComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizesDetailsHeaderComponent);
    component = fixture.componentInstance;
    component.quiz = expectedQuiz;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSearch should emit action', () => {
    spyOn(component.action, 'emit');
    component.onUpdateQuizProperties();
    fixture.detectChanges();
    expect(component.action.emit).toHaveBeenCalledWith({
      action: QuizesEvents.UPDATE,
      data: expectedQuiz
    });
  });
});

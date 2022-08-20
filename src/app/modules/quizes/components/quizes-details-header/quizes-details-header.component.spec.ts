import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Question, Quiz } from '@appApi';
import { QuestionsCategoriesConstants } from '@appModules/questions/shared';
import { QuizesEvents } from '@appModules/quizes/shared/models';
import { QuizModel, TopicModel } from '@appStore';
import { TranslateModule } from '@ngx-translate/core';

import { QuizesDetailsHeaderComponent } from './quizes-details-header.component';

describe('QuizesDetailsHeaderComponent', () => {
  let component: QuizesDetailsHeaderComponent;
  let fixture: ComponentFixture<QuizesDetailsHeaderComponent>;

  const expectedQuestion: Question = {
    id: 1,
    quizId: 12,
    description: 'Expected question description',
    category: QuestionsCategoriesConstants[1],
    weight: 9,
    topicId: 1
  };

  const expcetedTopic: TopicModel = {
    title: 'Expected topic title',
    quizId: 12,
    id: 1,
    countOfQuestions: 1,
    questionList: [expectedQuestion]
  };

  const expectedQuiz: QuizModel = {
    id: 12,
    name: 'Test #4',
    discipline: 'Disc #2',
    createdDate: new Date(),
    modifiedDate: new Date(),
    teacherId: 36,
    countOfQuestions: 1,
    topicList: [expcetedTopic]
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

  // it('onSearch should emit action', () => {
  //   spyOn(component.action, 'emit');
  //   component.onUpdateQuizProperties();
  //   fixture.detectChanges();
  //   expect(component.action.emit).toHaveBeenCalledWith({
  //     action: QuizesEvents.UPDATE,
  //     data: expectedQuiz
  //   });
  // });
});

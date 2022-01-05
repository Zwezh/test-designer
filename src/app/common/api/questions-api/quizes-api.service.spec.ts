import { TestBed } from '@angular/core/testing';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, of } from 'rxjs';

import { Question } from './questions-api.interface';
import { QuestionsApiService } from './questions-api.service';

describe('Service: QuestionApi', () => {
  let service: QuestionsApiService;

  const expectedId = 0;
  const expectedQuestion: Question = {
    id: 0,
    category: 'Category',
    weight: 10,
    description: 'Description',
    quizId: 1,
    topicId: 2
  };

  const expectedQuestionList = [
    expectedQuestion,
    expectedQuestion,
    expectedQuestion
  ];

  const dbServiceStub = {
    getByID: (): Observable<Question> => of(expectedQuestion),
    add: (): Observable<number> => of(expectedId),
    getAllByIndex: (): Observable<Question[]> => of(expectedQuestionList),
    update: (): Observable<Question[]> => of(expectedQuestionList),
    delete: (): Observable<Question[]> => of(expectedQuestionList)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        QuestionsApiService,
        { provide: NgxIndexedDBService, useValue: dbServiceStub }
      ]
    });
    service = TestBed.inject(QuestionsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have GET question from IndexedDB', () => {
    service
      .getQuestion$(expectedQuestion.id)
      .subscribe((question: Question) => {
        expect(question).toEqual(expectedQuestion);
      });
  });

  it('should add new question to IndexedDB', () => {
    const question = { ...expectedQuestion, id: expectedId } as Question;
    service
      .addQuestion$(question, expectedQuestion.quizId)
      .subscribe((result: Question) => {
        expect(result.id).toEqual(expectedId);
      });
  });

  it('should get all questions from IndexedDB', () => {
    service.getAllQuestions$(0).subscribe((questionList: Question[]) => {
      expect(questionList).toEqual(expectedQuestionList);
    });
  });

  it('should update question from IndexedDB', () => {
    service
      .updateQuestion$(expectedQuestion)
      .subscribe((result: Question[]) => {
        expect(result).toEqual(expectedQuestionList);
      });
  });

  it('should delete question from IndexedDB', () => {
    service
      .deleteQuestion$(expectedQuestion.id)
      .subscribe((questionList: Question[]) => {
        expect(questionList).toEqual(expectedQuestionList);
      });
  });
});

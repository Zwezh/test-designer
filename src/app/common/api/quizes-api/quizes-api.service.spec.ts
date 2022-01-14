import { TestBed } from '@angular/core/testing';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, of } from 'rxjs';

import { Quiz } from './quizes-api.interface';
import { QuizesApiService } from './quizes-api.service';

describe('Service: QuizApi', () => {
  let service: QuizesApiService;

  const expectedId = 11;
  const expectedQuiz: Quiz = {
    id: 0,
    name: '',
    discipline: '',
    createdDate: new Date(),
    modifiedDate: new Date(),
    teacherId: 0
  };

  const expectedQuizList = [expectedQuiz, expectedQuiz, expectedQuiz];

  const dbServiceStub = {
    getByID: (): Observable<Quiz> => of(expectedQuiz),
    add: (): Observable<Quiz> => of({...expectedQuiz, id: expectedId}),
    getAllByIndex: (): Observable<Quiz[]> => of(expectedQuizList),
    update: (): Observable<Quiz[]> => of(expectedQuizList),
    delete: (): Observable<Quiz[]> => of(expectedQuizList)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        QuizesApiService,
        { provide: NgxIndexedDBService, useValue: dbServiceStub }
      ]
    });
    service = TestBed.inject(QuizesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have GET quiz from IndexedDB', () => {
    service.getQuiz$(expectedQuiz.teacherId).subscribe((quiz: Quiz) => {
      expect(quiz).toEqual(expectedQuiz);
    });
  });

  it('should add new quiz to IndexedDB', () => {
    const quiz = { ...expectedQuiz, id: expectedId } as Quiz;
    service.addQuiz$(quiz, expectedQuiz.teacherId).subscribe((quizId: Quiz) => {
      expect(quizId.id).toEqual(expectedId);
    });
  });

  it('should get all quizes from IndexedDB', () => {
    service.getAllQuiz$(0).subscribe((quizList: Quiz[]) => {
      expect(quizList).toEqual(expectedQuizList);
    });
  });

  it('should update quiz from IndexedDB', () => {
    service.updateQuiz$(expectedQuiz).subscribe((result: Quiz[]) => {
      expect(result).toEqual(expectedQuizList);
    });
  });

  it('should delete quiz from IndexedDB', () => {
    service.deleteQuiz$(expectedQuiz.id).subscribe((quizList: Quiz[]) => {
      expect(quizList).toEqual(expectedQuizList);
    });
  });
});

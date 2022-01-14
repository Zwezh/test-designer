import { Injectable } from '@angular/core';
import { StoreNamesConstants } from 'app/db';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Question } from './questions-api.interface';

@Injectable()
export class QuestionsApiService {
  constructor(private dbService: NgxIndexedDBService) { }

  addQuestion$(question: Partial<Question>, quizId: number): Observable<any> {
    return this.dbService
      .add(StoreNamesConstants.QUESTIONS_STORE, {
        ...question,
        quizId
      });
  }

  updateQuestion$(question: Partial<Question>): Observable<Question[]> {
    return this.dbService.update(StoreNamesConstants.QUESTIONS_STORE, question).pipe(map((list: Question[]) => list));
  }

  deleteQuestion$(id: number): Observable<Question[]> {
    return this.dbService.delete(StoreNamesConstants.QUESTIONS_STORE, id).pipe(map((list: Question[]) => list));
  }

  getAllQuestions$(quizId: number): Observable<Question[]> {
    return this.dbService.getAllByIndex(StoreNamesConstants.QUESTIONS_STORE, 'quizId', IDBKeyRange.only(quizId));
  }

  getQuestion$(id: number): Observable<Question> {
    return this.dbService.getByID(StoreNamesConstants.QUESTIONS_STORE, id);
  }
}

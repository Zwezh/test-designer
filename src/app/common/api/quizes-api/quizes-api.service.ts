import { Injectable } from '@angular/core';
import { StoreNamesConstants } from 'app/db';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Quiz } from './quizes-api.interface';

@Injectable()
export class QuizesApiService {
  constructor(private dbService: NgxIndexedDBService) { }

  addQuiz$(test: Partial<Quiz>, teacherId: number): Observable<Quiz> {
    return this.dbService.add(StoreNamesConstants.TESTS_STORE, {
      ...test,
      teacherId
    }).pipe(
      switchMap((id: number) => this.dbService.getByID(StoreNamesConstants.TESTS_STORE, id)),
      map(res => res as Quiz));
  }

  updateQuiz$(quiz: Partial<Quiz>): Observable<Quiz[]> {
    return this.dbService.update(StoreNamesConstants.TESTS_STORE, quiz)
      .pipe(map((list: Quiz[]) => list));
  }

  deleteQuiz$(id: number): Observable<Quiz[]> {
    return this.dbService.delete(StoreNamesConstants.TESTS_STORE, id)
      .pipe(map((list: Quiz[]) => list));
  }

  getAllQuiz$(teacherId: number): Observable<Quiz[]> {
    return this.dbService.getAllByIndex(
      StoreNamesConstants.TESTS_STORE,
      'teacherId',
      IDBKeyRange.only(teacherId)
    );
  }

  getQuiz$(id: number): Observable<Quiz> {
    return this.dbService.getByID(StoreNamesConstants.TESTS_STORE, id);
  }
}

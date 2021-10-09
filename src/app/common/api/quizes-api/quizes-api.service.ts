import { Injectable } from '@angular/core';
import { StoreNamesConstants } from 'app/db';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quiz } from './quizes-api.interface';

@Injectable()
export class QuizesApiService {
  constructor(private dbService: NgxIndexedDBService) {}

  addQuiz$(test: Partial<Quiz>, teacherId: number): Observable<number> {
    return this.dbService.add(StoreNamesConstants.TESTS_STORE, {
      ...test,
      teacherId
    });
  }

  updateQuiz$(test: Partial<Quiz>): Observable<Quiz> {
    return this.dbService
      .update(StoreNamesConstants.TESTS_STORE, test)
      .pipe(
        map((testCollection: Quiz[]) =>
          testCollection.find((t: Quiz) => t.id === test.id)
        )
      );
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

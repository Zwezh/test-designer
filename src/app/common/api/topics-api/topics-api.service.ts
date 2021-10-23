import { Injectable } from '@angular/core';
import { StoreNamesConstants } from 'app/db';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { Topic } from './topics-api.interface';

@Injectable()
export class TopicsApiService {
  constructor(private dbService: NgxIndexedDBService) {}

  // addTopic$(topic: Partial<Topic>, quizId: number): Observable<Topic> {
  //   return this.dbService
  //     .add(StoreNamesConstants.QUESTIONS_STORE, {
  //       ...topic,
  //       quizId
  //     })
  //     .pipe(
  //       switchMap((id: number) =>
  //         this.dbService.getByID(StoreNamesConstants.QUESTIONS_STORE, id)
  //       ),
  //       map((res) => res as Topic)
  //     );
  // }

  // updateTopic$(topic: Partial<Topic>): Observable<Topic[]> {
  //   return this.dbService
  //     .update(StoreNamesConstants.QUESTIONS_STORE, topic)
  //     .pipe(map((list: Topic[]) => list));
  // }

  // deleteTopic$(id: number): Observable<Topic[]> {
  //   return this.dbService
  //     .delete(StoreNamesConstants.QUESTIONS_STORE, id)
  //     .pipe(map((list: Topic[]) => list));
  // }

  getAllTopics$(quizId: number): Observable<Topic[]> {
    return this.dbService.getAllByIndex(StoreNamesConstants.TOPICS_STORE, 'quizId', IDBKeyRange.only(quizId));
  }

  // getTopic$(id: number): Observable<Topic> {
  //   return this.dbService.getByID(StoreNamesConstants.QUESTIONS_STORE, id);
  // }
}

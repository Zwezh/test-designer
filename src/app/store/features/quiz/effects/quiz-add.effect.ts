import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz, QuizesApiService, Teacher, TeachersApiService } from '@appApi';
import { PersistanceKeys } from '@appConstants';
import { PersistanceService } from '@appServices';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
  addQuizAction,
  addQuizSuccessAction,
  addQuizFailureAction
} from '../actions';

@Injectable()
export class QuizAddEffect {
  constructor(
    private actions$: Actions,
    private quizesApi: QuizesApiService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}

  addQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addQuizAction),
      switchMap(({ quiz }) =>
        this.quizesApi
          .addQuiz$(
            { ...quiz, modifiedDate: new Date() },
            +this.persistanceService.get(PersistanceKeys.authKey)
          )
          .pipe(
            map(() => addQuizSuccessAction()),
            catchError(() => of(addQuizFailureAction()))
          )
      )
    )
  );

  redirectAfterRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addQuizSuccessAction),
        tap(() => {
          this.router.navigateByUrl('tests');
        })
      ),
    { dispatch: false }
  );
}

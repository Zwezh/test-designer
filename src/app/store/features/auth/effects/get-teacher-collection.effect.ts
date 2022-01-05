import { Injectable } from '@angular/core';
import { Teacher, TeachersApiService } from '@appApi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  getTeacherCollectionAction,
  getTeacherCollectionFailureAction,
  getTeacherCollectionSuccessAction
} from '../actions';
@Injectable()
export class GetTeacherCollectionEffect {
  constructor(
    private actions$: Actions,
    private teacherApiService: TeachersApiService
  ) {}

  getTeacherCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTeacherCollectionAction),
      switchMap(() => {
        return this.teacherApiService.getAllTeachers$().pipe(
          map((teacherCollection: Teacher[]) =>
            getTeacherCollectionSuccessAction({ teacherCollection })
          ),
          catchError(() => of(getTeacherCollectionFailureAction()))
        );
      })
    )
  );
}

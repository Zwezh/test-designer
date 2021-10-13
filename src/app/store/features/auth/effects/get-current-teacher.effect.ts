import { Injectable } from '@angular/core';
import { Teacher, TeachersApiService } from '@appApi';
import { PersistanceKeys } from '@appConstants';
import { PersistanceService } from '@appServices';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  getCurrentTeacherAction,
  getCurrentTeacherFailueAction,
  getCurrentTeacherSuccessAction
} from '../actions';

@Injectable()
export class GetCurrentTeacherEffect {
  constructor(
    private actions$: Actions,
    private authService: TeachersApiService,
    private persistanceService: PersistanceService
  ) { }

  getCurrentTeacher$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentTeacherAction),
      switchMap(() => {
        const currentTeacherId = this.persistanceService.get(
          PersistanceKeys.authKey
        );
        if (!currentTeacherId) {
          return of(getCurrentTeacherFailueAction());
        }
        return this.authService.getTeacher$(currentTeacherId).pipe(
          map((currentTeacher: Teacher) => {
            if (!currentTeacher) {
              throw Error('There are no users with current id')
            }
            return getCurrentTeacherSuccessAction({ currentTeacher });
          }),
          catchError(() => of(getCurrentTeacherFailueAction()))
        );
      })
    )
  );
}

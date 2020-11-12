import { Injectable } from '@angular/core';
import { Teacher, TeachersApiService } from '@appApi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  updateCurrentTeacherAction,
  updateCurrentTeacherFailueAction,
  updateCurrentTeacherSuccessAction
} from '../actions';

@Injectable()
export class UpdateCurrentTeacherEffect {
  constructor(
    private actions$: Actions,
    private teacherApiService: TeachersApiService
  ) {}

  public updateCurrentTeacherEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentTeacherAction),
      switchMap(({ teacher }) =>
        this.teacherApiService.updateTeacher$(teacher).pipe(
          map((currentTeacher: Teacher) =>
            updateCurrentTeacherSuccessAction({ currentTeacher })
          ),
          catchError(() => of(updateCurrentTeacherFailueAction()))
        )
      )
    )
  );
}

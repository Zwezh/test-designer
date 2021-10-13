import { Injectable } from '@angular/core';
import { Teacher, TeachersApiService } from '@appApi';
import { PersistanceKeys } from '@appConstants';
import { PersistanceService } from '@appServices';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import {
  registerAction,
  registerFailueAction,
  registerSuccessAction
} from '../actions';

@Injectable()
export class RegisterEffect {
  constructor(
    private actions$: Actions,
    private teacherApiService: TeachersApiService,
    private persistanceService: PersistanceService,
  ) { }

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ teacher }) =>
        this.teacherApiService.addTeacher$(teacher).pipe(
          tap((teacherId: number) =>
            this.persistanceService.set(PersistanceKeys.authKey, teacherId)
          ),
          switchMap((teacherId: number) =>
            this.teacherApiService.getTeacher$(teacherId).pipe(
              map((currentTeacher: Teacher) => {
                return registerSuccessAction({ teacher: currentTeacher });
              }),
              catchError(() => of(registerFailueAction()))
            )
          )
        )
      )
    )
  );
}

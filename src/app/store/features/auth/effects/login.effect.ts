import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher, TeachersApiService } from '@appApi';
import { PersistanceKeys } from '@appConstants';
import { PersistanceService } from '@appServices';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { loginAction, loginFailueAction, loginSuccessAction } from '../actions';

@Injectable()
export class LoginEffect {
  constructor(
    private actions$: Actions,
    private teachersApi: TeachersApiService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ id }) =>
        this.teachersApi.getTeacher$(id).pipe(
          map((currentTeacher: Teacher) => {
            this.persistanceService.set(PersistanceKeys.authKey, id);
            return loginSuccessAction({ currentTeacher });
          }),
          catchError(() => of(loginFailueAction()))
        )
      )
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => this.router.navigateByUrl('quizes'))
      ),
    { dispatch: false }
  );
}

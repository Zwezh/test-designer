import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PersistanceKeys } from '@appConstants';
import { PersistanceService } from '@appServices';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { logoutAction } from '../actions';

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.router.navigateByUrl('auth');
          this.persistanceService.set(PersistanceKeys.authKey, '');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}

import { Teacher } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { AuthActionTypes } from '../types';

export const loginAction = createAction(
  AuthActionTypes.LOGIN,
  props<{ id: number }>()
);
export const loginSuccessAction = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ currentTeacher: Teacher }>()
);
export const loginFailueAction = createAction(AuthActionTypes.LOGIN_FAILURE);

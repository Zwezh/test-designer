import { Teacher } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { AuthActionTypes } from '../types';

export const registerAction = createAction(
  AuthActionTypes.REGISTER,
  props<{ teacher: Teacher }>()
);
export const registerSuccessAction = createAction(
  AuthActionTypes.REGISTER_SUCCESS,
  props<{ teacher: Teacher }>()
);
export const registerFailueAction = createAction(
  AuthActionTypes.REGISTER_FAILURE
);

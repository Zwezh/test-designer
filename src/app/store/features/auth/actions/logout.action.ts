import { createAction } from '@ngrx/store';

import { AuthActionTypes } from '../types';

export const logoutAction = createAction(AuthActionTypes.LOGOUT);

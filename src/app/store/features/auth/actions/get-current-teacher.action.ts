import { Teacher } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { AuthActionTypes } from '../types';

export const getCurrentTeacherAction = createAction(
  AuthActionTypes.GET_CURRENT_TEACHER
);

export const getCurrentTeacherSuccessAction = createAction(
  AuthActionTypes.GET_CURRENT_TEACHER_SUCCESS,
  props<{ currentTeacher: Teacher }>()
);

export const getCurrentTeacherFailueAction = createAction(
  AuthActionTypes.GET_CURRENT_TEACHER_FAILURE
);

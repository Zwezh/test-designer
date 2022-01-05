import { Teacher } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { AuthActionTypes } from '../types';

export const updateCurrentTeacherAction = createAction(
  AuthActionTypes.UPDATE_CURRENT_TEACHER,
  props<{ teacher: Teacher }>()
);

export const updateCurrentTeacherSuccessAction = createAction(
  AuthActionTypes.UPDATE_CURRENT_TEACHER_SUCCESS,
  props<{ currentTeacher: Teacher }>()
);

export const updateCurrentTeacherFailueAction = createAction(
  AuthActionTypes.UPDATE_CURRENT_TEACHER_FAILURE
);

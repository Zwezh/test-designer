import { Teacher } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { AuthActionTypes } from '../types';

export const getTeacherCollectionAction = createAction(
  AuthActionTypes.GET_TEACHER_COLLECTION
);

export const getTeacherCollectionSuccessAction = createAction(
  AuthActionTypes.GET_TEACHER_COLLECTION_SUCCESS,
  props<{ teacherCollection: Array<Teacher> }>()
);

export const getTeacherCollectionFailureAction = createAction(
  AuthActionTypes.GET_TEACHER_COLLECTION_FAILURE
);

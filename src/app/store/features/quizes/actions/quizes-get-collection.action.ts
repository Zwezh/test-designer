import { Quiz } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { QuizesActionTypes } from '../types';

export const getQuizesCollectionAction = createAction(
  QuizesActionTypes.GET_COLLECTION
);
export const getQuizesCollectionSuccessAction = createAction(
  QuizesActionTypes.GET_COLLECTION_SUCCESS,
  props<{ quizCollection: Quiz[] }>()
);
export const getQuizesCollectionFailureAction = createAction(
  QuizesActionTypes.GET_COLLECTION_FAILURE
);

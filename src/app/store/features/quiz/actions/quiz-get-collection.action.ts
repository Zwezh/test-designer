import { createAction, props } from '@ngrx/store';
import { Quiz } from '@appApi';
import { QuizActionTypes } from '../types';

export const getQuizCollectionAction = createAction(
  QuizActionTypes.GET_COLLECTION
);
export const getQuizCollectionSuccessAction = createAction(
  QuizActionTypes.GET_COLLECTION_SUCCESS,
  props<{ quizCollection: Quiz[] }>()
);
export const getQuizCollectionFailureAction = createAction(
  QuizActionTypes.GET_COLLECTION_FAILURE
);

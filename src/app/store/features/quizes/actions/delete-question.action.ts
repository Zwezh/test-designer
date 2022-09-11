import { createAction, props } from '@ngrx/store';

import { QuizesActionTypes } from '../types';

export const deleteQuestionAction = createAction(
  QuizesActionTypes.DELETE_QUESTION,
  props<{ id: number }>()
);
export const deleteQuestionSuccessAction = createAction(QuizesActionTypes.DELETE_QUESTION_SUCCESS, props<{ id: number }>());
export const deleteQuestionFailureAction = createAction(QuizesActionTypes.DELETE_QUESTION_FAILURE);

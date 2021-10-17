import { Quiz } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { QuizActionTypes } from '../types';

export const addQuizAction = createAction(
  QuizActionTypes.ADD,
  props<{ quiz: Partial<Quiz> }>()
);
export const addQuizSuccessAction = createAction(QuizActionTypes.ADD_SUCCESS, props<{ newQuiz: Quiz }>());
export const addQuizFailureAction = createAction(QuizActionTypes.ADD_FAILURE);

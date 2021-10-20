import { Quiz } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { QuizesActionTypes } from '../types';

export const addQuizAction = createAction(
  QuizesActionTypes.ADD,
  props<{ quiz: Partial<Quiz> }>()
);
export const addQuizSuccessAction = createAction(
  QuizesActionTypes.ADD_SUCCESS,
  props<{ newQuiz: Quiz }>()
);
export const addQuizFailureAction = createAction(
  QuizesActionTypes.ADD_FAILURE
);

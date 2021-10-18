import { Quiz } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { QuizesActionTypes } from '../types';

export const addQuizesAction = createAction(
  QuizesActionTypes.ADD,
  props<{ quiz: Partial<Quiz> }>()
);
export const addQuizesSuccessAction = createAction(
  QuizesActionTypes.ADD_SUCCESS,
  props<{ newQuiz: Quiz }>()
);
export const addQuizesFailureAction = createAction(
  QuizesActionTypes.ADD_FAILURE
);

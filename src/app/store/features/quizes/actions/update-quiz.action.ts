import { Quiz } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { QuizesActionTypes } from '../types';

export const updateQuizAction = createAction(QuizesActionTypes.UPDATE, props<{ quiz: Quiz }>());
export const updateQuizSuccessAction = createAction(QuizesActionTypes.UPDATE_SUCCESS, props<{ quizList: Quiz[] }>());
export const updateQuizFailureAction = createAction(QuizesActionTypes.UPDATE_FAILURE);

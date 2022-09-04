import { Question } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { QuestionActionTypes } from '../types';

export const updateQuestionAction = createAction(QuestionActionTypes.UPDATE_QUESTION, props<{ question: Question }>());
export const updateQuestionSuccessAction = createAction(QuestionActionTypes.UPDATE_QUESTION_SUCCESS, props<{ quizId: number }>());
export const updateQuestionFailureAction = createAction(QuestionActionTypes.UPDATE_QUESTION_FAILURE);

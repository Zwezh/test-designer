import { Question } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { QuestionActionTypes } from '../types';

export const addQuestionAction = createAction(QuestionActionTypes.ADD_QUESTION, props<{ question: Partial<Question>, quizId: number }>());
export const addQuestionSuccessAction = createAction(QuestionActionTypes.ADD_QUESTION_SUCCESS, props<{ quizId: number }>());
export const addQuestionFailureAction = createAction(QuestionActionTypes.ADD_QUESTION_FAILURE);

import { createAction, props } from '@ngrx/store';

import { QuizActionTypes } from '../types';

export const searchQuizAction = createAction(
  QuizActionTypes.SEARCH,
  props<{ search: string }>()
);

import { createAction, props } from '@ngrx/store';

import { QuizesActionTypes } from '../types';

export const searchQuizesAction = createAction(
  QuizesActionTypes.SEARCH,
  props<{ search: string }>()
);

import { createAction, props } from '@ngrx/store';

import { QuestionsActionTypes } from '../types';

export const searchQuestionsAction = createAction(
  QuestionsActionTypes.SEARCH,
  props<{ search: string }>()
);

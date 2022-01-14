import { createFeatureSelector, createSelector } from '@ngrx/store';

import { QuestionsState } from './types';

const featureSelector = createFeatureSelector<QuestionsState>('questions');

export const questionListSelector = createSelector(
  featureSelector,
  (state: QuestionsState) => state.questionList
);

export const questionsIsLoadingSelector = createSelector(
  featureSelector,
  (state: QuestionsState) => state.isLoading
);

export const questionsSearchSelector = createSelector(
  featureSelector,
  (state: QuestionsState) => state.search
);

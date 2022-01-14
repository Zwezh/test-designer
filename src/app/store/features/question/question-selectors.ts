import { createFeatureSelector, createSelector } from '@ngrx/store';

import { QuestionState } from './types';

const featureSelector = createFeatureSelector<QuestionState>('question');

export const questionSelector = createSelector(
  featureSelector,
  (state: QuestionState) => state.question
);

export const questionIsLoadingSelector = createSelector(
  featureSelector,
  (state: QuestionState) => state.isLoading
);

export const questionTopicListSelector = createSelector(
  featureSelector,
  (state: QuestionState) => state.topicList
);

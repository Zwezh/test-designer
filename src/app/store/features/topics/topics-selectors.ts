import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TopicsState } from './types';

const featureSelector = createFeatureSelector<TopicsState>('topics');

export const topicListSelector = createSelector(featureSelector, (state: TopicsState) => state.topicList);

export const topicsIsLoadingSelector = createSelector(featureSelector, (state: TopicsState) => state.isLoading);

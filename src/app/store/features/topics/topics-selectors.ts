import { AppState } from '@appStore';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TopicsState } from './types';

const featureSelector = createFeatureSelector<AppState, TopicsState>('topics');

export const topicListSelector = createSelector(featureSelector, (state: TopicsState) => state.topicList);

export const topicsIsLoadingSelector = createSelector(featureSelector, (state: TopicsState) => state.isLoading);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'app/store/types';

import { QuizesState } from './types';

const featureSelector = createFeatureSelector<AppState, QuizesState>('quizes');

export const quizesSearchSelector = createSelector(
  featureSelector,
  (state: QuizesState) => state.search
);

export const quizesIsLoadingSelector = createSelector(
  featureSelector,
  (state: QuizesState) => state.isLoading
);

export const quizesGetCollectionSelector = createSelector(
  featureSelector,
  (state: QuizesState) => state.quizCollection
);

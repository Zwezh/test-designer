import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'app/store/types';
import { QuizState } from './types';

const featureSelector = createFeatureSelector<AppState, QuizState>('quiz');

export const quizSearchSelector = createSelector(
  featureSelector,
  (state: QuizState) => state.search
);

export const quizIsLoadingSelector = createSelector(
  featureSelector,
  (state: QuizState) => state.isLoading
);

export const quizGetCollectionSelector = createSelector(
  featureSelector,
  (state: QuizState) => state.quizCollection
);

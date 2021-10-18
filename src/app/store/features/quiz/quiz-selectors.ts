import { AppState } from '@appStore';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { QuizState } from './types';

const featureSelector = createFeatureSelector<AppState, QuizState>('quiz');

export const quizGetSelector = createSelector(
  featureSelector,
  (state: QuizState) => state.quiz
);

export const quizIsLoadingSelector = createSelector(
  featureSelector,
  (state: QuizState) => state.isLoading
);

export const quizSearchSelector = createSelector(
  featureSelector,
  (state: QuizState) => state.search
);

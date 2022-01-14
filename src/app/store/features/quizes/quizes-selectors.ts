import { createFeatureSelector, createSelector } from '@ngrx/store';

import { QuizesState } from './types';

const featureSelector = createFeatureSelector<QuizesState>('quizes');

export const searchQuizesSelector = createSelector(featureSelector, (state: QuizesState) => state.search);

export const isLoadingQuizesSelector = createSelector(featureSelector, (state: QuizesState) => state.isLoading);

export const getQuizListSelector = createSelector(featureSelector, (state: QuizesState) => state.quizList);

export const getOneQuizSelector = createSelector(featureSelector, (state: QuizesState) => state.currentQuiz);

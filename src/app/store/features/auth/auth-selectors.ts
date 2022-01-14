import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from './types';

export const authFeatureSelector = createFeatureSelector<AuthState>('auth');

export const authIsLoadingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isLoading
);

export const authTeacherCollectionSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.teacherList
);

export const authGetCurrentTeacherSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.currentTeacher
);

export const authIsLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isLoggedIn
);

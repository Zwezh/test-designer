import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'app/store/types';

import { AuthState } from './types';

export const authFeatureSelector = createFeatureSelector<AppState, AuthState>(
  'auth'
);

export const authIsLoadingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isLoading
);

export const authTeacherCollectionSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.teacherCollection
);

export const authGetCurrentTeacherSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.currentTeacher
);

export const authIsLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isLoggedIn
);
import { Action, createReducer, on } from '@ngrx/store';

import {
  getCurrentTeacherAction,
  getCurrentTeacherFailueAction,
  getCurrentTeacherSuccessAction,
  getTeacherCollectionFailureAction,
  getTeacherCollectionSuccessAction,
  loginAction,
  loginFailueAction,
  loginSuccessAction,
  logoutAction,
  registerAction,
  registerFailueAction,
  registerSuccessAction,
  updateCurrentTeacherAction,
  updateCurrentTeacherSuccessAction
} from './actions';
import { AuthState } from './types';

const initialState: AuthState = {
  isLoading: false,
  currentTeacher: null,
  teacherList: null,
  isLoggedIn: false
};

const reducer = createReducer(
  initialState,
  on(
    getCurrentTeacherAction,
    (state): AuthState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getTeacherCollectionSuccessAction,
    (state, action): AuthState => ({
      ...state,
      isLoading: false,
      teacherList: action.teacherCollection
    })
  ),
  on(
    getTeacherCollectionFailureAction,
    (state): AuthState => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    loginAction,
    (state): AuthState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthState => ({
      ...state,
      currentTeacher: action.currentTeacher,
      isLoggedIn: true,
      isLoading: false
    })
  ),
  on(
    loginFailueAction,
    (state): AuthState => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    registerAction,
    (state): AuthState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentTeacher: action.teacher
    })
  ),
  on(
    registerFailueAction,
    (state): AuthState => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    getCurrentTeacherAction,
    (state): AuthState => ({
      ...state,
      isLoading: true,
      isLoggedIn: false,
      currentTeacher: null
    })
  ),
  on(
    getCurrentTeacherSuccessAction,
    (state, action): AuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentTeacher: action.currentTeacher
    })
  ),
  on(
    getCurrentTeacherFailueAction,
    (state): AuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentTeacher: null
    })
  ),
  on(
    logoutAction,
    (state): AuthState => ({
      ...state,
      isLoggedIn: false,
      currentTeacher: null
    })
  ),
  on(
    updateCurrentTeacherAction,
    (state): AuthState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    updateCurrentTeacherSuccessAction,
    (state, action): AuthState => ({
      ...state,
      isLoading: false,
      currentTeacher: action.currentTeacher
    })
  ),
  on(
    updateCurrentTeacherSuccessAction,
    (state): AuthState => ({
      ...state,
      isLoading: false
    })
  )
);

export function authReducers(state: AuthState, action: Action): AuthState {
  return reducer(state, action);
}

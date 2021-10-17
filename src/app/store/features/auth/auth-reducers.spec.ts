import { Teacher } from '@appApi';
import {
  authReducers,
  AuthState,
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
  updateCurrentTeacherFailueAction,
  updateCurrentTeacherSuccessAction
} from '@appStore';

describe('Auth Reducer', () => {
  const expectedTeacher: Teacher = {
    id: null,
    position: '',
    name: '',
    lastName: '',
    patronymic: '',
    password: '1'
  };

  const initialState: AuthState = {
    isLoading: false,
    currentTeacher: null,
    teacherCollection: [],
    isLoggedIn: true
  };

  it('Should return the default state by "Unknown" action', () => {
    const action = { type: 'Unknown' };
    const state = authReducers(initialState, action);
    expect(state).toBe(initialState);
  });

  it('Should return the updated state with loading "true" by "get current teacher" action', () => {
    const state = authReducers(initialState, getCurrentTeacherAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false" and "new collection in state" by "get success current teacher" action', () => {
    const updatedCollecion = [
      ...initialState.teacherCollection,
      { ...expectedTeacher, name: 'Joe' }
    ];
    const state = authReducers(
      initialState,
      getTeacherCollectionSuccessAction({ teacherCollection: updatedCollecion })
    );
    expect(state.isLoading).toBe(false);
    expect(state.teacherCollection).toEqual(updatedCollecion);
  });

  it('Should return the updated state with loading "false" by "get teacher collection failure" action', () => {
    const state = authReducers(initialState, getTeacherCollectionFailureAction);
    expect(state.isLoading).toBe(false);
  });

  it('Should return the updated state with loading "true" by "login" action', () => {
    const state = authReducers(initialState, loginAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", loggedIn "true" and currentTeacher by "login success" action', () => {
    const state = authReducers(
      initialState,
      loginSuccessAction({ currentTeacher: expectedTeacher })
    );
    expect(state.isLoading).toBe(false);
    expect(state.currentTeacher).toEqual(expectedTeacher);
    expect(state.isLoggedIn).toBe(true);
  });

  it('Should return the updated state with loading "false" by "login failure" action', () => {
    const state = authReducers(initialState, loginSuccessAction);
    expect(state.isLoading).toBe(false);
  });

  it('Should return the updated state with loading "true" by "login" action', () => {
    const state = authReducers(initialState, loginAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", loggedIn "true" and currentTeacher by "login success" action', () => {
    const state = authReducers(
      initialState,
      loginSuccessAction({ currentTeacher: expectedTeacher })
    );
    expect(state.isLoading).toBe(false);
    expect(state.currentTeacher).toEqual(expectedTeacher);
    expect(state.isLoggedIn).toBe(true);
  });

  it('Should return the updated state with loading "false" by "login failure" action', () => {
    const state = authReducers(initialState, loginFailueAction);
    expect(state.isLoading).toBe(false);
  });

  it('Should return the updated state with loading "true" by "register" action', () => {
    const state = authReducers(initialState, registerAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", loggedIn "true" and new currentTeacher by "register success" action', () => {
    const state = authReducers(
      initialState,
      registerSuccessAction({ teacher: expectedTeacher })
    );
    expect(state.isLoading).toBe(false);
    expect(state.currentTeacher).toEqual(expectedTeacher);
    expect(state.isLoggedIn).toBe(true);
  });

  it('Should return the updated state with loading "false" by "register failure" action', () => {
    const state = authReducers(initialState, registerFailueAction);
    expect(state.isLoading).toBe(false);
  });

  it('Should return the updated state with loading "true", loggedIn "false" and currentTeacher "null" by "get current teacher" action', () => {
    const state = authReducers(initialState, getCurrentTeacherAction);
    expect(state.isLoading).toBe(true);
    expect(state.isLoggedIn).toBe(false);
    expect(state.currentTeacher).toEqual(null);
  });

  it('Should return the updated state with loading "false", loggedIn "true" and currentTeacher by "get current teacher success" action', () => {
    const state = authReducers(
      initialState,
      getCurrentTeacherSuccessAction({ currentTeacher: expectedTeacher })
    );
    expect(state.isLoading).toBe(false);
    expect(state.currentTeacher).toEqual(expectedTeacher);
    expect(state.isLoggedIn).toBe(true);
  });

  it('Should return the updated state with loading "false", loggedIn "false" and currentTeacher "null" by "register failure" action', () => {
    const state = authReducers(initialState, getCurrentTeacherFailueAction);
    expect(state.isLoading).toBe(false);
    expect(state.isLoggedIn).toBe(false);
    expect(state.currentTeacher).toEqual(null);
  });

  it('Should return the updated state with loggedIn "false" and currentTeacher "null" by "logout" action', () => {
    const state = authReducers(initialState, logoutAction);
    expect(state.isLoggedIn).toBe(false);
    expect(state.currentTeacher).toEqual(null);
  });

  it('Should return the updated state with loading "true" by "update teacher" action', () => {
    const state = authReducers(initialState, updateCurrentTeacherAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false" and currentTeacher by "update teacher success" action', () => {
    const state = authReducers(
      initialState,
      updateCurrentTeacherSuccessAction({ currentTeacher: expectedTeacher })
    );
    expect(state.isLoading).toBe(false);
    expect(state.currentTeacher).toEqual(expectedTeacher);
  });

  it('Should return the updated state with loading "false" by "update teacher failure" action', () => {
    const state = authReducers(initialState, updateCurrentTeacherFailueAction);
    expect(state.isLoading).toBe(false);
  });
});

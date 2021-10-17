import { Teacher } from '@appApi';
import {
  authGetCurrentTeacherSelector,
  authIsLoadingSelector,
  authIsLoggedInSelector,
  AuthState,
  authTeacherCollectionSelector
} from '@appStore';

describe('Auth selectors', () => {
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
    currentTeacher: expectedTeacher,
    teacherCollection: [],
    isLoggedIn: true
  };

  it('should select the loading', () => {
    const result = authIsLoadingSelector.projector(initialState);
    expect(result).toBeFalse();
  });

  it('should select the teacher collection', () => {
    const result = authTeacherCollectionSelector.projector(initialState);
    expect(result).toEqual(initialState.teacherCollection);
  });

  it('should select the current teacher', () => {
    const result = authGetCurrentTeacherSelector.projector(initialState);
    expect(result).toEqual(initialState.currentTeacher);
  });

  it('should select the logged in', () => {
    const result = authIsLoggedInSelector.projector(initialState);
    expect(result).toEqual(initialState.isLoggedIn);
  });
});

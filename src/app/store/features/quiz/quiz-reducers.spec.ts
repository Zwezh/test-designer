import { Quiz } from '@appApi';
import {
  getQuizAction,
  getQuizFailureAction,
  getQuizSuccessAction,
  quizReducers,
  QuizState,
  searchQuizAction
} from '@appStore';

describe('Quiz Reducer', () => {
  const expectedQuiz: Quiz = {
    id: null,
    name: 'Test',
    discipline: 'Disc',
    createdDate: new Date(),
    modifiedDate: new Date(),
    teacherId: 36
  };

  const initialState: QuizState = {
    isLoading: false,
    search: '',
    quiz: null
  };

  it('Should return the default state by "Unknown" action', () => {
    const action = { type: 'Unknown' };
    const state = quizReducers(initialState, action);
    expect(state).toBe(initialState);
  });

  it('Should return the updated state with loading "true" by "get quiz" action', () => {
    const state = quizReducers(initialState, getQuizAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", quiz by "get quiz success" action', () => {
    const state = quizReducers(
      initialState,
      getQuizSuccessAction({ quiz: expectedQuiz })
    );
    expect(state.isLoading).toBe(false);
    expect(state.quiz).toEqual(expectedQuiz);
  });

  it('Should return the updated state with loading "false" and null quiz by "get quiz failure" action', () => {
    const state = quizReducers(initialState, getQuizFailureAction);
    expect(state.isLoading).toBe(false);
    expect(state.quiz).toEqual(null);
  });

  it('Should return the updated state with search value by "search" action', () => {
    const expectedResult = 'Search';
    const state = quizReducers(
      initialState,
      searchQuizAction({ search: expectedResult })
    );
    expect(state.search).toEqual(expectedResult);
  });
});

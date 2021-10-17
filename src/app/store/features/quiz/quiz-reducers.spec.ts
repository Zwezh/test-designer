import { Quiz } from '@appApi';
import {
  addQuizAction,
  addQuizFailureAction,
  addQuizSuccessAction,
  deleteQuizAction,
  deleteQuizFailureAction,
  deleteQuizSuccessAction,
  getQuizCollectionAction,
  getQuizCollectionFailureAction,
  getQuizCollectionSuccessAction,
  quizReducers,
  QuizState,
  searchQuizAction,
  updateQuizAction,
  updateQuizFailureAction,
  updateQuizSuccessAction
} from '@appStore';

describe('Quiz Reducer', () => {

  const expectedQuiz: Quiz = {
    id: null,
    name: 'Test',
    discipline: 'Disc',
    createdDate: new Date(),
    modifiedDate: new Date(),
    teacherId: 36,
  };

  const initialState: QuizState = {
    isLoading: false,
    // currentQuiz: expectedQuiz,
    quizCollection: [],
    search: ''
  };

  it('Should return the default state by "Unknown" action', () => {
    const action = { type: 'Unknown' };
    const state = quizReducers(initialState, action);
    expect(state).toBe(initialState);
  });

  it('Should return the updated state with search value by "search" action', () => {
    const expectedResult = 'Search';
    const state = quizReducers(initialState, searchQuizAction({ search: expectedResult }));
    expect(state.search).toEqual(expectedResult);
  });

  it('Should return the updated state with loading "true" by "add quiz" action', () => {
    const state = quizReducers(initialState, addQuizAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false" and quiz collection by "add quiz success" action', () => {
    const state = quizReducers(initialState, addQuizSuccessAction({ newQuiz: expectedQuiz }));
    expect(state.isLoading).toBe(false);
    expect(state.quizCollection).toEqual([expectedQuiz]);
  });

  it('Should return the updated state with loading "false" by "add quiz failure" action', () => {
    const state = quizReducers(initialState, addQuizFailureAction);
    expect(state.isLoading).toBe(false);
  });

  it('Should return the updated state with loading "true" by "update quiz" action', () => {
    const state = quizReducers(initialState, updateQuizAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", quiz collection by "update quiz success" action', () => {
    const state = quizReducers(initialState, updateQuizSuccessAction({ quizCollection: [] }));
    expect(state.isLoading).toBe(false);
    expect(state.quizCollection).toEqual([]);
  });

  it('Should return the updated state with loading "false" by "update quiz failure" action', () => {
    const state = quizReducers(initialState, updateQuizFailureAction);
    expect(state.isLoading).toBe(false);
  });

  it('Should return the updated state with loading "true" by "delete quiz" action', () => {
    const state = quizReducers(initialState, deleteQuizAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", quiz collectoin by "delete quiz success" action', () => {
    const state = quizReducers(initialState, deleteQuizSuccessAction({ quizCollection: [] }));
    expect(state.isLoading).toBe(false);
    expect(state.quizCollection).toEqual([]);
  });

  it('Should return the updated state with loading "false" by "delete quiz failure" action', () => {
    const state = quizReducers(initialState, deleteQuizFailureAction);
    expect(state.isLoading).toBe(false);
  });

  it('Should return the updated state with loading "true" by "get quiz collection" action', () => {
    const state = quizReducers(initialState, getQuizCollectionAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", quiz collection by "get quiz collection success" action', () => {
    const state = quizReducers(initialState, getQuizCollectionSuccessAction({ quizCollection: [expectedQuiz] }));
    expect(state.isLoading).toBe(false);
    expect(state.quizCollection).toEqual([expectedQuiz]);
  });

  it('Should return the updated state with loading "false" and empty quiz collection by "get quiz collection failure" action', () => {
    const state = quizReducers(initialState, getQuizCollectionFailureAction);
    expect(state.isLoading).toBe(false);
    expect(state.quizCollection).toEqual([]);
  });
});
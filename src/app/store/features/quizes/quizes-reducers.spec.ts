import { Quiz } from '@appApi';
import {
  addQuizesAction,
  addQuizesFailureAction,
  addQuizesSuccessAction,
  deleteQuizesAction,
  deleteQuizesFailureAction,
  deleteQuizesSuccessAction,
  getQuizesCollectionAction,
  getQuizesCollectionFailureAction,
  getQuizesCollectionSuccessAction,
  quizesReducers,
  QuizesState,
  searchQuizesAction,
  updateQuizesAction,
  updateQuizesFailureAction,
  updateQuizesSuccessAction
} from '@appStore';

describe('Quizes Reducer', () => {

  const expectedQuiz: Quiz = {
    id: null,
    name: 'Test',
    discipline: 'Disc',
    createdDate: new Date(),
    modifiedDate: new Date(),
    teacherId: 36,
  };

  const initialState: QuizesState = {
    isLoading: false,
    quizCollection: [],
    search: ''
  };

  it('Should return the default state by "Unknown" action', () => {
    const action = { type: 'Unknown' };
    const state = quizesReducers(initialState, action);
    expect(state).toBe(initialState);
  });

  it('Should return the updated state with search value by "search" action', () => {
    const expectedResult = 'Search';
    const state = quizesReducers(initialState, searchQuizesAction({ search: expectedResult }));
    expect(state.search).toEqual(expectedResult);
  });

  it('Should return the updated state with loading "true" by "add quiz" action', () => {
    const state = quizesReducers(initialState, addQuizesAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false" and quiz collection by "add quiz success" action', () => {
    const state = quizesReducers(initialState, addQuizesSuccessAction({ newQuiz: expectedQuiz }));
    expect(state.isLoading).toBe(false);
    expect(state.quizCollection).toEqual([expectedQuiz]);
  });

  it('Should return the updated state with loading "false" by "add quiz failure" action', () => {
    const state = quizesReducers(initialState, addQuizesFailureAction);
    expect(state.isLoading).toBe(false);
  });

  it('Should return the updated state with loading "true" by "update quiz" action', () => {
    const state = quizesReducers(initialState, updateQuizesAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", quiz collection by "update quiz success" action', () => {
    const state = quizesReducers(initialState, updateQuizesSuccessAction({ quizCollection: [] }));
    expect(state.isLoading).toBe(false);
    expect(state.quizCollection).toEqual([]);
  });

  it('Should return the updated state with loading "false" by "update quiz failure" action', () => {
    const state = quizesReducers(initialState, updateQuizesFailureAction);
    expect(state.isLoading).toBe(false);
  });

  it('Should return the updated state with loading "true" by "delete quiz" action', () => {
    const state = quizesReducers(initialState, deleteQuizesAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", quiz collectoin by "delete quiz success" action', () => {
    const state = quizesReducers(initialState, deleteQuizesSuccessAction({ quizCollection: [] }));
    expect(state.isLoading).toBe(false);
    expect(state.quizCollection).toEqual([]);
  });

  it('Should return the updated state with loading "false" by "delete quiz failure" action', () => {
    const state = quizesReducers(initialState, deleteQuizesFailureAction);
    expect(state.isLoading).toBe(false);
  });

  it('Should return the updated state with loading "true" by "get quiz collection" action', () => {
    const state = quizesReducers(initialState, getQuizesCollectionAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", quiz collection by "get quiz collection success" action', () => {
    const state = quizesReducers(initialState, getQuizesCollectionSuccessAction({ quizCollection: [expectedQuiz] }));
    expect(state.isLoading).toBe(false);
    expect(state.quizCollection).toEqual([expectedQuiz]);
  });

  it('Should return the updated state with loading "false" and empty quiz collection by "get quiz collection failure" action', () => {
    const state = quizesReducers(initialState, getQuizesCollectionFailureAction);
    expect(state.isLoading).toBe(false);
    expect(state.quizCollection).toEqual([]);
  });
});
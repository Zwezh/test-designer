import {
  addQuizAction,
  addQuizFailureAction,
  addQuizSuccessAction,
  deleteQuizAction,
  deleteQuizFailureAction,
  deleteQuizSuccessAction,
  getOneQuizAction,
  getQuizListAction,
  getQuizListFailureAction,
  getQuizListSuccessAction,
  quizesReducers,
  QuizesState,
  QuizModel,
  searchQuizesAction,
  updateQuizAction,
  updateQuizFailureAction,
  updateQuizSuccessAction
} from '@appStore';

describe('Quizes Reducer', () => {
  const expectedQuiz: QuizModel = {
    id: 12,
    name: 'Test #3',
    discipline: 'Disc #2',
    createdDate: new Date(),
    modifiedDate: new Date(),
    teacherId: 36,
    topicList: []
  };

  const initialState: QuizesState = {
    isLoading: false,
    quizList: [],
    currentQuiz: {
      id: 12,
      name: 'Test',
      discipline: 'Disc',
      createdDate: new Date(),
      modifiedDate: new Date(),
      teacherId: 36,
      topicList: []
    },
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
    const state = quizesReducers(initialState, addQuizAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false" and quiz list by "add quiz success" action', () => {
    const state = quizesReducers(initialState, addQuizSuccessAction({ newQuiz: expectedQuiz }));
    expect(state.isLoading).toBe(false);
    expect(state.quizList).toEqual([expectedQuiz]);
  });

  it('Should return the updated state with loading "false" by "add quiz failure" action', () => {
    const state = quizesReducers(initialState, addQuizFailureAction);
    expect(state.isLoading).toBe(false);
  });

  it('Should return the updated state with loading "true" by "update quiz" action', () => {
    const state = quizesReducers(initialState, updateQuizAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", quiz list by "update quiz success" action', () => {
    const state = quizesReducers(initialState, updateQuizSuccessAction({ quizList: [] }));
    expect(state.isLoading).toBe(false);
    expect(state.quizList).toEqual([]);
  });

  it('Should return the updated state with loading "false" by "update quiz failure" action', () => {
    const state = quizesReducers(initialState, updateQuizFailureAction);
    expect(state.isLoading).toBe(false);
  });

  it('Should return the updated state with loading "true" by "delete quiz" action', () => {
    const state = quizesReducers(initialState, deleteQuizAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", quiz list by "delete quiz success" action', () => {
    const state = quizesReducers(initialState, deleteQuizSuccessAction({ quizList: [] }));
    expect(state.isLoading).toBe(false);
    expect(state.quizList).toEqual([]);
  });

  it('Should return the updated state with loading "false" by "delete quiz failure" action', () => {
    const state = quizesReducers(initialState, deleteQuizFailureAction);
    expect(state.isLoading).toBe(false);
  });

  it('Should return the updated state with loading "true" by "get quiz list" action', () => {
    const state = quizesReducers(initialState, getQuizListAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", quiz list, current quiz by "get quiz list success" action', () => {
    initialState.currentQuiz = expectedQuiz;

    const state = quizesReducers(initialState, getQuizListSuccessAction({ quizList: [expectedQuiz] }));
    expect(state.isLoading).toBe(false);
    expect(state.quizList).toEqual([expectedQuiz]);
    expect(state.currentQuiz).toEqual(expectedQuiz);
  });

  it('Should return the updated state with loading "false" and empty quiz list by "get quiz list failure" action', () => {
    const state = quizesReducers(initialState, getQuizListFailureAction);
    expect(state.isLoading).toBe(false);
    expect(state.quizList).toEqual([]);
  });

  it('Should return the updated state with loading "true" by "get one quiz" action', () => {
    const state = quizesReducers(initialState, getOneQuizAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", quiz by "get one quiz success" action', () => {
    const state = quizesReducers(initialState, updateQuizSuccessAction({ quizList: [] }));
    expect(state.isLoading).toBe(false);
    expect(state.quizList).toEqual([]);
  });

  it('Should return the updated state with loading "false" by "get one quiz failure" action', () => {
    const state = quizesReducers(initialState, updateQuizFailureAction);
    expect(state.isLoading).toBe(false);
  });
});

import { Question } from '@appApi';
import {
  getQuestionListAction,
  getQuestionListFailureAction,
  getQuestionListSuccessAction,
  questionsReducers,
  QuestionsState,
  searchQuestionsAction
} from '@appStore';

describe('Question Reducer', () => {
  const expectedQuestion: Question = {
    id: null,
    category: 'Category',
    weight: 9,
    description: 'Description',
    quizId: 12,
    topicId: 13
  };

  const initialState: QuestionsState = {
    isLoading: false,
    search: '',
    questionList: [expectedQuestion]
  };

  it('Should return the default state by "Unknown" action', () => {
    const action = { type: 'Unknown' };
    const state = questionsReducers(initialState, action);
    expect(state).toBe(initialState);
  });

  it('Should return the updated state with loading "true" by "get question list" action', () => {
    const state = questionsReducers(initialState, getQuestionListAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", question list by "get question list success" action', () => {
    const state = questionsReducers(initialState, getQuestionListSuccessAction({ questionList: [expectedQuestion] }));
    expect(state.isLoading).toBe(false);
    expect(state.questionList).toEqual([expectedQuestion]);
  });

  it('Should return the updated state with loading "false" and empty question list by "get question list failure" action', () => {
    const state = questionsReducers(initialState, getQuestionListFailureAction);
    expect(state.isLoading).toBe(false);
    expect(state.questionList).toEqual([]);
  });

  it('Should return the updated state with search value by "search" action', () => {
    const expectedResult = 'Search';
    const state = questionsReducers(initialState, searchQuestionsAction({ search: expectedResult }));
    expect(state.search).toEqual(expectedResult);
  });
});

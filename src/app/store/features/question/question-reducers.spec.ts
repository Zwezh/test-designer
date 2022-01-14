import { Question, Topic } from '@appApi';

import {
  addTopicAction,
  addTopicFailureAction,
  addTopicSuccessAction,
  getQuestionAction,
  getQuestionFailureAction,
  getQuestionSuccessAction,
  getTopicListAction,
  getTopicListFailureAction,
  getTopicListSuccessAction
} from './actions';
import { questionReducers } from './question-reducers';
import { QuestionState } from './types';

describe('Question Reducer', () => {
  const expectedQuestion: Question = {
    id: 1,
    category: 'Category',
    weight: 9,
    description: 'Description',
    quizId: 12,
    topicId: 13
  };

  const expectedTopic: Topic = {
    id: 0,
    quizId: 1,
    title: 'Topic Title'
  };

  const initialState: QuestionState = {
    isLoading: false,
    question: null,
    topicList: []
  };

  it('Should return the default state by "Unknown" action', () => {
    const action = {type: 'Unknown'};
    const state = questionReducers(initialState, action);
    expect(state).toBe(initialState);
  });

  it('Should return the updated state with loading "true" by "get question" action', () => {
    const state = questionReducers(initialState, getQuestionAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", question by "get question success" action', () => {
    const state = questionReducers(initialState, getQuestionSuccessAction({question: expectedQuestion}));
    expect(state.isLoading).toBe(false);
    expect(state.question).toEqual(expectedQuestion);
  });

  it('Should return the updated state with loading "false" and empty question by "get question failure" action', () => {
    const state = questionReducers(initialState, getQuestionFailureAction);
    expect(state.isLoading).toBe(false);
    expect(state.question).toEqual(null);
  });

  it('Should return the updated state with loading "true" by "get topic list" action', () => {
    const state = questionReducers(initialState, getTopicListAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", topic list by "get topic list success" action', () => {
    const state = questionReducers(initialState, getTopicListSuccessAction({topicList: [expectedTopic]}));
    expect(state.isLoading).toBe(false);
    expect(state.topicList).toEqual([expectedTopic]);
  });

  it('Should return the updated state with loading "false" and empty list by "get topic list failure" action', () => {
    const state = questionReducers(initialState, getTopicListFailureAction);
    expect(state.isLoading).toBe(false);
    expect(state.topicList).toEqual([]);
  });

  it('Should return the updated state with loading "true" by "add topic" action', () => {
    const state = questionReducers(initialState, addTopicAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false" and topic list by "add topic success" action', () => {
    const state = questionReducers(initialState, addTopicSuccessAction({ topic: expectedTopic }));
    expect(state.isLoading).toBe(false);
    expect(state.topicList).toEqual([expectedTopic]);
  });

  it('Should return the updated state with loading "false" by "add topic failure" action', () => {
    const state = questionReducers(initialState, addTopicFailureAction);
    expect(state.isLoading).toBe(false);
  });
});

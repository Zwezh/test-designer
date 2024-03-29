import { Topic } from '@appApi';
import {
  getTopicListAction,
  getTopicListFailureAction,
  getTopicListSuccessAction,
  topicsReducers,
  TopicsState
} from '@appStore';

describe('Topic Reducer', () => {
  const expectedTopic: Topic = {
    id: null,
    title: 'Topic title',
    quizId: 12
  };

  const initialState: TopicsState = {
    isLoading: false,
    topicList: [expectedTopic]
  };

  it('Should return the default state by "Unknown" action', () => {
    const action = { type: 'Unknown' };
    const state = topicsReducers(initialState, action);
    expect(state).toBe(initialState);
  });

  it('Should return the updated state with loading "true" by "get topic list" action', () => {
    const state = topicsReducers(initialState, getTopicListAction);
    expect(state.isLoading).toBe(true);
  });

  it('Should return the updated state with loading "false", topic list by "get topic list success" action', () => {
    const state = topicsReducers(initialState, getTopicListSuccessAction({ topicList: [expectedTopic] }));
    expect(state.isLoading).toBe(false);
    expect(state.topicList).toEqual([expectedTopic]);
  });

  it('Should return the updated state with loading "false" and empty topic list by "get topic list failure" action', () => {
    const state = topicsReducers(initialState, getTopicListFailureAction);
    expect(state.isLoading).toBe(false);
    expect(state.topicList).toEqual([]);
  });
});

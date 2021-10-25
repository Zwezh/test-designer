import { TopicsState } from '@appStore';
import { Action, createReducer, on } from '@ngrx/store';

import { getTopicListAction, getTopicListFailureAction, getTopicListSuccessAction } from './actions';

const initalState: TopicsState = {
  isLoading: false,
  topicList: []
};

const reducer = createReducer(
  initalState,
  on(
    getTopicListAction,
    (state): TopicsState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getTopicListSuccessAction,
    (state, action): TopicsState => ({
      ...state,
      isLoading: false,
      topicList: action.topicList
    })
  ),
  on(
    getTopicListFailureAction,
    (state): TopicsState => ({
      ...state,
      isLoading: false,
      topicList: []
    })
  )
);

export function topicsReducers(state: TopicsState, action: Action): TopicsState {
  return reducer(state, action);
}

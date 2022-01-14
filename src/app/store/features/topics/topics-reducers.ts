import { Action, createReducer, on } from '@ngrx/store';

import {
  getTopicListAction,
  getTopicListFailureAction,
  getTopicListSuccessAction
} from './actions';
import { TopicsState } from './types';

const initialState: TopicsState = {
  isLoading: false,
  topicList: []
};

const reducer = createReducer(
  initialState,
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

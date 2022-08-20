import { Action, createReducer, on } from '@ngrx/store';

import {
  addQuestionAction,
  addQuestionFailureAction,
  addQuestionSuccessAction,
  addTopicAction, addTopicFailureAction, addTopicSuccessAction,
  getQuestionAction,
  getQuestionFailureAction,
  getQuestionSuccessAction, getTopicListAction, getTopicListFailureAction, getTopicListSuccessAction,
} from './actions';
import { QuestionState } from './types';

const initialState: QuestionState = {
  isLoading: false,
  question: null,
  topicList: []
};

const reducer = createReducer(
  initialState,
  on(
    getQuestionAction,
    (state): QuestionState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getQuestionSuccessAction,
    (state, action): QuestionState => ({
      ...state,
      isLoading: false,
      question: action.question
    })
  ),
  on(
    getQuestionFailureAction,
    (state): QuestionState => ({
      ...state,
      isLoading: false,
      question: null
    })
  ),
  on(
    getTopicListAction,
    (state): QuestionState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getTopicListSuccessAction,
    (state, action): QuestionState => ({
      ...state,
      isLoading: false,
      topicList: action.topicList
    })
  ),
  on(
    getTopicListFailureAction,
    (state): QuestionState => ({
      ...state,
      isLoading: false,
      topicList: []
    })
  ),
  on(
    addTopicAction,
    (state): QuestionState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    addTopicSuccessAction,
    (state, action): QuestionState => ({
      ...state,
      isLoading: false,
      topicList: [...state.topicList, action.topic]
    })
  ),
  on(
    addTopicFailureAction,
    (state): QuestionState => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    addQuestionAction,
    (state): QuestionState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    addQuestionSuccessAction,
    (state): QuestionState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    addQuestionFailureAction,
    (state): QuestionState => ({
      ...state,
      isLoading: false
    })
  )
);

export function questionReducers(
  state: QuestionState,
  action: Action
): QuestionState {
  return reducer(state, action);
}

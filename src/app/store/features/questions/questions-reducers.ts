import { Action, createReducer, on } from '@ngrx/store';

import {
  getQuestionListAction,
  getQuestionListFailureAction,
  getQuestionListSuccessAction,
  searchQuestionsAction
} from './actions';
import { QuestionsState } from './types';

const initialState: QuestionsState = {
  isLoading: false,
  search: '',
  questionList: []
};

const reducer = createReducer(
  initialState,
  on(
    searchQuestionsAction,
    (state, action): QuestionsState => ({
      ...state,
      search: action.search
    })
  ),
  on(
    getQuestionListAction,
    (state): QuestionsState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getQuestionListSuccessAction,
    (state, action): QuestionsState => ({
      ...state,
      isLoading: false,
      questionList: action.questionList
    })
  ),
  on(
    getQuestionListFailureAction,
    (state): QuestionsState => ({
      ...state,
      isLoading: false,
      questionList: []
    })
  )
);

export function questionsReducers(
  state: QuestionsState,
  action: Action
): QuestionsState {
  return reducer(state, action);
}

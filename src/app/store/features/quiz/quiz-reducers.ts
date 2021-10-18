import { Action, createReducer, on } from '@ngrx/store';

import {
  getQuizAction,
  getQuizFailureAction,
  getQuizSuccessAction,
  searchQuizAction
} from './actions';
import { QuizState } from './types';

const initalState: QuizState = {
  isLoading: false,
  search: '',
  quiz: null
};

const reducer = createReducer(
  initalState,
  on(
    getQuizAction,
    (state): QuizState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getQuizSuccessAction,
    (state, action): QuizState => ({
      ...state,
      isLoading: false,
      quiz: action.quiz
    })
  ),
  on(
    getQuizFailureAction,
    (state): QuizState => ({
      ...state,
      isLoading: false,
      quiz: null
    })
  ),
  on(
    searchQuizAction,
    (state, action): QuizState => ({
      ...state,
      search: action.search
    })
  )
);

export function quizReducers(state: QuizState, action: Action): QuizState {
  return reducer(state, action);
}

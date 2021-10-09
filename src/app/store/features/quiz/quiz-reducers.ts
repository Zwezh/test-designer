import { Action, createReducer, on } from '@ngrx/store';
import {
  addQuizAction,
  addQuizFailureAction,
  addQuizSuccessAction,
  getQuizCollectionAction,
  getQuizCollectionFailureAction,
  getQuizCollectionSuccessAction
} from './actions';
import { QuizState } from './types';

const initalState: QuizState = {
  isLoading: false,
  currentQuiz: null,
  quizCollection: null
};

const reducer = createReducer(
  initalState,
  on(
    addQuizAction,
    (state): QuizState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    addQuizSuccessAction,
    (state): QuizState => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    addQuizFailureAction,
    (state): QuizState => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    getQuizCollectionAction,
    (state): QuizState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getQuizCollectionSuccessAction,
    (state, action): QuizState => ({
      ...state,
      isLoading: false,
      quizCollection: action.quizCollection
    })
  ),
  on(
    getQuizCollectionFailureAction,
    (state): QuizState => ({
      ...state,
      isLoading: false
    })
  )
);

export function quizReducers(state: QuizState, action: Action): QuizState {
  return reducer(state, action);
}

import { Action, createReducer, on } from '@ngrx/store';
import {
  addQuizAction,
  addQuizFailureAction,
  addQuizSuccessAction,
  getQuizCollectionAction,
  getQuizCollectionFailureAction,
  getQuizCollectionSuccessAction,
  searchQuizAction
} from './actions';
import { QuizState } from './types';

const initalState: QuizState = {
  isLoading: false,
  currentQuiz: null,
  search: null,
  quizCollection: null
};

const reducer = createReducer(
  initalState,
  on(
    searchQuizAction,
    (state, action): QuizState => ({
      ...state,
      search: action.search
    })
  ),
  on(
    addQuizAction,
    (state): QuizState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    addQuizSuccessAction,
    (state, action): QuizState => ({
      ...state,
      isLoading: false,
      quizCollection: [...state.quizCollection, action.newQuiz]
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

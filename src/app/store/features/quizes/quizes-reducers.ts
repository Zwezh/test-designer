import { Action, createReducer, on } from '@ngrx/store';

import {
  addQuizesAction,
  addQuizesFailureAction,
  addQuizesSuccessAction,
  deleteQuizesAction,
  deleteQuizesFailureAction,
  deleteQuizesSuccessAction,
  getQuizesCollectionAction,
  getQuizesCollectionFailureAction,
  getQuizesCollectionSuccessAction,
  searchQuizesAction,
  updateQuizesAction,
  updateQuizesFailureAction,
  updateQuizesSuccessAction
} from './actions';
import { QuizesState } from './types';

const initalState: QuizesState = {
  isLoading: false,
  // currentQuiz: null,
  search: null,
  quizCollection: null
};

const reducer = createReducer(
  initalState,
  on(
    searchQuizesAction,
    (state, action): QuizesState => ({
      ...state,
      search: action.search
    })
  ),
  on(
    addQuizesAction,
    (state): QuizesState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    addQuizesSuccessAction,
    (state, action): QuizesState => ({
      ...state,
      isLoading: false,
      quizCollection: [...state.quizCollection, action.newQuiz]
    })
  ),
  on(
    addQuizesFailureAction,
    (state): QuizesState => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    updateQuizesAction,
    (state): QuizesState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    updateQuizesSuccessAction,
    (state, action): QuizesState => ({
      ...state,
      isLoading: false,
      quizCollection: action.quizCollection
    })
  ),
  on(
    updateQuizesFailureAction,
    (state): QuizesState => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    deleteQuizesAction,
    (state): QuizesState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    deleteQuizesSuccessAction,
    (state, action): QuizesState => ({
      ...state,
      isLoading: false,
      quizCollection: action.quizCollection
    })
  ),
  on(
    deleteQuizesFailureAction,
    (state): QuizesState => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    getQuizesCollectionAction,
    (state): QuizesState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getQuizesCollectionSuccessAction,
    (state, action): QuizesState => ({
      ...state,
      isLoading: false,
      quizCollection: action.quizCollection
    })
  ),
  on(
    getQuizesCollectionFailureAction,
    (state): QuizesState => ({
      ...state,
      isLoading: false,
      quizCollection: []
    })
  )
);

export function quizesReducers(state: QuizesState, action: Action): QuizesState {
  return reducer(state, action);
}

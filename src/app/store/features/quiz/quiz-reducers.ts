import { Action, createReducer, on } from '@ngrx/store';
import {
  addQuizAction,
  addQuizFailureAction,
  addQuizSuccessAction,
  deleteQuizAction,
  deleteQuizFailureAction,
  deleteQuizSuccessAction,
  getQuizCollectionAction,
  getQuizCollectionFailureAction,
  getQuizCollectionSuccessAction,
  searchQuizAction,
  updateQuizAction,
  updateQuizFailureAction,
  updateQuizSuccessAction
} from './actions';
import { QuizState } from './types';

const initalState: QuizState = {
  isLoading: false,
  // currentQuiz: null,
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
    updateQuizAction,
    (state): QuizState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    updateQuizSuccessAction,
    (state, action): QuizState => ({
      ...state,
      isLoading: false,
      quizCollection: action.quizCollection
    })
  ),
  on(
    updateQuizFailureAction,
    (state): QuizState => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    deleteQuizAction,
    (state): QuizState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    deleteQuizSuccessAction,
    (state, action): QuizState => ({
      ...state,
      isLoading: false,
      quizCollection: action.quizCollection
    })
  ),
  on(
    deleteQuizFailureAction,
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
      isLoading: false,
      quizCollection: []
    })
  )
);

export function quizReducers(state: QuizState, action: Action): QuizState {
  return reducer(state, action);
}

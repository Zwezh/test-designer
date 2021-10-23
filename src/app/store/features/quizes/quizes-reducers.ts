import { Action, createReducer, on } from '@ngrx/store';

import {
  addQuizAction,
  addQuizFailureAction,
  addQuizSuccessAction,
  deleteQuizAction,
  deleteQuizFailureAction,
  deleteQuizSuccessAction,
  getOneQuizAction,
  getOneQuizFailureAction,
  getOneQuizSuccessAction,
  getQuizListAction,
  getQuizListFailureAction,
  getQuizListSuccessAction,
  searchQuizesAction,
  updateQuizAction,
  updateQuizFailureAction,
  updateQuizSuccessAction
} from './actions';
import { QuizesState } from './types';

const initalState: QuizesState = {
  isLoading: false,
  currentQuiz: null,
  search: null,
  quizList: null
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
    addQuizAction,
    (state): QuizesState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    addQuizSuccessAction,
    (state, action): QuizesState => ({
      ...state,
      isLoading: false,
      quizList: [...state.quizList, action.newQuiz]
    })
  ),
  on(
    addQuizFailureAction,
    (state): QuizesState => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    updateQuizAction,
    (state): QuizesState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    updateQuizSuccessAction,
    (state, action): QuizesState => ({
      ...state,
      isLoading: false,
      currentQuiz: action.quizList.find((quiz) => quiz.id === state.currentQuiz.id),
      quizList: action.quizList
    })
  ),
  on(
    updateQuizFailureAction,
    (state): QuizesState => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    deleteQuizAction,
    (state): QuizesState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    deleteQuizSuccessAction,
    (state, action): QuizesState => ({
      ...state,
      isLoading: false,
      quizList: action.quizList
    })
  ),
  on(
    deleteQuizFailureAction,
    (state): QuizesState => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    getQuizListAction,
    (state): QuizesState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getQuizListSuccessAction,
    (state, action): QuizesState => ({
      ...state,
      isLoading: false,
      quizList: action.quizList
    })
  ),
  on(
    getQuizListFailureAction,
    (state): QuizesState => ({
      ...state,
      isLoading: false,
      quizList: []
    })
  ),
  on(
    getOneQuizAction,
    (state): QuizesState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getOneQuizSuccessAction,
    (state, action): QuizesState => ({
      ...state,
      isLoading: false,
      currentQuiz: action.quiz
    })
  ),
  on(
    getOneQuizFailureAction,
    (state): QuizesState => ({
      ...state,
      isLoading: false,
      currentQuiz: null
    })
  )
);

export function quizesReducers(state: QuizesState, action: Action): QuizesState {
  return reducer(state, action);
}

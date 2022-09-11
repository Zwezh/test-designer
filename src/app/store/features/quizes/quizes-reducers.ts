import { Question } from '@appApi';
import { Action, createReducer, on } from '@ngrx/store';

import {
  addQuizAction,
  addQuizFailureAction,
  addQuizSuccessAction,
  deleteQuestionAction,
  deleteQuestionFailureAction,
  deleteQuestionSuccessAction,
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
import { QuizesState, TopicModel } from './types';

const initialState: QuizesState = {
  isLoading: false,
  currentQuiz: null,
  search: null,
  quizList: null
};

const reducer = createReducer(
  initialState,
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
      currentQuiz: { ...state.currentQuiz, ...action.quizList.find((quiz) => quiz.id === state.currentQuiz.id) },
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
  ),
  on(
    deleteQuestionAction,
    (state): QuizesState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    deleteQuestionSuccessAction,
    (state, action): QuizesState => ({
      ...state,
      isLoading: false,
      currentQuiz: {
        ...state.currentQuiz,
        countOfQuestions: state.currentQuiz.countOfQuestions - 1,
        topicList: state.currentQuiz.topicList
          .map((topic: TopicModel) => {
            const questionList = topic.questionList.filter((question: Question) => question.id !== action.id);
            return { ...topic, countOfQuestions: questionList.length, questionList };
          })
      }
    })
  ),
  on(
    deleteQuestionFailureAction,
    (state): QuizesState => ({
      ...state,
      isLoading: false
    })
  )
);

export function quizesReducers(state: QuizesState, action: Action): QuizesState {
  return reducer(state, action);
}

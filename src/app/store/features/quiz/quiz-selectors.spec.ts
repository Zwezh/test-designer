import {
  quizGetSelector,
  quizIsLoadingSelector,
  quizSearchSelector
} from './quiz-selectors';
import { QuizState } from './types';

describe('Quiz selectors', () => {
  const initialState: QuizState = {
    isLoading: false,
    quiz: null,
    search: ''
  };

  it('should select the quizGet', () => {
    const result = quizGetSelector.projector(initialState);
    expect(result).toEqual(initialState.quiz);
  });

  it('should select the search', () => {
    const result = quizSearchSelector.projector(initialState);
    expect(result).toEqual(initialState.search);
  });

  it('should select the loading', () => {
    const result = quizIsLoadingSelector.projector(initialState);
    expect(result).toEqual(initialState.isLoading);
  });
});

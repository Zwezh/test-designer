import {
  getOneQuizSelector,
  getQuizListSelector,
  isLoadingQuizesSelector,
  QuizesState,
  searchQuizesSelector
} from '@appStore';

describe('Quizes selectors', () => {
  const initialState: QuizesState = {
    isLoading: false,
    quizList: [],
    currentQuiz: null,
    search: ''
  };

  it('should select the search', () => {
    const result = searchQuizesSelector.projector(initialState);
    expect(result).toEqual(initialState.search);
  });

  it('should select the loading', () => {
    const result = isLoadingQuizesSelector.projector(initialState);
    expect(result).toEqual(initialState.isLoading);
  });

  it('should select the quiz list selector', () => {
    const result = getQuizListSelector.projector(initialState);
    expect(result).toEqual(initialState.quizList);
  });

  it('should select the one quiz selector', () => {
    const result = getOneQuizSelector.projector(initialState);
    expect(result).toEqual(initialState.currentQuiz);
  });
});

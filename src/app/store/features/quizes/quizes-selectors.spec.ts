import {
  quizesGetCollectionSelector,
  quizesIsLoadingSelector,
  quizesSearchSelector,
  QuizesState
} from '@appStore';

describe('Quizes selectors', () => {

  const initialState: QuizesState = {
    isLoading: false,
    quizCollection: [],
    search: ''
  };

  it('should select the search', () => {
    const result = quizesSearchSelector.projector(initialState);
    expect(result).toEqual(initialState.search);
  });

  it('should select the loading', () => {
    const result = quizesIsLoadingSelector.projector(initialState);
    expect(result).toEqual(initialState.isLoading);
  });

  it('should select the quiz collection selector', () => {
    const result = quizesGetCollectionSelector.projector(initialState);
    expect(result).toEqual(initialState.quizCollection);
  });
});

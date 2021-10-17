import { Quiz } from '@appApi';
import {
  quizGetCollectionSelector,
  quizIsLoadingSelector,
  quizSearchSelector,
  QuizState
} from '@appStore';

describe('Quiz selectors', () => {
  const expectedQuiz: Quiz = {
    id: null,
    name: 'Test',
    discipline: 'Disc',
    createdDate: new Date(),
    modifiedDate: new Date(),
    teacherId: 36
  };

  const initialState: QuizState = {
    isLoading: false,
    // currentQuiz: expectedQuiz,
    quizCollection: [],
    search: ''
  };

  it('should select the search', () => {
    const result = quizSearchSelector.projector(initialState);
    expect(result).toEqual(initialState.search);
  });

  it('should select the loading', () => {
    const result = quizIsLoadingSelector.projector(initialState);
    expect(result).toEqual(initialState.isLoading);
  });

  it('should select the quiz collection selector', () => {
    const result = quizGetCollectionSelector.projector(initialState);
    expect(result).toEqual(initialState.quizCollection);
  });
});

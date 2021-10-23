import {
  questionListSelector,
  questionsIsLoadingSelector,
  questionsSearchSelector
} from './questions-selectors';
import { QuestionsState } from './types';

describe('Questions selectors', () => {
  const initialState: QuestionsState = {
    isLoading: false,
    questionList: [],
    search: ''
  };

  it('should select the question list', () => {
    const result = questionListSelector.projector(initialState);
    expect(result).toEqual(initialState.questionList);
  });

  it('should select the search', () => {
    const result = questionsSearchSelector.projector(initialState);
    expect(result).toEqual(initialState.search);
  });

  it('should select the loading', () => {
    const result = questionsIsLoadingSelector.projector(initialState);
    expect(result).toEqual(initialState.isLoading);
  });
});

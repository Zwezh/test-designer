import { topicListSelector, topicsIsLoadingSelector } from './topics-selectors';
import { TopicsState } from './types';

describe('Topics selectors', () => {
  const initialState: TopicsState = {
    isLoading: false,
    topicList: []
  };

  it('should select the topic list', () => {
    const result = topicListSelector.projector(initialState);
    expect(result).toEqual(initialState.topicList);
  });

  it('should select the loading', () => {
    const result = topicsIsLoadingSelector.projector(initialState);
    expect(result).toEqual(initialState.isLoading);
  });
});

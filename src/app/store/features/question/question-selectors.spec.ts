import { Question, Topic } from '@appApi';
import { questionsIsLoadingSelector } from '@appStore';

import { questionSelector, questionTopicListSelector } from './question-selectors';
import { QuestionState } from './types';

describe('Questions selectors', () => {

  const expectedQuestion: Question = {
    id: 1,
    category: 'Category',
    weight: 9,
    description: 'Description',
    quizId: 12,
    topicId: 13
  };

  const expectedTopic: Topic = {
    id: 0,
    quizId: 1,
    title: 'Topic Title'
  };

  const initialState: QuestionState = {
    isLoading: false,
    question: expectedQuestion,
    topicList: [expectedTopic]
  };

  it('should select the question list', () => {
    const result = questionSelector.projector(initialState);
    expect(result).toEqual(expectedQuestion);
  });

  it('should select the search', () => {
    const result = questionTopicListSelector.projector(initialState);
    expect(result).toEqual([expectedTopic]);
  });

  it('should select the loading', () => {
    const result = questionsIsLoadingSelector.projector(initialState);
    expect(result).toEqual(false);
  });
});

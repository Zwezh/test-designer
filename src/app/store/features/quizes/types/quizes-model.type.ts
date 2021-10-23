import { Question, Quiz, Topic } from '@appApi';

export interface TopicModel extends Topic {
  questionList: Question[];
}

export interface QuizModel extends Quiz {
  topicList: TopicModel[];
}

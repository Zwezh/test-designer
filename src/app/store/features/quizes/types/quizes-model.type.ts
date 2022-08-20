import { Question, Quiz, Topic } from '@appApi';

export interface TopicModel extends Topic {
  questionList: Question[];
  countOfQuestions: number;
}

export interface QuizModel extends Quiz {
  topicList: TopicModel[];
  countOfQuestions: number;
}

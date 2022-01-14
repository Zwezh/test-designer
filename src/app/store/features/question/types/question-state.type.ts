import {Question, Topic} from '@appApi';

export interface QuestionState {
  isLoading: boolean;
  question: Question;
  topicList: Topic[];
}

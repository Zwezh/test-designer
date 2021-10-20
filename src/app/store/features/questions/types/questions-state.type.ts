import { Question } from '@appApi';

export interface QuestionsState {
  isLoading: boolean;
  search: string;
  questionList: Question[];
}

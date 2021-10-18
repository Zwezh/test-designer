import { Quiz } from '@appApi';

export interface QuizesState {
  isLoading: boolean;
  search: string;
  quizCollection: Quiz[];
}

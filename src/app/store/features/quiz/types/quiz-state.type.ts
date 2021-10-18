import { Quiz } from '@appApi';

export interface QuizState {
  isLoading: boolean;
  quiz: Quiz | null;
  search: string;
}

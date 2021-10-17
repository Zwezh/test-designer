import { Quiz } from '@appApi';

export interface QuizState {
  isLoading: boolean;
  // currentQuiz: Quiz | null;
  search: string;
  quizCollection: Quiz[];
}

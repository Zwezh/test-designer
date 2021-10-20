import { Quiz } from '@appApi';

export interface QuizesState {
  isLoading: boolean;
  search: string;
  currentQuiz: Quiz;
  quizList: Quiz[];
}

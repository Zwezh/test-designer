import { Quiz } from '@appApi';
import { QuizModel } from '@appStore';

export interface QuizesState {
  isLoading: boolean;
  search: string;
  currentQuiz: QuizModel;
  quizList: Quiz[];
}

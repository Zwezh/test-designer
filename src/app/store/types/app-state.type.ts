import { AuthState, QuizesState } from '../features';
import { QuizState } from '../features/quiz';

export interface AppState {
  auth: AuthState;
  quizes: QuizesState;
  quiz: QuizState;
}

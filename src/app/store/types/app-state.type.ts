import { AuthState, QuestionsState, QuizesState } from '../features';

export interface AppState {
  auth: AuthState;
  quizes: QuizesState;
  questions: QuestionsState;
}

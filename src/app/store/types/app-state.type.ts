import { AuthState, QuizState } from '../features';

export interface AppState {
  auth: AuthState;
  quiz: QuizState;
}

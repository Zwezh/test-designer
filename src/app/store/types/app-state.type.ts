import { AuthState, QuestionsState, QuizesState, TopicsState } from '../features';

export interface AppState {
  auth: AuthState;
  quizes: QuizesState;
  questions: QuestionsState;
  topics: TopicsState;
}

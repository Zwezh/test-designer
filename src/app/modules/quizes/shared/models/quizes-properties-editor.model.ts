import { Quiz } from '@appApi';

export interface QuizesPropertiesEditorData {
  title: string;
  quiz: Partial<Quiz>;
}

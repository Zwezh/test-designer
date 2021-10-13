import { Quiz } from '@appApi';

export interface QuizPropertiesEditorData {
  title: string;
  quiz:Partial<Quiz>;
}
import { Quiz } from '@appApi';

export interface TestsDialogData {
  title: string;
  quiz:Partial<Quiz>;
}
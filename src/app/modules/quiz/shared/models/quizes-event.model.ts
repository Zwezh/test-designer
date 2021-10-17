import { Quiz } from '@appApi';

export enum QuizesEvents {
  SEARCH = 'SEARCH',
  ADD = 'ADD',
  DELETE = 'DELETE'
}

export class QuizesEventEmmited {
  action: QuizesEvents;
  data?: string | number | Quiz;
}
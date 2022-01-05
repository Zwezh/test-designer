import { Quiz } from '@appApi';

export enum QuizesEvents {
  SEARCH = 'SEARCH',
  ADD = 'ADD',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE'
}

export class QuizesEventEmmited {
  action: QuizesEvents;
  data?: string | number | Quiz;
}

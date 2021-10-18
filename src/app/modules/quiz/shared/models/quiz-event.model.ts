export enum QuizEvents {
  SEARCH = 'SEARCH',
  ADD = 'ADD'
}

export class QuizEventEmmited {
  action: QuizEvents;
  data?: string;
}

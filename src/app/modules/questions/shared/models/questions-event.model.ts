export enum QuestionsEvents {
  SEARCH = 'SEARCH',
  ADD = 'ADD'
}

export class QuestionsEventEmmited {
  action: QuestionsEvents;
  data?: string;
}

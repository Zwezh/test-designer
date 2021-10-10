import { Quiz } from '@appApi';

export enum TestsActions {
  SEARCH = 'SEARCH',
  ADD = 'ADD',
  EDIT = 'EDIT'
}

export class TestsActionEmmited {
  action: TestsActions;
  data?: string | Partial<Quiz>;
}
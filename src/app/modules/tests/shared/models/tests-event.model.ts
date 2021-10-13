import { Quiz } from '@appApi';

export enum TestsActions {
  SEARCH = 'SEARCH',
  ADD = 'ADD',
  DELETE = 'DELETE'
}

export class TestsActionEmmited {
  action: TestsActions;
  data?: string | number | Quiz;
}
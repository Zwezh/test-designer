export enum TestsActions {
  SEARCH = 'SEARCH',
  ADD = 'ADD'
}

export class TestsActionEmmited {
  action: TestsActions;
  data?: string | null;
}
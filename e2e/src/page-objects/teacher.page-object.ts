import { BasePageObject } from './base.page-object';

export class TeacherPage extends BasePageObject {

  constructor() {
    super('teacher', '.ts-teacher-title');
  }
}

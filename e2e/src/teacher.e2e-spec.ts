import { browser, logging } from 'protractor';

import { BasePageObject } from './page-objects/base.page-object';
import { TeacherPage } from './page-objects/teacher.page-object';

describe('Teacher page', () => {
  let page: TeacherPage;

  beforeAll(() => {
    BasePageObject.login();
  });

  beforeEach(() => {
    page = new TeacherPage();
  });

  it('Title should display correct title of the teacher page', () => {
    page.navigateTo();
    expect(page.titlePage).toEqual('Страница находится в разработке');
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  afterAll(() => {
    BasePageObject.logout();
  });
});

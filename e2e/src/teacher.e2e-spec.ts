import { browser, logging } from 'protractor';

import { TeacherPage } from './page-objects/teacher.page-object';

describe('Teacher page', () => {
  let page: TeacherPage;

  beforeEach(() => {
    page = new TeacherPage();
  });

  it('Title should display correct title of the teacher page', () => {
    page.navigateTo();
    expect(page.titlePage).toEqual('Страница находится в разработке');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

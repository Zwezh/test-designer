import { browser, logging } from 'protractor';

import { AppPage } from './page-objects/app.page-object';

describe('Main page', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });

  it('should display correct header title', async () => {
    page.navigateTo();
    const title = await page.getTitleText();
    expect(title).toEqual('Конструктор тестов');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

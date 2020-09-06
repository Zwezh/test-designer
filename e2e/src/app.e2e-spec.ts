import { browser, logging } from 'protractor';

import { AppPage } from './app.po';

describe('Main page', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });

  it('should display correct header title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Конструктор тестов');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

import { browser, logging } from 'protractor';

import { LoginPageObject } from './page-objects/login.page-object';

describe('Login page', () => {
  let page: LoginPageObject;

  beforeEach(() => {
    page = new LoginPageObject();
  });

  it('Title of page should be corrected', () => {
    page.navigateTo();
    expect(page.titlePage).toEqual('Страница авторизации пользователя');
  });

  it('Teacher selector should be enabled', () => {
    expect(page.isEnabledSelect).toBeTruthy();
  });

  it('Password field should be enabled', () => {
    expect(page.isEnabledPasswordField).toBeTruthy();
  });


  it('Registration button should be enabled', () => {
    expect(page.isEnabledRegistrationButton).toBeTruthy();
  });

  it('Help button should be enabled', () => {
    expect(page.isEnabledHelpButton).toBeTruthy();
  });

  it('Login button should be enable', () => {
    expect(page.isEnabledLoginButton).toBeFalsy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

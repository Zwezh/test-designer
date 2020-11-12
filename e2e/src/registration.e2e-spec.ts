import { browser, logging } from 'protractor';

import { RegistrationPageObject } from './page-objects/registration.page-object';


describe('Registration page', () => {
  let page: RegistrationPageObject;

  beforeEach(() => {
    page = new RegistrationPageObject();
  });

  it('Should display correct title of the registration page', () => {
    page.navigateTo();
    expect(page.title).toEqual('Добавить нового преподавателя');
  });

  it('Cancel buttin should be enabled', () => {
    expect(page.isEnabledCancelButton).toBeTruthy();
  });

  it('Save button should be disabled', () => {
    expect(page.isEnabledSaveButton).toBeFalsy();
  });

  it('Save button should be enabled after fill all fields', () => {
    const poistion = 'Position';
    const name = 'Name';
    const lastName = 'Last Name';
    const patronymic = 'Patronymic';
    const password = 'Password';

    page.fillPosition(poistion);
    page.fillName(name);
    page.fillLastName(lastName);
    page.fillPatronymic(patronymic);
    page.fillPassword(password);
    page.fillConfirmPassword(password);
    expect(page.isClickableSaveButton).toBeTruthy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

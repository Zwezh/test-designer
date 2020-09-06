import { browser, logging } from 'protractor';

import { TeachersPage } from './teachers.po';

describe('Teacher page', () => {
  let page: TeachersPage;

  beforeEach(() => {
    page = new TeachersPage();
  });

  it('should display correct page text', () => {
    page.navigateTo();
    expect(page.getPageText()).toEqual('teachers-main-page works!');
  });

  it('should open new teacher dialog', () => {
    page.openNewTeacherDialog().then(() => page.isDisplayedNewTeacherDialog()
      .then((isDisplayedDialog) => {
        expect(isDisplayedDialog).toBeTruthy();
      }));
  });

  it('should display correct title dialog', () => {
    expect(page.newTeacherDialog.title).toEqual('Добавить нового преподавателя');
  });

  it('should enable cancel button', () => {
    expect(page.newTeacherDialog.isEnabledCancelButton).toBeTruthy();
  });

  it('should disable save button', () => {
    expect(page.newTeacherDialog.isEnabledSaveButton).toBeFalsy();
  });

  it('should enable save button after fill all field', () => {
    const poistion = 'Position';
    const name = 'Name';
    const lastName = 'Last Name';
    const patronymic = 'Patronymic';
    const password = 'Password';

    page.newTeacherDialog.fillPosition(poistion);
    page.newTeacherDialog.fillName(name);
    page.newTeacherDialog.fillLastName(lastName);
    page.newTeacherDialog.fillPatronymic(patronymic);
    page.newTeacherDialog.fillConfirmPassword(password);
    setTimeout(() => expect(page.newTeacherDialog.isEnabledSaveButton).toBeTruthy(), 1000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

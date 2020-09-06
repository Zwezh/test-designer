import { browser, by, element, ElementFinder, promise } from 'protractor';

import { AddTeacherDialog } from './add-teacher.po';

export class TeachersPage {

  private _teachersUrl = 'teachers';

  private _newTeacherButton: ElementFinder;
  private _newTeacherDialog: ElementFinder;
  private _addTeacherTitle: ElementFinder;

  public newTeacherDialog: AddTeacherDialog;

  constructor() {
    this._newTeacherButton = element(by.css('.ts-new-teacher'));
    this._newTeacherDialog = element(by.css('.ts-new-teacher'));
    this._addTeacherTitle = element(by.css('.ts-page-text'));
    this.newTeacherDialog = new AddTeacherDialog();
  }

  public navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}${this._teachersUrl}`) as Promise<unknown>;
  }

  public getPageText(): Promise<string> {
    return this._addTeacherTitle.getText() as Promise<string>;
  }

  public openNewTeacherDialog(): Promise<void> {
    return this._newTeacherButton.click() as Promise<void>;
  }

  public isDisplayedNewTeacherDialog(): promise.Promise<boolean> {
    return this._newTeacherDialog.isDisplayed();
  }
}

import { browser, by, element, ElementFinder, promise } from 'protractor';

export class AddTeacherDialog {

  private _saveButton: ElementFinder;
  private _cancelButton: ElementFinder;
  private _title: ElementFinder;
  private _position: ElementFinder;
  private _name: ElementFinder;
  private _lastName: ElementFinder;
  private _patronymic: ElementFinder;
  private _password: ElementFinder;
  private _confirmPassword: ElementFinder;

  constructor() {
    this._saveButton = element(by.css('.ts-save-button'));
    this._cancelButton = element(by.css('.ts-cancel-button'));
    this._title = element(by.css('.ts-add-teacher-title'));
    this._position = element(by.css('.ts-position'));
    this._name = element(by.css('.ts-name'));
    this._lastName = element(by.css('.ts-last-name'));
    this._patronymic = element(by.css('.ts-patronymic'));
    this._password = element(by.css('.ts-password'));
    this._confirmPassword = element(by.css('.ts-confirm-password'));
  }

  public get title(): Promise<string> {
    return this._title.getText() as Promise<string>;
  }

  public get isEnabledSaveButton(): promise.Promise<boolean> {
    return this._saveButton.isEnabled();
  }

  public get isEnabledCancelButton(): promise.Promise<boolean> {
    return this._cancelButton.isEnabled();
  }

  public clickCancel(): Promise<void> {
    return this._cancelButton.click() as Promise<void>;
  }

  public fillPosition(value: string): promise.Promise<void> {
    return this._position.sendKeys(value);
  }

  public fillName(value: string): promise.Promise<void> {
    return this._name.sendKeys(value);
  }

  public fillLastName(value: string): promise.Promise<void> {
    return this._lastName.sendKeys(value);
  }

  public fillPatronymic(value: string): promise.Promise<void> {
    return this._patronymic.sendKeys(value);
  }

  public fillPassword(value: string): promise.Promise<void> {
    return this._password.sendKeys(value);
  }

  public fillConfirmPassword(value: string): promise.Promise<void> {
    return this._confirmPassword.sendKeys(value);
  }

}

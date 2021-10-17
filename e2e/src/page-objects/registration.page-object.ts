import { by, element, ElementFinder, promise } from 'protractor';

import { BasePageObject } from './base.page-object';

export class RegistrationPageObject extends BasePageObject {

  private page: ElementFinder;
  private saveButton: ElementFinder;
  private cancelButton: ElementFinder;
  private position: ElementFinder;
  private name: ElementFinder;
  private lastName: ElementFinder;
  private patronymic: ElementFinder;
  private password: ElementFinder;
  private confirmPassword: ElementFinder;


  get isEnabledSaveButton(): promise.Promise<boolean> {
    return this.saveButton.isEnabled();
  }

  get isEnabledCancelButton(): promise.Promise<boolean> {
    return this.cancelButton.isEnabled();
  }

  get isPresentPage(): promise.Promise<boolean> {
    return this.page.isPresent();
  }

  get isClickableSaveButton(): promise.Promise<void> {
    return this.waitingForClickable(this.saveButton);
  }

  constructor() {
    super('auth/registration', '.ts-registration-title');
    this.page = element(by.css('.ts-registration-page'));
    this.saveButton = element(by.css('.ts-save-button'));
    this.cancelButton = element(by.css('.ts-cancel-button'));
    this.position = element(by.css('.ts-position'));
    this.name = element(by.css('.ts-name'));
    this.lastName = element(by.css('.ts-last-name'));
    this.patronymic = element(by.css('.ts-patronymic'));
    this.password = element(by.css('.ts-password'));
    this.confirmPassword = element(by.css('.ts-confirm-password'));
  }

  clickCancel(): Promise<void> {
    return this.cancelButton.click() as Promise<void>;
  }

  fillPosition(value: string): promise.Promise<void> {
    return this.position.sendKeys(value);
  }

  fillName(value: string): promise.Promise<void> {
    return this.name.sendKeys(value);
  }

  fillLastName(value: string): promise.Promise<void> {
    return this.lastName.sendKeys(value);
  }

  fillPatronymic(value: string): promise.Promise<void> {
    return this.patronymic.sendKeys(value);
  }

  fillPassword(value: string): promise.Promise<void> {
    return this.password.sendKeys(value);
  }

  fillConfirmPassword(value: string): promise.Promise<void> {
    return this.confirmPassword.sendKeys(value);
  }

}

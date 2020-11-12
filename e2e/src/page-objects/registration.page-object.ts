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


  public get isEnabledSaveButton(): promise.Promise<boolean> {
    return this.saveButton.isEnabled();
  }

  public get isEnabledCancelButton(): promise.Promise<boolean> {
    return this.cancelButton.isEnabled();
  }

  public get isPresentPage(): promise.Promise<boolean> {
    return this.page.isPresent();
  }

  public get isClickableSaveButton(): promise.Promise<void> {
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

  public clickCancel(): Promise<void> {
    return this.cancelButton.click() as Promise<void>;
  }

  public fillPosition(value: string): promise.Promise<void> {
    return this.position.sendKeys(value);
  }

  public fillName(value: string): promise.Promise<void> {
    return this.name.sendKeys(value);
  }

  public fillLastName(value: string): promise.Promise<void> {
    return this.lastName.sendKeys(value);
  }

  public fillPatronymic(value: string): promise.Promise<void> {
    return this.patronymic.sendKeys(value);
  }

  public fillPassword(value: string): promise.Promise<void> {
    return this.password.sendKeys(value);
  }

  public fillConfirmPassword(value: string): promise.Promise<void> {
    return this.confirmPassword.sendKeys(value);
  }

}

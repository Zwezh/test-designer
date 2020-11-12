import { browser, by, element, ElementFinder, promise } from 'protractor';

import { BasePageObject } from './base.page-object';

export class LoginPageObject extends BasePageObject {


  private registrationButton: ElementFinder;
  private password: ElementFinder;
  private teacherSelector: ElementFinder;
  private helpButton: ElementFinder;
  private loginButton: ElementFinder;

  public get isEnabledRegistrationButton(): promise.Promise<boolean> {
    return this.registrationButton.isEnabled();
  }

  public get isEnabledHelpButton(): promise.Promise<boolean> {
    return this.helpButton.isEnabled();
  }

  public get isEnabledLoginButton(): promise.Promise<boolean> {
    return this.loginButton.isEnabled();
  }

  public get isEnabledSelect(): promise.Promise<boolean> {
    return this.helpButton.isEnabled();
  }

  public get isEnabledPasswordField(): promise.Promise<boolean> {
    return this.password.isEnabled();
  }

  constructor() {
    super('auth/login', '.ts-login-title');
    this.registrationButton = element(by.css('.ts-registration-button'));
    this.password = element(by.css('.ts-password'));
    this.teacherSelector = element(by.css('.ts-teacher-selector'));
    this.helpButton = element(by.css('.ts-help-button'));
    this.loginButton = element(by.css('.ts-login-button'));
  }
}
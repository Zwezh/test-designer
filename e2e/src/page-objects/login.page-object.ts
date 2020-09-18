import { browser, by, element, ElementFinder, promise } from 'protractor';

import { BasePageObject } from './base.page-object';

export class LoginPageObject extends BasePageObject {


  private _registrationButton: ElementFinder;
  private _password: ElementFinder;
  private _teacherSelector: ElementFinder;
  private _helpButton: ElementFinder;
  private _loginButton: ElementFinder;

  public get isEnabledRegistrationButton(): promise.Promise<boolean> {
    return this._registrationButton.isEnabled();
  }

  public get isEnabledHelpButton(): promise.Promise<boolean> {
    return this._helpButton.isEnabled();
  }

  public get isEnabledLoginButton(): promise.Promise<boolean> {
    return this._loginButton.isEnabled();
  }

  public get isEnabledSelect(): promise.Promise<boolean> {
    return this._helpButton.isEnabled();
  }

  public get isEnabledPasswordField(): promise.Promise<boolean> {
    return this._password.isEnabled();
  }

  constructor() {
    super('auth/login', '.ts-login-title');
    this._registrationButton = element(by.css('.ts-registration-button'));
    this._password = element(by.css('.ts-password'));
    this._teacherSelector = element(by.css('.ts-teacher-selector'));
    this._helpButton = element(by.css('.ts-help-button'));
    this._loginButton = element(by.css('.ts-login-button'));
  }
}
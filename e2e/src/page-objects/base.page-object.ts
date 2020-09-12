import { browser, by, element, ElementFinder, promise } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export abstract class BasePageObject {

  protected _url: string;
  protected _titlePage: ElementFinder;

  public get titlePage(): Promise<string> {
    return this._titlePage.getText() as Promise<string>;
  }

  constructor(url: string, titleClass: string) {
    this._url = url;
    this._titlePage = element(by.css(titleClass));
  }

  public navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}${this._url}`) as Promise<unknown>;
  }

  protected waitingForClickable(elm: ElementFinder, timeout = 2000): promise.Promise<void> {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.elementToBeClickable(elm), timeout);
  }
}
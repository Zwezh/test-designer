import { browser, by, element, ElementFinder, promise } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export abstract class BasePageObject {
  protected url: string;
  protected title: ElementFinder;

  public get titlePage(): Promise<string> {
    return this.title.getText() as Promise<string>;
  }

  constructor(url: string, titleClass: string) {
    this.url = url;
    this.title = element(by.css(titleClass));
  }

  public static login(): void {
    browser.executeScript(
      `return window.sessionStorage.setItem('currentTeacher', JSON.stringify({ id: 12 }));`
    );
  }

  public static logout(): void {
    browser.executeScript(`return window.sessionStorage.clear();`);
  }

  public navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}${this.url}`) as Promise<unknown>;
  }

  protected waitingForClickable(
    elm: ElementFinder,
    timeout = 2000
  ): promise.Promise<void> {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.elementToBeClickable(elm), timeout);
  }
}

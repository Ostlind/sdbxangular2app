import { browser, element, by } from 'protractor';

export class Sdbxangular2appPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
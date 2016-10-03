import { Sdbxangular2appPage } from './app.po';

describe('sdbxangular2app App', function() {
  let page: Sdbxangular2appPage;

  beforeEach(() => {
    page = new Sdbxangular2appPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

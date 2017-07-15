import { NgOliviaAppPage } from './app.po';

describe('ng-olivia-app App', () => {
  let page: NgOliviaAppPage;

  beforeEach(() => {
    page = new NgOliviaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

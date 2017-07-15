import { NgNateAppPage } from './app.po';

describe('ng-nate-app App', () => {
  let page: NgNateAppPage;

  beforeEach(() => {
    page = new NgNateAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

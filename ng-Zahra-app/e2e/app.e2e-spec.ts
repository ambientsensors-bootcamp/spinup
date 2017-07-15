import { NgZahraAppPage } from './app.po';

describe('ng-zahra-app App', () => {
  let page: NgZahraAppPage;

  beforeEach(() => {
    page = new NgZahraAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { NgSarahAppPage } from './app.po';

describe('ng-sarah-app App', () => {
  let page: NgSarahAppPage;

  beforeEach(() => {
    page = new NgSarahAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

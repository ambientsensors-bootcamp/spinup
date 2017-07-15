import { NgMadiaAppPage } from './app.po';

describe('ng-madia-app App', () => {
  let page: NgMadiaAppPage;

  beforeEach(() => {
    page = new NgMadiaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

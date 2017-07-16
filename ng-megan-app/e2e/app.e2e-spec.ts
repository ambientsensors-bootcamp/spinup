import { NgMeganAppPage } from './app.po';

describe('ng-megan-app App', () => {
  let page: NgMeganAppPage;

  beforeEach(() => {
    page = new NgMeganAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

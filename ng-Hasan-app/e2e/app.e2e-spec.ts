import { NgHasanAppPage } from './app.po';

describe('ng-hasan-app App', () => {
  let page: NgHasanAppPage;

  beforeEach(() => {
    page = new NgHasanAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

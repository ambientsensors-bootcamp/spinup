import { NgMyNameIsJeffAppPage } from './app.po';

describe('ng-my-name-is-jeff-app App', () => {
  let page: NgMyNameIsJeffAppPage;

  beforeEach(() => {
    page = new NgMyNameIsJeffAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

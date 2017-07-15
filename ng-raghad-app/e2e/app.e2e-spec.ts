import { NgRaghadAppPage } from './app.po';

describe('ng-raghad-app App', () => {
  let page: NgRaghadAppPage;

  beforeEach(() => {
    page = new NgRaghadAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

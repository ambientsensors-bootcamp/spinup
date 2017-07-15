import { NgSharihanAppPage } from './app.po';

describe('ng-sharihan-app App', () => {
  let page: NgSharihanAppPage;

  beforeEach(() => {
    page = new NgSharihanAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

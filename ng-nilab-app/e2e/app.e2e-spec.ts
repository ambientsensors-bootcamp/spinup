import { NgNilabAppPage } from './app.po';

describe('ng-nilab-app App', () => {
  let page: NgNilabAppPage;

  beforeEach(() => {
    page = new NgNilabAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

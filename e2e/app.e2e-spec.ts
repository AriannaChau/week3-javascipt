import { Week3Page } from './app.po';

describe('week3 App', () => {
  let page: Week3Page;

  beforeEach(() => {
    page = new Week3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

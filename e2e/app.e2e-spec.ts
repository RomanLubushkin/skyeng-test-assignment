import { SkyengTestAssignmentPage } from './app.po';

describe('skyeng-test-assignment App', () => {
  let page: SkyengTestAssignmentPage;

  beforeEach(() => {
    page = new SkyengTestAssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

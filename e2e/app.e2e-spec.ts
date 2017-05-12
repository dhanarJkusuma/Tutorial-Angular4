import { BelajarPage } from './app.po';

describe('belajar App', () => {
  let page: BelajarPage;

  beforeEach(() => {
    page = new BelajarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

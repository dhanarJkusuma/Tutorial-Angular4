import { BelajarFormsPage } from './app.po';

describe('belajar-forms App', () => {
  let page: BelajarFormsPage;

  beforeEach(() => {
    page = new BelajarFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

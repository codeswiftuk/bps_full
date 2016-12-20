import { BarrowbyPreschoolPage } from './app.po';

describe('barrowby-preschool App', function() {
  let page: BarrowbyPreschoolPage;

  beforeEach(() => {
    page = new BarrowbyPreschoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

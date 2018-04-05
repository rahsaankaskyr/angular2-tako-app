import { TacoAppPage } from './app.po';

describe('taco-app App', () => {
  let page: TacoAppPage;

  beforeEach(() => {
    page = new TacoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

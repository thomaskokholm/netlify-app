import { NetlifyAppPage } from './app.po';

describe('netlify-app App', () => {
  let page: NetlifyAppPage;

  beforeEach(() => {
    page = new NetlifyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

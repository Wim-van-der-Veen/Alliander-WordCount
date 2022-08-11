describe('Protractor Testing', () => {

  beforeEach(() => {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:4200/');
  })

  it('to check the page title', () => {
    browser.driver.getTitle()
      .then((pageTitle) => {
        expect(pageTitle).toEqual('AllianderWordCount');
      });
  });
  
});
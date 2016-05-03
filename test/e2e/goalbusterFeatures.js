describe('Goalbuster App', function() {
  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Goalbuster App');
  });
});

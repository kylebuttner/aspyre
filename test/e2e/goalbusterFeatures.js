describe('Goalbuster App', function() {


  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Goalbuster App');
  });

  it('displays goals', function() {
    browser.get('/');
    var goals = $$('#goals p');
    expect(goals.first().getText()).toEqual('Goal 1');
    expect(goals.last().getText()).toEqual('Goal 3');
  });


});

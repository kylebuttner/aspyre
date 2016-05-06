describe('Goalbuster App', function() {

var mock = require('protractor-http-mock');

beforeEach(function(){
  mock([{
    request : {
      path: "http://goalbuster-api.herokuapp.com/goals.json",
      method: 'GET'
    },
    response: {
      data: [{name: "learn piano"}, {name: "finish book"}, {name: "more sport"}]
    }
  }]);
});

  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Goalbuster App');
  });

  it('displays goals', function() {
    browser.get('/');
    var goals = $$('#goals p');
    expect(goals.first().getText()).toEqual('learn piano');
    expect(goals.last().getText()).toEqual('more sport');
  });

  it('displays an inputted goal', function() {
    browser.get('/');
    $('#new-goal-name').sendKeys("NewGoal");
    $('#add-goal-button').click();
    var goals = $$('#goals p').last().getText();
    expect(goals).toMatch('NewGoal');
  });

  it('can edit an inputted goal', function() {
    browser.get('/');
    $('#goal').first().click();
    $('#edit-goal').sendKeys("NewGoalEdit")

    var goals = $$('#goals p').first().getText();
    expect(goals).toMatch('NewGoalEdit');
  })

  afterEach(function(){
   mock.teardown();
  })
});

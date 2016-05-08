"use strict"

goalbusterApp.controller('GoalsController', ['ipCookie', '$q', 'GoalsFactory','GoalsService', 'TasksService', '$auth', function(ipCookie, $q, GoalsFactory, GoalsService, TasksService, $auth) {
  var self = this;
  self.goals = [];

  GoalsService.getAllFromApi().then(_saveGoals);

  self.addNewGoal = function(newGoal) {
    GoalsService.postGoalToApi(newGoal);
    _refreshGoals();
    self.goalText='';
  };

  self.editGoal = function(name, GoalId) {
    GoalsService.editGoalInApi(name, GoalId);
  };

 self.deleteGoal = function(GoalId) {
    GoalsService.deleteGoalOnApi(GoalId);
    _refreshGoals();
  };

  self.handleBtnClick = function() {
    $auth.authenticate("github");
  };

  self.handleRegBtnClick = function() {
    $auth.submitRegistration(self.registrationForm);
  };

  self.handleSignOutBtnClick = function() {
    $auth.signOut();
  };

  self.handleLoginBtnClick = function() {
    $auth.submitLogin($scope.loginForm);
  };

  function _refreshGoals() {
     GoalsService.getAllFromApi().then(_saveGoals)
  };

  function _saveGoals(response) {
    self.goals = response;
  };
}]);

'use strict';

angular.module('elmApp', [
  'ngRoute', 'ui.router', 'ngAnimate'
]).
config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/');

  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeCtrl',
      templateUrl: 'app/partials/main.html'
    });
});
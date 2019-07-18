'use strict';
angular.module('spafelizApp').config(settings);
settings.$inject = ['$stateProvider'];

function settings($stateProvider){

  var homeState = {
    abstract : true,
    name : 'home',
    templateUrl : 'views/home.html'
  };

  var mainState = {
    name : 'home.main',
    url : '/',
    controller: 'mainCtrl as ctx',
    templateUrl : 'views/main.html'
  };

  var aboutState = {
    name : 'home.about',
    url : '/about',
    templateUrl : 'views/about.html'
  };

  $stateProvider.state(homeState);
  $stateProvider.state(mainState);
  $stateProvider.state(aboutState);
}

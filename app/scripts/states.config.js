'use strict';
angular.module('spafelizApp').config(settings);
settings.$inject = ['$stateProvider', '$urlRouterProvider'];

function settings($stateProvider, $urlRouterProvider){

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

  var serviceDetailState = {
    name : 'home.serviceDetail',
    url : '/detail/{id}',
    templateUrl : 'views/serviceDetail.html',
    controller: 'detailCtrl as ctx',
  };

  var bookState = {
    name : 'home.book',
    url : '/book',
    templateUrl : 'views/book.html',
    controller: 'bookCtrl as ctx',
  };

  $stateProvider.state(homeState);
  $stateProvider.state(mainState);
  $stateProvider.state(aboutState);
  $stateProvider.state(serviceDetailState);
  $stateProvider.state(bookState);


  $urlRouterProvider.when('', '/');

}

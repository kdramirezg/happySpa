'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp').controller('mainCtrl', mainCtrl);
mainCtrl.$inject = ['spaServices'];

function mainCtrl(spaServices) {
  var ctx = this;
  ctx.$onInit = onInit;
  ctx.loadSpaServices = loadSpaServices;

  function onInit(){
    ctx.services = ctx.loadSpaServices();
  }

  function loadSpaServices(){
    return spaServices.getAllServices();
  }
};

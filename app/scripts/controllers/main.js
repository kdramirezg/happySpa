'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp').controller('mainCtrl', mainCtrl);
mainCtrl.$inject = ['spaServicesHttp'];

function mainCtrl(spaServicesHttp) {
  var ctx = this;
  ctx.$onInit = onInit;
  ctx.loadSpaServicesHttp = loadSpaServicesHttp;

  function onInit(){
    ctx.loadSpaServicesHttp();
  }

  function loadSpaServicesHttp(){
    spaServicesHttp.getAll()
    .then(function (data){
      ctx.services = data.data;
      //console.log(ctx.services);
    })
    .catch(function(err){
      console.log("Error: " + err);
    });
  }
};

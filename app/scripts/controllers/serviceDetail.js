'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp').controller('detailCtrl', detailCtrl);
detailCtrl.$inject = ['$state', 'spaServicesHttp'];

function detailCtrl($state, spaServicesHttp) {
  var ctx = this;
  ctx.$onInit = onInit;
  ctx.loadSpaServiceDetail = loadSpaServiceDetail;

  function onInit(){
    ctx.loadSpaServiceDetail();
  }

  function loadSpaServiceDetail(){
    var id = $state.params.id;
    spaServicesHttp.getById(id)
    .then(function (data){
      ctx.serviceDetail = data.data;
    })
    .catch(function(err){
      console.log("Error: " + err);
    });
  }
};

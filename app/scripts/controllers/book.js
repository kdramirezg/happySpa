'use strict';

angular.module('spafelizApp')
  .controller('bookCtrl', bookCtrl);

bookCtrl.$inject = ['spaServicesHttp', 'spaBooksHttp'];

function bookCtrl(spaServicesHttp, spaBooksHttp) {
  var ctx = this;
  ctx.$onInit = onInit;
  ctx.submitBook = submitBook;
  ctx.loadSpaServicesHttp = loadSpaServicesHttp;
  ctx.form = {};

  function onInit(){
    ctx.loadSpaServicesHttp();
  }

  function loadSpaServicesHttp(){
    spaServicesHttp.getAll()
    .then(function (data){
      ctx.services = data.data;
    })
    .catch(function(err){
      console.log("Error: " + err);
    });
  }

  function submitBook(){
    //console.log(ctx.form);
    spaBooksHttp.createBook(ctx.form)
    .then(function (){
      alert("Reserva realizada exitosamente");
    })
    .catch(function(err){
      console.log("Error: " + err);
    });
  }
}

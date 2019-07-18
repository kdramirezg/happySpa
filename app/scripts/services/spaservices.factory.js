'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.spaServices.factory
 * @description
 * # spaServices.factory
 * Factory in the spafelizApp.
 */
angular.module('spafelizApp').factory('spaServices', spaServices);

spaServices.$inject = [];

function spaServices() {
  // Service logic
  // ...

  var dataServices = [
    {name : 'Masaje sencillo', cost : '60,000', description: '30 mins de un genial masaje', endHappy: false, image: 'https://pur.vamtam.com/wp-content/uploads/2017/11/parallax4.jpg',},
    {name : 'Exfoliación', cost : '120,000', description: '30 mins de una genial exfoliacion', endHappy: false, image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic7.jpg'},
    {name : 'Masaje y Exfoliación', cost : '220,000', description: '30 mins de una genial exfoliacion y masaje', endHappy: true, image: 'https://pur.vamtam.com/wp-content/uploads/2017/11/logo-spa-theme.svg'}
  ]

  var services = {
    getAllServices: getAllServices,
    getServiceById: getServiceById
  }

  return services;

  function getAllServices(){
    return dataServices;
  }

  function getServiceById(Id){
    for (let i = 0; i < dataServices.length; i++) {
      if(id == dataServices[i].id) return dataServices[i];
    }
    return null;
  }

}

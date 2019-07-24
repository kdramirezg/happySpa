
'use strict';

angular.module('spafelizApp').factory('spaServicesHttp', spaServicesHttp);
spaServicesHttp.$inject = ['$http', '$q', 'httpConfig'];

function spaServicesHttp($http, $q, httpConfig) {
  //Variable para retornar los métodos e implementaciones de la fabrica.
  var services = {
    getAll: getAll,
    getById: getById
  }

  return services;

  function getAll() {
    var defered = $q.defer();
    var promise = defered.promise;
    const url = httpConfig.url + httpConfig.services.all;
    $http.get(url)
      .then(function (data) {
        defered.resolve(data);
      })
      .catch(function (error) {
        console.log(error);
        defered.reject(error);
      });
      return promise;
  }

  function getById(id) {
    var defered = $q.defer();
    var promise = defered.promise;
    const url = httpConfig.url + httpConfig.services.one + id;
    $http.get(url)
      .then(function (data) {
        defered.resolve(data);
      })
      .catch(function (error) {
        console.log(error);
        defered.reject(error);
      });
      return promise;
  }
}

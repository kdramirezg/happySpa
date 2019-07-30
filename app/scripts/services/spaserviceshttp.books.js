
'use strict';

angular.module('spafelizApp').factory('spaBooksHttp', spaBooksHttp);
spaBooksHttp.$inject = ['$http', '$q', 'httpConfig'];

function spaBooksHttp($http, $q, httpConfig) {
  //Variable para retornar los métodos e implementaciones de la fabrica.
  var services = {
    createBook: createBook,
  }

  return services;

  function createBook(form) {
    var defered = $q.defer();
    var promise = defered.promise;
    const url = httpConfig.url + httpConfig.books.createBook;
    $http.post(url, form)
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

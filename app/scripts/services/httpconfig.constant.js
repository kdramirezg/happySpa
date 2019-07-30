'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.httpConfig.constant
 * @description
 * # httpConfig.constant
 * Constant in the spafelizApp.
 */
angular.module('spafelizApp')
  .constant('httpConfig', {
    url: 'http://localhost:9002/',
    services: {
      all: 'services',
      one: 'services/'
    },
    books: {
      createBook: 'books'
    }
  });

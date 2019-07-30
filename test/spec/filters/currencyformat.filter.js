'use strict';

describe('Filter: currencyFormat.filter', function () {

  // load the filter's module
  beforeEach(module('spafelizApp'));

  // initialize a new instance of the filter before each test
  var currencyFormat.filter;
  beforeEach(inject(function ($filter) {
    currencyFormat.filter = $filter('currencyFormat.filter');
  }));

  it('should return the input prefixed with "currencyFormat.filter filter:"', function () {
    var text = 'angularjs';
    expect(currencyFormat.filter(text)).toBe('currencyFormat.filter filter: ' + text);
  });

});

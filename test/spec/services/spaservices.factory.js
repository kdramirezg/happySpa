'use strict';

describe('Service: spaServices.factory', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var spaServices.factory;
  beforeEach(inject(function (_spaServices.factory_) {
    spaServices.factory = _spaServices.factory_;
  }));

  it('should do something', function () {
    expect(!!spaServices.factory).toBe(true);
  });

});

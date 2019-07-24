'use strict';

describe('Service: httpConfig.constant', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var httpConfig.constant;
  beforeEach(inject(function (_httpConfig.constant_) {
    httpConfig.constant = _httpConfig.constant_;
  }));

  it('should do something', function () {
    expect(!!httpConfig.constant).toBe(true);
  });

});

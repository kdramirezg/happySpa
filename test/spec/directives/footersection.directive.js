'use strict';

describe('Directive: footerSection.directive', function () {

  // load the directive's module
  beforeEach(module('spafelizApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<footer-section.directive></footer-section.directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the footerSection.directive directive');
  }));
});

'use strict';

/**
 * @ngdoc directive
 * @name spafelizApp.directive:footerSection.directive
 * @description
 * # footerSection.directive
 */
angular.module('spafelizApp')
  .directive('footerSection', footerSection);

function footerSection() {
  var directive = {
    templateUrl: './views/partial.footer.html',
    restrict: 'EAC', //elemento, atributo, clase
    link: link
  };

  return directive;

  function link(scope, element, attrs) {
    scope.team = attrs.author;
    //element.text('this is the footerSection.directive directive');
  }
}

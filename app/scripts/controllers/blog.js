'use strict';

/**
 * @ngdoc function
 * @name efflorescentApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the efflorescentApp
 */
angular.module('efflorescentApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

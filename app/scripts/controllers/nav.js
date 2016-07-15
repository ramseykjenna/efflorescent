'use strict';

/**
 * @ngdoc function
 * @name efflorescentApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the efflorescentApp
 */
angular.module('efflorescentApp')
    .controller('NavCtrl', function ($scope, $timeout) {
        var vm = this;
        $scope.open = false;

        $scope.$watch('open',function(){
            $timeout(function(){
                $scope.done = $scope.open;
            }, 300);
        });

//        $(document).ready(function () {
//            $('.menu-icon').click(function () {
//                $scope.open = !$scope.open;
//                var that = this;
//                $(this).toggleClass('active');
//                setTimeout(function () {
//                    $(that).toggleClass('done');
//                }, 300);
//            });
//        });
    });

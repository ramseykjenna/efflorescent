'use strict';

/**
 * @ngdoc function
 * @name efflorescentApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the efflorescentApp
 */
angular.module('efflorescentApp')
    .controller('NavCtrl', function ($scope) {

        $(document).ready(function () {
            $('.menu-icon').click(function () {
                var that = this;
                $(this).toggleClass('active');
                setTimeout(function () {
                    $(that).toggleClass('done');
                }, 300);
            });
        });
    });

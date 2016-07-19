'use strict';

/**
 * @ngdoc function
 * @name efflorescentApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the efflorescentApp
 */
angular.module('efflorescentApp')
    .controller('NavCtrl', function ($scope, $timeout, $location) {
        var vm = this;
        vm.changeRoute = changeRoute;
        $scope.changeRoute = changeRoute;
        $scope.open = false;

        $scope.$watch('open', function () {
            $timeout(function () {
                $scope.done = $scope.open;
            }, 300);
        });

        function changeRoute(route) {
            switch (route) {
            case 'home':
                $scope.closeMenu();
                $scope.open = false;
                $location.path('/');
                break;
            case 'work':
                $scope.closeMenu();
                $scope.open = false;
                $location.path('/work');
                break;
            case 'contact':
                $scope.closeMenu();
                $scope.open = false;
                $location.path('/contact');
                break;
            case 'blog':
                $scope.closeMenu();
                $scope.open = false;
                $location.path('/blog');
                break;
            default:
                $scope.closeMenu();
                $scope.open = false;
                $location.path('/');
            }
        }

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

        jQuery(document).ready(function ($) {

            var open = false;

            //cache some jQuery objects
            var modalTrigger = $('.menu-icon'),
                transitionLayer = $('.cd-transition-layer'),
                transitionBackground = transitionLayer.children(),
                modalWindow = $('.cd-modal');

            var frameProportion = 1.78, //png frame aspect ratio
                frames = 25, //number of png frames
                resize = false;

            //set transitionBackground dimentions
            setLayerDimensions();
            $(window).on('resize', function () {
                if (!resize) {
                    resize = true;
                    (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300): window.requestAnimationFrame(setLayerDimensions);
                }
            });

            //open modal window
            modalTrigger.on('click', function (event) {

                if (!open) {
                    event.preventDefault();
                    transitionLayer.addClass('visible opening');
                    var delay = ($('.no-cssanimations').length > 0) ? 0 : 600;
                    setTimeout(function () {
                        modalWindow.addClass('visible');
                    }, delay);
                    open = true;
                } else {
                    event.preventDefault();
                    transitionLayer.addClass('closing');
                    modalWindow.removeClass('visible');
                    transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                        transitionLayer.removeClass('closing opening visible');
                        transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
                    });
                    open = false;
                }

            });

            function closeMenu() {
                transitionLayer.addClass('closing');
                modalWindow.removeClass('visible');
                transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                    transitionLayer.removeClass('closing opening visible');
                    transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
                });
                open = false;
            }

            $scope.closeMenu = closeMenu;

            function setLayerDimensions() {
                var windowWidth = $(window).width(),
                    windowHeight = $(window).height(),
                    layerHeight, layerWidth;

                if (windowWidth / windowHeight > frameProportion) {
                    layerWidth = windowWidth;
                    layerHeight = layerWidth / frameProportion;
                } else {
                    layerHeight = windowHeight * 1.2;
                    layerWidth = layerHeight * frameProportion;
                }

                transitionBackground.css({
                    'width': layerWidth * frames + 'px',
                    'height': layerHeight + 'px',
                });

                resize = false;
            }
        });
    });

'use strict';

angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}])
    .directive('scroll', function ($window) {
        return {
            restrict: 'A',
            link: function (scope, element) {
                angular.element($window).bind("scroll", function() {
                    if ($(window).scrollTop() > 500) {
                        element.css('display','block');
                        element.on('click', function () {
                            //$(window).scrollTop(0);
                            $("html, body").stop(true, false).animate({ scrollTop: 0 }, 2000);
                        })
                    }
                    else {
                        element.css('display','none');
                    }
                });
            }
        }
    });

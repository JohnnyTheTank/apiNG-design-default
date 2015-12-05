"use strict";

angular.module('jtt_aping_design_default', ['wu.masonry', 'linkify', 'angularMoment'])
    .run(['amMoment', function (amMoment) {
        amMoment.changeLocale('en');
    }])
    .controller('apingDefaultDesignController', ['$scope', function ($scope) {

        $scope.$on('apiNG.resultMerged', function () {
            $scope.workingCopy = $scope.results;
        });

        $scope.getPlatformIcon = function (_platform) {
            switch (_platform) {
                case "youtube":
                case "twitter":
                case "instagram":
                case "vimeo":
                case "facebook":
                    return "img/"+_platform+".png";
            }

            return false;
        };

        $scope.refresh = function () {
            $scope.$broadcast("masonry.reload");
        };

        $scope.$on('imagesLoaded.SUCCESS', function() {
            $scope.refresh();
        });
        $scope.$on('imagesLoaded.ALWAYS', function() {
            $scope.refresh();
        });

    }]);

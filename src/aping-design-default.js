"use strict";

angular.module('jtt_aping_design_default', ['linkify', 'angularMoment'])
    .run(['amMoment', function (amMoment) {
        amMoment.changeLocale('de');
    }])
    .controller('apingDefaultDesignController', ['$scope', function ($scope) {

        $scope.$on('resultMerged', function () {
            $scope.workingCopy = $scope.results;
        });
    }]);
"use strict";

angular.module('jtt_aping_design_default', [])
    .controller('apingDefaultDesignController', ['$scope', function ($scope) {

        $scope.$on('resultMerged', function () {
            $scope.workingCopy = $scope.results;
        });
    }]);

"use strict";

angular.module('jtt_aping_design_default', ['yaru22.angular-timeago', 'linkify'])
    .controller('apingDefaultDesignController', ['$scope', function ($scope) {

        $scope.$on('resultMerged', function () {
            $scope.workingCopy = $scope.results;
        });
    }]);
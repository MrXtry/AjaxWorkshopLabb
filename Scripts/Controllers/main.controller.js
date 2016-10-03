/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        "$http",
        "repository",
        function ($scope, $location, $route, $http, repository) {
            $scope.$route = $route;
            $scope.api = "http://dummyapi.kodalagom.se/api";
            $scope.posts = [];

            repository.getPosts($scope.api)
                .then(function (data) {
                    $scope.posts = data;
                });

            $scope.go = function (url) {
                $location.path(url);
            };
            console.log($scope.posts);
        }
    ]);
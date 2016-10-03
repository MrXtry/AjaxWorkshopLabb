/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("PostController", [
        "$scope",
        "$routeParams",
        function ($scope, $routeParams) {
            $scope.title = "Post";

            $scope.post = $scope.posts.filter(function (post) {
                return post.id == $routeParams.id;
            })[0];

            console.log($scope.post);
        }
    ]);
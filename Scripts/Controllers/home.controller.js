/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        "$http",
        function ($scope, $http) {
            $scope.title = "Home";
            $scope.newPost = {};

            $scope.addPost = function () {
                $http.post($scope.api + "/posts", $scope.newPost)
                    .then(function (response) {
                        $scope.posts.push($scope.newPost);
                        $scope.newPost = {};
                    });
            }

            $scope.removePost = function (id) {
                $http.delete($scope.api + "/posts/" + id)
                    //.then(function (response) {
                    //    console.log(response);
                    //});
            }
        }
    ]);
/**
 * Created by Preetham on 16/09/2016.
 */
angular.module("sportsStoreAdmin")
    .constant("authUrl", "http://localhost:5500/users/login")
    .controller("authCtrl", function ($scope, $http, $location, authUrl) {
        $scope.authenticate = function (username, password) {
            $http.post(authUrl, {
                username: username,
                password: password
            }, {
                withCredentials: true
            }).success(function (data) {
                $location.path("/main");
            }).error(function (error) {
                $scope.authenticationError = error;
            });
        }
    });
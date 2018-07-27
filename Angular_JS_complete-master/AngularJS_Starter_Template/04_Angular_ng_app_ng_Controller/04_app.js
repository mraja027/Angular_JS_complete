/*how create module*/

var app = angular.module('likeApp',[]);

/* create a controller */

app.controller('likeAppCtrl',function ($scope) {
        $scope.likes = 0;
        $scope.dislikes = 0;
        $scope.total = 0;
        $scope.liked = function () {
            $scope.likes++;
        };
        $scope.disliked = function () {
            $scope.dislikes ++;
        }

        $scope.totaled = function () {
            $scope.total = $scope.likes + $scope.dislikes   ;
        }


});
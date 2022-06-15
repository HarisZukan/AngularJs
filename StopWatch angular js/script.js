var app = angular.module('myApp', []);


app.controller('timerController', function ($scope, $interval) {

    $scope.timeMin = '00';
    $scope.timeSec = '00';
    $scope.timeMiliSec = '00';
    $scope.null = '0';
    var promise;

    $scope.isActive = false;
    $scope.actPlay = false;






    function counter() {

        $scope.timeMiliSec++;
        if ($scope.timeMiliSec > 99) {
            $scope.timeSec++;
            $scope.timeMiliSec = 0

        }

        if ($scope.timeSec > 59) {
            $scope.timeMin++;
            $scope.timeSec = 0;
        }

       if($scope.timeSec<10){
           $scope.timeSec='0'+$scope.timeSec++;
       }
       if($scope.timeMin<10){
           $scope.timeMin='0'+$scope.timeMin++;
       }

       if($scope.timeMiliSec<10){
        $scope.timeMiliSec='0'+$scope.timeMiliSec++;
    }

    }



    $scope.startTimer = function () {
        $scope.actPlay = true;
        promise = $interval(counter, 10)


    }

    $scope.stopTimer = function () {
        $scope.isActive = true;
        $interval.cancel(promise)
        $scope.actPlay = false;


    }
    $scope.lapTimes = [];

    $scope.lap = function () {

        $scope.onLap = {
            min: $scope.timeMin,
            sec: $scope.timeSec,
            milisec: $scope.timeMiliSec
        }
        $scope.lapTimes.push($scope.onLap);

        console.log($scope.lapTimes)

    $scope.restart=function(){

        $scope.timeMin = '00';
        $scope.timeSec = '00';
        $scope.timeMiliSec = '00';
        $scope.lapTimes = [];

    }




    }



})


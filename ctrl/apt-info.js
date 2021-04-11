(function () {
    angular.module('apt-info', ['ui.bootstrap', 'ngAnimate', 'ngSanitize', 'httpservice','navservice'])
        .controller('InfoController', InfoController)
        .controller('RatingDemoCtrl', RatingDemoCtrl)
        .controller('CarouselDemoCtrl', CarouselDemoCtrl)
        .controller('siteCtrl', siteCtrl);


    function siteCtrl($scope, $http, NavHeaderService) {
        $scope.Showcomment=true;
        NavHeaderService.navheader_init(false);
        $http.get("http://18.140.13.225:8080/user/get_apt/686ff1a5-dea1-4197-b091-3a177042e075").then(function (response) {
            $scope.apt_info = response.data[0];
        });
        $http.get("http://18.140.13.225:8080/user/get_user/686ff1a5-dea1-4197-b091-3a177042e075").then(function (response) {
            $scope.user_info = response.data;
        });
        }



    function RatingDemoCtrl($scope) {
        $scope.rate = 7;
        $scope.max = 10;
        $scope.isReadonly = false;

        $scope.hoveringOver = function (value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
        };

        $scope.ratingStates = [
            { stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle' },
            { stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty' },
            { stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle' },
            { stateOn: 'glyphicon-heart' },
            { stateOff: 'glyphicon-off' }
        ];
    }

    function InfoController($scope, $uibModal) {
        $scope.show = function (a) {
            if (a == 1)
                $uibModal.open({
                    size: 'md modal-dialog-centered',
                    templateUrl: 'picture1.html',
                }).result.catch(function () { });
            else if (a == 4)
                $uibModal.open({
                    size: 'md modal-dialog-centered',
                    templateUrl: 'rate_submit.html',
                }).result.catch(function () { });
            else if (a == 5)
                $uibModal.open({
                    size: 'md modal-dialog-centered',
                    templateUrl: 'reserve.html',
                }).result.catch(function () { });
        }
    }

    function CarouselDemoCtrl($scope,$uibModal){
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;
        var picture_id = 4;
        
        $scope.addSlide = function() {
          slides.push({
            image1: 'iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAIAAAAS8MqlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw',
            image: '../src/'+picture_id+'.jpg',
            id: currIndex++
          });
        };
        $scope.show_picture = function () {
                $uibModal.open({
                    size: 'md modal-dialog-centered',
                    templateUrl: 'picture.html',
                }).result.catch(function () { });}
      
        for (var i = 0; i < 2; i++) {
            picture_id =picture_id+1;
            $scope.addSlide();
        }
      
        // Randomize logic below
      }








})();


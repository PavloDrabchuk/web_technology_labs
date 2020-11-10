(function () {
    'use strict';

    angular.module('AngularApp', [])
        .controller('AppController', AppController);

    AppController.$inject = ['$scope'];

    function AppController($scope) {
        $scope.answer = "";
        $scope.productsList = "";

        $scope.displayAnswer = function () {
            $scope.answer = createAnswer($scope.productsList);
        }

        function createAnswer(inputProducts) {
            const answer1 = "На здоров'я!",
                answer2 = "Це забагато!",
                answer3 = "Будь ласка, уведіть дані!";

            let products = inputProducts.split(',');

            for (let i = products.length - 1; i >= 0; i--) {
                if (products[i].trim() === "") products.splice(i, 1);
            }
            if (products.length === 0) {
                return answer3;
            } else if (products.length <= 3) {
                return answer1;
            } else {
                return answer2;
            }
        }
    }
})();
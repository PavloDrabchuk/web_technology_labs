(function () {
    'use strict';

    angular.module('AngularCarsApp', [])
        .controller('CarsListController', CarsListController)
        .service('CarsListService', CarsListService);

    CarsListController.$inject = ['CarsListService'];

    function CarsListController(CarsListService) {
        const cars=this;

        cars.hideIndex=-1;

        cars.carsList=CarsListService.getCarsList();

        cars.deleteCarFromList=function (index){
            CarsListService.deleteCarFromList(index);
        }
    }

    function CarsListService() {
        const service = this;

        let carsList = [
            {
                mark: "BMW",
                quantity: 12
            },
            {
                mark: "Audi",
                quantity: 15
            },
            {
                mark: "Citroen",
                quantity: 8
            },
            {
                mark: "Ford",
                quantity: 19
            },
            {
                mark: "Volkswagen",
                quantity: 17
            },
            {
                mark: "Tesla",
                quantity: 15
            },
            {
                mark: "Skoda",
                quantity: 7
            }
        ];

        service.getCarsList = function () {
            return carsList;
        }

        service.deleteCarFromList = function (index) {
            carsList.splice(index, 1);
        }
    }

})();
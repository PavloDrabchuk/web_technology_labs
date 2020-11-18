(function () {
    'use strict';

    angular.module('ShoppingApp', [])
        .controller('ToBuyListController', ToBuyListController)
        .controller('BoughtListController', BoughtListController)
        .service('ShoppingListService', ShoppingListService);

    ToBuyListController.$inject = ['ShoppingListService'];

    function ToBuyListController(ShoppingListService) {
        const toBuy = this;

        toBuy.toBuyList = ShoppingListService.getToBuyList();

        toBuy.emptyToBuyListMessage = ShoppingListService.getEmptyToBuyListMessage();

        toBuy.addToBoughtList = function (index) {
            ShoppingListService.addToBoughtList(index);
        }
    }

    BoughtListController.$inject = ['ShoppingListService'];

    function BoughtListController(ShoppingListService) {
        const bought = this;

        bought.boughtList = ShoppingListService.getBoughtList();

        bought.emptyBoughtListMessage = ShoppingListService.getEmptyBoughtListMessage();
    }

    function ShoppingListService() {
        const service = this;

        let toBuyList = [
            {
                name: "яблук",
                quantity: "5"
            },
            {
                name: "груш",
                quantity: "11"
            },
            {
                name: "слив",
                quantity: "9"
            },
            {
                name: "горіхів",
                quantity: "7"
            },
            {
                name: "картоплин",
                quantity: "6"
            },
            {
                name: "помідори",
                quantity: "2"
            },
            {
                name: "огірки",
                quantity: "3"
            }
        ];

        let boughtList = [];

        const emptyToBuyListMessage = "Усе куплено";
        const emptyBoughtListMessage = "Ще нічого не куплено";

        service.getToBuyList = function () {
            return toBuyList;
        };

        service.getBoughtList = function () {
            return boughtList;
        };

        service.getEmptyToBuyListMessage = function () {
            return emptyToBuyListMessage;
        }

        service.getEmptyBoughtListMessage = function () {
            return emptyBoughtListMessage;
        }

        service.addToBoughtList = function (index) {
            const newItem = toBuyList[index];

            boughtList.push(newItem);
            toBuyList.splice(index, 1);
        };
    }
})();

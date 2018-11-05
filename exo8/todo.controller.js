angular.module('TodoApp').controller('TodoController', TodoController);
TodoController.$inject = ['$scope', 'storage'];

function TodoController($scope, storage) {
    $scope.currentId = 0;
    $scope.items = [];

    // First init
    $scope.initApp = function () {
        if (!storage.isEmpty()) {
            this.currentId = storage.get("currentId");
            this.items = storage.get("items");
        }
    }

    // Data: APP => STORAGE
    $scope.saveData = function () {
        storage.set("currentId", this.currentId);
        storage.set("items", this.items);
    }

    // Add item to items array & save
    $scope.addTask = function (description) {
        if (description.trim() == "") { return; }

        this.currentId += 1;
        this.items.push({ id: this.currentId, description: description, checked: false });

        this.saveData();
        document.querySelector("#new-input").value = "";
    }

    $scope.getUncheckedItems = function () {
        return this.items.filter(item => !item.checked);
    };

    $scope.getCheckedItems = function () {
        return this.items.filter(item => item.checked);
    };

    $scope.initApp();
}
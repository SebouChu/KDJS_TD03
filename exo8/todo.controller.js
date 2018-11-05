(function () {
    angular.module('TodoApp').controller('TodoController', TodoController);
    TodoController.$inject = ['$scope', 'storage'];

    function TodoController($scope, storage) {
        $scope.currentId = 0;
        $scope.items = [];

        $scope.initApp = function () {
            if (!storage.isEmpty()) {
                this.currentId = storage.get("currentId");
                this.items = storage.get("items");
            }
        }

        $scope.saveData = function () {
            storage.set("currentId", this.currentId);
            storage.set("items", this.items);
        }

        $scope.addTask = function (description) {
            if (description.trim() == "") { return; }

            this.currentId += 1;
            this.items.push({ id: this.currentId, description: description, checked: false });

            this.saveData();
            document.querySelector("#new-input").value = "";
        }

        $scope.removeTask = function(id) {
            const index = this.items.findIndex(item => item.id === id);
            if (index !== -1) {
                this.items.splice(index, 1);
                this.saveData();
            }
        }

        $scope.initApp();
    }
})();
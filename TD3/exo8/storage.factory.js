(function () {
    angular.module('TodoApp').factory('storage', StorageFactory);

    function StorageFactory() {
        var storage = window.localStorage;

        var isEmpty = function () {
            return storage.length == 0;
        }

        var set = function(key, value) {
            return storage.setItem(key, angular.toJson(value));
        }

        var get = function(key) {
            return angular.fromJson(storage.getItem(key));
        }

        return {
            get: get,
            set: set,
            isEmpty: isEmpty
        }
    }
})();
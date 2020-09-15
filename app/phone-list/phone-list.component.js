angular
    .module("phoneList", [])
    .component("phoneList", {

        templateUrl: "app/phone-list/phone-list.template.html",
        controller: ['$http', function PhoneController($http) {

            var self = this;
            self.order = "name";

            $http
                .get("app/phone-list/phones.json")
                .then(function (response) {
                    self.phones = response.data;
                });
        }]
    });
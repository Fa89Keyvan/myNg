angular
    .module("phoneDetail", [
        "ngRoute"
    ])
    .component("phoneDetail", {

        templateUrl: "app/phone-detail/phoneDetail.template.html",
        controller: ["$routeParams","$http" ,function PhoneDetailController($routeParams, $http) {

            var model = this;

            model.phoneId = $routeParams.phoneId;
            model.phoneDetail = null;

            $http.get("api/phone-" + model.phoneId + ".json").then(function (response) {

                model.phoneDetail = response.data;

            }).catch(function (err) {
                
            });
        }]
    });

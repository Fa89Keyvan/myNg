angular
    .module("phoneDetail", [
        "ngRoute"
    ])
    .component("phoneDetail", {

        templateUrl: "app/phone-detail/phoneDetail.template.html",
        controller: ["$routeParams" ,function PhoneDetailController($routeParams) {

            var model = this;

            model.phoneId = $routeParams.phoneId;
        }]

    });

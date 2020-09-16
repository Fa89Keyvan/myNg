angular
    .module("phonecatApp", [
        "ngRoute",
        "phoneList",
        "phoneDetail"
    ])
    .config(["$routeProvider", function ($routeProvider) {

        $routeProvider
            .when("/phones", {
                template: "<phone-list></phone-list>"
            })
            .when("/phones/:phoneId", {
                template: "<phone-detail></phone-detail>"
            })
            .otherwise("/phones");
    }]);
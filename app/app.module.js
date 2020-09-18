angular
    .module("phonecatApp", [
        "ngRoute",
        "ngAnimate",
        "phoneList",
        "phoneDetail",
        "core"
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
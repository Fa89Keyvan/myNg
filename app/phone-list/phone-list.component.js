angular
    .module("phoneList",[])
    .component("phoneList", {

        templateUrl: "app/phone-list/phone-list.template.html",
        controller: function PhoneController() {
            this.phones = [
                {
                    name: 'Nexus S',
                    snippet: 'Fast just got faster with Nexus S.'
                },
                {
                    name: 'Motorola XOOM with Wi-Fi',
                    snippet: 'The Next, Next Generation tablet.'
                },
                {
                    name: 'MOTOROLA XOOM',
                    snippet: 'The Next, Next Generation tablet.'
                }
            ]
        }
    });
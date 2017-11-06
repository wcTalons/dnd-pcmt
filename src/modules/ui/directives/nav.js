define([], function () {
    
    return {
        type: 'directive',
        name: 'pcmtNav',
        value: [function () {
            return {
                restrict: 'A',
                templateUrl: 'ui/views/nav.html',
                scope: {},
                controllerAs: 'nav',
                bindToController: true,
                link: function (scope, elem, attrs) {},
                controller: ['$pcmtNav', function ($pcmtNav) {
                	var self = this;

                    self.links = $pcmtNav.links;
                }]
            };
        }]
    };
});
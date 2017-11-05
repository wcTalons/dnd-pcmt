define([], function () {
    
    return {
        type: 'directive',
        name: 'dndNav',
        value: [function () {
            return {
                restrict: 'A',
                templateUrl: 'navigation/views/nav.html',
                scope: {},
                controllerAs: 'nav',
                bindToController: true,
                link: function (scope, elem, attrs) {},
                controller: ['$nav', '$element', function ($nav, $element) {
                	var self = this;

                	self.close = function () {
                		chrome.app.window.current().close();
                	};
                }]
            };
        }]
    };
});
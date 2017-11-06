define([], function () {
    
    return {
        type: 'directive',
        name: 'pcmtToolbar',
        value: [function () {
            return {
                restrict: 'A',
                templateUrl: 'ui/views/toolbar.html',
                scope: {},
                controllerAs: 'nav',
                bindToController: true,
                link: function (scope, elem, attrs) {},
                controller: [function () {
                	var self = this;

                    self.actions = {
                        close: {
                            icon: 'close',
                            stateHover: 'red s-400 accent clr-light',
                            fn: function () {
                                chrome.app.window.current().close();
                            }
                        }
                    };
                }]
            };
        }]
    };
});
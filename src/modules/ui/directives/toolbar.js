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
                replace: true,
                link: function (scope, elem, attrs) {},
                controller: ['$pcmtUiAppDrawer', function ($pcmtUiAppDrawer) {
                	var self = this;

                    self.actions = {
                        menu: {
                            icon: 'menu',
                            stateHover: 'light-blue s-200 accent',
                            fn: function () {
                                $pcmtUiAppDrawer.toggle();
                            }
                        }
                    };

                    if (chrome.app.window) {
                        self.actions.close = {
                            icon: 'close',
                            stateHover: 'red s-400 accent',
                            fn: function () {
                                chrome.app.window.current().close();
                            }
                        }
                    }
                }]
            };
        }]
    };
});
define([], function () {
    
    return {
        type: 'directive',
        name: 'pcmtAppDrawer',
        value: [function () {
            return {
                restrict: 'A',
                templateUrl: 'ui/views/app-drawer.html',
                scope: {},
                controllerAs: 'drawer',
                bindToController: true,
                replace: true,
                link: function (scope, elem, attrs) {},
                controller: ['$scope', '$pcmtUiAppDrawer', '$element', '$timeout', function ($scope, $pcmtUiAppDrawer, $element, $timeout) {
                	var self = this;

                    self.isOpen = false;
                    self.isReady = false;

                    self._transition = {
                        open: function () {
                            self.isReady = true;

                            $timeout(function () {
                                self.isOpen = true;
                            }, 100);
                        },
                        close: function () {
                            self.isOpen = false;

                            $timeout(function () {
                                self.isReady = false;
                            }, 100);
                        }
                    }

                    $pcmtUiAppDrawer.listen($scope, function () {

                        if ($pcmtUiAppDrawer.options.isOpen) {
                            self._transition.open();
                        } else {
                            self._transition.close();
                        }
                    });

                    self.changes = {
                        toggle: function (ev) {
                            var locator = event.toElement ? 'toElement' : 'target',
                                isTarget = ($element[0] === event[locator]);
                            
                            if (isTarget) {
                                $pcmtUiAppDrawer.close();
                            }
                        }
                    };
                }]
            };
        }]
    };
});
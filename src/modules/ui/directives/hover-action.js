define([], function () {
    
    return {
        type: 'directive',
        name: 'pcmtHoverAction',
        value: [function () {
            return {
                restrict: 'A',
                replace: true,
                templateUrl: 'ui/views/hover-action.html',
                scope: {
                    details: '=pcmtHoverAction'
                },
                controllerAs: 'action',
                bindToController: true,
                link: function (scope, elem, attrs) {},
                controller: [function () {
                    var self = this;

                    self.changeStyles = function (event) {

                        switch (event.type) {
                            case 'mouseout':
                                self.styles = self.details.stateDefault;
                            break;
                            case 'mouseover':
                                self.styles = self.details.stateHover;
                            break;
                        }
                    };
                }]
            };
        }]
    };
});
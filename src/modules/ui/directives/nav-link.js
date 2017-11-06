define([], function () {
    
    return {
        type: 'directive',
        name: 'pcmtNavLink',
        value: [function () {
            return {
                restrict: 'A',
                templateUrl: 'ui/views/nav-link.html',
                scope: {
                    details: '=pcmtNavLink'
                },
                controllerAs: 'link',
                bindToController: true,
                link: function (scope, elem, attrs) {},
                controller: ['$element', function ($element) {
                    var self = this;

                    self.changeStyles = function (event) {

                        if (!$element.hasClass('is-selected')) {

                            switch (event.type) {
                                case 'mouseout':
                                    self.styles = '';
                                break;
                                case 'mouseover':
                                    self.styles = 'clr-light-muted';
                                break;
                            }
                        }
                    };
                }]
            };
        }]
    };
});
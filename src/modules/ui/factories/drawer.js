define(['helperUtls'], function (helperUtls) {

    return {
        type: 'factory',
        name: '$pcmtUiDrawerFactory',
        value: ['$timeout', '$q', function ($timeout, $q) {

            function drawer() {
                var self = this;

                self.options = {
                    isOpen: false,
                    isHidden: false,
                    templateUrl: '',
                    data: ''
                };
                self._listeners = helperUtls.list();
            }

            drawer.prototype._triggerListeners = function (type, name, value) {
                var self = this,
                    ln = self._listeners.length;

                function trigger(listener) {
                    listener.notify({ type: type, name: name, value: value });
                }

                if (ln) {

                    for (var i = 0; i < ln; i++) {

                        if (!self._listeners[i].options) {
                            //listener, listens to everything
                            trigger(self._listeners[i].listener);
                        } else if (!self._listeners[i].options.type || !self._listeners[i].options.name) {
                            //listener doesn't care about the event type or preference
                            trigger(self._listeners[i].listener);
                        } else if (self._listeners[i].options.type && !self._listeners[i].options.name && self._listeners[i].options.type === type) {
                            //listener only cares about the event type
                            trigger(self._listeners[i].listener);
                        } else if (!self._listeners[i].options.type && self._listeners[i].options.name && self._listeners[i].options.name === name) {
                            //listener only cares about the preference
                            trigger(self._listeners[i].listener);
                        } else if (self._listeners[i].options.type && self._listeners[i].options.name && self._listeners[i].options.type === type && self._listeners[i].options.name === name) {
                            //listener carse about both the event type and the preference
                            trigger(self._listeners[i].listener);
                        }
                    }
                }
            };

            drawer.prototype.listen = function (scope, fn, options) {
                var self = this,
                    listenDefer = $q.defer(),
                    id = self._listeners.generateId();

                listenDefer.promise.then(null,null,fn);
                self._listeners.push({ id: id, options: options, listener: listenDefer });
                
                scope.$on('$destroy', function () {
                    var index = self._listeners._index_of_by_prop('id', id);
                    self._listeners.splice(index, 1);
                });
            };

            drawer.prototype.open = function () {
                var self = this;
                
                self.options.isOpen = true;
                self.options.isHidden = false;
                self._triggerListeners('modify', 'isOpen', self.options.isOpen);
            };

            drawer.prototype.load = function (viewUrl, viewData, options) {
                var self = this;

                self.clear();

                $timeout(function () {
                    self.options.templateUrl = viewUrl || self.options.templateUrl;
                    self.options.data = viewData;
                    self.options.options = options;

                    if (!self.options.isOpen || self.options.isHidden) {
                        self.open();
                    } else {
                        self._triggerListeners('modify', 'load', self.options.isOpen);
                    }
                });
            };

            drawer.prototype.clear = function () {
                var self = this;

                self.options.data = {};
                self.options.templateUrl = '';
                self.options.isOpen = false;
                self.options.isHidden = true;
                self._triggerListeners('modify', 'clear', self.options);
            };

            drawer.prototype.close = function (clear) {
                var self = this;
                
                self.options.isOpen = false;

                if (clear) {
                    self.clear();
                }
                
                self._triggerListeners('modify', 'close', self.options);
            };

            drawer.prototype.toggle = function (clear) {
                var self = this;

                if (self.options.isOpen) {
                    self.close(dontClear);
                } else {
                    self.open();
                }
            };

            drawer.prototype.show = function () {
                var self = this;

                self.options.isHidden = false;
                self._triggerListeners('modify', 'isHidden', self.options);
            };

            drawer.prototype.hide = function () {
                var self = this;

                self.options.isHidden = true;
                self._triggerListeners('modify', 'isHidden', self.options);
            };

            drawer.prototype.toggleVisibility = function () {
                var self = this;

                if (self.options.isHidden) {
                    self.show();
                } else {
                    self.hide();
                }
            };

            return {
                newDrawer: function () {
                    return new drawer();
                }
            };
        }]
    };
});
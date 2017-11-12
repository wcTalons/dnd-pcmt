define([], function () {

    Function.prototype.new = function () {
        var args = arguments,
            constructor = this;

        function F() {
            constructor.apply(this, args);
        }

        F.prototype = constructor.prototype;
        return new F();
    };

    function jsonPointer(item, props) {
        var resVal,
            self = this,
            propList = props.slice(),
            prop = propList.splice(0, 1)[0];

        if (item !== undefined) {

            if (!propList.length) {
                resVal = item[prop];
            } else {

                if (resVal.hasOwnProperty(prop)) {
                    jsonPointer(item[prop], propList);
                }
            }
        }

        return resVal;
    }

    //-- a list is an array of objects
    function List() {

        for (var i = 0, ii = arguments.length; i < ii; i++) {
            this.push(arguments[i]);
        }
    }

    List.prototype = new Array();
    List.prototype.is_list = true;
    List.prototype._getVal = jsonPointer;

    //-- find the index by json pointer
    List.prototype.indexBy = function indexBy(pointer, val) {
        var index = -1;
        
        for (var i = 0, ii = this.length; i < ii; i++) {

            if (this._getVal(this[i], pointer.split('.')) === val) {
                index = i;
                break;
            }
        }

        return index;
    };

    List.prototype.filterBy = function (prop, val) {
        var self = this;

        function filterFn(item) {
            return angular.equals(self._getVal(item, 'item.' + prop), val);
        }

        return List.new.apply(List, self.filter(filterFn));
    };

    List.prototype.sortBy = function (props, reverse) {
        var res,
            self = this;

        props = props.split(',');

        function variantSort(a, b) {
            var val_a, val_b, r, pointer;

            for (var i = 0, ii = props.length; i < ii; i++) {
                pointer = 'item.' + props[i];
                val_a = self._getVal(a, pointer);
                val_b = self._getVal(b, pointer);

                if (val_a === null || val_a === undefined) {
                    r = 1;
                    break;
                }
                if (val_b === null || val_b === undefined) {
                    r = 0;
                    break;
                }

                val_a = (typeof val_a === 'string') ? val_a.toLowerCase() : val_a;
                val_b = (typeof val_b === 'string') ? val_b.toLowerCase() : val_b;

                if (val_a < val_b) {
                    r = -1;
                    break;
                }
                if (val_a > val_b) {
                    r = 1;
                    break;
                }
                //-- if equal continue
                r = 0;
            }

            return r;
        }

        if (props.length) {
            res = this.sort(variantSort);
            return reverse ? res.reverse() : res;
        } else {
            return this;
        }
    };

    List.prototype.generateId = function (prop, type, sep) {
        var pos, newId, temp,
            ln = this.length;

        type = type ? type : 'number';
        prop = prop ? prop : 'id';
        sep = sep ? sep : '.';

        function generate() {
            var id = this.slice().sort_by(prop).reverse()[0][prop] || 0;

            switch (type) {
                case 'number':
                    id = parseInt(id, 10);
                    id = id + 1;
                    break;
                case 'string':
                    temp = id.split(sep);
                    temp[(temp.length - 1)] = parseInt(temp[(temp.length - 1)], 10) + 1;
                    id = temp.join(sep);
                    break;
            }

            return id;
        }

        if (ln) {
            newId = generate.apply(this);
            pos = this._index_of_by_prop(prop, newId);

            if (pos !== -1) {
                newId = -1;
            }
        } else {
            newId = 1;
        }

        return newId;  
    };

    return {
        list: function (items) {
            items = items || [];
            return List.new.apply(List, items);
        },
        //-- base64 https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_.22Unicode_Problem.22
        base64: {
            encode: function (str) {
                return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
                    return String.fromCharCode('0x' + p1);
                }));
            },
            decode: function (str) {
                return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
                    return '%' + c.charCodeAt(0).toString(16);
                }).join(''));
            }
        },
        pointer: {
            getValue: function (item, pointer) {
                return jsonPointer(item, 'item.' + pointer);
            },
            toRest: function (str) {

                function convertProp(match) {
                    return match.replace(/(\[\")/g, '/').replace(/(\"\])/g, '');
                }

                function convertIndexes(match) {
                    return match.replace(/(\[)/g, '/').replace(/(\])/g, '');
                }

                return '/' + str.replace(/^_/g, '').replace(/(\.)/g, '/').replace(/(\[\"\w+\"\])/g, convertProp).replace(/(\[\d+\])/g, convertIndexes);
            },
            toJson: function (str) {
                return str.replace(/^\//g, '').replace(/\//g, '.');
            } 
        }
    };
});
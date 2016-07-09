System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BasicValidators;
    return {
        setters:[],
        execute: function() {
            BasicValidators = (function () {
                function BasicValidators() {
                }
                BasicValidators.emailFormat = function (control) {
                    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    var valid = regEx.test(control.value);
                    return valid ? null : { emailFormat: true };
                };
                return BasicValidators;
            }());
            exports_1("BasicValidators", BasicValidators);
        }
    }
});
//# sourceMappingURL=basic.validators.js.map
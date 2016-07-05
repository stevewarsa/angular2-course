System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CanDeactivateGuard;
    return {
        setters:[],
        execute: function() {
            class CanDeactivateGuard {
                canDeactivate(component) {
                    return component.canDeactivate ? component.canDeactivate() : true;
                }
            }
            exports_1("CanDeactivateGuard", CanDeactivateGuard);
        }
    }
});
//# sourceMappingURL=candeactivate.guard.js.map
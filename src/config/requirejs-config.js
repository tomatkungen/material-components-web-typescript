// Not sure i need this, guess running without this.. 
// requirejs.config({
//     baseUrl: 'src/library',
// });

// Defined Vue so it can be called from typescript (Note: its wierd i cannot create a shim in rqjs config!)
define("vue", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Vue = window.Vue;
});

// Main invoke to typescript
requirejs(["app/app"]);

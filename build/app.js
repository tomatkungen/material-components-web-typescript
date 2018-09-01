define("app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Main {
        constructor() { }
        begin() {
            mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
        }
    }
    exports.Main = Main;
    (new Main()).begin();
});

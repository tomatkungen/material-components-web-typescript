///<reference path="../../../../MiniAnalyze/definitelytyped/mdc.d.ts" />

export class Main {

    constructor () {
    }

    public begin() {
        mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
    }
}

(new Main()).begin();
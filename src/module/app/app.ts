///<reference path="../../../definitelytyped/mdc.d.ts" />

//import {Vue} from "vue";

export class Main {

    constructor () { }

    public begin() {
        //let v = new Vue();
        mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
    }
}

(new Main()).begin();
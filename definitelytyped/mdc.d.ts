/**
 *
 * Move this to ReadMe.md file 
 * 
 * To discover new componts in mdc
 * var listObject = (obj, tabs) => {
 *  if (typeof obj === "object") {
 *   for (var o in obj) {
 *    console.log((new Array(tabs + 1).join('\t')) + o);
 *    listObject(obj[o], tabs+1);
 *   }
 *  }
 * }
 * 
 * Run this and above code in developer console after loaded material-components-web.min.js
 * 
 * listObject(mdc, 0); 
 * 
 */

/**
 *  
 * Globals
 *
 * Using Material Design with typescript intellisense.
*/

interface mdc {
    autoInit: any;
    base: base;
    checkbox: checkbox;
    chips: chips;
    dialog: dialog;
    drawer: drawer;
    floatingLabel: floatingLabel;
    formField: formField;
    gridList: gridList;
    iconButton: iconButton;
    iconToggle: iconToggle;
    lineRipple: lineRipple;
    linearProgress: linearProgress;
    list: list;
    menu: menu;
    notchedOutline: notchedOutline;
    radio: radio;
    ripple: ripple;
    select: select;
    selectionControl: selectionControl;
    slider: slider;
    switchControl: switchControl;
    snackbar: snackbar;
    tab: tab;
    tabBar: tabBar;
    tabIndicator: tabIndicator;
    tabScroller: tabScroller;
    textField: textField;
    toolbar: toolbar;
    topAppBar: topAppBar;
}

declare global {
    let mdc: mdc;
}

export {}

interface base {
    MDCFoundation: any;
 	MDCComponent: any;
}

interface checkbox {
 	MDCCheckbox: any;
 	MDCCheckboxFoundation: any;
}

interface chips {
 	MDCChipFoundation: any;
 	MDCChip: any;
  	MDCChipSetFoundation: any;
    MDCChipSet: any;
}

interface dialog {
 	MDCDialog: any;
 	MDCDialogFoundation: any;
 	util : dialog_util;
}

interface dialog_util {
    createFocusTrapInstance: any;
}

interface drawer {
 	MDCTemporaryDrawer: any;
 	MDCTemporaryDrawerFoundation: any;
 	MDCPersistentDrawer: any;
 	MDCPersistentDrawerFoundation: any;
    util: drawer_util;
}
    
interface drawer_util {
    remapEvent: any;
    getTransformPropertyName: any;
    supportsCssCustomProperties: any;
    applyPassive: any;
    saveElementTabState: any;
    restoreElementTabState: any;
}

interface floatingLabel {
    MDCFloatingLabel: any;
    MDCFloatingLabelFoundation: any;
}

interface formField {
    MDCFormField: any;
    MDCFormFieldFoundation: any;
}

interface gridList {
    MDCGridList: any;
    MDCGridListFoundation: any;
}

interface iconButton {
    MDCIconButtonToggle: any;
    MDCIconButtonToggleFoundation: any;
}

interface iconToggle {
    MDCIconToggle: any;
    MDCIconToggleFoundation: any;
}

interface lineRipple {
    MDCLineRipple: any;
    MDCLineRippleFoundation: any;
}

interface linearProgress {
    MDCLinearProgress: any;
    MDCLinearProgressFoundation: any;
}

interface list {
    MDCList: any;
    MDCListFoundation: any;
}

interface menu {
    MDCMenu: any;
    MDCMenuFoundation: any;
    AnchorMargin: any;
    Corner: menu_corner;
    CornerBit: menu_CornerBit;
}

interface menu_corner {
    TOP_LEFT: any;
    TOP_RIGHT: any;
    BOTTOM_LEFT: any;
    BOTTOM_RIGHT: any;
    TOP_START: any;
    TOP_END: any;
    BOTTOM_START: any;
    BOTTOM_END: any;
}

interface menu_CornerBit {
    BOTTOM: any;
    CENTER: any;
    RIGHT: any;
    FLIP_RTL: any;
}

interface notchedOutline {
    MDCNotchedOutline: any;
    MDCNotchedOutlineFoundation: any;
}

interface radio {
    MDCRadio: any;
    MDCRadioFoundation: any;
}

interface ripple {
    MDCRipple: any;
    RippleCapableSurface: any;
    MDCRippleFoundation: any;
    util: ripple_util;
}

interface ripple_util {
    supportsCssVariables: any;
    applyPassive: any;
    getMatchesProperty: any;
    getNormalizedEventCoords: any;
}

interface select {
    MDCSelect: any;
    MDCSelectFoundation: any;
}

interface selectionControl {
 	MDCSelectionControlState: any;
    MDCSelectionControl: any;
}

interface slider {
 	MDCSlider: any;
    MDCSliderFoundation: any;
}

interface switchControl {
 	MDCSwitch: any;
    MDCSwitchFoundation: any;
}

interface snackbar {
 	MDCSnackbar: any;
    MDCSnackbarFoundation: any;
}

interface tab {
 	MDCTab: any;
    MDCTabFoundation: any;
}

interface tabBar {
 	MDCTabBar: any;
    MDCTabBarFoundation: any;
}

interface tabIndicator {
 	MDCTabIndicator: any;
 	MDCTabIndicatorFoundation: any;
 	MDCSlidingTabIndicatorFoundation: any;
    MDCFadingTabIndicatorFoundation: any;
}

interface tabScroller {
 	MDCTabScroller: any;
    MDCTabScrollerFoundation: any;
    util: tabScroller_util;
}

interface tabScroller_util {
    computeHorizontalScrollbarHeight: any;
    getMatchesProperty: any;
}

interface textField {
 	MDCTextField: any;
 	MDCTextFieldFoundation: any;
 	MDCTextFieldHelperText: any;
 	MDCTextFieldHelperTextFoundation: any;
 	MDCTextFieldIcon: any;
    MDCTextFieldIconFoundation: any;
}

interface toolbar {
 	MDCToolbar: any;
 	MDCToolbarFoundation: any;
}

interface topAppBar {
 	MDCTopAppBar: any;
    MDCTopAppBarBaseFoundation: any;
 	MDCTopAppBarFoundation: any;
 	MDCFixedTopAppBarFoundation: any;
 	MDCShortTopAppBarFoundation: any;
}

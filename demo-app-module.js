"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var demo_app_1 = require('./demo-app/demo-app');
var router_1 = require('@angular/router');
var material_1 = require('@angular/material');
var routes_1 = require('./demo-app/routes');
var progress_bar_demo_1 = require('./progress-bar/progress-bar-demo');
var dialog_demo_1 = require('./dialog/dialog-demo');
var ripple_demo_1 = require('./ripple/ripple-demo');
var icon_demo_1 = require('./icon/icon-demo');
var gestures_demo_1 = require('./gestures/gestures-demo');
var input_demo_1 = require('./input/input-demo');
var card_demo_1 = require('./card/card-demo');
var chips_demo_1 = require('./chips/chips-demo');
var radio_demo_1 = require('./radio/radio-demo');
var button_toggle_demo_1 = require('./button-toggle/button-toggle-demo');
var progress_circle_demo_1 = require('./progress-circle/progress-circle-demo');
var tooltip_demo_1 = require('./tooltip/tooltip-demo');
var list_demo_1 = require('./list/list-demo');
var baseline_demo_1 = require('./baseline/baseline-demo');
var grid_list_demo_1 = require('./grid-list/grid-list-demo');
var live_announcer_demo_1 = require('./live-announcer/live-announcer-demo');
var overlay_demo_1 = require('./overlay/overlay-demo');
var slide_toggle_demo_1 = require('./slide-toggle/slide-toggle-demo');
var toolbar_demo_1 = require('./toolbar/toolbar-demo');
var button_demo_1 = require('./button/button-demo');
var checkbox_demo_1 = require('./checkbox/checkbox-demo');
var select_demo_1 = require('./select/select-demo');
var slider_demo_1 = require('./slider/slider-demo');
var sidenav_demo_1 = require('./sidenav/sidenav-demo');
var snack_bar_demo_1 = require('./snack-bar/snack-bar-demo');
var portal_demo_1 = require('./portal/portal-demo');
var menu_demo_1 = require('./menu/menu-demo');
var tabs_demo_1 = require('./tabs/tabs-demo');
var projection_demo_1 = require('./projection/projection-demo');
var platform_demo_1 = require('./platform/platform-demo');
var autocomplete_demo_1 = require('./autocomplete/autocomplete-demo');
var input_container_demo_1 = require('./input/input-container-demo');
/* Agorapulse UI KIT */
var ui_kit_demo_1 = require('./ui-kit/ui-kit-demo');
var DemoAppModule = (function () {
    function DemoAppModule(_appRef) {
        this._appRef = _appRef;
    }
    DemoAppModule.prototype.ngDoBootstrap = function () {
        this._appRef.bootstrap(demo_app_1.DemoApp);
    };
    DemoAppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(routes_1.DEMO_APP_ROUTES, { useHash: true }),
                material_1.MaterialModule.forRoot(),
            ],
            declarations: [
                autocomplete_demo_1.AutocompleteDemo,
                baseline_demo_1.BaselineDemo,
                button_demo_1.ButtonDemo,
                button_toggle_demo_1.ButtonToggleDemo,
                card_demo_1.CardDemo,
                chips_demo_1.ChipsDemo,
                checkbox_demo_1.CheckboxDemo,
                demo_app_1.DemoApp,
                dialog_demo_1.DialogDemo,
                gestures_demo_1.GesturesDemo,
                grid_list_demo_1.GridListDemo,
                demo_app_1.Home,
                icon_demo_1.IconDemo,
                input_demo_1.InputDemo,
                input_container_demo_1.InputContainerDemo,
                dialog_demo_1.JazzDialog,
                list_demo_1.ListDemo,
                live_announcer_demo_1.LiveAnnouncerDemo,
                checkbox_demo_1.MdCheckboxDemoNestedChecklist,
                menu_demo_1.MenuDemo,
                snack_bar_demo_1.SnackBarDemo,
                ui_kit_demo_1.UiKitDemo,
                overlay_demo_1.OverlayDemo,
                portal_demo_1.PortalDemo,
                progress_bar_demo_1.ProgressBarDemo,
                progress_circle_demo_1.ProgressCircleDemo,
                projection_demo_1.ProjectionDemo,
                projection_demo_1.ProjectionTestComponent,
                radio_demo_1.RadioDemo,
                ripple_demo_1.RippleDemo,
                overlay_demo_1.RotiniPanel,
                portal_demo_1.ScienceJoke,
                select_demo_1.SelectDemo,
                sidenav_demo_1.SidenavDemo,
                slider_demo_1.SliderDemo,
                slide_toggle_demo_1.SlideToggleDemo,
                overlay_demo_1.SpagettiPanel,
                toolbar_demo_1.ToolbarDemo,
                tooltip_demo_1.TooltipDemo,
                tabs_demo_1.TabsDemo,
                tabs_demo_1.SunnyTabContent,
                tabs_demo_1.RainyTabContent,
                tabs_demo_1.FoggyTabContent,
                platform_demo_1.PlatformDemo
            ],
            entryComponents: [
                demo_app_1.DemoApp,
                dialog_demo_1.JazzDialog,
                overlay_demo_1.RotiniPanel,
                portal_demo_1.ScienceJoke,
                overlay_demo_1.SpagettiPanel,
            ],
        }), 
        __metadata('design:paramtypes', [core_1.ApplicationRef])
    ], DemoAppModule);
    return DemoAppModule;
}());
exports.DemoAppModule = DemoAppModule;

//# sourceMappingURL=demo-app-module.js.map

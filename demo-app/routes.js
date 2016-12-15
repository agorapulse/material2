"use strict";
var demo_app_1 = require('./demo-app');
var button_demo_1 = require('../button/button-demo');
var baseline_demo_1 = require('../baseline/baseline-demo');
var button_toggle_demo_1 = require('../button-toggle/button-toggle-demo');
var tabs_demo_1 = require('../tabs/tabs-demo');
var grid_list_demo_1 = require('../grid-list/grid-list-demo');
var gestures_demo_1 = require('../gestures/gestures-demo');
var live_announcer_demo_1 = require('../live-announcer/live-announcer-demo');
var list_demo_1 = require('../list/list-demo');
var icon_demo_1 = require('../icon/icon-demo');
var toolbar_demo_1 = require('../toolbar/toolbar-demo');
var input_demo_1 = require('../input/input-demo');
var checkbox_demo_1 = require('../checkbox/checkbox-demo');
var overlay_demo_1 = require('../overlay/overlay-demo');
var portal_demo_1 = require('../portal/portal-demo');
var progress_bar_demo_1 = require('../progress-bar/progress-bar-demo');
var progress_circle_demo_1 = require('../progress-circle/progress-circle-demo');
var select_demo_1 = require('../select/select-demo');
var sidenav_demo_1 = require('../sidenav/sidenav-demo');
var slide_toggle_demo_1 = require('../slide-toggle/slide-toggle-demo');
var slider_demo_1 = require('../slider/slider-demo');
var radio_demo_1 = require('../radio/radio-demo');
var card_demo_1 = require('../card/card-demo');
var chips_demo_1 = require('../chips/chips-demo');
var menu_demo_1 = require('../menu/menu-demo');
var ripple_demo_1 = require('../ripple/ripple-demo');
var dialog_demo_1 = require('../dialog/dialog-demo');
var tooltip_demo_1 = require('../tooltip/tooltip-demo');
var snack_bar_demo_1 = require('../snack-bar/snack-bar-demo');
var projection_demo_1 = require('../projection/projection-demo');
var routes_1 = require('../tabs/routes');
var ui_kit_demo_1 = require('../ui-kit/ui-kit-demo');
var platform_demo_1 = require('../platform/platform-demo');
var autocomplete_demo_1 = require('../autocomplete/autocomplete-demo');
var input_container_demo_1 = require('../input/input-container-demo');
exports.DEMO_APP_ROUTES = [
    { path: '', component: demo_app_1.Home },
    { path: 'autocomplete', component: autocomplete_demo_1.AutocompleteDemo },
    { path: 'button', component: button_demo_1.ButtonDemo },
    { path: 'card', component: card_demo_1.CardDemo },
    { path: 'chips', component: chips_demo_1.ChipsDemo },
    { path: 'radio', component: radio_demo_1.RadioDemo },
    { path: 'select', component: select_demo_1.SelectDemo },
    { path: 'sidenav', component: sidenav_demo_1.SidenavDemo },
    { path: 'slide-toggle', component: slide_toggle_demo_1.SlideToggleDemo },
    { path: 'slider', component: slider_demo_1.SliderDemo },
    { path: 'progress-circle', component: progress_circle_demo_1.ProgressCircleDemo },
    { path: 'progress-bar', component: progress_bar_demo_1.ProgressBarDemo },
    { path: 'portal', component: portal_demo_1.PortalDemo },
    { path: 'projection', component: projection_demo_1.ProjectionDemo },
    { path: 'overlay', component: overlay_demo_1.OverlayDemo },
    { path: 'checkbox', component: checkbox_demo_1.CheckboxDemo },
    { path: 'input', component: input_demo_1.InputDemo },
    { path: 'input-container', component: input_container_demo_1.InputContainerDemo },
    { path: 'toolbar', component: toolbar_demo_1.ToolbarDemo },
    { path: 'icon', component: icon_demo_1.IconDemo },
    { path: 'list', component: list_demo_1.ListDemo },
    { path: 'menu', component: menu_demo_1.MenuDemo },
    { path: 'live-announcer', component: live_announcer_demo_1.LiveAnnouncerDemo },
    { path: 'gestures', component: gestures_demo_1.GesturesDemo },
    { path: 'grid-list', component: grid_list_demo_1.GridListDemo },
    { path: 'tabs', component: tabs_demo_1.TabsDemo, children: routes_1.TABS_DEMO_ROUTES },
    { path: 'button-toggle', component: button_toggle_demo_1.ButtonToggleDemo },
    { path: 'baseline', component: baseline_demo_1.BaselineDemo },
    { path: 'ripple', component: ripple_demo_1.RippleDemo },
    { path: 'dialog', component: dialog_demo_1.DialogDemo },
    { path: 'tooltip', component: tooltip_demo_1.TooltipDemo },
    { path: 'snack-bar', component: snack_bar_demo_1.SnackBarDemo },
    { path: 'ui-kit', component: ui_kit_demo_1.UiKitDemo },
    { path: 'platform', component: platform_demo_1.PlatformDemo }
];

//# sourceMappingURL=routes.js.map

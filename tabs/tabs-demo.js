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
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var TabsDemo = (function () {
    function TabsDemo(router) {
        var _this = this;
        this.router = router;
        // Nav bar demo
        this.tabLinks = [
            { label: 'Sun', link: 'sunny-tab' },
            { label: 'Rain', link: 'rainy-tab' },
            { label: 'Fog', link: 'foggy-tab' },
        ];
        this.activeLinkIndex = 0;
        // Standard tabs demo
        this.tabs = [
            {
                label: 'Tab 1',
                content: 'This is the body of the first tab'
            }, {
                label: 'Tab 2',
                disabled: true,
                content: 'This is the body of the second tab'
            }, {
                label: 'Tab 3',
                extraContent: true,
                content: 'This is the body of the third tab'
            }, {
                label: 'Tab 4',
                content: 'This is the body of the fourth tab'
            },
        ];
        // Dynamic tabs demo
        this.activeTabIndex = 0;
        this.addTabPosition = 0;
        this.gotoNewTabAfterAdding = false;
        this.createWithLongContent = false;
        this.dynamicTabs = [
            {
                label: 'Tab 1',
                content: 'This is the body of the first tab'
            }, {
                label: 'Tab 2',
                disabled: true,
                content: 'This is the body of the second tab'
            }, {
                label: 'Tab 3',
                extraContent: true,
                content: 'This is the body of the third tab'
            }, {
                label: 'Tab 4',
                content: 'This is the body of the fourth tab'
            },
        ];
        this.asyncTabs = Observable_1.Observable.create(function (observer) {
            setTimeout(function () {
                observer.next(_this.tabs);
            }, 1000);
        });
        // Initialize the index by checking if a tab link is contained in the url.
        // This is not an ideal check and can be removed if routerLink exposes if it is active.
        // https://github.com/angular/angular/pull/12525
        this.activeLinkIndex =
            this.tabLinks.indexOf(this.tabLinks.find(function (tab) { return router.url.indexOf(tab.link) != -1; }));
    }
    TabsDemo.prototype.addTab = function (includeExtraContent) {
        this.dynamicTabs.splice(this.addTabPosition, 0, {
            label: 'New Tab ' + (this.dynamicTabs.length + 1),
            content: 'New tab contents ' + (this.dynamicTabs.length + 1),
            extraContent: includeExtraContent
        });
        if (this.gotoNewTabAfterAdding) {
            this.activeTabIndex = this.addTabPosition;
        }
    };
    TabsDemo.prototype.deleteTab = function (tab) {
        this.dynamicTabs.splice(this.dynamicTabs.indexOf(tab), 1);
    };
    TabsDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tabs-demo',
            templateUrl: 'tabs-demo.html',
            styleUrls: ['tabs-demo.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], TabsDemo);
    return TabsDemo;
}());
exports.TabsDemo = TabsDemo;
var SunnyTabContent = (function () {
    function SunnyTabContent() {
    }
    SunnyTabContent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sunny-routed-content',
            template: 'This is the routed body of the sunny tab.',
        }), 
        __metadata('design:paramtypes', [])
    ], SunnyTabContent);
    return SunnyTabContent;
}());
exports.SunnyTabContent = SunnyTabContent;
var RainyTabContent = (function () {
    function RainyTabContent() {
    }
    RainyTabContent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rainy-routed-content',
            template: 'This is the routed body of the rainy tab.',
        }), 
        __metadata('design:paramtypes', [])
    ], RainyTabContent);
    return RainyTabContent;
}());
exports.RainyTabContent = RainyTabContent;
var FoggyTabContent = (function () {
    function FoggyTabContent() {
    }
    FoggyTabContent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'foggy-routed-content',
            template: 'This is the routed body of the foggy tab.',
        }), 
        __metadata('design:paramtypes', [])
    ], FoggyTabContent);
    return FoggyTabContent;
}());
exports.FoggyTabContent = FoggyTabContent;

//# sourceMappingURL=tabs-demo.js.map

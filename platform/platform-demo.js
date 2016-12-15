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
var material_1 = require('@angular/material');
var PlatformDemo = (function () {
    function PlatformDemo(platform) {
        this.platform = platform;
        this.supportedInputTypes = material_1.getSupportedInputTypes();
    }
    PlatformDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'platform-demo',
            templateUrl: 'platform-demo.html',
        }), 
        __metadata('design:paramtypes', [material_1.MdPlatform])
    ], PlatformDemo);
    return PlatformDemo;
}());
exports.PlatformDemo = PlatformDemo;

//# sourceMappingURL=platform-demo.js.map

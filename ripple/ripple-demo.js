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
var RippleDemo = (function () {
    function RippleDemo() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
        this.rounded = false;
        this.maxRadius = null;
        this.rippleSpeed = 1;
        this.rippleColor = '';
        this.rippleBackgroundColor = '';
        this.disableButtonRipples = false;
    }
    RippleDemo.prototype.doManualRipple = function () {
        var _this = this;
        if (this.manualRipple) {
            window.setTimeout(function () { return _this.manualRipple.start(); }, 10);
            window.setTimeout(function () { return _this.manualRipple.end(0, 0); }, 500);
        }
    };
    __decorate([
        core_1.ViewChild(material_1.MdRipple), 
        __metadata('design:type', material_1.MdRipple)
    ], RippleDemo.prototype, "manualRipple", void 0);
    RippleDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ripple-demo',
            templateUrl: 'ripple-demo.html',
            styleUrls: ['ripple-demo.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], RippleDemo);
    return RippleDemo;
}());
exports.RippleDemo = RippleDemo;

//# sourceMappingURL=ripple-demo.js.map

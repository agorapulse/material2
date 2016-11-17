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
var SnackBarDemo = (function () {
    function SnackBarDemo(snackBar) {
        this.snackBar = snackBar;
        this.message = 'Snack Bar opened.';
        this.actionButtonLabel = 'Retry';
        this.action = false;
        this.setAutoHide = true;
        this.autoHide = 0;
    }
    SnackBarDemo.prototype.open = function () {
        var config = new material_1.MdSnackBarConfig();
        config.duration = this.autoHide;
        this.snackBar.open(this.message, this.action && this.actionButtonLabel, config);
    };
    SnackBarDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'snack-bar-demo',
            templateUrl: 'snack-bar-demo.html',
        }), 
        __metadata('design:paramtypes', [material_1.MdSnackBar])
    ], SnackBarDemo);
    return SnackBarDemo;
}());
exports.SnackBarDemo = SnackBarDemo;

//# sourceMappingURL=snack-bar-demo.js.map

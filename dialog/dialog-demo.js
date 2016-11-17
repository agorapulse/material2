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
var DialogDemo = (function () {
    function DialogDemo(dialog) {
        this.dialog = dialog;
    }
    DialogDemo.prototype.open = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(JazzDialog);
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.lastCloseResult = result;
            _this.dialogRef = null;
        });
    };
    DialogDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dialog-demo',
            templateUrl: 'dialog-demo.html',
            styleUrls: ['dialog-demo.css'],
        }), 
        __metadata('design:paramtypes', [material_1.MdDialog])
    ], DialogDemo);
    return DialogDemo;
}());
exports.DialogDemo = DialogDemo;
var JazzDialog = (function () {
    function JazzDialog(dialogRef) {
        this.dialogRef = dialogRef;
        this.jazzMessage = 'Jazzy jazz jazz';
    }
    JazzDialog = __decorate([
        core_1.Component({
            selector: 'demo-jazz-dialog',
            template: "\n  <p>It's Jazz!</p>\n  <p><label>How much? <input #howMuch></label></p>\n  <p> {{ jazzMessage }} </p>\n  <button type=\"button\" (click)=\"dialogRef.close(howMuch.value)\">Close dialog</button>"
        }), 
        __metadata('design:paramtypes', [material_1.MdDialogRef])
    ], JazzDialog);
    return JazzDialog;
}());
exports.JazzDialog = JazzDialog;

//# sourceMappingURL=dialog-demo.js.map

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
var forms_1 = require('@angular/forms');
var SelectDemo = (function () {
    function SelectDemo() {
        this.isRequired = false;
        this.isDisabled = false;
        this.foodControl = new forms_1.FormControl('');
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.drinks = [
            { value: 'coke-0', viewValue: 'Coke' },
            { value: 'sprite-1', viewValue: 'Sprite', disabled: true },
            { value: 'water-2', viewValue: 'Water' }
        ];
    }
    SelectDemo.prototype.toggleDisabled = function () {
        this.foodControl.enabled ? this.foodControl.disable() : this.foodControl.enable();
    };
    SelectDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'select-demo',
            templateUrl: 'select-demo.html',
            styleUrls: ['select-demo.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], SelectDemo);
    return SelectDemo;
}());
exports.SelectDemo = SelectDemo;

//# sourceMappingURL=select-demo.js.map
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
var max = 5;
var InputContainerDemo = (function () {
    function InputContainerDemo() {
        this.items = [
            { value: 10 },
            { value: 20 },
            { value: 30 },
            { value: 40 },
            { value: 50 },
        ];
        this.rows = 8;
        this.formControl = new forms_1.FormControl('hello', forms_1.Validators.required);
        this.model = 'hello';
    }
    InputContainerDemo.prototype.addABunch = function (n) {
        for (var x = 0; x < n; x++) {
            this.items.push({ value: ++max });
        }
    };
    InputContainerDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'input-container-demo',
            templateUrl: 'input-container-demo.html',
            styleUrls: ['input-demo.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], InputContainerDemo);
    return InputContainerDemo;
}());
exports.InputContainerDemo = InputContainerDemo;

//# sourceMappingURL=input-container-demo.js.map

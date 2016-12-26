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
var ProjectionTestComponent = (function () {
    function ProjectionTestComponent(_projection, _ref) {
        this._projection = _projection;
        this._ref = _ref;
    }
    ProjectionTestComponent.prototype.ngOnInit = function () {
        this._projection.project(this._ref, this._host);
    };
    __decorate([
        core_1.ViewChild(material_1.DomProjectionHost), 
        __metadata('design:type', material_1.DomProjectionHost)
    ], ProjectionTestComponent.prototype, "_host", void 0);
    __decorate([
        core_1.Input('class'), 
        __metadata('design:type', Object)
    ], ProjectionTestComponent.prototype, "cssClass", void 0);
    ProjectionTestComponent = __decorate([
        core_1.Component({
            selector: '[projection-test]',
            template: "\n    <div class=\"demo-outer {{cssClass}}\">\n      Before\n      <cdk-dom-projection-host><ng-content></ng-content></cdk-dom-projection-host>\n      After\n    </div>\n  ",
            styles: ["\n    .demo-outer {\n      background-color: #663399;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [material_1.DomProjection, core_1.ElementRef])
    ], ProjectionTestComponent);
    return ProjectionTestComponent;
}());
exports.ProjectionTestComponent = ProjectionTestComponent;
var ProjectionDemo = (function () {
    function ProjectionDemo() {
        this.binding = 'abc';
    }
    ProjectionDemo = __decorate([
        core_1.Component({
            selector: 'projection-app',
            template: "\n    <div projection-test class=\"demo-inner\">\n      <div class=\"content\">Content: {{binding}}</div>\n    </div>\n    <br/>\n    <input projection-test [(ngModel)]=\"binding\" [class]=\"binding\" [ngClass]=\"{'blue': true}\">\n    <input [(ngModel)]=\"binding\" class=\"my-class\" [ngClass]=\"{'blue': true}\">\n  ",
            styles: ["\n    .demo-inner {\n      background-color: #DAA520;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectionDemo);
    return ProjectionDemo;
}());
exports.ProjectionDemo = ProjectionDemo;

//# sourceMappingURL=projection-demo.js.map

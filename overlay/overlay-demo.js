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
var OverlayDemo = (function () {
    function OverlayDemo(overlay, viewContainerRef) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nextPosition = 0;
        this.isMenuOpen = false;
    }
    OverlayDemo.prototype.openRotiniPanel = function () {
        var config = new material_1.OverlayState();
        config.positionStrategy = this.overlay.position()
            .global()
            .left(this.nextPosition + "px")
            .top(this.nextPosition + "px");
        this.nextPosition += 30;
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(new material_1.ComponentPortal(RotiniPanel, this.viewContainerRef));
    };
    OverlayDemo.prototype.openFusilliPanel = function () {
        var config = new material_1.OverlayState();
        config.positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .top(this.nextPosition + "px");
        this.nextPosition += 30;
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
    };
    OverlayDemo.prototype.openSpaghettiPanel = function () {
        // TODO(jelbourn): separate overlay demo for connected positioning.
        var strategy = this.overlay.position()
            .connectedTo(this._overlayOrigin.elementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' });
        var config = new material_1.OverlayState();
        config.positionStrategy = strategy;
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(new material_1.ComponentPortal(SpagettiPanel, this.viewContainerRef));
    };
    OverlayDemo.prototype.openPanelWithBackdrop = function () {
        var config = new material_1.OverlayState();
        config.positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally();
        config.hasBackdrop = true;
        config.backdropClass = 'md-overlay-transparent-backdrop';
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
        overlayRef.backdropClick().subscribe(function () { return overlayRef.detach(); });
    };
    __decorate([
        core_1.ViewChildren(material_1.TemplatePortalDirective), 
        __metadata('design:type', core_1.QueryList)
    ], OverlayDemo.prototype, "templatePortals", void 0);
    __decorate([
        core_1.ViewChild(material_1.OverlayOrigin), 
        __metadata('design:type', material_1.OverlayOrigin)
    ], OverlayDemo.prototype, "_overlayOrigin", void 0);
    OverlayDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'overlay-demo',
            templateUrl: 'overlay-demo.html',
            styleUrls: ['overlay-demo.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [material_1.Overlay, core_1.ViewContainerRef])
    ], OverlayDemo);
    return OverlayDemo;
}());
exports.OverlayDemo = OverlayDemo;
/** Simple component to load into an overlay */
var RotiniPanel = (function () {
    function RotiniPanel() {
        this.value = 9000;
    }
    RotiniPanel = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rotini-panel',
            template: '<p class="demo-rotini">Rotini {{value}}</p>'
        }), 
        __metadata('design:paramtypes', [])
    ], RotiniPanel);
    return RotiniPanel;
}());
exports.RotiniPanel = RotiniPanel;
/** Simple component to load into an overlay */
var SpagettiPanel = (function () {
    function SpagettiPanel() {
        this.value = 'Omega';
    }
    SpagettiPanel = __decorate([
        core_1.Component({
            selector: 'spagetti-panel',
            template: '<div class="demo-spagetti">Spagetti {{value}}</div>'
        }), 
        __metadata('design:paramtypes', [])
    ], SpagettiPanel);
    return SpagettiPanel;
}());
exports.SpagettiPanel = SpagettiPanel;

//# sourceMappingURL=overlay-demo.js.map

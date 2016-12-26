var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { NgModule, Component, ContentChildren, ElementRef, Input, Optional, Output, QueryList, ChangeDetectionStrategy, EventEmitter, Renderer, ViewEncapsulation, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dir, MdError, coerceBooleanProperty, DefaultStyleCompatibilityModeModule } from '../core';
import { A11yModule } from '../core/a11y/index';
import { FocusTrap } from '../core/a11y/focus-trap';
import { ESCAPE } from '../core/keyboard/keycodes';
import { OverlayModule } from '../core/overlay/overlay-directives';
import { InteractivityChecker } from '../core/a11y/interactivity-checker';
/** Exception thrown when two MdSidenav are matching the same side. */
export var MdDuplicatedSidenavError = (function (_super) {
    __extends(MdDuplicatedSidenavError, _super);
    function MdDuplicatedSidenavError(align) {
        _super.call(this, "A sidenav was already declared for 'align=\"" + align + "\"'");
    }
    return MdDuplicatedSidenavError;
}(MdError));
/** Sidenav toggle promise result. */
export var MdSidenavToggleResult = (function () {
    function MdSidenavToggleResult(type, animationFinished) {
        this.type = type;
        this.animationFinished = animationFinished;
    }
    return MdSidenavToggleResult;
}());
/**
 * <md-sidenav> component.
 *
 * This component corresponds to the drawer of the sidenav.
 *
 * Please refer to README.md for examples on how to use it.
 */
export var MdSidenav = (function () {
    /**
     * @param _elementRef The DOM element reference. Used for transition and width calculation.
     *     If not available we do not hook on transitions.
     */
    function MdSidenav(_elementRef, _renderer) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /** Alignment of the sidenav (direction neutral); whether 'start' or 'end'. */
        this._align = 'start';
        this._valid = true;
        /** Mode of the sidenav; whether 'over' or 'side'. */
        this.mode = 'over';
        /** Whether the sidenav is opened. */
        this._opened = false;
        /** Event emitted when the sidenav is being opened. Use this to synchronize animations. */
        this.onOpenStart = new EventEmitter();
        /** Event emitted when the sidenav is fully opened. */
        this.onOpen = new EventEmitter();
        /** Event emitted when the sidenav is being closed. Use this to synchronize animations. */
        this.onCloseStart = new EventEmitter();
        /** Event emitted when the sidenav is fully closed. */
        this.onClose = new EventEmitter();
        /** Event emitted when the sidenav alignment changes. */
        this.onAlignChanged = new EventEmitter();
        /** The current toggle animation promise. `null` if no animation is in progress. */
        this._toggleAnimationPromise = null;
        /**
         * The current toggle animation promise resolution function.
         * `null` if no animation is in progress.
         */
        this._resolveToggleAnimationPromise = null;
        this._elementFocusedBeforeSidenavWasOpened = null;
        this.onOpen.subscribe(function () {
            _this._elementFocusedBeforeSidenavWasOpened = document.activeElement;
            if (!_this.isFocusTrapDisabled) {
                _this._focusTrap.focusFirstTabbableElementWhenReady();
            }
        });
        this.onClose.subscribe(function () {
            if (_this._elementFocusedBeforeSidenavWasOpened instanceof HTMLElement) {
                _this._renderer.invokeElementMethod(_this._elementFocusedBeforeSidenavWasOpened, 'focus');
            }
            else {
                _this._renderer.invokeElementMethod(_this._elementRef.nativeElement, 'blur');
            }
            _this._elementFocusedBeforeSidenavWasOpened = null;
        });
    }
    Object.defineProperty(MdSidenav.prototype, "valid", {
        /** Whether this md-sidenav is part of a valid md-sidenav-container configuration. */
        get: function () { return this._valid; },
        set: function (value) {
            value = coerceBooleanProperty(value);
            // When the drawers are not in a valid configuration we close them all until they are in a valid
            // configuration again.
            if (!value) {
                this.close();
            }
            this._valid = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "align", {
        /** Direction which the sidenav is aligned in. */
        get: function () { return this._align; },
        set: function (value) {
            // Make sure we have a valid value.
            value = (value == 'end') ? 'end' : 'start';
            if (value != this._align) {
                this._align = value;
                this.onAlignChanged.emit();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "isFocusTrapDisabled", {
        get: function () {
            // The focus trap is only enabled when the sidenav is open in any mode other than side.
            return !this.opened || this.mode == 'side';
        },
        enumerable: true,
        configurable: true
    });
    MdSidenav.prototype.ngAfterContentInit = function () {
        // This can happen when the sidenav is set to opened in the template and the transition
        // isn't ended.
        if (this._toggleAnimationPromise) {
            this._resolveToggleAnimationPromise(true);
            this._toggleAnimationPromise = this._resolveToggleAnimationPromise = null;
        }
    };
    Object.defineProperty(MdSidenav.prototype, "opened", {
        /**
         * Whether the sidenav is opened. We overload this because we trigger an event when it
         * starts or end.
         */
        get: function () { return this._opened; },
        set: function (v) {
            this.toggle(coerceBooleanProperty(v));
        },
        enumerable: true,
        configurable: true
    });
    /** Open this sidenav, and return a Promise that will resolve when it's fully opened (or get
     * rejected if it didn't). */
    MdSidenav.prototype.open = function () {
        return this.toggle(true);
    };
    /**
     * Close this sidenav, and return a Promise that will resolve when it's fully closed (or get
     * rejected if it didn't).
     */
    MdSidenav.prototype.close = function () {
        return this.toggle(false);
    };
    /**
     * Toggle this sidenav. This is equivalent to calling open() when it's already opened, or
     * close() when it's closed.
     * @param isOpen Whether the sidenav should be open.
     * @returns Resolves with the result of whether the sidenav was opened or closed.
     */
    MdSidenav.prototype.toggle = function (isOpen) {
        var _this = this;
        if (isOpen === void 0) { isOpen = !this.opened; }
        if (!this.valid) {
            return Promise.resolve(new MdSidenavToggleResult(isOpen ? 'open' : 'close', true));
        }
        // Shortcut it if we're already opened.
        if (isOpen === this.opened) {
            return this._toggleAnimationPromise ||
                Promise.resolve(new MdSidenavToggleResult(isOpen ? 'open' : 'close', true));
        }
        this._opened = isOpen;
        if (isOpen) {
            this.onOpenStart.emit();
        }
        else {
            this.onCloseStart.emit();
        }
        if (this._toggleAnimationPromise) {
            this._resolveToggleAnimationPromise(false);
        }
        this._toggleAnimationPromise = new Promise(function (resolve) {
            _this._resolveToggleAnimationPromise = function (animationFinished) {
                return resolve(new MdSidenavToggleResult(isOpen ? 'open' : 'close', animationFinished));
            };
        });
        return this._toggleAnimationPromise;
    };
    /**
     * Handles the keyboard events.
     * @docs-private
     */
    MdSidenav.prototype.handleKeydown = function (event) {
        if (event.keyCode === ESCAPE) {
            this.close();
            event.stopPropagation();
        }
    };
    /**
     * When transition has finished, set the internal state for classes and emit the proper event.
     * The event passed is actually of type TransitionEvent, but that type is not available in
     * Android so we use any.
     */
    MdSidenav.prototype._onTransitionEnd = function (transitionEvent) {
        if (transitionEvent.target == this._elementRef.nativeElement
            && transitionEvent.propertyName.endsWith('transform')) {
            if (this._opened) {
                this.onOpen.emit();
            }
            else {
                this.onClose.emit();
            }
            if (this._toggleAnimationPromise) {
                this._resolveToggleAnimationPromise(true);
                this._toggleAnimationPromise = this._resolveToggleAnimationPromise = null;
            }
        }
    };
    Object.defineProperty(MdSidenav.prototype, "_isClosing", {
        get: function () {
            return !this._opened && !!this._toggleAnimationPromise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_isOpening", {
        get: function () {
            return this._opened && !!this._toggleAnimationPromise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_isClosed", {
        get: function () {
            return !this._opened && !this._toggleAnimationPromise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_isOpened", {
        get: function () {
            return this._opened && !this._toggleAnimationPromise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_isEnd", {
        get: function () {
            return this.align == 'end';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_modeSide", {
        get: function () {
            return this.mode == 'side';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_modeOver", {
        get: function () {
            return this.mode == 'over';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_modePush", {
        get: function () {
            return this.mode == 'push';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_width", {
        get: function () {
            if (this._elementRef.nativeElement) {
                return this._elementRef.nativeElement.offsetWidth;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        ViewChild(FocusTrap), 
        __metadata('design:type', FocusTrap)
    ], MdSidenav.prototype, "_focusTrap", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "align", null);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "mode", void 0);
    __decorate([
        Output('open-start'), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "onOpenStart", void 0);
    __decorate([
        Output('open'), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "onOpen", void 0);
    __decorate([
        Output('close-start'), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "onCloseStart", void 0);
    __decorate([
        Output('close'), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "onClose", void 0);
    __decorate([
        Output('align-changed'), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "onAlignChanged", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], MdSidenav.prototype, "opened", null);
    MdSidenav = __decorate([
        Component({selector: 'md-sidenav, mat-sidenav',
            // TODO(mmalerba): move template to separate file.
            template: "<cdk-focus-trap class=\"md-sidenav-focus-trap\" [disabled]=\"isFocusTrapDisabled\"> <ng-content></ng-content> </cdk-focus-trap> ",
            host: {
                '(transitionend)': '_onTransitionEnd($event)',
                '(keydown)': 'handleKeydown($event)',
                // must prevent the browser from aligning text based on value
                '[attr.align]': 'null',
                '[class.md-sidenav-closed]': '_isClosed',
                '[class.md-sidenav-closing]': '_isClosing',
                '[class.md-sidenav-end]': '_isEnd',
                '[class.md-sidenav-opened]': '_isOpened',
                '[class.md-sidenav-opening]': '_isOpening',
                '[class.md-sidenav-over]': '_modeOver',
                '[class.md-sidenav-push]': '_modePush',
                '[class.md-sidenav-side]': '_modeSide',
                '[class.md-sidenav-invalid]': '!valid',
                'tabIndex': '-1'
            },
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [ElementRef, Renderer])
    ], MdSidenav);
    return MdSidenav;
}());
/**
 * <md-sidenav-container> component.
 *
 * This is the parent component to one or two <md-sidenav>s that validates the state internally
 * and coordinates the backdrop and content styling.
 */
export var MdSidenavContainer = (function () {
    function MdSidenavContainer(_dir, _element, _renderer) {
        var _this = this;
        this._dir = _dir;
        this._element = _element;
        this._renderer = _renderer;
        /** Event emitted when the sidenav backdrop is clicked. */
        this.onBackdropClicked = new EventEmitter();
        // If a `Dir` directive exists up the tree, listen direction changes and update the left/right
        // properties to point to the proper start/end.
        if (_dir != null) {
            _dir.dirChange.subscribe(function () { return _this._validateDrawers(); });
        }
    }
    Object.defineProperty(MdSidenavContainer.prototype, "start", {
        /** The sidenav child with the `start` alignment. */
        get: function () { return this._start; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenavContainer.prototype, "end", {
        /** The sidenav child with the `end` alignment. */
        get: function () { return this._end; },
        enumerable: true,
        configurable: true
    });
    MdSidenavContainer.prototype.ngAfterContentInit = function () {
        var _this = this;
        // On changes, assert on consistency.
        this._sidenavs.changes.subscribe(function () { return _this._validateDrawers(); });
        this._sidenavs.forEach(function (sidenav) {
            _this._watchSidenavToggle(sidenav);
            _this._watchSidenavAlign(sidenav);
        });
        this._validateDrawers();
    };
    /**
     * Subscribes to sidenav events in order to set a class on the main container element when the
     * sidenav is open and the backdrop is visible. This ensures any overflow on the container element
     * is properly hidden.
     */
    MdSidenavContainer.prototype._watchSidenavToggle = function (sidenav) {
        var _this = this;
        if (!sidenav || sidenav.mode === 'side') {
            return;
        }
        sidenav.onOpen.subscribe(function () { return _this._setContainerClass(sidenav, true); });
        sidenav.onClose.subscribe(function () { return _this._setContainerClass(sidenav, false); });
    };
    /**
     * Subscribes to sidenav onAlignChanged event in order to re-validate drawers when the align
     * changes.
     */
    MdSidenavContainer.prototype._watchSidenavAlign = function (sidenav) {
        var _this = this;
        if (!sidenav) {
            return;
        }
        sidenav.onAlignChanged.subscribe(function () { return _this._validateDrawers(); });
    };
    /** Toggles the 'md-sidenav-opened' class on the main 'md-sidenav-container' element. */
    MdSidenavContainer.prototype._setContainerClass = function (sidenav, bool) {
        this._renderer.setElementClass(this._element.nativeElement, 'md-sidenav-opened', bool);
    };
    /** Sets the valid state of the drawers. */
    MdSidenavContainer.prototype._setDrawersValid = function (valid) {
        this._sidenavs.forEach(function (sidenav) {
            sidenav.valid = valid;
        });
        if (!valid) {
            this._start = this._end = this._left = this._right = null;
        }
    };
    /** Validate the state of the sidenav children components. */
    MdSidenavContainer.prototype._validateDrawers = function () {
        this._start = this._end = null;
        // Ensure that we have at most one start and one end sidenav.
        // NOTE: We must call toArray on _sidenavs even though it's iterable
        // (see https://github.com/Microsoft/TypeScript/issues/3164).
        for (var _i = 0, _a = this._sidenavs.toArray(); _i < _a.length; _i++) {
            var sidenav = _a[_i];
            if (sidenav.align == 'end') {
                if (this._end != null) {
                    this._setDrawersValid(false);
                    return;
                }
                this._end = sidenav;
            }
            else {
                if (this._start != null) {
                    this._setDrawersValid(false);
                    return;
                }
                this._start = sidenav;
            }
        }
        this._right = this._left = null;
        // Detect if we're LTR or RTL.
        if (this._dir == null || this._dir.value == 'ltr') {
            this._left = this._start;
            this._right = this._end;
        }
        else {
            this._left = this._end;
            this._right = this._start;
        }
        this._setDrawersValid(true);
    };
    MdSidenavContainer.prototype._onBackdropClicked = function () {
        this.onBackdropClicked.emit();
        this._closeModalSidenav();
    };
    MdSidenavContainer.prototype._closeModalSidenav = function () {
        if (this._start != null && this._start.mode != 'side') {
            this._start.close();
        }
        if (this._end != null && this._end.mode != 'side') {
            this._end.close();
        }
    };
    MdSidenavContainer.prototype._isShowingBackdrop = function () {
        return (this._isSidenavOpen(this._start) && this._start.mode != 'side')
            || (this._isSidenavOpen(this._end) && this._end.mode != 'side');
    };
    MdSidenavContainer.prototype._isSidenavOpen = function (side) {
        return side != null && side.opened;
    };
    /**
     * Return the width of the sidenav, if it's in the proper mode and opened.
     * This may relayout the view, so do not call this often.
     * @param sidenav
     * @param mode
     */
    MdSidenavContainer.prototype._getSidenavEffectiveWidth = function (sidenav, mode) {
        return (this._isSidenavOpen(sidenav) && sidenav.mode == mode) ? sidenav._width : 0;
    };
    MdSidenavContainer.prototype._getMarginLeft = function () {
        return this._getSidenavEffectiveWidth(this._left, 'side');
    };
    MdSidenavContainer.prototype._getMarginRight = function () {
        return this._getSidenavEffectiveWidth(this._right, 'side');
    };
    MdSidenavContainer.prototype._getPositionLeft = function () {
        return this._getSidenavEffectiveWidth(this._left, 'push');
    };
    MdSidenavContainer.prototype._getPositionRight = function () {
        return this._getSidenavEffectiveWidth(this._right, 'push');
    };
    /**
     * Returns the horizontal offset for the content area.  There should never be a value for both
     * left and right, so by subtracting the right value from the left value, we should always get
     * the appropriate offset.
     */
    MdSidenavContainer.prototype._getPositionOffset = function () {
        return this._getPositionLeft() - this._getPositionRight();
    };
    /**
     * This is using [ngStyle] rather than separate [style...] properties because [style.transform]
     * doesn't seem to work right now.
     */
    MdSidenavContainer.prototype._getStyles = function () {
        return {
            marginLeft: this._getMarginLeft() + "px",
            marginRight: this._getMarginRight() + "px",
            transform: "translate3d(" + this._getPositionOffset() + "px, 0, 0)"
        };
    };
    __decorate([
        ContentChildren(MdSidenav), 
        __metadata('design:type', QueryList)
    ], MdSidenavContainer.prototype, "_sidenavs", void 0);
    __decorate([
        Output('backdrop-clicked'), 
        __metadata('design:type', Object)
    ], MdSidenavContainer.prototype, "onBackdropClicked", void 0);
    MdSidenavContainer = __decorate([
        Component({selector: 'md-sidenav-container, mat-sidenav-container, md-sidenav-layout, mat-sidenav-layout',
            // Do not use ChangeDetectionStrategy.OnPush. It does not work for this component because
            // technically it is a sibling of MdSidenav (on the content tree) and isn't updated when MdSidenav
            // changes its state.
            template: "<div class=\"md-sidenav-backdrop\" (click)=\"_onBackdropClicked()\" [class.md-sidenav-shown]=\"_isShowingBackdrop()\"></div> <ng-content select=\"md-sidenav, mat-sidenav\"></ng-content> <div class=\"md-sidenav-content\" [ngStyle]=\"_getStyles()\"> <ng-content></ng-content> </div> ",
            styles: ["/** * Applies styles for users in high contrast mode. Note that this only applies * to Microsoft browsers. Chrome can be included by checking for the `html[hc]` * attribute, however Chrome handles high contrast differently. */ .md-sidenav-container { position: relative; transform: translate3d(0, 0, 0); box-sizing: border-box; -webkit-overflow-scrolling: touch; display: block; overflow: hidden; } .md-sidenav-container[fullscreen] { position: absolute; top: 0; left: 0; right: 0; bottom: 0; } .md-sidenav-container[fullscreen].md-sidenav-opened { overflow: hidden; } .md-sidenav-backdrop { position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: block; z-index: 2; visibility: hidden; } .md-sidenav-backdrop.md-sidenav-shown { visibility: visible; } @media screen and (-ms-high-contrast: active) { .md-sidenav-backdrop { opacity: 0.5; } } .md-sidenav-content { position: relative; transform: translate3d(0, 0, 0); display: block; height: 100%; overflow: auto; } md-sidenav { position: relative; transform: translate3d(0, 0, 0); display: block; position: absolute; top: 0; bottom: 0; z-index: 3; min-width: 5%; outline: 0; transform: translate3d(-100%, 0, 0); } md-sidenav.md-sidenav-closed { visibility: hidden; } md-sidenav.md-sidenav-closing { transform: translate3d(-100%, 0, 0); } md-sidenav.md-sidenav-opening { box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); visibility: visible; transform: translate3d(0, 0, 0); } md-sidenav.md-sidenav-opened { box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); transform: translate3d(0, 0, 0); } md-sidenav.md-sidenav-side { z-index: 1; } md-sidenav.md-sidenav-end { right: 0; transform: translate3d(100%, 0, 0); } md-sidenav.md-sidenav-end.md-sidenav-closed { visibility: hidden; } md-sidenav.md-sidenav-end.md-sidenav-closing { transform: translate3d(100%, 0, 0); } md-sidenav.md-sidenav-end.md-sidenav-opening { box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); visibility: visible; transform: translate3d(0, 0, 0); } md-sidenav.md-sidenav-end.md-sidenav-opened { box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); transform: translate3d(0, 0, 0); } [dir='rtl'] md-sidenav { transform: translate3d(100%, 0, 0); } [dir='rtl'] md-sidenav.md-sidenav-closed { visibility: hidden; } [dir='rtl'] md-sidenav.md-sidenav-closing { transform: translate3d(100%, 0, 0); } [dir='rtl'] md-sidenav.md-sidenav-opening { box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); visibility: visible; transform: translate3d(0, 0, 0); } [dir='rtl'] md-sidenav.md-sidenav-opened { box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); transform: translate3d(0, 0, 0); } [dir='rtl'] md-sidenav.md-sidenav-end { left: 0; right: auto; transform: translate3d(-100%, 0, 0); } [dir='rtl'] md-sidenav.md-sidenav-end.md-sidenav-closed { visibility: hidden; } [dir='rtl'] md-sidenav.md-sidenav-end.md-sidenav-closing { transform: translate3d(-100%, 0, 0); } [dir='rtl'] md-sidenav.md-sidenav-end.md-sidenav-opening { box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); visibility: visible; transform: translate3d(0, 0, 0); } [dir='rtl'] md-sidenav.md-sidenav-end.md-sidenav-opened { box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); transform: translate3d(0, 0, 0); } .md-sidenav-focus-trap { height: 100%; } .md-sidenav-focus-trap > .cdk-focus-trap-content { box-sizing: border-box; height: 100%; overflow-y: auto; transform: translateZ(0); } .md-sidenav-invalid { display: none; } /*# sourceMappingURL=sidenav.css.map */ ",
"md-sidenav { transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1); } .md-sidenav-content { transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1); } .md-sidenav-backdrop.md-sidenav-shown { transition: background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1); } /*# sourceMappingURL=sidenav-transitions.css.map */ "],
            host: {
                'class': 'md-sidenav-container',
            },
            encapsulation: ViewEncapsulation.None,
        }),
        __param(0, Optional()), 
        __metadata('design:paramtypes', [Dir, ElementRef, Renderer])
    ], MdSidenavContainer);
    return MdSidenavContainer;
}());
export var MdSidenavModule = (function () {
    function MdSidenavModule() {
    }
    MdSidenavModule.forRoot = function () {
        return {
            ngModule: MdSidenavModule,
            providers: [InteractivityChecker]
        };
    };
    MdSidenavModule = __decorate([
        NgModule({
            imports: [CommonModule, DefaultStyleCompatibilityModeModule, A11yModule, OverlayModule],
            exports: [MdSidenavContainer, MdSidenav, DefaultStyleCompatibilityModeModule],
            declarations: [MdSidenavContainer, MdSidenav],
        }), 
        __metadata('design:paramtypes', [])
    ], MdSidenavModule);
    return MdSidenavModule;
}());

//# sourceMappingURL=sidenav.js.map

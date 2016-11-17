import { QueryList, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayOrigin, Portal } from '@angular/material';
export declare class OverlayDemo {
    overlay: Overlay;
    viewContainerRef: ViewContainerRef;
    nextPosition: number;
    isMenuOpen: boolean;
    templatePortals: QueryList<Portal<any>>;
    _overlayOrigin: OverlayOrigin;
    constructor(overlay: Overlay, viewContainerRef: ViewContainerRef);
    openRotiniPanel(): void;
    openFusilliPanel(): void;
    openSpaghettiPanel(): void;
    openPanelWithBackdrop(): void;
}
/** Simple component to load into an overlay */
export declare class RotiniPanel {
    value: number;
}
/** Simple component to load into an overlay */
export declare class SpagettiPanel {
    value: string;
}

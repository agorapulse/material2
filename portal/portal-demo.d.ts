import { QueryList } from '@angular/core';
import { Portal, ComponentPortal } from '@angular/material';
export declare class PortalDemo {
    templatePortals: QueryList<Portal<any>>;
    selectedPortal: Portal<any>;
    readonly programmingJoke: Portal<any>;
    readonly mathJoke: Portal<any>;
    readonly scienceJoke: ComponentPortal<ScienceJoke>;
}
export declare class ScienceJoke {
}

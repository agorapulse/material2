import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
export declare class TabsDemo {
    private router;
    tabLinks: {
        label: string;
        link: string;
    }[];
    activeLinkIndex: number;
    tabs: ({
        label: string;
        content: string;
    } | {
        label: string;
        disabled: boolean;
        content: string;
    } | {
        label: string;
        extraContent: boolean;
        content: string;
    })[];
    asyncTabs: Observable<any>;
    constructor(router: Router);
}
export declare class SunnyTabContent {
}
export declare class RainyTabContent {
}
export declare class FoggyTabContent {
}

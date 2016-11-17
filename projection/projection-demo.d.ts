import { ElementRef, OnInit } from '@angular/core';
import { DomProjectionHost, DomProjection } from '@angular/material';
export declare class ProjectionTestComponent implements OnInit {
    private _projection;
    private _ref;
    _host: DomProjectionHost;
    cssClass: any;
    constructor(_projection: DomProjection, _ref: ElementRef);
    ngOnInit(): void;
}
export declare class ProjectionDemo {
    binding: string;
}

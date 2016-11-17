import { MdSnackBar } from '@angular/material';
export declare class SnackBarDemo {
    snackBar: MdSnackBar;
    message: string;
    actionButtonLabel: string;
    action: boolean;
    setAutoHide: boolean;
    autoHide: number;
    constructor(snackBar: MdSnackBar);
    open(): void;
}

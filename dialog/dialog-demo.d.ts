import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
export declare class DialogDemo {
    dialog: MdDialog;
    dialogRef: MdDialogRef<JazzDialog>;
    lastCloseResult: string;
    config: MdDialogConfig;
    constructor(dialog: MdDialog);
    open(): void;
}
export declare class JazzDialog {
    dialogRef: MdDialogRef<JazzDialog>;
    jazzMessage: string;
    constructor(dialogRef: MdDialogRef<JazzDialog>);
}

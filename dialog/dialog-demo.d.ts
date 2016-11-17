import { MdDialog, MdDialogRef } from '@angular/material';
export declare class DialogDemo {
    dialog: MdDialog;
    dialogRef: MdDialogRef<JazzDialog>;
    lastCloseResult: string;
    constructor(dialog: MdDialog);
    open(): void;
}
export declare class JazzDialog {
    dialogRef: MdDialogRef<JazzDialog>;
    jazzMessage: string;
    constructor(dialogRef: MdDialogRef<JazzDialog>);
}

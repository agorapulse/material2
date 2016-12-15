import { MdInput } from '@angular/material';
export interface Person {
    name: string;
}
export declare class ChipsDemo {
    visible: boolean;
    color: string;
    people: Person[];
    alert(message: string): void;
    add(input: MdInput): void;
    toggleVisible(): void;
}

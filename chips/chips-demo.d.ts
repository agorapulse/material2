import { MdInput } from '@angular/material';
export interface Person {
    name: string;
}
export interface DemoColor {
    name: string;
    color: string;
}
export declare class ChipsDemo {
    visible: boolean;
    color: string;
    people: Person[];
    availableColors: DemoColor[];
    alert(message: string): void;
    add(input: MdInput): void;
    toggleVisible(): void;
}

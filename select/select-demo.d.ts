import { FormControl } from '@angular/forms';
export declare class SelectDemo {
    isRequired: boolean;
    isDisabled: boolean;
    currentDrink: string;
    foodControl: FormControl;
    foods: {
        value: string;
        viewValue: string;
    }[];
    drinks: ({
        value: string;
        viewValue: string;
    } | {
        value: string;
        viewValue: string;
        disabled: boolean;
    })[];
    toggleDisabled(): void;
}

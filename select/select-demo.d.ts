import { FormControl } from '@angular/forms';
export declare class SelectDemo {
    isRequired: boolean;
    isDisabled: boolean;
    showSelect: boolean;
    currentDrink: string;
    foodControl: FormControl;
    foods: {
        value: string;
        viewValue: string;
    }[];
    drinks: {
        value: string;
        viewValue: string;
    }[];
    toggleDisabled(): void;
}

export declare class MenuDemo {
    selected: string;
    items: ({
        text: string;
    } | {
        text: string;
        disabled: boolean;
    })[];
    iconItems: ({
        text: string;
        icon: string;
    } | {
        text: string;
        icon: string;
        disabled: boolean;
    })[];
    select(text: string): void;
}

export interface Task {
    name: string;
    completed: boolean;
    subtasks?: Task[];
}
export declare class MdCheckboxDemoNestedChecklist {
    tasks: Task[];
    allComplete(task: Task): boolean;
    someComplete(tasks: Task[]): boolean;
    setAllCompleted(tasks: Task[], completed: boolean): void;
}
export declare class CheckboxDemo {
    isIndeterminate: boolean;
    isChecked: boolean;
    isDisabled: boolean;
    alignment: string;
    useAlternativeColor: boolean;
    printResult(): string;
    checkboxColor(): string;
}

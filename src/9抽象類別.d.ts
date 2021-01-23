declare abstract class Sorter {
    input: any;
    constructor(input: any);
    sort(): void;
    abstract compare(index1: number, index2: number): boolean;
    abstract swap(index1: number, index2: number): void;
}
declare class StringSort extends Sorter {
    constructor(input: number[]);
    compare(index1: number, index2: number): boolean;
    swap(index1: number, index2: number): void;
}

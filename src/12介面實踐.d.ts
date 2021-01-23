interface addition {
    (input1: number, input2: number): number;
    (input1: number, input2: string): number;
    (input1: string, input2: number): number;
    (input1: string, input2: string): number;
}
interface additionFn {
    add(input1: number, input2: number): number;
    add(input1: number, input2: string): number;
    add(input1: string, input2: number): number;
    add(input1: string, input2: string): number;
    propB: string;
}
declare const safeAdd: additionFn;
declare namespace IinterfaceAndClass {
}

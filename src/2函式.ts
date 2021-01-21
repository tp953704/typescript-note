
function addSomething(x: number): string{
    return String(x);
};
const isPositiveFn: (input: number) => boolean = (input => input > 0);
const isPositiveFn1 = (input => input > 0) as (input: number) => boolean;
const isPositiveFn2 = < (input: number) => boolean>(input => input > 0);
const isPositiveFn3 = (input: number):boolean => input>0;


function sumFromNum(input1: number, input2?: number): number{
    return input1 + (input2 ? input2 : 0);
};
function sumFromNum1(input1: number, input2=1): number{
    return input1 + input2;
};
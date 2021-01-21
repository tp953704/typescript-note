"use strict";
function addSomething(x) {
    return String(x);
}
const isPositiveFn = (input => input > 0);
const isPositiveFn1 = (input => input > 0);
const isPositiveFn2 = input => input > 0;
const isPositiveFn3 = (input) => input > 0;
(function (x, y) {
    return x + y;
})(1, 2);
function sumFromNum(input1, input2) {
    return input1 + (input2 ? input2 : 0);
}
function sumFromNum1(input1, input2 = 1) {
    return input1 + input2;
}
declare function addSomething(x: number): string;
declare const isPositiveFn: (input: number) => boolean;
declare const isPositiveFn1: (input: number) => boolean;
declare const isPositiveFn2: (input: number) => boolean;
declare const isPositiveFn3: (input: number) => boolean;
declare function sumFromNum(input1: number, input2?: number): number;
declare function sumFromNum1(input1: number, input2?: number): number;
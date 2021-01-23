"use strict";
// "use strict";
// const unknown1 = '';
// const num1 = unknown1;
// const num2 = unknown1;
// Math.pow(2, 10);
// (function (x, y) {
//     return x + y;
// })(1, 2);
// const myAge = 17;
// (myAge < 18 ? 'y' : 'old');
// //# sourceMappingURL=3斷言.js.map
// declare const unknown1: unknown;
// declare const num1: number;
// declare const num2: number;
// declare const myAge: number;
const unknown1 = '';
// 遇到unknown或不知名物件要斷言
const num1 = unknown1;
// 業可以這樣斷言
const num2 = (unknown1);
// 斷言不可以方在等號左邊
// const num3  as number=unknown1   error
// 表達式都可用斷言 ，以下常見的斷言場警
(num1 + num1 * num2);
//  <number>(num1 + num1*num2);
Math.pow(1, 2);
// <number>Math.pow(1,2);
// (isPositive(num) && isEven(num)) as boolean 
const myAge = 17;
let ex1 = (myAge < 18 ? 'y' : 'old');
// <string>(myAge < 18 ? 'y' : 'old')
let ex2 = (function (x, y) {
    return x + y;
})(1, 2);
// <number>(function (x, y) {
//     return x + y;
// })(1, 2)
// 也可以放function 內部
function addFn(input1, input2) {
    return 1;
}
addFn(unknown1, unknown1);
// <number>addFn(<number> unknown1,<number>unknown1)
//# sourceMappingURL=3%E6%96%B7%E8%A8%80.js.map
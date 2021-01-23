"use strict";
// "use strict";
// let info = {
//     name: 'May',
//     age: 18
// };
// let keyOfInfo = "name";
// let numOrString = '1asd';
// let Info1 = {
//     name: '123',
//     age: 18,
//     email: '123'
// };
// let account = {
//     email: 'gamil',
//     name: '13'
// };
// account.email = '12';
// var Colors;
// (function (Colors) {
//     Colors[Colors["red"] = 0] = "red";
//     Colors[Colors["Blue"] = 1] = "Blue";
// })(Colors || (Colors = {}));
// ;
// let selectedColor = Colors.red;
// const selectedColor1 = Colors.red;
// let selectedColor2 = Colors.red;
// console.log(Colors[1]);
// console.log(Colors.red);
// var Colors1;
// (function (Colors1) {
//     Colors1[Colors1["red"] = 100] = "red";
//     Colors1[Colors1["Blue"] = 101] = "Blue";
//     Colors1[Colors1["Yellow"] = 102] = "Yellow";
// })(Colors1 || (Colors1 = {}));
// ;
// let Obj1 = {
//     '1': true,
//     2: false
// };
// //# sourceMappingURL=4JSONType.js.map
let info = {
    name: 'May',
    age: 18
};
let keyOfInfo = "name";
let numOrString = '1asd';
;
let Info1 = {
    name: '123',
    age: 18,
    email: '123'
};
let account = {
    email: 'gamil',
    name: '13'
};
account.email = '12';
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["Blue"] = 1] = "Blue";
})(Colors || (Colors = {}));
let selectedColor = Colors.Blue; //型別為colors
const selectedColor1 = Colors.Blue; //型別為colors.Blue
// let selectedColor: Colors= Colors; error
// const selectedColor1 : Colors= Colors; error
var Colors1;
(function (Colors1) {
    Colors1[Colors1["red"] = 1] = "red";
    Colors1[Colors1["Blue"] = 2] = "Blue";
    Colors1[Colors1["Yellow"] = 3] = "Yellow"; //console.log(Colors.red) 1+2
})(Colors1 || (Colors1 = {}));
// // 列舉只能是字串或數字
// enum errorColor{
//     Red = true,
//     Blue = null,
//     Yellow = {},
// }
var ColorsCustom;
(function (ColorsCustom) {
    ColorsCustom[ColorsCustom["red"] = 0] = "red";
    ColorsCustom[ColorsCustom["Blue"] = 2] = "Blue";
    ColorsCustom[ColorsCustom["Yellow"] = 5] = "Yellow"; //console.log(Colors.Yellow) 5
})(ColorsCustom || (ColorsCustom = {}));
let ColorRed = ColorsCustom.red;
let ColorRed1 = 0 /* red */;
let Obj1 = {
    '1': true,
    2: false
};
//# sourceMappingURL=4JSONType.js.map
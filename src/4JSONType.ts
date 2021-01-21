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
// //# sourceMappingURL=JSONType.js.map

// declare type PersonalInfo = {
//     name: string;
//     age: number;
// };
// declare let info: PersonalInfo;
// declare type keyOfPersonalInfo = keyof PersonalInfo;
// declare let keyOfInfo: keyOfPersonalInfo;
// declare type AllOfTypePersonInfo = PersonalInfo[keyOfPersonalInfo];
// declare let numOrString: AllOfTypePersonInfo;
// declare type ExtendedPersonalInfo = {
//     [key in keyof PersonalInfo]: PersonalInfo[key];
// } & {
//     email: string;
// };
// declare let Info1: ExtendedPersonalInfo;
// declare type accountInfo = {
//     password?: number;
//     email: string;
//     readonly name: string;
//     interest?: string[];
// };
// declare let account: accountInfo;
// declare enum Colors {
//     red = 0,
//     Blue = 1
// }
// declare let selectedColor: Colors;
// declare const selectedColor1 = Colors.red;
// declare let selectedColor2: Colors.red;
// declare enum Colors1 {
//     red = 100,
//     Blue = 101,
//     Yellow = 102
// }
// declare type Invalid = {
//     [key: string]: string | boolean;
//     readonly [key: number]: boolean;
// };
// declare let Obj1: Invalid;

type PersonalInfo = {
    name: string;
    age: number;
};

let info: PersonalInfo={
    name: 'May',
    age: 18
};

// 抓取所有KEY
type keyOfPersonalInfo = keyof PersonalInfo;
let keyOfInfo: keyOfPersonalInfo="name";
type AllOfTypePersonInfo = PersonalInfo[keyOfPersonalInfo];
let numOrString: AllOfTypePersonInfo = '1asd';;

// type的擴充方式
type ExtendedPersonalInfo = {
    [key in keyof PersonalInfo]: PersonalInfo[key];
} & {
    email: string;
};

let Info1: ExtendedPersonalInfo = {
    name: '123',
    age: 18,
    email: '123'
};
// type的唯獨選填
type accountInfo = {
        password?: number;
        email: string;
        readonly name: string;
        interest?: string[];
    };


let account: accountInfo = {
    email: 'gamil',
    name: '13'
};
account.email = '12';


enum Colors {
    red ,
    Blue
}

let selectedColor= Colors.Blue; //型別為colors
const selectedColor1= Colors.Blue;//型別為colors.Blue
// let selectedColor: Colors= Colors; error
// const selectedColor1 : Colors= Colors; error

enum Colors1 {
    red = 1, //console.log(Colors.red) 1
    Blue ,//console.log(Colors.red) 1+1
    Yellow//console.log(Colors.red) 1+2
}

// // 列舉只能是字串或數字
// enum errorColor{
//     Red = true,
//     Blue = null,
//     Yellow = {},
// }
enum ColorsCustom {
    red, //console.log(Colors.red) 0
    Blue =red+2,//console.log(Colors.Blue) 2
    Yellow=Blue+3//console.log(Colors.Yellow) 5
}

//列舉前加常數 => 編譯後的結果不一樣(變數便常數)
const enum ColorsCustom1 {
    red, //console.log(Colors.red) 0
    Blue =red+2,//console.log(Colors.Blue) 2
    Yellow=Blue+3//console.log(Colors.Yellow) 5
} 
let ColorRed = ColorsCustom.red;
let ColorRed1 = ColorsCustom1.red;


// key都會當成字串
type Invalid = {
    [key: string]: string | boolean;
    readonly [key: number]: boolean;
};
let Obj1: Invalid = {
    '1': true,
    2: false
};
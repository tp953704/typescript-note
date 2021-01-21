"use strict";
let info = {
    name: 'May',
    age: 18
};
let keyOfInfo = "name";
let numOrString = '1asd';
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
;
let selectedColor = Colors.red;
const selectedColor1 = Colors.red;
let selectedColor2 = Colors.red;
console.log(Colors[1]);
console.log(Colors.red);
var Colors1;
(function (Colors1) {
    Colors1[Colors1["red"] = 100] = "red";
    Colors1[Colors1["Blue"] = 101] = "Blue";
    Colors1[Colors1["Yellow"] = 102] = "Yellow";
})(Colors1 || (Colors1 = {}));
;
let Obj1 = {
    '1': true,
    2: false
};
//# sourceMappingURL=4JSONType.js.map

"use strict";
let info = {
    name: 'May',
    age: 18
};
let keyOfInfo = "name";
let numOrString = '1asd';
let Info1 = {
    name: '123',
    age: 18,
    email: '123'
};
//# sourceMappingURL=JSONType.js.map

declare type PersonalInfo = {
    name: string;
    age: number;
};
declare let info: PersonalInfo;
declare type keyOfPersonalInfo = keyof PersonalInfo;
declare let keyOfInfo: keyOfPersonalInfo;
declare type AllOfTypePersonInfo = PersonalInfo[keyOfPersonalInfo];
declare let numOrString: AllOfTypePersonInfo;
declare type ExtendedPersonalInfo = {
    [key in keyof PersonalInfo]: PersonalInfo[key];
} & {
    email: string;
};
declare let Info1: ExtendedPersonalInfo;
declare type accountInfo = {
    password?: number;
    email: string;
    readonly name: string;
    interest?: string[];
};
declare let account: accountInfo;
declare enum Colors {
    red = 0,
    Blue = 1
}
declare let selectedColor: Colors;
declare const selectedColor1 = Colors.red;
declare let selectedColor2: Colors.red;
declare enum Colors1 {
    red = 100,
    Blue = 101,
    Yellow = 102
}
declare type Invalid = {
    [key: string]: string | boolean;
    readonly [key: number]: boolean;
};
declare let Obj1: Invalid;

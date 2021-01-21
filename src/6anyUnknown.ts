namespace anyunknown{

// "use strict";
// let anyFoo = 123;
// let unknownFoo = 123;
// anyFoo + 1;
// unknownFoo + 1;
// function safeJSONPARSE(jsonString) {
//     return JSON.parse(jsonString);
// }
// //# sourceMappingURL=6anyUnknown.js.map
// declare type T = string | any;
// declare type TT = string & any;
// declare type unTT = unknown & any;
// declare let anyFoo: any;
// declare let unknownFoo: unknown;
// declare type T1 = any | unknown;
// declare type T2 = string | unknown;
// declare type T3 = string & unknown;
// declare function safeJSONPARSE(jsonString: string): unknown;



// any是所有型別的集結，能避免就避免

// any會出現的情況
// 遲滯性的指派

// 函數宣告時的參數型別
// 空陣列
// 會回傳Any的方法



// any跟任何型別聯集等於any
// type T = <Type> | any; => type T = any;
type unknown1 = unknown;
type any1 = any;
type T =  unknown1|any1;

// any跟任何型別聯集等於any
// type T = <Type> & any; => type T = any;
type T1 =  unknown1&any1;

// unknown是安全版本的型別聯集，使用時必須要用斷言

// unknown跟any以外的型別聯集都是unknown
// type T = <Type> | unknown; => type T = unknown;

// unknown跟any以外的型別交集都是unknown
// type T = <Type> & unknown; => type T = <Type>;

function safeJSONParse(jsonString:string):unknown{
    return JSON.parse(jsonString)
} 

}
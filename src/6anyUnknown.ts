"use strict";
let anyFoo = 123;
let unknownFoo = 123;
anyFoo + 1;
unknownFoo + 1;
function safeJSONPARSE(jsonString) {
    return JSON.parse(jsonString);
}
//# sourceMappingURL=6anyUnknown.js.map
declare type T = string | any;
declare type TT = string & any;
declare type unTT = unknown & any;
declare let anyFoo: any;
declare let unknownFoo: unknown;
declare type T1 = any | unknown;
declare type T2 = string | unknown;
declare type T3 = string & unknown;
declare function safeJSONPARSE(jsonString: string): unknown;
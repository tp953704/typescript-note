"use strict";
var anyunknown;
(function (anyunknown) {
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
    // unknown是安全版本的型別聯集，使用時必須要用斷言
    // unknown跟any以外的型別聯集都是unknown
    // type T = <Type> | unknown; => type T = unknown;
    // unknown跟any以外的型別交集都是unknown
    // type T = <Type> & unknown; => type T = <Type>;
    function safeJSONParse(jsonString) {
        return JSON.parse(jsonString);
    }
})(anyunknown || (anyunknown = {}));
//# sourceMappingURL=6anyUnknown.js.map
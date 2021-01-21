


// never 執行步道結尾的第 方都算never

import { type } from "os";

function forever(): never{
    while (true) {
    }
}

// never 是所有型別的子集， 因為任何集合都包含例外狀況
function throwError(): number {
    throw new Error('Will never excute next line...');
}

function throwError1(): void{
    throw new Error('Will never excute next line...');
};


// never與任何級別發生聯集與沒發生都沒差
// type T = <Type>|never; => type T = <Type>

// never與任何級別的交集都是never 型別
// type T =<Type>&never;
// type T =never;

// 如果是兩個不同的型別交集 也會是never
type numberAndString = number & string;

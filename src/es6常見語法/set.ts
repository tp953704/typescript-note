
// Set的宣告介面

// interface Set<T>{
//     add(value:T):this;
//     clear():void;
//     delete(value:T):boolean;
//     forEach(
//         callbackfn:(value:T,value2:T,set:Set<T>)=>void,
//         thisArg?:any
//     ):void;
//     has(value:T):boolean;
//     readonly size:number;
// }
// interface SetConstrutor{
//     new <T=any>(values?:readonly T[] | null):Set<T>;
//     readonly prototype:Set<any>;
// }
// declare var Set:SetConstrutor;

// 使用範例
const aSet = new Set<number>([1,2,3,4])
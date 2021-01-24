
// 不能預設引入type
// export default type Shape = Circle|Rectangle|Triangle; error
// 預設引入一次只能一個
// 要分兩段
type Shape = Circle|Rectangle|Triangle;
export default Shape;

export type Circle = {
    type:'Circle';
    radius:number;
}
export type Rectangle = {
    type:'Rectangle';
    radius:number;
}
export type Triangle = {
    type:'Triangle';
    radius:number;
}
export type Shape = Circle|Rectangle|Triangle;
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

export interface IPeople {
    name:string;
    age:number;
}
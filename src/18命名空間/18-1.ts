// import { shape } from "17.typescript模組系統/17-1宣告"

namespace Shapes{
    export type Circle = {
        type: 'Circle';
    }
    export type Rectangle = {
        type: 'Rectangle';
    }
    export type Triangle = {
        type: 'Triangle';
    }
}


// namespace可以融合，當重複宣告
namespace Shapes{
    export type Circle1 = {
        type: 'Circle1';
    }
}
let circle : Shapes.Circle={
    type: 'Circle'
};
let circle1 : Shapes.Circle1={
    type: 'Circle1'
};



// 介面融合介面
namespace IShapes{
    export interface ex{
        type: 'ex';
    }
    export interface ex{
        name: 'ex1';
    }
}

let Shape : IShapes.ex={
    type:'ex',
    name:'ex1'
};

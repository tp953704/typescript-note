import { shape } from "17.typescript模組系統/17typescript模組系統"

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
let circle : Shapes.Circle;

// namespace可以融合
namespace Shapes{
    export type Circle1 = {
        type: 'Circle1';
    }
}
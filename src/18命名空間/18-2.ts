// namespace裡有namespace

namespace Outer{
    export namespace Inner{
        export type Example = {
            propA:string;
            propB:number;
        }
    }
}

let obj:Outer.Inner.Example = {
    propA:'string',
    propB:132
}

// 命名空間可以引入

export {Outer}
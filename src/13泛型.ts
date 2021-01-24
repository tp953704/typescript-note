namespace 泛型{
    type indentity<T> = T;
    let s:indentity<string> = '123'
    // 兩種泛型
    type TypeConversion<T,U> = (input:T)=>U;
    let numToStr : TypeConversion<number,string> = (input)=>{return String(input)}


    // 常用的犯行場警
    type TypeArray<T> = T[];
    type TypedTwoArray<T> = T[][];

    // 泛用元組
    type Coordinate<T> = [T,T];

    // 簡單的泛用複合型別
    type Either<T,U> = T|U;
    type And<T,U> = T&U;

    // 簡單的泛用JSON物件型別
    type Obj<Y>={prop:Y};
    let propObj :Obj<number>={prop:123}

    // 宣告簡單的泛用JSON物件之可控制引所型別
    type Dictionary<T> = {
        [key:string]:T
    }
}

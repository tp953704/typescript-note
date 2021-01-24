namespace interfaceDeclare{
    // 介面+泛型
    interface TyprArray<T>{
        elements: Array<T>;
        at(index:number):T;
        map(func:(input:T)=>T):T;
        mapToType<U>(func:(input:T)=>U):T;
    }
    
    // 泛型介面延展
    // 1.普通介面展
    // interface TypeArrayExtend extends TyprArray<number>{

    // }
    // // 2.介面延展介面
    // interface TypeArrayExtend<T>extends TyprArray<T>{

    // }
     // 3.介面延展介面
    // interface TypeArrayExtend<U>extends TyprArray<number>{
    //     elements2: Array<U>;
    // }

    // 類別實踐介面
    // 1.普通實踐
    // class C implements TyprArray<number>{

    // }
    // 2.飯用類別實踐泛用介面
    // class C<T> implements TyprArray<number>{

    // }
    // ˇ3.泛用類別實踐泛用介面時，自身有額外泛型
    // class C<T> implements TyprArray<number>{

    // }


    // 繼承+實踐
    // 1
    // class C extends Parent<number> implements TyprArray<number>{

    // }
    // 2
    // class C<T> extends Parent<T> implements TyprArray<T>{

    // }
    

}
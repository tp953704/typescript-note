// 預設型別
type Dictionary<T=string> = {
    [key:string]:T;
}

type StringDictionary1= Dictionary<string>;
type StringDictionary2= Dictionary;

// type Alias1<T=string,U=number,V> 尾端沒有指派error
// type Alias1<T=string,U,V=number> error
// 可接受的預設
type Alias1<T,U=string,V=number>={

}


// 限制型別參數 Type Constraint
type NonNullPrimitives = number | string | boolean;

// 限制泛型
type DictionaryTT<T extends NonNullPrimitives> = {[key:string]:T};


// 用介面達到可擴充限制
interface IDes{
    des:string;
}

// 任何填入logDetail 須符合IDes介面
function logDetail <T extends IDes>(something:T){
    console.log(something.des);
}
interface Map<K,V>{
    clear():void;
    delete(key:K):boolean;
    forEach(
        callbackfn:(value:V,key:K,map:Map<K,V>)=>void,
        thisArg?:any
    ):void;
    get(key:K):V|undefined;
    has(key:K):boolean;
    set(key:K,value:V):this;
    readonly size:number;
}
interface MapConstructor{
    new():Map<any,any>;
    new<K,V>(entries?:readonly(readonly[K,V])[] | null):Map<K,V>;
    readonly prototype:Map<any,any>;
}

declare var Map: MapConstructor;

// key是string value是number
const numMapObj = new Map<string,number>([['lucky',12],['1',2]])
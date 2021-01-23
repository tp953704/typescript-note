declare type Dictionary<T = string> = {
    [key: string]: T;
};
declare type StringDictionary1 = Dictionary<string>;
declare type StringDictionary2 = Dictionary;
declare type Alias1<T, U = string, V = number> = {};
declare type NonNullPrimitives = number | string | boolean;
declare type DictionaryTT<T extends NonNullPrimitives> = {
    [key: string]: T;
};
interface IDes {
    des: string;
}
declare function logDetail<T extends IDes>(something: T): void;

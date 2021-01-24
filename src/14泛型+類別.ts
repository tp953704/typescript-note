namespace TCLASS{
    class TypeArray<T>{
        constructor(public elements:T[]){}

        public at(index:number):T{
            return this.elements[index];
        }
        public map(func:(input:T)=>T):TypeArray<T>{
            const result = new TypeArray<T>([]);
            for(let i=0;i<this.elements.length;i++){
                const currenyEle = this.at(i);
                const mapResult = func(currenyEle);
                result.elements.push(mapResult);
            }
            return result; 
        }
        // 方法有泛型
        public mapToType<U>(func:(input:T)=>U):TypeArray<U>{
            const result = new TypeArray<U>([]);
            for(let i=0;i<this.elements.length;i++){
                const currenyEle = this.at(i);
                const mapResult = func(currenyEle);
                result.elements.push(mapResult);
            }
            return result; 
        }
    }
    let numArray = new TypeArray<number>([1,2,3,4,5])
    console.log(numArray.map(function(x){return x}))//x被推斷為number
    console.log(numArray.mapToType<string>(function(x){return String(x)}))

    // 既成泛型
    // 父類別可以指定，
    // 1.class Child extends Parent<string>{}
    // 但是不行沒宣告過型別
    // class Child extends Parent<T>{}  error

    // 子類別的宣告可以套入父類別
    // class Child<T> extends Parent<T>{}
    // class Child<T> extends Parent<number>{}

    // 範例
    abstract class Sorter<T> {
        constructor(public input:T) {         
        }
        public sort(){

        }
        abstract compare(index1:number,index2:number):boolean;
        abstract swap(index1:number,index2:number):void;
    }
    class StringSorter extends Sorter<string> {
        constructor(public input:string) {
            super(input)
        }
        compare(index1:number,index2:number){
            return true;
        }
        swap(index1:number,index2:number){

        }
    }
}
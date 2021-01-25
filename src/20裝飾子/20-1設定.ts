
/* tsconfig.json */

// "compilerOptions": {
//     "experimentalDecorators": true,
//     "emitDecoratorMetadata": true
//   },
namespace decorators{
    class Cat{
        @memberVariableDecorate
        public name:string;
        public breed:string;
        constructor(name:string,breed:string){
            this.name = name;
            this.breed=breed;
        }
        @decorate
        get info(){
            return `${this.name} is a ${this.breed}`;
        }
    
        @decorate
        public makeNoise(){
            console.log('MMMM')
        }
    }

    // 裝飾子涵是介紹有desc只能介紹方法
    function decorate(target:any, key:string, desc:PropertyDescriptor){
        console.log(target);
        console.log(key);
        console.log(desc);//
    }
    // 裝飾子涵是能介紹成員，只有兩個參數
    function memberVariableDecorate(target:any, key:string){
        console.log(target);
        console.log(key);
    }

    @decorateClass
    class Circle{
        @decorateStaticProperty
        public static PI:number=Math.PI;

        @decorateStaticMethod
        public static area(radius:number){

        }
    }
     // 裝飾子涵是能介紹靜態成員，只有兩個參數
     function decorateStaticProperty(target:any, key:string){
        console.log(target);
        console.log(key);
    }
    // 裝飾子涵是能介紹靜態方法，只有三個參數
    function decorateStaticMethod(target:any, key:string, desc:PropertyDescriptor){
        console.log(target);
        console.log(key);
    }

    // 類別裝飾子，只需要(絕對)一個參數
    function decorateClass(constructor:Function){
        console.log(constructor)
    }


    // 屬性苗速器案例
    class Cat1{
        @memberVariableDecorate
        public name:string;
        public breed:string;
        constructor(name:string,breed:string){
            this.name = name;
            this.breed=breed;
        }
        @debug
        public someMethod(message:string){
            throw new Error(message)
        }
    
        @readonly
        public makeNoise(){
            console.log('MMMM')
        }
    }
    // 類別裝飾子，只需要(絕對)一個參數
    function readonly(target:any,key:string,desc:PropertyDescriptor){
        desc.writable = false;
    }

    function debug(target:any,key:string,desc:PropertyDescriptor){
        const method = desc.value;
        try{

        }catch(error){

        }
    }

}

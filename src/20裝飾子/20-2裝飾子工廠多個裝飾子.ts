namespace 裝飾子工廠{
    class Cat{
        public name:string;
        public breed:string;
        constructor(name:string,breed:string){
            this.name = name;
            this.breed=breed;
        }
        @readonly(true)   //第3個執行
        @decorateMethod1  //第2個執行
        @decorateMethod2  //第一個執行
        public makeNoise(){
            console.log('MMMM')
        }
    }
    // 裝飾子工廠
    function readonly(active:boolean){
        return  function (target:any, key:string, desc:PropertyDescriptor){
            desc.writable = active;
        }
    }
    function decorateMethod1(target:any, key:string, desc:PropertyDescriptor){
        console.log('1')
    }
    function decorateMethod2(target:any, key:string, desc:PropertyDescriptor){
        console.log('2')
    }

   
}
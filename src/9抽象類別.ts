abstract class Sorter {
    constructor(public input:any) {
        
    }
    public sort(){
        // 泡泡排序
        for(let i=this.input.lenght;i>0;i-=1){
            for(let j=0;j<i-1;j+=1){
                if(this.compare(j,j+1)){
                    this.swap(j,j+1);
                }
            }
        }
    }
    abstract compare(index1:number,index2:number):boolean;
    abstract swap(index1:number,index2:number):void;
}

class StringSort extends Sorter {
    constructor(input:number[]){
        super(input);
    }
    public compare(index1:number,index2:number):boolean{
        // 比較
        return true;
    }
    public swap(index1:number,index2:number):void{
        // 比較
         
    }
}
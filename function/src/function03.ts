{
    let person = {
        name : "happy",
        hello : function(name2:string){
            console.log("hello "+this.name+name2);
        }
    }

    person.hello("love");



    //this 는 반드시 가장 먼저 선언 해야하며
    //생략해도 정상적으로 작동한다.
    //this를 사용하는이유는 여러개를 참조했을때 
    interface personType  {
        name : string,
        hello(this: personType, name2:string): string;
    }
    let typedPerson: personType = {
        name: "happy2",
        hello: function(this: personType, name2: string):string{
            let message = "hello, "+ this.name + name2;
            return message;
        }

    }
    typedPerson.hello("asd");

  

    let testFunction = function(let1:string, let2:string):string{
        return"";
    };
    

    //하단은 선언을 전부다 하고난것 상단은 선언을 생략
    let testFunction2 = (let1 : string, let2 : string) => let1+let2;
    let testFunction3 : (let1 : string, let2 : string) => string = (let1, let2) => let1+let2;


 
    //함수 형태를 재활용 하는법 
    type calcType = (a:number,b:number) => number;
    let funcAdd:calcType = (a, b) => a+b;
    let funcSub:calcType = (a, b) => a-b;


}

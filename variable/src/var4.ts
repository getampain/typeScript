
//함수 변수,리턴값지정
function add(a: any, b:any):number {

    return 10;
}

{
    //화살표 함수를 통한 리턴값 지정, 파라메터 지정
    //한번이라도 전역에서 사용된적 있다면 재선언 불가능하게 때려막아버림
    // 사용하고싶다면 이것처럼 블록을줘야함 
    let returnFuction:(userAge : number) => number = function(userAge){
        userAge ++;
        return userAge;
    }
}

let arrayString:string[] = [];
arrayString.push("11212");
arrayString.push("가나다");

let arrayAny:any[] = [];
arrayAny.push(11212);
arrayAny.push("11212");

//애니보다는 유니온 타입이 권장된다.
let arrayUnion:(string | number)[] = [];
arrayUnion.push(11212);
arrayUnion.push("11212");

console.log("normal" + arrayString);
console.log("any" + arrayAny);
console.log("union" + arrayUnion);




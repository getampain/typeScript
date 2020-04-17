
//화살표 함수를 통한 리턴값 지정, 파라메터 지정
let returnFuction:(userAge : number) => number = function(userAge){
    userAge ++;
    return userAge;
}


enum enumTest1 {first, second, third};
enum enumTest2 {first = 10, second = 20, third = 30};
enum enumTest3 {first = "10", second = "20", third = "30"};
enum enumTest4 {first = 10, second = 20 << 2};


let enumCopy:enumTest3 = enumTest3.second;


let number1:number = 40;
let number2:any = 40;
let number3 = 40;


let testObj:Object = 30;
//testObj.toFixed(1);

console.log("point : "+typeof testObj);
console.log(number1.toFixed(2));
console.log(number2.toFixed(2));
console.log(number3.toFixed(2));


//number2 는 any타입을 선언했기때문에 ts 상에서 오류가 없으나 js상에선 있음
//number3.notExistMethod();
//number2.notExistMethod();

console.log(enumTest1);
console.log(enumTest2);
console.log(enumTest3);
console.log(returnFuction(23));
console.log(enumTest4);
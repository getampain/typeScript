
//화살표 함수를 통한 리턴값 지정, 파라메터 지정
let returnFuction:(userAge : number) => number = function(userAge){
    userAge ++;
    return userAge;
}


enum enumTest1 {first, second, third};
enum enumTest2 {first = 10, second = 20, third = 30};
enum enumTest3 {first = "10", second = "20", third = "30"};


let enumCopy:enumTest3 = enumTest3.second;



console.log(enumTest1);
console.log(enumTest2);
console.log(enumTest3);
console.log(returnFuction(23));
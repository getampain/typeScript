
//화살표 함수를 통한 리턴값 지정, 파라메터 지정
let returnFuction:(userAge : number) => number = function(userAge){
    userAge ++;
    return userAge;
}


console.log(returnFuction(23));
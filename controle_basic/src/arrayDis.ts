//독특한 형태로 변수를 선언하는법
//데이터를 쉽게 가공하여 변수를 선언하는대 특화되어있는것같다.
//오른쪽값을 가공해서 선언해주는것이아니라 컴파일러단에서 알아서 필터링 하여 넣어주는 기분
let number =["one","tue","three","four","five" ];

let num1_o = number[0];
let num2_o = number[1];

let[num1_o2,num2_o2] = number;
let[,,num3_o2,num4_o2] = number;
[num3_o2,num4_o2] = [num4_o2, num3_o2]


//이런식으로 풀어서 쓸 수 있다
let repeat:number[] = [1,2,3,4,5];
[repeat[0], repeat[1]] = [repeat[1], repeat[0]];
console.log(repeat);




console.log(num1_o2,num2_o2,num3_o2,num4_o2);


//기본값을 black으로 선언해준것
let [color1, color2 = "blue"] = ["black"];
console.log(color1,color2);



//디스트럭처링 사용 함수와 일반함수의 차이점 
//위는 변수가 한개 아래는 2개인것 
function ff([fitt, fitt2]:[string, number]){

}

function terf(abc: number, deff:string):void{

}



let [ffirst, ...ssend] = [1,2,3];
console.log(ffirst);
console.log(ssend);
//.이런식으로 여러개를 합치는 건 힘듬
//console.log([...ssend, 1,...ffirst,1,2,3]);
//하지만 이런식으로 한개만 사용해도 가능
console.log([1,2,2,2,...ssend, 1, 1,2,3]);


//오브젝트도 합체가 된다
let objj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

let objj2 = {
    ...objj,
    e: 12,
    f: 13,
    g: 22,
    a: 12
}

console.log(JSON.stringify(objj2));


//rest 요소라고 한다
//...형식은 오브젝트 내에선 마지막에서만 가능하다
// a, b를 제외한 나머지
//마치 일반적인 변수선언이 아닌거같다
let {b, a,...objj3} = objj;

console.log("!!!"+JSON.stringify(objj3));


//이런식으로 의미없는 데이터값을 효율좋게 뽑아내는대 사용가능할듯
let totalData = {
    attr1: "",
    attr2: "",
    attr3: "", 
    etc: "",
    name: "a",
    code: "a",
    level: "a",
    highcode: "a",
}
let {attr1, attr2, attr3, etc, ...simpleResultData } = totalData;
console.log(JSON.stringify(simpleResultData));

console.log(typeof attr1);
console.log(typeof simpleResultData);







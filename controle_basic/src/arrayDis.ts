let number =["one","tue","three","four","five" ];

let num1_o = number[0];
let num2_o = number[1];

let[num1_o2,num2_o2] = number;
let[,,num3_o2,num4_o2] = number;
[num3_o2,num4_o2] = [num4_o2, num3_o2]



console.log(num1_o2,num2_o2,num3_o2,num4_o2);

let [color1, color2 = "blue"] = ["black"];
console.log(color1,color2);



//디스트럭처링 사용 함수와 일반함수의 차이점 
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
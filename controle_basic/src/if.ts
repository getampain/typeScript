let text: string = "";
let statusActive: number = 0;
let isEnable: boolean = true;

if(statusActive || text){
    console.log(1);
}

if(isEnable && 2 > 1){
    console.log(2);
}

let command:number = 0;

switch (command){
    case 0:
        console.log("ok");
        break;
    case 11:
        console.log("no");
        break;
}


//폴스루

let testNum :number = 3;
switch(testNum % 2){
    case -1 :
        console.log(-1);
    case 0 :
        console.log(0);
    case 1 : 
        console.log(1);
    case 2 :
        console.log(2);
}


function testDis([first111="default1",second111=-2]:[string,number] = ["default", -1]){

    console.log(first111, second111);

}

testDis();
testDis(["123",3]);

//오브젝트랑 다르게 이런 형식으로는 대처가 안됨
//testDis(["mk",]);

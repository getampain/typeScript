{

    //호이스팅 기능이 발동하지 않아 에러가뜬것
    //testFunction();

    let testFunction = function(){
        console.log("abc");
    }   

    testFunction();

    function abc( x:number, y:number):number{
        return x+y;
    }


    let b = abc(12,12);
    //역따옴표 주의!!
    console.log(`a=${b}`);


    //변수 타입에 ? 가 안들어가도 빈값으로 임의지정이 가능함
    //오브젝트만 ? 형태가 들어가야하는것인가?
    function pow(x:number=2, y:number=2):number{
        return y;
    }

    console.log(pow());
    console.log(pow(3));
    //후반 파라메터만 넣는건 안되는듯하다
    //console.log(pow(,3));


    function restParam(a: any, b: any, c: any, ...restP: any[]){
        console.log(a+b+c+restP.join("__"));
    }
    
    restParam("1","2","3",4,5,6,7,8,9,0);
    
    
    //arguments 는 해당 함수가 받은 매게변수를 순서대로 받아오는거다
    function colors(a:string){
        var rest = [];
        for(var _i=1;_i<arguments.length;_i++){
            rest[_i - 1] = arguments[_i];
        }
        return a + " " + rest.join(" ");
    }
    
    
    //매개변수에서 ?와 = 기본값 지정은 동시사용이 불가능하다
    function sum2(a:number, b?:number){
        if(b === undefined){
            b = 0;
        }
    
        console.log(a+b);
    }
    
    sum2(12);
    

    //함수 오버로드 매게 변수에 맞춰 가장 적합한것을 실행해준다.
    //컴파일을 통한 변환과정에서 가장적합한 함수를 미리 준비해둠으로
    //소모되는 리소스값이 없다

    //선언만 이리 해놓고 any를 통해 본값을 선언해주는 형태
    //왜지? 이점은 리턴밖에 없어보임 리턴의 형값을 다르게 해준다
    function add(first:string, second:string):string
    function add(first:number, second:number):number
    function add(first:any, second:any):any{

        return(first+second);

    }
    console.log(add(1,2));
    console.log(add("1","2"));

    //매게변수의 갯수도 다르게 가능하다
    function add2(first:string, second:string):string
    function add2(first:number):number
    function add2(first:string):string
    function add2(first:number, second:number):number

    function add2(first:any, second?:any):any{

        if(second === undefined)
            second = 0;
        return(first+second);

    }

    console.log(add2(1,2));
    console.log(add2("1"));
    console.log(add2(1));


    let call = [
        {name : "1월", value : 1},{name : "2월", value : 2},{name : "3월", value : 3},{name : "4월", value : 4},
        {name : "5월", value : 5},{name : "6월", value : 6},{name : "7월", value : 7},{name : "8월", value : 8},
        {name : "9월", value : 9},{name : "10월", value : 10},{name : "11월", value : 11},{name : "12월", value : 12}
    ];

    function pick( x:{name:string}):number;
    function pick( x:{value:number}):string;
    function pick( x:number):number;
    function pick( x:any):any{
        if(typeof x === "object"){

            if(x.value === undefined && x.name !== undefined){
                for(let constellation of call){
                    if(constellation.name === x.name)
                        return constellation.value;
                }
                return -1;
            }
            else if(x.value !== undefined && x.name === undefined){
                for(let constellation of call){
                    if(constellation.value === x.value)
                        return constellation.name;
                }
                return "-1월";
            }
            else{
                return -1;
            }
        }
        else if(typeof x === "number"){
            if(x > 0 && x < 13){
                return x - 1;
            }
            else{
                return -1;
            }
        }
        else{
            return -1;
        }

    }



    console.log("-----------------------------------------------------------");
    console.log(pick(13));
    console.log(pick(12));
    console.log(pick({name:"10월"}));
    console.log(pick({name:"13월"}));
    console.log(pick({value:7}));
    console.log(pick({value:70}));


    //중괄호가있을경우는 반드시 return
    let y1= (x: any) => { return x};
    let y2= (x: any) => x;

    //이런식으로 바로 사용 가능
    let lift = ( (x3:any) => { return x3} )   (12);
    console.log(lift);



}



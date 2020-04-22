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
}
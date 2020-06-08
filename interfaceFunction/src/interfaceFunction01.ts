{
    interface IFormat{
        (data: string, toUpper?: boolean): string;
    }

    //현재 설정에서는 ?까지 정확해야함
    let format: IFormat = function(data: string, toUpper?: boolean){
        return data + "";
    }

    console.log(format("2222",true));


    
    //오버라이든 매서드의 파라메터가 오버라이딩 메서드보다 갯수가 많아야하고
    //오버라이든 타입이 오버라이딩 보다 상위 타입이여야함

    //단 오버라이딩 함수가 any일경우는 예외이다.
    class BirdFilterNode{
        constructor(){

        }   
        flight(knDistance:any=0, knSpeed:number=0){
            console.log(knDistance + " " + knSpeed);
        }

    }
    class Eagle extends BirdFilterNode{
        constructor(){
            super();
        }
        flight(knDistance:number=0){

        }
    }


    class BirdFilterNode2{
        constructor(){

        }   
        flight(knDistance:string) :void{
            console.log(knDistance);
        }

    }
    class Eagle2 extends BirdFilterNode2{
        constructor(){
            super();
        }


        //오버라이딩함수를 오버로드하는법
        //오버로드란 : 다른 파라매터를 이름이 같은함수에 적용하는것

        //반드시 오버라이든 함수의 파라매터를 포함해야한다
        //즉 flight(knDistance:string):void;를 주석처리하면 모든 항목이 에러가 난다.
        //또한 return 타입을 모두 적어줘야한다.

        flight(knDistance:string):void;
        flight(knDistance:number):void;
        flight(knDistance:boolean):void;
        flight(knDistance:any){

            //모든 오버로드된 변수를 받아 type of로 걸러주는 형식이다.
            if(typeof knDistance == "number")
                console.log(knDistance);
        }


    }

    class Eagle3 extends BirdFilterNode2{
        constructor(){
            super();
        }


 
        //이렇게 한경우 맨뒤에는 any지만 string과 넘버만 가능하다
        flight(knDistance:string):void;
        flight(knDistance:number):void;
        flight(knDistance:any){

            //모든 오버로드된 변수를 받아 type of로 걸러주는 형식이다.
            if(typeof knDistance == "number")
                console.log(knDistance);
        }
    }

    let asd = new Eagle3();
    asd.flight("ss");
    asd.flight("12");
    
    //애니를 쓴다면 해당 항목을 제외한 나머지만 가능하다.. 
    //asd.flight(true);




 
}

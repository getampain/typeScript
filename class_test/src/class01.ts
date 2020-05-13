{
    //클래스에서는 const, let, var을 사용하는형식이
    //아닌 private public protected를 사용한다
    //private는 해당 클레스에서만 protected는 상속받은 클레스에서 까지 사용 가능하다
    class triangle{
        x: number;
        y: number;

        constructor(x:number, y:number){
            this.x = x;
            this.y = y;
        }

        getArea():number{
            return this.x * this.y /2;
        }
    }

    let abc = new triangle(2,5);

    console.log(abc.getArea());

    interface triangle{
        x: number;
        y: number;
        getArea():number;

    }






    //포함, 상속관계 전부 구현
    class flashLight{
        constructor(public lightIntensity: number){
        }
    }

    class bicycle{
        /*
        생성자 안에서 생성하는 방식과 위에서 선언해서 먹여주는 방식이 동일한 방식이다.
         public numberOfWheel:number
        constructor(x:number){
            this.numberOfWheel = x;
        }

         */
        constructor(public numberOfWheel: number){
        }

        getNumberOfWheel():number{
            return this.numberOfWheel;
        }

    }


    //산악자전거와 자전거가 상속관계, 산악자전거안의 플래시라이트가 포함관계 플래시라이트는 산악자전거안에서
    //생성되었음으로 완전 포함관계{}
    class mountainBike extends bicycle{
        fLight: flashLight;
        constructor(public numberOfWheel:number, public hasBackSaddle: boolean){
            super(numberOfWheel);
            this.fLight = new flashLight(90);
        }

        getHasBackSaddle(){
            return this.hasBackSaddle;
        }
        // getNumberOfWheel(){
        //     return this.numberOfWheel;
        // }
    }

    let newClass = new mountainBike(20,true);
    console.log(newClass.getHasBackSaddle());
    console.log(newClass.getNumberOfWheel()+"\n\n\n");


    console.log(newClass.numberOfWheel);


    class cube{
        constructor(public width:number, private length:number, protected height:number){

        }
        getVolum(){
            return this.width * this.height * this.length;
        }
            
    
    }

    let [a, b, c] = [1,2,3];
    let cubeValue = new cube(a,b,c);

    console.log(cubeValue.width);
    console.log(cubeValue.getVolum());
}
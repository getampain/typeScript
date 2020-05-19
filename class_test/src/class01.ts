{
    //클래스에서는 const, let, var을 사용하는형식이
    //아닌 private public protected readOnly를 사용한다
    //readonly 변경이 불가능하지만 어디서나 호출가능한 타입
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

    /*

    get과 set이 없는 프로퍼티는 자동으로 읽기 전용으로 추정됩니다. 이것은 여러분의 코드에서 .d.ts 파일을 생성할 때 유용합니다. 왜냐하면 여러분의 프로퍼티 사용자가 그것을 변경할 수 없다는 것을 알 수 있기 때문입니다
    

    클레스에서 function으로 처리가 가능한 부분을 굳이 getter setter를 지정해서 사용하는 이유는 위와 같다고 생각함
    게터 세터가 없기때문에 자동으로 읽기전용으로 추정됨


    */



    /*

            *****
            중요한점은 상위클래스의 변수값, 함수값은
            자식클래스에서는 .변수, .함수값으로 가져오는것이 불가능하다.
            즉 public으로 선언을 했다고 하더라도 반드시 geter seter그리고 
            메소드를 통하여 값을 가져와야 한다.


            또한 상위와 하위가 변수명이 같다면 동시에 수정된다
            
    */
    class PC{
        constructor(public hddCapacity: string){}

        private ram: string = "0G";

        set ramCapacity(val: string){
            this.ram = val;
        }
        get ramCapacity(){
            return this.ram;
        }

        protected getHddCapacity(){
            return this.hddCapacity;
        }
    }

    class Desktop extends PC{
        constructor(public hddCapacity:string){
            super(hddCapacity);
        }

        /*

        constructor(public hddCapacity2:string){
            super(hddCapacity2);
            이런것도 가능하다
        }

        */

        getInfo(){
            console.log(super.getHddCapacity()+"  "+super.hddCapacity);
            console.log(this.getHddCapacity()+"  "+this.hddCapacity);

            this.hddCapacity = "2000G";
            console.log(super.getHddCapacity()+"  "+super.hddCapacity);
            console.log(this.getHddCapacity()+"  "+this.hddCapacity);


            //게터 세터를 사용하여 이런식으로 사용가능하다
            super.ramCapacity = "16G";
            console.log(super.ramCapacity + "  "+ this.ramCapacity);

            this.ramCapacity = "12G";
            console.log(super.ramCapacity + "  "+ this.ramCapacity);


        }
    }

    let abcdef = new Desktop("222G");
    abcdef.getInfo();

}
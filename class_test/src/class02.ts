{
    class Account {

        //public balanced :string
        balance: number
    
        get getBalance(){
            return this.balance;
        }
        set setBalance(amount: number){
            this.balance += amount;
        }
        // public get getbalanced(){
        //     return;
        // }

        deposite(temp:number){
            this.setBalance = temp;
        }
        constructor(defaultValue:number, protected bankName:string ="mbs", readonly interestRate: number = 0.1){
            this.balance = defaultValue;
        }

        getInterestRate(){
            return this.interestRate;
        }

        getDefaultBalance(){
            //defaultValue 호출 불가
        }    
        //컨스트럭터안에 있는거뺴고는 선언안하면 public 자동할당
        //컨스트럭는 프로텍트
    }

    class MyAccount extends Account{

        constructor(){
            super(100);
            this.deposite(1000);
            this.setBalance = 1000;
            console.log(this.balance+ " "+this.getBalance);
            console.log(this.interestRate+ " "+this.getInterestRate());

        }
    }

    let abc = new Account(10000);
    console.log(abc.balance+ " "+abc.getBalance);
    console.log(abc.interestRate+ " "+abc.getInterestRate());

    let tet = new MyAccount();



    //추상함수, 변수는 반드시 extends된곳에서 구현하여야 한다.
    //추상함수 내에서 구현함수, 구현변수를 혼용할 수 있다.
    abstract class AbstractBird{
        abstract birdName:string;
        abstract habitName:string;
        abstract flySound(sound:string):void;

        fly():void{
            this.flySound("파닥파닥");
        }
        getHabitat():void{
            console.log(this.birdName + "  " + this.habitName);
        }
    }

    class wildGoose extends AbstractBird{
        

        constructor(public birdName: string, public habitName:string){
            super();
        }


        //추상함수 오버라이딩
        flySound(sound:string){
            this.birdName = sound;
        }

    }

    console.log("////////////////////////////");
    let testAbstract = new wildGoose("goose","슾지");
    console.log(testAbstract.getHabitat());
    testAbstract.fly();
    console.log(testAbstract.getHabitat());

    



    //////////////////
    //추상클래스와 인터페이스의 차이는 
    //추상클래스는 구현+선언이 모두가능하지만 인터페이스는 선언만가능하다

    //인터페이스는 constructor와 super를 사용할 필요가 없내

    interface Car {
        speed: number;
    }
    interface sportCar{
        accel: number
    }

    interface MyCar extends Car, sportCar{
        waterprrof: boolean;
    }

    let myCars = <MyCar>{};
    myCars.accel = 100;
    myCars.speed = 200;
    myCars.waterprrof = true;

    //상속받을시 상속받은값은 재정의 해야한다.'
    //클래스와 인터페이스는 

    //오브젝트의 리턴값 타입지정을할때 사용하기 좋을것같다.
    //혹은 인터페이스 대신 클레스 둘다 의미ㅡㄴㄴ비슷
    interface testInter {flySpeed:number}


    interface Dog{
        run():void;
        getStatus():{runningSpeed:number};

    }
    interface Bird{
        fly():void;
        getStatus():testInter

    }
    

    //getStatus의 입력값과 반환값이 동일하다면 2개를 동시에 extends 해줬을때 오류가 없지만
    //동일한 함수가 있다면 재정의를 해줘야 한다.
    interface Animal extends Dog,Bird{

        //재정의를 해주더라도 모든 값이 재정의 되어야 한다.해당 항목에 2개의 변수를 모두 입력하지 않으면 오류가 생김
        getStatus():{runningSpeed:number,flySpeed:number }
    }
    //인터페이스를 모두 작성한다면 implments를 통해서 인터페이스를 구현해야한다

    class NewAnimal implements Animal{

        //임플리먼트는 extends와 다르다
        run():void{
            //console.log(this.runningSpeed);
        }
        fly():void{
            //console.log(this.flySpeed);
        }

        getStatus():{runningSpeed:number,flySpeed:number }{
            return {runningSpeed:12,flySpeed:2 }
        }
    }

    //인터페이스는 컴파일이후에 제거된다 그러므로 typeof사용불가능이다

}

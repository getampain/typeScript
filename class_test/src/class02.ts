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

    

}

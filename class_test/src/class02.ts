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

}

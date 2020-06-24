{
    class Planet{
        public diameter: number;
        protected isTransduction: boolean = true;

        constructor(diameter:number, isTransduction?:boolean){
            this.diameter = diameter;
        }

        getIsTransduction(): boolean{
            return this.isTransduction;
        }

        getTransduction():void{
            console.log("stop1");
            this.isTransduction = false;
        }
    }


    //Earth값으로 선언하더라도 실제로는 Planet을 기준으로 실행됨 그러나 같은 이름을 지닌 함수가 존재한다면 자식의 함수가 덮어씌워진다!!
    class Earth extends Planet{

        //콘스트럭터는 본인의 입력받는 값이 존재할경우, 혹은 선언이 필요한경우 반드시필요 x
        constructor(){

            //super는 콘스트럭터가 선언이 되야 사용하며 안의 super는 해당 상속받는 값의 컨스트럭터값
            super(12);
            super.isTransduction = false;

        }
        public features: string[] = ["soil", "water", "oxyzen"];
        stopTransduction():void{
            console.log("stop2");
            this.isTransduction = false;
        }

    }

    let earth:Earth = new Earth();
    earth.diameter = 12.232323;
    console.log(earth.diameter);
    console.log(earth.getIsTransduction());
    earth.stopTransduction();
    console.log(earth.getIsTransduction());
    /////////////////////////////////////////////////
    console.log("//////////////////////////////////////////////////////////////////");


    abstract class Train{
        constructor(protected speed: number){}
        speedUp():void{
            this.speed++;
        }
        abstract getSpeed():number;
    }

    class Ktx extends Train{
        constructor(){
            super(20);
        }
        public getSpeed():number{
            console.log("extended!!");
            return this.speed;
        }
        public speedUpUp():void{
            this.speed+=2;
        }
    }

    //첫 타입을 부모타입으로 지정해두고 선언할때 자식타입으로 해도되지만 
    //자식에서 생성된것은 접근 불가능
    //오버라이딩은 예외
    let ktx2:Train = new Ktx();
    console.log(ktx2.getSpeed());
    ktx2.speedUp();
    //ktx2.speedUpUp();
    console.log(ktx2.getSpeed());

    let ktx:Ktx = new Ktx();
    console.log(ktx.getSpeed());
    ktx.speedUp();
    ktx.speedUpUp();
    console.log(ktx.getSpeed());


    /////////////////////////////////////////////////////////////////////
    console.log("//////////////////////////////////////////////////////////////////");


    interface IPerson{
        height:number;
        getAlias: () => string;
        getAge(): number;
    }
    class PoliceOfficer implements IPerson{

        constructor(public height:number){

        }

        getAlias = () => "happy";
        getAge():number{
            return 10;
        }

        hasClub():boolean{
            return true;
        }
    }


    let policeMan:IPerson = new PoliceOfficer(170);
    console.log(policeMan.getAlias);
    //화살표 함수를 넘겨받으면 넘겨받은 변수에 ()를 붙일경우 바로 사용이 가능하다
    console.log(policeMan.getAlias());
    console.log(policeMan.getAge());
    //접근불가능
    //console.log(policeMan.hasClub());

    /////////////////////////////////////////////////////////////////////
    console.log("//////////////////////////////////////////////////////////////////");


    class MonitorDisplayTest{

        display(data: string | number):string{
            if(typeof data === "string"){
                return "string"
            }
            else{
                return "num"
            }
        }

        //이런식으로 class 값도 가능
        display_02(monitor: Led | Oled):string{
            if(monitor instanceof Led){
                return "string"
            }
            else{
                return "num"
            }
        }
    }

    class Led{

    }
    class Oled{

    }

    //이것도 폴리모피즘이였음..띠요오오옹
    //이런식으로 하면 else if가 무한히 늘어남 해당 문제를 해결하기 위하여 인터페이스 타입을 사용함
    let mbc:MonitorDisplayTest = new MonitorDisplayTest();
    console.log(mbc.display(111));
    console.log(mbc.display("111"));



    /////////////////////////////////////////////////////////////////////
    console.log("//////////////////////////////////////////////////////////////////");
    
    



}
{
    interface Monitor{
        getName(): string;
    }

    class Led implements Monitor{
        constructor(private name:string){}
        getName():string{
            return "LED : "+this.name;
        }
    }
    
    class Oled implements Monitor{
        constructor(private name:string){}
        getName():string{
            return "OLED : "+this.name;
        }
    }

    class MonitorDisplayTest{


        //이방식은 기존 윗방식의 노가다 방식
        display_02(monitor: Led | Oled):string{
            if(monitor instanceof Led){
                let myMonitor: Led = <Led>monitor;
                return myMonitor.getName();
            }
            else if(monitor instanceof Oled){
                let myMonitor: Oled = <Oled>monitor;
                return myMonitor.getName();
            }

            return "empty";
        }
        //이런식으로 class 값도 가능
        //인터페이스를 활용한 예시..
        //분업뿐만이 아니라 이런 예시에서도 사용 가능한 인터페이스
        display_03(monitor: Monitor):string{

            let myMonitor: Monitor = monitor;
            return myMonitor.getName();
        }
    }
}
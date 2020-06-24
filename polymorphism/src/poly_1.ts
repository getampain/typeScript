{
    class Planet{
        public diameter: number;
        protected isTransduction: boolean = true;


        getIsTransduction():boolean{
            console.log(this.isTransduction);
            return this.isTransduction;
        }
        stopTransduction(){
            this.isTransduction = false;
        }

        constructor(diameter:number, isTransduction?:boolean){
            this.diameter = diameter;
            //this.isTransduction = isTransduction;
        }
    }


    class Earth extends Planet{

        public features: string[] = ["soil", "awter", "oxyzen"];
        
        stopTransduction(){
            console.log("stop2");
            this.isTransduction = false;
        }
    }


    //아래처럼 planet으로 선언했지만 earth로 만들어버릴수 있다.
    //하지만 기준은 planet으로 지정되며 함수만 오버리아딩 되서 stop2가 출력된다
    let earth:Planet = new Earth(12);
    earth.diameter = 222;


}
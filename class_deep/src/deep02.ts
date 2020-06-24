{

    //즉 class를 한번만 선언해서 전역변수처럼 사용하는(싱글턴 패턴)방법 중 빠른 선언법 사용하기전에 이미 선언함
    class EagerLogger{

        //내부에서 private로 선언하여 다른대서는 new로 못건드리게 한다.
        private static uniqueObject: EagerLogger = new EagerLogger();
        private constructor(){}

        //해당 항목은 new를 안하고 넘기기위하여 public을 사용한다
        public static getLogger():EagerLogger{
            return this.uniqueObject;
        }

        //return받은 유일한객체의 사용을 위한 함수이다.
        public info(message:string){
            console.log(`[info] ${message}`);
        }
        public warning(message:string){
            console.log(`[warning] ${message}`);
        }

    }


    //위에서 constructor가 private로 선언되었음으로 new를 통한 선언이 불가능해진다.
    //let eagerLoger_zero:EagerLogger = new EagerLogger.getLogger();
    let eagerLoger:EagerLogger = EagerLogger.getLogger();
    let eagerLoger2:EagerLogger = EagerLogger.getLogger();

    eagerLoger.info(`1번정보 : log`);
    eagerLoger.warning(`2번정보 : warn log`);
    eagerLoger.warning(`3번정보 : ${eagerLoger === eagerLoger2}`);



    class LazeLogger{

        private static uniqueObject: LazeLogger;
        private constructor(){};

        //해당 항목은 new를 안하고 넘기기위하여 public을 사용한다
        public static getLogger():LazeLogger{
            
            //바로 선언하는것이 아닌 이 시점에서 없을경우 판단해준다
            //중요점 == 인 이유는 값은 null이지만 타입은 LazeLogger
            if(this.uniqueObject == null){
                this.uniqueObject = new LazeLogger();
            }
            return this.uniqueObject;
        }

        //return받은 유일한객체의 사용을 위한 함수이다.
        public info(message:string){
            console.log(`[info] ${message}`);
        }
        public warning(message:string){
            console.log(`[warning] ${message}`);
        }
    }


    let eagerLoger3:LazeLogger = LazeLogger.getLogger();
    let eagerLoger4:LazeLogger = LazeLogger.getLogger();

    eagerLoger3.info(`1번정보 : log`);
    eagerLoger3.warning(`2번정보 : warn log`);
    eagerLoger3.warning(`3번정보 : ${eagerLoger3 === eagerLoger4}`);





}
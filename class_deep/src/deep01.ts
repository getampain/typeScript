{
    class Student{
        constructor(public name: string, public birthYear:number){}
    }

    let student:Student = new Student("",0);

    student.name = "abc";
    student.birthYear = 21;


    class Student2{
        constructor(private name: string, private birthYear:number){}

        get nameGetter():string{
            return this.name;
        }
        get yearGetter():number{
            return this.birthYear;
        }
        set nameSetter(nameAttr:string){
            this.name = nameAttr;
        }
        set yearSetter(yearAttr:number){
            this.birthYear = yearAttr;
        }

    }


    /////////////////////////////////////////////////////////////////////
    console.log("//////////////////////////////////////////////////////////////////");
    let student2:Student2 = new Student2("",0);
    student2.nameSetter = "abc_mk2";
    student2.yearSetter = 21;
    console.log(student2.nameGetter);
    console.log(student2.yearGetter);


    /////////////////////////////////////////////////////////////////////
    console.log("//////////////////////////////////////////////////////////////////");




    // 이런식으로 정적인 변수, 혹은 함수는 값이 고정적이기 때문에 new 선언 없이 바로 사용이 가능하다
    class Circle{
        //private를 붙인다면 변수접근도 차단된다.
        static pi_0 = 3.14;
        private static pi: number = 3.14;
        static circleArea: number = 0;

        static getArea(radius:number):number{
            this.circleArea = radius * radius * Circle.pi;
            return this.circleArea;
        }

        get area():number{
            return Circle.circleArea;
        }
        
        static set area(areaAttr:number){
            Circle.circleArea = areaAttr;
        }
        set area_aa(areaAttr:number){
            Circle.circleArea = areaAttr;
        }
    }
    console.log(Circle.pi_0);

    console.log(Circle.getArea(3));
    console.log(Circle.circleArea);
    console.log(Circle.area=12);
    console.log(Circle.circleArea);

    console.log("/////");
    let cirCleTest:Circle = new Circle();
    console.log(cirCleTest.area);
    cirCleTest.area_aa=2000;
    console.log(cirCleTest.area);
    console.log(Circle.circleArea);
    //static으로 선언해둔걸 사용하면 값이 변해버림
    //고정되어있음 new를 해도 변경이 안된다


    //위 new를 할당조차 못하게 막는방법도 존재한다.
    //즉 class를 한번만 선언해서 전역변수처럼 사용하는(싱글턴 패턴)것도 가능하다.
    








}
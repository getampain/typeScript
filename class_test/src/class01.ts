{
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

}
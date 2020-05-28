{
    interface Person{
        name:string;
        city:string;
    }


    //new Person3("yoo","daegu") class 는 이런식으로 new 해서 넣어버리지만
    //인터페이스는 이렇게 해야한다.
    let personArray: Person[] =[
        {name:"A", city:"b"},
        {name:"A", city:"b"},
        {name:"A", city:"b"},
        {name:"A", city:"b"},

    ]
}
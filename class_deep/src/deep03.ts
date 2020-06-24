{
    //readOnly


    //readOnly는 const와 유사하지만 다른점도 존재
    //readonly 초기화 선택, 값재할당 가능, 등등



    //readonly는 인터페이스의 멤버변수, 클래스의 맴버변수에 사용가능하다.

    interface ICount{
        readonly count:number;
    }


    //enforces strictness !를 통하여 강제할 수 있다.
    //?는 들어갈지 안갈지몰라 !는 타입 아몰랑
    class TestReadOnly implements ICount{
        readonly count!:number;
        static readonly count2:number;
        private readonly count3!:number;
        private readonly count4:number = 0;


        getCount(){
            //함수내 선언 x, 재할당 x
            // this.count4=0;
            // readonly count5:number;
        }
    }

    let emotion: {readonly name: string} = {name : "happy"};
    
    // readOnly 하나때문에 싹다 막힘
    //emotion.name = "sad";

    function aliasing(pEmotion: {name:string}){
        pEmotion.name = "sssssmile";
    }
    //emotion.name="asdsadasd";
    aliasing(emotion);
    console.log(emotion.name);
    //emotion.name="asdasd";

    //잠깐동안 형식을 뒤집어 씌워 값을 어거지로 넣는 방법
    //함수밖으로 나가는 순간 씌어진 값이 원복됨으로 다시 하면 에러가 나는게 맞다/


}
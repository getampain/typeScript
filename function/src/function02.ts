{

    let abc = [1,2,3,4,5,6,7];
    abc = abc.filter(n =>{
        return n % 2 === 0;
    }

    );


    //해당 함수는 사용이 불가능하다
    //filter, reduce, map은 화살표 함수가 직빵
    abc = abc.filter(
        function(n){
            return(n = n+1);
        }
    );
    
    console.log(abc);
    //console.log(abc.reduce(a,b));

    let users = [
        { id: 11, name: 'Adam', age: 23, group: 'editor' },
        { id: 47, name: 'John', age: 28, group: 'admin' },
        { id: 85, name: 'William', age: 34, group: 'editor' },
        { id: 97, name: 'Oliver', age: 28, group: 'admin' }
      ];
      let res = users.filter(it => it.name.includes('oli'));
      let res2 = users.filter(it => new RegExp('oli', "i").test(it.name));
      let res3 = users.filter(data => data.name == "Adam");

      //filter 니까 어레이 형태로 넘어오는듯 하다
      //reduce도 동일하다.
      //데이터를 받아온뒤 필터링 하는대 유용할것 같다.
      console.log(res3[0].group);


      //a는 누적으로, b는 현재값으로 활동한다.
      let temp1 = [1,2,3,4,5,6,7,8];
      let temp3= temp1.reduce((a,b) => { return a+b});

      console.log(temp3);


      let test = function(array_001:number[]){
        temp1.reduce((a,b) => a+b)
      }
      console.log(test(temp1));




      //reduce는 누적작업, 총합, 총계산등
      // fillter는 어레이내에서 검색 혹은 등등
      
}
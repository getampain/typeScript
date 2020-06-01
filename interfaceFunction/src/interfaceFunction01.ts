{
    interface IFormat{
        (data: string, toUpper?: boolean): string;
    }

    //현재 설정에서는 ?까지 정확해야함
    let format: IFormat = function(data: string, toUpper?: boolean){
        return data + "";
    }

    console.log(format("2222",true));
}

// const WEIGHT = [1, 2, 3, 4, 5, 6, 7];

export const multiplyWeight = (data: number[]) => {
     let output: number[] = [];

    if (data[0] == 0) {
        return output = [0];
    }
    else{
        let TempData = [...data];
        TempData.shift()
        let test = TempData.reduce((acc, i) =>  acc + Number(i) , 0)
        output.push((test*(100/29)))
        return output ;
    }
    
};


function combine(input1:number |string , input2:number |string){
    let result;
    if ( typeof input1 === 'number' && typeof input2 === 'number'){

         result = input1+input2
    }else{
        result = input1.toString()+ input2.toString()
    }
    return result

}

const combineresult= combine(30,40)
const combineresult2= combine('moha','shafi')
console.log(combineresult);
console.log(combineresult2);


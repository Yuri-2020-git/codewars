const prevMultOfThree = n => {
    let b = n+''
    while(Number(b)%3 !== 0 && Number(b)>3){
    let c = b.split('')
    c.pop()
    b=c.join('')
    };
    if (Number(b)%3!==0 || Number(b)==0){
        return null
    }else {return Number(b)}
    }
console.log(prevMultOfThree(832346));


//~~1234
function toAndFrom(a, b, t) {
    let c = (b-a)*2  // число раз 
    let d;
    let f = a;
    let arrA=[];
    let arrB=[];
    console.log(`c = ${c}`)
    if (c<t){
        d = t%c;
    }else{
        d=t;
    }
    console.log(`d = ${d}`)
    while(a<=b){
        arrA.push(a);
        a++;
    }
    
    console.log(`arrA = ${arrA}`)
    while(b>=f){
        arrB.push(b);
        b--;
    }
    arrB.shift();
    console.log(`arrB = ${arrB}`)
    let arrNew = arrA.concat(arrB)
    console.log(`arrNew = ${arrNew}`)
    return arrNew[d];
 }

console.log(toAndFrom(1,99,999)); // 3

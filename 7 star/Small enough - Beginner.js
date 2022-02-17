function smallEnough(a, limit){
    let c = a.sort(function(a, b){ return a - b }).reverse();
    return Number(c[0])<=limit;
}
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));
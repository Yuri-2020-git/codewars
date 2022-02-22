function findUniq(arr) {
    let num;
    let arrNew = new Set(arr);
    for (let i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1]){
            num = arr[i]
        }
    };
    return Object.arrNew//if(arrNew[0]==num){return arrNew[1]}else{return arrNew[0]};
  }
console.log(findUniq([3, 3, 3, 4, 3, 3 ]));  

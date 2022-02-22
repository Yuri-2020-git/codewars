function upArray(arr){
    for(let i=0;i<arr.length;i++){
        if (Number(arr[i])<0){
            arr=null
            break;
        }
    };  
    return arr==null ? null : ((Number(arr.join('')) +1) +'').split('').map(Number);
  }
  console.log(upArray([ 11, 1, 5, 9, 4, 1, 6, 1, 2, 3, 7, 9, 9 ]))

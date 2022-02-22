function upArray(arr){
/*     for(let i=0;i<arr.length;i++){
        if (Number(arr[i])<0){
            arr=null
            break;
        }
    };  */ 
    return ((Number(arr.join('')) +1) +'');
  }
  console.log(upArray([1, 2, 1, 3, 5, 8, 3, 0, 9, 5, 2, 9, 6, 5, 8, 6, 9, 7, 2, 6, 5, 6, 2, 3, 3, 6, 7, 1, 8, 6, 0, 1, 9, 2, 2, 4, 1, 7, 6, 1]))

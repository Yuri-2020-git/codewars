function minMax(arr){
    let arrNew = arr.sort(function(a, b){return a - b});
    return [arrNew[0], arr.reverse()[0]];
  }
console.log(minMax([5, 2334454]));
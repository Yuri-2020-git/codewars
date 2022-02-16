function squareDigits(num){
    let a = (num+"").split('').map(Number);
    return a.reduce((p, c) => `${c**2}`+ p, 0);
  }
console.log(squareDigits(9119));//4114
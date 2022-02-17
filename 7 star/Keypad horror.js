function computerToPhone(numbers){
    let key = numbers.split("").map(Number);   
    return key.map(x=> x==1 ? x=7: x==2 ? x=8: x==3 ? x=9: x==7 ? x=1: x==8 ? x=2: x==9 ? x=3:x).join('')
  }

console.log(computerToPhone("000"));//0123456789
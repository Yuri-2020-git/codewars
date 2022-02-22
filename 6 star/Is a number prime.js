function isPrime(num) {
    if (num < 2){return false}
    else if (num === 2|3){return true}
    else if (num%2==0 || num%3==0  || num%5==0 || num%7==0 || num/(Math.sqrt(num))==0){return false}
    else{return false};
}
console.log(isPrime(4));

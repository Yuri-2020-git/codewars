function makePassword(phrase) {
    let arr =  phrase.split(' ').map(x=> x=x[0]).join('');
    let arrNew = arr.split('')
    //return arrNew
    return arrNew.map(x=> x[0]=='o' ? x[0]=0: x[0]=='O' ? x[0]=0:  x[0]=='i' ? x[0]=1: x[0]=='I' ? x[0]=1:  x[0]=='s' ? x[0]=5: x[0]=='S' ? x[0]=5: x).join('')
  }
console.log(makePassword('Keep Calm and Carry On'));
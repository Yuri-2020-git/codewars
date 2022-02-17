function swap (string) {
    let str = 'euioa'
    let arr = string.split('');
    return (arr.map(x => str.includes(x)==true ? x.toUpperCase() : x)).join('')
  }
console.log(swap('abracadabra'));

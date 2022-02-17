function alternateCase(s) {
    let arr = s.split('');
    return arr.map(x=> x.toLowerCase()==x ? x=x.toUpperCase() : x=x.toLowerCase()).join('');
  }
console.log(alternateCase("ABC"));
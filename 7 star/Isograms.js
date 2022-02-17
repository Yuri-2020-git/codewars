function isIsogram(str){
    let s = str.toLowerCase().split('');
    let i = Array.from(new Set(s));
    return s.join('')==i.join('');
  }
console.log(isIsogram('Deeeeermatoglyphics'));
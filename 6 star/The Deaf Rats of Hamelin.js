var countDeafRats = function(town) {
  const [leftRats, rightRats] = town
    .replace(/[^O~P]/g, '')
    .split('P')
    .map(segment => segment.match(/.{2}/g) || []);
  return (
    leftRats.reduce((a, rat) => a + (rat === 'O~'), 0) +
    rightRats.reduce((a, rat) => a + (rat === '~O'), 0)
  );
}
console.log((countDeafRats("~O~O~O~OP~O~OO~"))); //)1

// var countDeafRats = function(town) {
//   return [...town.replace(/ +/g,'')].reduce((a,c,i) => a+(i%2==0 && c=='O'), 0);
// }

// var countDeafRats = function(town) {
//   const [a,b] = town.split('P')
//   const l = (a.match(/(?<=^|\s|O)(O~)+/g)||[]).join('').length/2
//   const r = (b.match(/(?<=^|\s|~)(~O)+/g)||[]).join('').length/2
//   return l+r
// }
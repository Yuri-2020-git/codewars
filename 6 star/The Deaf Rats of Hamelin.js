var countDeafRats = function(town) {
  const [a,b] = town.split('P')
  const l = (a.match(/(?<=^|\s|O)(O~)+/g)||[]).join('').length/2
  const r = (b.match(/(?<=^|\s|~)(~O)+/g)||[]).join('').length/2
  return l+r
}

console.log((countDeafRats("~O~O~O~OP~O~OO~"))); //)1


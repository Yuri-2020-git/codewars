var countDeafRats = function(town) {
    let arrLeft = town.split('P')[0]
    let arrLeft1 = arrLeft.replace(/((~O)*)( *)(~*)/g, "");

    let arrRight = town.split('P')[1]
    let arrRight1 = arrRight.replace(/((O~)*)( *)(~*)/g, "");

    return arrRight1.length;
  }
console.log((countDeafRats("~O~O~O~OP~O~OO~"))); //)1
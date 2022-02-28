function changer(str) {
  let arrNew = str.toLowerCase().split('');
  let arr=[];
  let alph = 'abcdefghijklmnopqrstuvwxyz';

  for (let i=0;i<arrNew.length;i++){
    arr.push(alph.indexOf(arrNew[i])+' ')
  }
  arr.pop();
  return arr.join('');       
  }
  console.log(changer("The sunset sets at twelve o' clock."));
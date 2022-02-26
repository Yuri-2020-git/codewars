function wave(str){
    let strNew = str.replace(/ /g, '')+' ';
    let n = str.replace(/ /g, '').length;
    let arr = strNew.repeat(n).split(' ');
    arr.pop();
    // for(let i=0;i<arr.length;i++){
    //     let arrNew;
    //     arrNew = arr[i].split('');

    //}
    return arr;
  }
  console.log(wave("he llo")); //["Hello", "hEllo", "heLlo", "helLo", "hellO"]

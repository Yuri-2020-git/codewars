function wave(str) {
    return str.split('').map((l, i, a) => {
      let c = a.slice();
      c[i] = c[i].toUpperCase();
      return c.join('');
    }).filter((w, i) => w[i] !== ' ');
  }
  console.log(wave(" Gap , gAp , gaP ")); //["Hello", "hEllo", "heLlo", "helLo", "hellO"]


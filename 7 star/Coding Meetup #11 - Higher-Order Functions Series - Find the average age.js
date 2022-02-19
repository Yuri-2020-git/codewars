var list1 = [
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' },
  ];

  function getAverageAge(list) {
        let sum = list.reduce((p, c) => p + c.age, 0);
        return Math.round(sum/(Object.keys(list).length)); 
  }
console.log(getAverageAge(list1));

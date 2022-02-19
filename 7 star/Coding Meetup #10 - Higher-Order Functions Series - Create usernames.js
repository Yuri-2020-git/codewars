var list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ];

  /* [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
      username: 'emilyn1990' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
      username: 'nore2000' }
  ] */

  function addUsername(list) {
    let date = new Date();
    list.forEach(function(developer) {
          developer.username = (developer.firstName).toLowerCase() + (developer.lastName[0]).toLowerCase() + (date.getFullYear() - developer.age);
        });  
    return list;
  }
console.log(addUsername(list1));  

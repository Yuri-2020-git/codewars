function sortArray(array) {
    let arr = array.map(x=> x%2!==0 ? x:'l').join('').split('').map(Number);
    return arr.sort((a,b)=>a-b);
    //return array.map(x=> x%2!==0 ? x=arr[array.indexOf(x)] : x)
  }

  console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); //[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


var fruits = ["Банан", "Яблоко", "Апельсин", "Манго"];
var apple = fruits.indexOf("Яблоко"); //1
var howManyYears = function(date1, date2){
    let date_first = date1.split('/')[0];
    let date_second = date2.split('/')[0];
    return Math.abs(Number(date_first) - Number(date_second));
  }
console.log(howManyYears('1997/10/10', '2015/10/10'));
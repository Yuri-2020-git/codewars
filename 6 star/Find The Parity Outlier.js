function findOutlier(integers){
    if ((integers[0]%2==0 && integers[1]%2==0) || (integers[1]%2==0 && integers[2]%2==0) || (integers[0]%2==0 && integers[2]%2==0)){
        return integers.find(function(x) {
            return x%2!==0;
          });
      } else{
        return integers.find(function(x) {
            return x%2==0;
          })
      }
  }

console.log(findOutlier([1,1,0,1,1]));

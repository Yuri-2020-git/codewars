let arr = [1, 2, 3, 4, 5,5];

let result = arr.map(function(elem, index, arrNew) {
	return elem*arrNew[index];
});

console.log(result)
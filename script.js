const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {

	let result = [];
	let subarray = [];
	let sum = 0;
	
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i];

        console.log(arr[i] + " --- " + sum);
		if(sum > n) {
			sum = 0;
			result.push(subarray);
			subarray = [arr[i]];
			continue;
		}

		subarray.push(arr[i]);		
	}
    if(subarray.length != 0){
        result.push(subarray);
        subarray = [];
    }
	return result;
};

const n = prompt("Enter n: ");

alert(JSON.stringify(divide(arr, n)));
